import Layout from './Layout'

function App() {

  return (
    <Layout>
<div className='relative flex flex-col items-center justify-center h-80 p-5 bg-light-gray overflow-hidden'>
  {/* Circular Bubbles */}
  <div className="absolute inset-0 flex items-center justify-center">
    {/* Extra Large Bubble with Inner Bubble */}
    <div className="absolute w-80 h-80 bg-light-yellow rounded-full opacity-30 -top-12 -right-24">
      <div className="absolute w-40 h-40 bg-light-yellow rounded-full opacity-50 top-20 left-20"></div>
    </div>
    {/* Large Bubble with Inner Bubble */}
    <div className="absolute w-64 h-64 bg-[#735DA5] rounded-full opacity-100 -top-24 -left-24">
      <div className="absolute w-32 h-32 bg-[#735DA5] rounded-full opacity-50 top-16 left-16"></div>
    </div>
    <div className="absolute w-64 h-64 bg-[#735DA5] rounded-full opacity-100 -bottom-24 -right-24">
      <div className="absolute w-32 h-32 bg-[#735DA5] rounded-full opacity-50 top-16 left-16"></div>
    </div>
    {/* Medium Bubble with Inner Bubble */}
    <div className="absolute w-40 h-40 bg-light-blue rounded-full opacity-30 -top-16 -left-16">
      <div className="absolute w-20 h-20 bg-light-blue rounded-full opacity-50 top-10 left-10"></div>
    </div>
    {/* Small Bubble with Inner Bubble */}
    <div className="absolute w-32 h-32 bg-light-green rounded-full opacity-30 top-16 -right-16">
      <div className="absolute w-16 h-16 bg-light-green rounded-full opacity-50 top-8 left-8"></div>
    </div>
  </div>

  {/* Logo Watermark */}
  <img 
    src='logo_disha.png' 
    alt='Disha Logo' 
    className='absolute top-1/2 left-[200px] transform -translate-y-1/2 opacity-20 z-0' 
    style={{ width: 'auto', height: 'auto', maxWidth: '200px', maxHeight: '200px' }}
  />

  <div className="relative z-10 text-center flex flex-col">
    <div className="text-3xl text-[#375E97] font-bold underline mb-4">
      Disha Current Affairs Classes
    </div>
    <div className="text-2xl">
      We provide what schools miss and we create leaders for the next generation
    </div>
    <div className='mt-3 flex flex-col items-center'>
      <a href="https://sarat.courses.store/543542" target="_blank" rel="noopener noreferrer">
        <button className="flex items-center justify-center px-1 py-2 bg-[#FFBB00] text-white rounded-lg shadow-lg transition-transform transform hover:scale-105">
          <span className="text-lg font-semibold px-1">Enroll Now</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            className="ml-2 bi bi-arrow-right animate-bounce"
            viewBox="0 0 16 16"
          >
            <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
          </svg>
        </button>
      </a>
    </div>
  </div>
</div>



<section className="bg-[#FFBB00] py-12 px-4 sm:px-6 lg:px-8">
  <div className="container mx-auto">
    <h2 className="text-3xl font-bold text-[#375E97] mb-6 text-center">
      How Disha Current Affairs Classes Help Your Children
    </h2>
    <ul className="list-disc list-inside space-y-4 text-lg text-dark-gray">
      <li>
        <span className="font-semibold">Forms foundation</span> to clear Civil Services Exam (IAS/IPS/IRS) and many other central and state services exams.
      </li>
      <li>
        <span className="font-semibold">Creates awareness</span> of what is happening in and outside India.
      </li>
      <li>
        <span className="font-semibold">Increases understanding</span> of Society, Government, Economy, and applications of Science and Technology, helping them become great Entrepreneurs and Political Leaders.
      </li>
      <li>
        <span className="font-semibold">Helps win state and national competitions</span> in Quiz, Debate, Essay writing, etc.
      </li>
      <li>
        <span className="font-semibold">Provides international exposure</span> through foreign teachers.
      </li>
      <li>
        <span className="font-semibold">Enables interaction</span> with top IAS, IPS officers; Ministers; Top entrepreneurs; International award-winning children, etc.
      </li>
      <li>
        <span className="font-semibold">Fills the gap</span> left by schools and creates leaders for the next generation.
      </li>
    </ul>
  </div>
</section>
<section className="bg-white py-12 px-4 sm:px-6 lg:px-8">
  <div className="container mx-auto">
    <h2 className="text-3xl font-bold text-dark-purple mb-8 text-center">
      Our Course Details
    </h2>
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      <div className="bg-[#375E97]  p-6 rounded-lg shadow-lg flex items-start space-x-4">
        <div className="text-2xl">📅</div>
        <div>
          <h3 className="text-xl font-semibold text-white mb-2">Weekly Current Affairs Classes</h3>
          <p className="text-white">
            Online live classes every Saturday. Recordings available for missed classes.
          </p>
        </div>
      </div>
      <div className="bg-light-purple p-6 rounded-lg shadow-lg flex items-start space-x-4">
        <div className="text-2xl">🏆</div>
        <div>
          <h3 className="text-xl font-semibold text-dark-gray mb-2">Weekly Quiz</h3>
          <p className="text-dark-gray">
            Take part in quizzes every Sunday with All India Ranking.
          </p>
        </div>
      </div>
      <div className="bg-light-purple p-6 rounded-lg shadow-lg flex items-start space-x-4">
        <div className="text-2xl">📄</div>
        <div>
          <h3 className="text-xl font-semibold text-dark-gray mb-2">Weekly PDF Material</h3>
          <p className="text-dark-gray">
            Receive weekly material in PDF format to read and review.
          </p>
        </div>
      </div>
      <div className="bg-light-purple p-6 rounded-lg shadow-lg flex items-start space-x-4">
        <div className="text-2xl">🌍</div>
        <div>
          <h3 className="text-xl font-semibold text-dark-gray mb-2">Monthly International Interaction</h3>
          <p className="text-dark-gray">
            Engage with foreign teachers who explain the situation in their country.
          </p>
        </div>
      </div>
      <div className="bg-light-purple p-6 rounded-lg shadow-lg flex items-start space-x-4">
        <div className="text-2xl">🎤</div>
        <div>
          <h3 className="text-xl font-semibold text-dark-gray mb-2">Participation in Competitions</h3>
          <p className="text-dark-gray">
            We facilitate participation in state and national competitions in Quiz, Debate, Elocution, Essay writing, Mock Parliament, and more.
          </p>
        </div>
      </div>
      <div className="bg-light-purple p-6 rounded-lg shadow-lg flex items-start space-x-4">
  <div className="text-2xl">💰</div>
  <div>
    <h3 className="text-xl font-semibold text-dark-gray mb-2">Pricing</h3>
    <p className="text-dark-gray mb-1">Rs 2000 per month</p>
    <p className="text-dark-gray">Rs 15000 per year 🏅</p>
    <p className='font-thin'>Choose the plan that suits you best. Monthly and yearly options available.</p>
  </div>
</div>

    </div>
  </div>
</section>



<section className="bg-light-gray py-12 px-4 sm:px-6 lg:px-8">
  <div className="container mx-auto">
    <h2 className="text-3xl font-bold text-dark-purple mb-8 text-center">
      Recent Videos
    </h2>
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      <div className="aspect-w-16 aspect-h-12">
        <iframe
          className="w-full h-full rounded-lg shadow-lg"
          src="https://www.youtube.com/embed/a6ho3NAVdmw"
          title="Video 1"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className="aspect-w-16 aspect-h-12">
        <iframe
          className="w-full h-full rounded-lg shadow-lg"
          src="https://www.youtube.com/embed/XXDhyryqFEU"
          title="Video 2"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
 
  </div>
</section>

<section className="bg-white py-12 px-4 sm:px-6 lg:px-8">
    <div className="container mx-auto">
      <h2 className="text-3xl font-bold text-dark-purple mb-8 text-center">
        You Listen to Classes From
      </h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <div className="bg-light-purple p-6 rounded-lg shadow-lg flex items-start space-x-4">
          <div className="text-3xl">📚</div>
          <div>
            <h3 className="text-xl font-semibold text-dark-gray mb-2">Expert Teachers</h3>
            <p className="text-dark-gray">
              From India and other countries teaching current affairs.
            </p>
          </div>
        </div>
        <div className="bg-light-purple p-6 rounded-lg shadow-lg flex items-start space-x-4">
          <div className="text-3xl">🎓</div>
          <div>
            <h3 className="text-xl font-semibold text-dark-gray mb-2">IAS & IPS Officers</h3>
            <p className="text-dark-gray">
              Explain their work and provide insights into their roles.
            </p>
          </div>
        </div>
        <div className="bg-light-purple p-6 rounded-lg shadow-lg flex items-start space-x-4">
          <div className="text-3xl">🏛️</div>
          <div>
            <h3 className="text-xl font-semibold text-dark-gray mb-2">Political Leaders</h3>
            <p className="text-dark-gray">
              Ministers and other leaders explain their work.
            </p>
          </div>
        </div>
        <div className="bg-light-purple p-6 rounded-lg shadow-lg flex items-start space-x-4">
          <div className="text-3xl">🚀</div>
          <div>
            <h3 className="text-xl font-semibold text-dark-gray mb-2">Top Entrepreneurs</h3>
            <p className="text-dark-gray">
              Share their experiences and insights into their fields.
            </p>
          </div>
        </div>
        <div className="bg-light-purple p-6 rounded-lg shadow-lg flex items-start space-x-4">
          <div className="text-3xl">🏆</div>
          <div>
            <h3 className="text-xl font-semibold text-dark-gray mb-2">Talented Children</h3>
            <p className="text-dark-gray">
              International award winners explain their preparation strategies.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>


  
  </Layout>
  )
}

export default App
