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
import { Grid, SortablePhoto } from '../compounds';
import { Photo } from '../roots';

export const Home = () => {
  const [items, setItems] = useState(photos);
  const [activeId, setActiveId] = useState<string | null>(null);
  const [selectedIdxs, setSelectedIdxs] = useState<number[]>([]);

  // const sensors = useSensors(useSensor(MouseSensor), useSensor(TouchSensor));

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: { distance: 8 },
    })
  );

  return (
    <div>
      <h1>selected items total is {selectedIdxs.length} </h1>
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
                isSelected={selectedIdxs.includes(index)}
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

  function selectPhotos(idx: number, isSelected: boolean) {
    if (!isSelected) {
      setSelectedIdxs([...selectedIdxs, idx]);
      return;
    }

    const filItems = selectedIdxs.filter((index) => index !== idx);
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
