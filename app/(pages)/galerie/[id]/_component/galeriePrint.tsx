import Image from "next/image";

export default function GaleriePrint({listeImg}: {listeImg : string[]}){

    return(
       <div className="w-full max-w-6xl mx-auto p-4">
            <div className="grid h-full grid-cols-5 gap-4">
                {listeImg.map((imgUrl, index) => (
                    <div 
                        key={index} 
                        className="aspect-square overflow-hidden bg-gray-100 hover:scale-105 transition-transform duration-300 cursor-pointer"
                    >
                        <Image
                            src={imgUrl}
                            alt={`Image ${index + 1}`}
                            width={200}
                            height={400}
                            className="w-full h-full object-cover hover:opacity-90 transition-opacity"
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}