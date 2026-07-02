const element = [
    {tag: 'h4', texto: 'Você sente que está carregando um peso maior do que consegue suportar?'},
    {tag: 'p', texto: 'Nem sempre é fácil lidar com as emoções, as cobranças do dia a dia, os relacionamentos ou as mudanças da vida. Em muitos momentos, podemos nos sentir sobrecarregados, ansiosos, desmotivados ou com a sensação de que estamos apenas sobrevivendo à rotina.'},
    {tag: 'p', texto: 'Talvez você esteja enfrentando dificuldades para controlar a ansiedade, lidando com pensamentos que geram sofrimento, vivendo conflitos nos relacionamentos, passando por um momento de insegurança ou simplesmente sentindo que perdeu a conexão consigo mesmo.'},
    {tag: 'p', texto: 'Você não precisa enfrentar tudo isso sozinho. Buscar ajuda psicológica é um ato de cuidado consigo e uma oportunidade de desenvolver novas formas de compreender suas emoções, fortalecer seus recursos internos e construir uma vida com mais equilíbrio e qualidade.'},
];

const sectionTarget = document.querySelector('.createTag');
const div = document.createElement('div');
sectionTarget.appendChild(div);
div.classList.add('porque-content','main-content');
for (let i = 0; i < element.length; i++) {
    const {tag, texto} = element[i];
    const tagCreated = document.createElement(tag);
    const textCreated = document.createTextNode(texto);  
    tagCreated.appendChild(textCreated);
    div.appendChild(tagCreated);   
}
sectionTarget.appendChild(div);

