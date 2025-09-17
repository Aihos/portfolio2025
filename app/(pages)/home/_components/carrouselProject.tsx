import CardProject from "./cardProject";


export default function CarrouselProject(){

    return(

        <div className="min-h-[50vh] mt-6 flex flex-row overflow-x-scroll w-full gap-4 no-scrollbar ">
            <CardProject titre="Lorem ipsus" desc="lorem ipcum dilotirem itenam atam numen" />
            <CardProject titre="Lorem ipsus" desc="lorem ipcum dilotirem itenam atam numen" />
            <CardProject titre="Lorem ipsus" desc="lorem ipcum dilotirem itenam atam numen" />
            <CardProject titre="Lorem ipsus" desc="lorem ipcum dilotirem itenam atam numen" />
            <CardProject titre="Lorem ipsus" desc="lorem ipcum dilotirem itenam atam numen" />
            <CardProject titre="Lorem ipsus" desc="lorem ipcum dilotirem itenam atam numen" />
            <CardProject titre="Lorem ipsus" desc="lorem ipcum dilotirem itenam atam numen" />

        </div>
    )
}