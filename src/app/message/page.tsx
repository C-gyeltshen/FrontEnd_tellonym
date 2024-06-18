import ChatComponent from "../chat_components/page";

export default function Protected() {
  const user = {
    image: "path/to/default/image", 
    name: "Guest User",
    email: "guest@example.com", 
  };

  return (
    <div className="bg-slate-50">
      <div className="p-4">
        <ChatComponent data={user} />
      </div>
    </div>
  );
}