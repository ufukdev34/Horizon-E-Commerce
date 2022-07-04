export default function(type){
    if(type==="gender")
        return [
            {
                key: 'Male',
                text: 'Erkek',
                value: 'Erkek',
            },
            {
                key: 'Female',
                text: 'Kadın',
                value: 'Kadın',
            },
        ]
    else if(type==="price"){
        return [
            {
                key: 'Azalan Fiyat',
                text: 'Azalan Fiyat',
                value: 'Azalan Fiyat',
              },
              {
                key: 'Artan Fiyat',
                text: 'Artan Fiyat',
                value: 'Artan Fiyat',
              },
        ]
    }
}