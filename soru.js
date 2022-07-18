class Soru {
    constructor(soruMetni, cevapSecenekleri, dogruCevap) {
        this.soruMetni = soruMetni;
        this.cevapSecenekleri = cevapSecenekleri;
        this.dogruCevap = dogruCevap;
    }
    cevabiKontrolEt(cevap) {
        return cevap === this.dogruCevap;
    }
}


let sorular = [
    new Soru("1-Hangisi javascript paket yönetim uygulasıdır?", { a: "Node.js", b: "Typescript", c: "Npm" , d: "Nuget" }, "c"),
    new Soru("2-Hangisi frontend kapsamında değerlendirilmez?", { a: "css", b: "html", c: "javascipt", d: "sql" }, "d"),
    new Soru("3-Hangisi backend kapsamında değerlendirilir?", { a: "node.js", b: "typescript", c: "angular", d: "react" }, "a"),
    new Soru("4-Hangisi javascript programlama dilini kullanmaz?", { a: "react", b: "angular", c: "vuejs", d: "asp.net" }, "d"),
    new Soru("5-Hangi frameworke ait hem web hem de android dili vardır ?",{ a: "vuejs", b: "angular", c:"react",d:"nodejs"},"c"),
    new Soru("6-JSX açılımı nedir ?",{ a: "JavaScript XML", b: "JavaScriptX", c:"JavaScript X",d:"JavaScriptxml"},"a"),
];