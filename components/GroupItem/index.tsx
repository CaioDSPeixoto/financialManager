
interface GroupProps {
  title: string,
  description: string,
  number: number,
}

export default function GroupItem({
  title,
  description,
  number
}: GroupProps){
  return (
    <div className=" bg-green-200 rounded overflow-hidden shadow-lg">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">
          {description}
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block rounded-full px-3 py-1 text-sm font-bold text-gray-700 mr-2 mb-2">#{number}</span>
      </div>
    </div>
  );
}