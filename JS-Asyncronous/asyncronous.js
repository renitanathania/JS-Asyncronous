function jajanBoba(uang) {
    console.log(`David mulai jajan boba ${uang} rupiah`);

    const listBoba = [
        ['Xing Fu Tang', 38000], 
        ['OneZo', 53500],
        ['KOI The', 36000],
        ['Chatime', 25000],
        ['Kokumi', 42000],
        ['Bubble Station Milk', 13000]
    ]
    beli(uang, komponen[0], kembalian => {
        beli(kembalian, komponen[1], kembalian => {
            beli(kembalian, komponen[2], kembalian => {
                beli(kembalian, komponen[3], kembalian => {
                    beli(kembalian, komponen[4], kembalian => {
                        beli(kembalian, komponen[5], kembalian => {
                                    console.log(`akhirnya uang David  tinggal ${kembalian}`);
                        })
                    })
                })
            })
        })
    })


function jajanBoba(uang,boba, hargaBoba, cb){
    let kembalian = uang
    setTimeout(function() {
    if (uang - hargaBoba >= 0){
        console.log(`Kembalian uang beli boba $(uang), bisa beli $(boba), dengan harga $(hargaBoba)`);
    kembalian -= hargaBoba;
    console.log(`sisa uang David sekalarng $(kembalian) rupiah`)
    cb(kembalian)
    } else {
        console.log(`Jika sisa uang ${uang}, tidak bisa membeli ${boba}`)
        cb(kembalian)
    }
}, 700);
