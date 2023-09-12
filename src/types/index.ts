export interface Todo {
  id: string;
  title: string;
  isActive: boolean;
}

export interface DragItem {
  e: DragEvent;
  index: number;
}
