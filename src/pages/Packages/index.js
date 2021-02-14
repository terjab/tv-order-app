import data from '../../data/initial-packages-data.json'

export const Packages = () => {  
  return (
    <>
      {data.packages.map( item => (<h1>{item.name}</h1>) )}
    </>
  ) 
}