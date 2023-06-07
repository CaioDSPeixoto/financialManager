interface LabelProps {
  text: string;
}

export default function Label({text}: LabelProps){
  return (
    <div>
      <label className="block text-gray-700 text-sm font-bold mb-2">
        {text}
      </label>
    </div>
  );
}