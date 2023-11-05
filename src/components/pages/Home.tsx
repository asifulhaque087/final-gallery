'use client';

import React, { useState } from 'react';
import {
  DndContext,
  closestCenter,
  MouseSensor,
  TouchSensor,
  DragOverlay,
  useSensor,
  useSensors,
  DragStartEvent,
  DragEndEvent,
  MeasuringStrategy,
  PointerSensor,
  KeyboardSensor,
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  rectSortingStrategy,
  sortableKeyboardCoordinates,
} from '@dnd-kit/sortable';

import photos from '@src/photos.json';
import { Grid, Header, SortablePhoto } from '../compounds';
import { Photo } from '../roots';

export const Home = () => {
  const [items, setItems] = useState(photos);
  const [activeId, setActiveId] = useState<string | null>(null);
  // const [selectedIdxs, setSelectedIdxs] = useState<number[]>([]);
  const [selectedIdxs, setSelectedIdxs] = useState<string[]>([]);

  // const sensors = useSensors(useSensor(MouseSensor), useSensor(TouchSensor));

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: { distance: 8 },
    })
  );

  return (
    <div className="border rounded-t">
      <Header totalItems={selectedIdxs.length} removePhotos={removePhotos} />
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
        onDragCancel={handleDragCancel}
        measuring={{
          droppable: {
            strategy: MeasuringStrategy.Always,
          },
        }}
      >
        <SortableContext items={items} strategy={rectSortingStrategy}>
          <Grid>
            {items.map((url, index) => (
              <SortablePhoto
                key={url}
                url={url}
                index={index}
                selectPhotos={selectPhotos}
                // isSelected={selectedIdxs.includes(index)}
                isSelected={selectedIdxs.includes(url)}
              />
            ))}
          </Grid>
        </SortableContext>

        <DragOverlay adjustScale={true}>
          {activeId ? (
            <Photo url={activeId} index={items.indexOf(activeId)} />
          ) : null}
        </DragOverlay>
      </DndContext>
    </div>
  );

  function removePhotos() {
    const filItems = items.filter((item) => !selectedIdxs.includes(item));
    setItems(filItems);
    setSelectedIdxs([]);
  }

  function selectPhotos(url: string, isSelected: boolean) {
    if (!isSelected) {
      setSelectedIdxs([...selectedIdxs, url]);
      return;
    }

    const filItems = selectedIdxs.filter((item) => item !== url);
    setSelectedIdxs(filItems);
  }

  function handleDragStart(event: DragStartEvent) {
    setActiveId(event.active.id.toString());
  }

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;

    if (active.id !== over?.id) {
      setItems((items) => {
        const oldIndex = items.indexOf(active.id.toString());

        const newIndex = items.indexOf(over?.id.toString()!);

        return arrayMove(items, oldIndex, newIndex);
      });
    }

    setActiveId(null);
  }

  function handleDragCancel() {
    setActiveId(null);
  }
};
