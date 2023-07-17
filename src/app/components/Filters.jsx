

export default function Filters (){
    return (
        <div className=" w-[680px] bg-indigo-600 bg-opacity-70 shadow-lg backdrop-filter backdrop-blur-md border-indigo-600 border-opacity-18 p-5 rounded-md flex justify-between">
            <div className="flex gap-5">
                <label className=" text-indigo-200">Edad: </label>
                <select name="" id="" defaultValue={'Todas'} className=" w-[100px] text-indigo-200 bg-indigo-600 rounded-sm text-sm">
                    <option value="">Todas</option>
                    <option value="">2 meses</option>
                    <option value="">6 meses</option>
                </select>
            </div>
            <div>
                <input type="search" placeholder="Buscar..." className=" px-5 bg-indigo-600 rounded-sm placeholder:text-indigo-200 text-sm" />
            </div>
        </div>
    )
}