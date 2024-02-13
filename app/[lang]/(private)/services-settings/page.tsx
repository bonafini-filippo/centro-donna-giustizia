"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useCurrentUser } from "@/hooks/use-current-user";
import { ItemCard } from "../_components/item";


const ServicesPage = () => {
    const user = useCurrentUser();
    return (
        <Card className="w-full h-full pb-20 overflow-hidden">
            <CardHeader>
                <CardTitle className='text-primary text-4xl'>Servizi</CardTitle>
            </CardHeader>
            <CardContent className="w-full h-full  overflow-y-auto space-y-7">
                <ItemCard title="uscire dalla violenza"
                    image="/test/protesta1.jpg"
                    alt="testo alternativo"
                    par="Questo è un testo riempitivo per capire il situlatato finale come possa prendere le sembianze, senza pensare di inserire testi già completi e prodotti. Qa ci andrà una breve descrizione del contesto generale della sezione."
                />
                <ItemCard title="uscire dalla violenza"
                    image="/test/protesta1.jpg"
                    alt="testo alternativo"
                    par="Questo è un testo riempitivo per capire il situlatato finale come possa prendere le sembianze, senza pensare di inserire testi già completi e prodotti. Qa ci andrà una breve descrizione del contesto generale della sezione."
                />
                <ItemCard title="uscire dalla violenza"
                    image="/test/protesta1.jpg"
                    alt="testo alternativo"
                    par="Questo è un testo riempitivo per capire il situlatato finale come possa prendere le sembianze, senza pensare di inserire testi già completi e prodotti. Qa ci andrà una breve descrizione del contesto generale della sezione."
                />
                <ItemCard title="uscire dalla violenza"
                    image="/test/protesta1.jpg"
                    alt="testo alternativo"
                    par="Questo è un testo riempitivo per capire il situlatato finale come possa prendere le sembianze, senza pensare di inserire testi già completi e prodotti. Qa ci andrà una breve descrizione del contesto generale della sezione."
                />
                <ItemCard title="uscire dalla violenza"
                    image="/test/protesta1.jpg"
                    alt="testo alternativo"
                    par="Questo è un testo riempitivo per capire il situlatato finale come possa prendere le sembianze, senza pensare di inserire testi già completi e prodotti. Qa ci andrà una breve descrizione del contesto generale della sezione."
                />
                <ItemCard title="uscire dalla violenza"
                    image="/test/protesta1.jpg"
                    alt="testo alternativo"
                    par="Questo è un testo riempitivo per capire il situlatato finale come possa prendere le sembianze, senza pensare di inserire testi già completi e prodotti. Qa ci andrà una breve descrizione del contesto generale della sezione."
                />
                <ItemCard title="uscire dalla violenza"
                    image="/test/protesta1.jpg"
                    alt="testo alternativo"
                    par="Questo è un testo riempitivo per capire il situlatato finale come possa prendere le sembianze, senza pensare di inserire testi già completi e prodotti. Qa ci andrà una breve descrizione del contesto generale della sezione."
                />
                <ItemCard title="uscire dalla violenza"
                    image="/test/protesta1.jpg"
                    alt="testo alternativo"
                    par="Questo è un testo riempitivo per capire il situlatato finale come possa prendere le sembianze, senza pensare di inserire testi già completi e prodotti. Qa ci andrà una breve descrizione del contesto generale della sezione."
                />
                <ItemCard title="uscire dalla violenza"
                    image="/test/protesta1.jpg"
                    alt="testo alternativo"
                    par="Questo è un testo riempitivo per capire il situlatato finale come possa prendere le sembianze, senza pensare di inserire testi già completi e prodotti. Qa ci andrà una breve descrizione del contesto generale della sezione."
                />
                <ItemCard title="uscire dalla violenza"
                    image="/test/protesta1.jpg"
                    alt="testo alternativo"
                    par="Questo è un testo  afs asf a sfa sf asikfjaois ashjf oiashf ouashf ashsfuia hsfuih asiufhas iufh asuif hasuiifh uaishf uashsfuoah f uohasuif hasuhf uiasa as fasf asf ah sfas fiasg fiuyasgi fasiuf asiuyf giuyasg fiuasgfiuasg iu fgasiuf gaisu gfiuasg fiua sgiuf gasiufgiuasghf uasg fiuashgiufa sgiufgiuasgfiusagufas sufgasuifg asiugf iuasg fiuasgf iuagsfiu gasiuf gasiuf giuas fgiuas g fiuasg fiuasgfiuasg fiu asgfiuagsiuf g asiuf gasiuf gaiusfg iuasf giuasg fiuas gfiuasgsf iuasgs fiuasg fiug asiuh fuashuf hasuos fhasui fhuias hriempitivo per capire il situlatato finale come possa prendere le sembianze, senza pensare di inserire testi già completi e prodotti. Qa ci andrà una breve descrizione del contesto generale della sezione."
                />
            </CardContent>
        </Card>
    );
}

export default ServicesPage;