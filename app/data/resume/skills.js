const skills = [{
  title: 'JavaScript',
  competency: 4,
  category: ['Web Development', 'Languages', 'Javascript'],
},
{
  title: 'Node.JS',
  competency: 4,
  category: ['Web Development', 'Javascript'],
},
{
  title: 'React',
  competency: 3,
  category: ['Web Development', 'Javascript'],
},
{
  title: 'Bash',
  competency: 2,
  category: ['Tools', 'Languages'],
},
{
  title: 'Amazon Web Services',
  competency: 2,
  category: ['Web Development', 'Tools'],
},
{
  title: 'Heroku',
  competency: 4,
  category: ['Web Development', 'Tools'],
},
{
  title: 'MongoDB',
  competency: 2,
  category: ['Web Development'],
},
{
  title: 'IntelliJ',
  competency: 4,
  category: ['Tools', 'Python'],
},
{
  title: 'PostgreSQL/SQLite3/SQL',
  competency: 4,
  category: ['Web Development', 'Languages'],
},
{
  title: 'Express.JS',
  competency: 4,
  category: ['Web Development', 'Javascript'],
},
{
  title: 'Flask',
  competency: 4,
  category: ['Web Development', 'Python'],
},
{
  title: 'Git',
  competency: 4,
  category: ['Tools'],
},
{
  title: 'Numpy',
  competency: 3,
  category: ['Machine Learning', 'Python'],
},
{
  title: 'OpenCV',
  competency: 3,
  category: ['Machine Learning', 'Python'],
},
{
  title: 'Tensorflow + Keras',
  competency: 3,
  category: ['Machine Learning', 'Python'],
},
{
  title: 'Jupyter',
  competency: 3,
  category: ['Machine Learning', 'Python'],
},
{
  title: 'Typescript',
  competency: 3,
  category: ['Web Development', 'Languages', 'Javascript'],
},
{
  title: 'Vue.js',
  competency: 4,
  category: ['Web Development', 'Javascript'],
},
{
  title: 'HTML + SASS/SCSS/CSS',
  competency: 5,
  category: ['Web Development', 'Languages'],
},
{
  title: 'Python',
  competency: 5,
  category: ['Languages', 'Python', 'Machine Learning'],
},
{
  title: 'C',
  competency: 2,
  category: ['Languages'],
},
{
  title: 'Pandas',
  competency: 1,
  category: ['Machine Learning', 'Python'],
},
{
  title: 'Matplotlib',
  competency: 2,
  category: ['Machine Learning', 'Python'],
},
{
  title: 'Scikit-Learn',
  competency: 4,
  category: ['Machine Learning', 'Python'],
},
{
  title: 'Spark',
  competency: 2,
  category: ['Machine Learning'],
},
{
  title: 'Pylint',
  competency: 2,
  category: ['Machine Learning', 'Python'],
},
].map((skill) => ({ ...skill, category: skill.category.sort() }));

// this is a list of colors that I like. The length should be == to the
// number of categories. Re-arrange this list until you find a pattern you like.
const colors = [
  '#6968b3',
  '#37b1f5',
  '#40494e',
  '#515dd4',
  '#e47272',
  '#cc7b94',
  '#3896e2',
  '#c3423f',
  '#d75858',
  '#747fff',
  '#64cb7b',
];

const categories = [...new Set(
  skills.reduce((acc, { category }) => acc.concat(category), []),
)].sort().map((category, index) => ({
  name: category,
  color: colors[index],
}));

export { categories, skills };
