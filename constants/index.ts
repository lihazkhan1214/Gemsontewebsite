export interface DropdownLink {
  name: string;
  href: string;
}

export interface DropdownLinks {
  [key: string]: DropdownLink[];
}

export const dropdownLinksData: DropdownLinks = {
  encyclopedia: [{ name: 'Ruby', href: '/encyclopedia/ruby' }, { name: 'Sapphire', href: '/encyclopedia/sapphire' },{ name: 'Tanzanite', href: '/encyclopedia/tanzanite' },{ name: 'Diamond', href: '/encyclopedia/diamond' },{ name: 'Emerald', href: '/encyclopedia/emerald' },{ name: 'Opal', href: '/encyclopedia/opal' },{ name: 'Moissanite', href: '/encyclopedia/moissanite' },{ name: 'Peridot', href: '/encyclopedia/peridot' },{ name: 'All Encyclopedia', href: '/allencyclopedia' }],
  rawStones: [{ name: 'Raw Ruby', href: '/rawstones/rawruby' }, { name: 'Raw Tanzanite', href: '/rawstones/rawtanzanite' }, { name: 'Raw Diamond', href: '/rawstones/rawdiamond' }, { name: 'Raw Emerald', href: '/rawstones/rawemerald' }, { name: 'Raw Moissanite', href: '/rawstones/rawmoissanite' }, { name: 'Raw Peridot', href: '/rawstones/rawperidot' }, { name: 'All Raw Stones', href: '/allrawgems' }],
  Articles: [{ name: 'Gemstones collecting', href: '/articles/gemstonescollecting' }, { name: 'Gemstone Beauty', href: '/articles/gemstonebeauty' }, { name: 'Gemstone Color', href: '/articles/gemstonecolor' }, { name: 'Gemstone Origins', href: '/articles/gemstoneorigins' }, { name: 'Optical Properties', href: '/articles/opticalproperties' }, { name: 'Gemstone Luster', href: '/articles/gemstoneluster' }, { name: 'All Articles', href: '/allarticles' }],

 
};




// dataTypes.ts


export interface TableOfContent {
  json: {
    children: Array<{
      type: string;
      children?: Array<{
        text: string;
      }>;
      src?: string;
      title?: string;
      width?: number;
      handle?: string;
      height?: number;
      mimeType?: string;
    }>;
  };
}










interface PostData {
   title: string;
  slug: string;
  category:string;
  shortDescription: string;
  birthDescription:string;
  birthSones:string;
  
  polishedImg: {
    url:string
  }
  
  
 
}
export default PostData;
















   
    


export interface SinglePostInterface {
 
  title: string;
  updatedAt: string;
  publishedAt: string;
  slug: string;
  shortDescription: string;
  selectedImageType:string;
  category:string;
  createdBy: {
    name:string;
  };
  polishedImg: {
    url:string
  }
  rough: {
    url:string
  }
  jewelry: {
    url:string
  }
  birthSones: string;
  tableOfContent:TableOfContent;
}









export interface SingleArticleInterface {
  title1212: string;
  shortDescription: string;
  authorbio: string;
  authorname: string;
  createdBy: {
    name: string;
  };
  authorPicture: {
    url: string;
  };
  articlePicture: {
    url: string;
  };
  updatedAt: string;
  publishedAt: string;

  tableOfContent: Array<{
    json: {
      children: Array<{
        type: string;
        children?: Array<{
          text: string;
        }>;
        src?: string;
        title?: string;
        width?: number;
        handle?: string;
        height?: number;
        mimeType?: string;
      }>;
    };
  }>;
}












export interface LArticleCardProps {
  title: string;
  slug: string;
  category: string;
  shortDescription: string;
  BirthDescription:string;
  picture: string;
}




export  interface ArticleData {
  title1212: string;
 slug: string;
 shortDescription: string;
 articlePicture:{
  url:string;
}
 

}










export const api_endpoint ="https://api-ap-south-1.hygraph.com/v2/clri0xf871n4z01w9qmfilc4s/master";