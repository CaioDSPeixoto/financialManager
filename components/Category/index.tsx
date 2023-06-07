import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { useEffect, useState } from "react";
import GroupItem from "../GroupItem";

interface CategoryProps {
  id_user: string,
}

export default function Category({
  id_user
}: CategoryProps){

  const supabase = useSupabaseClient();

  const [dataSupa, setData] = useState<any>(null);
    

  
  useEffect(() => {
    
    const getCategory = async() => {
      const { data, error } = await supabase
      .from('category')
      .select('*')
      .eq('id_user', id_user)
  
    setData(data);
    };

    getCategory();
  }, []);


  return (
    <div className="rounded-lg border-gray-200 flex gap-5">
      {
      dataSupa && dataSupa.map((group: any) => (
        <GroupItem title={group.title} description={group.description} number={group.id} key={group.id}/>
          )
        )
      }
    </div>
  );
}