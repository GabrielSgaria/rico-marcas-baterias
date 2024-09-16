type Battery = {
    id: number;
    title: string;
    text: string;
    image: string;
    msg?: string; // Tornando a mensagem opcional para baterias que não possuem uma mensagem específica
};

export const batterys: Battery[] = [
    {
        id: 1,
        title: "Baterias Zetta",
        text: "Bateria de alta qualidade",
        image: '/images/batterys/1.png',
        msg: "Olá, vim através do site e tive interesse nas Baterias Zetta."
    },
    {
        id: 2,
        title: "Bateria Heliar",
        text: "Bateria de alta qualidade",
        image: '/images/batterys/2.png',
        msg: "Olá, vi a Bateria Heliar no site e fiquei interessado."
    },
    {
        id: 3,
        title: "Bateria Moura",
        text: "Bateria de alta qualidade",
        image: '/images/batterys/3.png',
        msg: "Gostei da Bateria Moura, vi no site e gostaria de saber mais."
    },
    {
        id: 4,
        title: "Bateria Moura",
        text: "Bateria de alta qualidade",
        image: '/images/batterys/4.png',
        msg: "Me interessei pela Bateria Moura após visitar o site."
    },
    {
        id: 5,
        title: "Bateria Moura",
        text: "Bateria de alta qualidade",
        image: '/images/batterys/5.png',
        msg: "Estou interessado na Bateria Moura, vi no site."
    },
    {
        id: 6,
        title: "Bateria Moura",
        text: "Bateria de alta qualidade",
        image: '/images/batterys/6.png',
        msg: "Vi a Bateria Moura no site e gostaria de saber mais detalhes."
    }
];
