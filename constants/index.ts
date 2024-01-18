export interface DropdownLink {
  name: string;
  href: string;
}

export interface DropdownLinks {
  [key: string]: DropdownLink[];
}

export const dropdownLinksData: DropdownLinks = {
  encyclopedia: [{ name: 'Ruby', href: '/Ruby' }, { name: 'Sapphire', href: '/Sapphire' },{ name: 'Tanzanite', href: '/Tanzanite' },{ name: 'Diamond', href: '/Diamond' },{ name: 'Emerald', href: '/Emerald' },{ name: 'Opal', href: '/Opal' },{ name: 'Moissanite', href: '/Moissanite' },{ name: 'Peridot', href: '/Peridot' },{ name: 'All Encyclopedia', href: '/allencyclopedia' }],
  articles: [{ name: 'Gemstones collecting', href: '/Gemstones collecting' }, { name: ' Gemstone Beauty', href: '/Gemstone Beauty' },{ name: 'Gemstone Color', href: '/Gemstone Color' }, { name: 'Gemstone Origins', href: '/Gemstone Origins ' },{ name: 'Optical Properties', href: '/Optical Properties' }, { name: 'Gemstone Luster', href: '/Gemstone Luster' },{ name: 'All Articles', href: '/allarticles' }],
  stones:  [{ name: 'Ruby', href: '/Ruby' }, { name: 'Sapphire', href: '/Sapphire' },{ name: 'Tanzanite', href: '/Tanzanite' },{ name: 'Diamond', href: '/Diamond' },{ name: 'Emerald', href: '/Emerald' },{ name: 'Opal', href: '/Opal' },{ name: 'Moissanite', href: '/Moissanite' },{ name: 'Peridot', href: '/Peridot' },{ name: 'All Encyclopedia', href: '/allgemstones' }],
  rawStones: [{ name: 'Raw Ruby', href: '/rawruby' }, { name: 'Raw Tanzanite', href: '/rawtanzanite' }, { name: 'Raw Diamond', href: '/rawdiamond' }, { name: 'Raw Emerald', href: '/rawemerald' }, { name: 'Raw Moissanite', href: '/rawmoissanite' }, { name: 'Raw Peridot', href: '/rawperidot' }, { name: 'All Raw Stones', href: '/allrawgems' }],

 
};

export const api_endpoint ="https://api-ap-south-1.hygraph.com/v2/clri0xf871n4z01w9qmfilc4s/master";