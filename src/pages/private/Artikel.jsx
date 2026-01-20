import { useEffect, useState } from "react";
import { FormAdd } from "./artikel/FormAdd";
import SectionContainer from "../../components/private/SectionContainer";
import { ListCheckIcon, PlusSquare } from "lucide-react";
import ListArtiklel from "./artikel/ListArtiklel";

const Artikel = () => {
  const [mod, setMod] = useState("list");
  const [dtp, setDtp] = useState('')
  const kembali = () => {
    setMod('list')
    setDtp('')
  }
  const pilih = (dt) => {
    setDtp(dt)
    setMod('add')
  }

  // console.log("dt", dtp)
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2 justify-end">
        <button
          onClick={() => setMod("list")}
          className="btn-frow bg-red-400 hover:bg-red-700 text-white text-sm duration-300"
        >
          <ListCheckIcon /> List Artikel
        </button>
        <button
          onClick={() => setMod("add")}
          className="btn-frow bg-red-400 hover:bg-red-700 text-white text-sm duration-300"
        >
          <PlusSquare /> Add Artikel
        </button>
      </div>

      <SectionContainer>
        {mod === "list" && <ListArtiklel pilih={pilih}/>}
        {mod === "add" && <FormAdd kembali={kembali} dtp={dtp} />}

      </SectionContainer>
    </div>
  );
};

export default Artikel;
