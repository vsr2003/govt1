import UpdatesCard from "@/components/UpdatesCard"


const Updates = () => {

  const tazaKhabar = {
    heading : "ताज़ा खबर",
    readMoreLink : "https://mp.gov.in/news-details",
    content : [
      {
        description:"गेहूँ खरीदी में किसानों के लिए बेहतर व्यवस्था सुनिश्चित करें - मुख्यमंत्री डॉ. यादव",
        link:""
      },
      {
        description:"गेहूँ खरीदी में किसानों के लिए बेहतर व्यवस्था सुनिश्चित करें - मुख्यमंत्री डॉ. यादव",
        link:""
      },
      {
        description:"गेहूँ खरीदी में किसानों के लिए बेहतर व्यवस्था सुनिश्चित करें - मुख्यमंत्री डॉ. यादव",
        link:""
      },
      {
        description:"गेहूँ खरीदी में किसानों के लिए बेहतर व्यवस्था सुनिश्चित करें - मुख्यमंत्री डॉ. यादव",
        link:""
      },
    ]
  }
  const adhiniyam = {
    heading : "अधिनियम और नियम",
    readMoreLink : "https://mp.gov.in/actsrules",
    content : [
      {
        description:"गेहूँ खरीदी में किसानों के लिए बेहतर व्यवस्था सुनिश्चित करें - मुख्यमंत्री डॉ. यादव",
        link:""
      },
      {
        description:"गेहूँ खरीदी में किसानों के लिए बेहतर व्यवस्था सुनिश्चित करें - मुख्यमंत्री डॉ. यादव",
        link:""
      },
      {
        description:"गेहूँ खरीदी में किसानों के लिए बेहतर व्यवस्था सुनिश्चित करें - मुख्यमंत्री डॉ. यादव",
        link:""
      },
      {
        description:"गेहूँ खरीदी में किसानों के लिए बेहतर व्यवस्था सुनिश्चित करें - मुख्यमंत्री डॉ. यादव",
        link:""
      },
    ]
  }
  const uplabdhiyan = {
    heading : "उपलब्धियां",
    readMoreLink : "https://mp.gov.in/achievement",
    content : [
      {
        description:"गेहूँ खरीदी में किसानों के लिए बेहतर व्यवस्था सुनिश्चित करें - मुख्यमंत्री डॉ. यादव",
        link:""
      },
      {
        description:"गेहूँ खरीदी में किसानों के लिए बेहतर व्यवस्था सुनिश्चित करें - मुख्यमंत्री डॉ. यादव",
        link:""
      },
      {
        description:"गेहूँ खरीदी में किसानों के लिए बेहतर व्यवस्था सुनिश्चित करें - मुख्यमंत्री डॉ. यादव",
        link:""
      },
      {
        description:"गेहूँ खरीदी में किसानों के लिए बेहतर व्यवस्था सुनिश्चित करें - मुख्यमंत्री डॉ. यादव",
        link:""
      },
    ]
  }


  return (
    <div className=" h-[100vh] w-full flex justify-evenly items-center  "
        style={{backgroundImage:"url('https://mp.gov.in/assets/images/headerbg.jpg')",backgroundAttachment:"fixed"}}
    >
        
        <UpdatesCard heading={tazaKhabar.heading} content={tazaKhabar.content} readMoreLink={tazaKhabar.readMoreLink}   />
        <UpdatesCard heading={adhiniyam.heading} content={adhiniyam.content} readMoreLink={adhiniyam.readMoreLink} />
        <UpdatesCard heading={uplabdhiyan.heading} content={uplabdhiyan.content} readMoreLink={uplabdhiyan.readMoreLink} />

    </div>
  )
}

export default Updates