export default function Sidebar() {
  function handleDrag(event: React.DragEvent<HTMLDivElement>, data: string) {
    event.dataTransfer.setData("text", data);
  }

  return (
    <aside>
    <div
      className="sidebar-text"
      draggable
      onDragStart={(e) => handleDrag(e, "text")}
    >
      Текст
    </div>
    <div
      className="sidebar-image"
      draggable
      onDragStart={(e) => handleDrag(e, "image")}
    >
      Изображение
    </div>
  </aside>
  )
}