const title = document.querySelector('#title');
const text = document.querySelector('#text');

const getData = async () => {
    try{
        const response = await fetch(
            'https://codemy.oneentry.cloud/api/content/pages/url/about',
            {
                method: 'GET',
                headers:{
                    'x-app-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoibXlfYXBwIiwic2VyaWFsTnVtYmVyIjoxLCJpYXQiOjE3NTM1OTExNjEsImV4cCI6MTc4NTEyNzA2N30.6V1R9vtm7ctIyHOpMqGZpCiF_AZx79T0M8H5SfF061Y',

                },
            }
        )
        const data = await response.json();
           title.innerHTML = data.localizeInfos.en_US.title;
           text.innerHTML = data.localizeInfos.en_US.htmlContent;


     }
            
        
    catch (error) {
        console.error(error);
    }
}

getData();