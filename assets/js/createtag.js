const element = [
    {tag: 'h2', texto: 'Convivência'},
    {tag: 'p', texto: 'Casais no início do casamento tendem a acreditar que depois do "sim" tudo será um conto de fadas. A vida de casal nesse início é maravilhosa, mas é preciso ter os pés no chão e, claro: estar presente! Para qualquer casamento "dar certo" é preciso entender que haverá dias bons e dias ruins, e que o principal ingrediente de uma vida de casados(as) de sucesso é a dedicação.'},
    {tag: 'p', texto: 'Saber valorizar as diferenças é algo difícil, mas especialistas afirmam que ninguém consegue mudar muito rapidamente. Nessas horas, ceder um pouco com as próprias opiniões e aceitar as diferenças do seu parceiro ou parceira pode ser o primeiro passo para obter mais harmonia na relação.'},
    {tag: 'p', texto: 'A individualidade não precisa morrer depois do "sim". Um casal saudável continua a praticar os seus hobbies e suas atividades individuais. .main-contentO espaço de cada um deve permanecer sagrado, e entender que o outro precisa desse espaço é fundamental.'},
];

const sectionTarget = document.querySelector('.createTag');
const div = document.createElement('div');
sectionTarget.appendChild(div);
div.classList.add('conv-content','main-content');
for (let i = 0; i < element.length; i++) {
    const {tag, texto} = element[i];
    const tagCreated = document.createElement(tag);
    const textCreated = document.createTextNode(texto);  
    tagCreated.appendChild(textCreated);
    div.appendChild(tagCreated);   
}
sectionTarget.appendChild(div);

