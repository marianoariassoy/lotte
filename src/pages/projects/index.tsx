import List from '../../components/List'

const index = () => {
  const data = [
    {
      id: 1,
      title: '2024		Garden 01',
      subtitle: 'Gardening for Lou and Alfred',
      description:
        'Plants we used: Lorem Ipsu; Lorem Ipsu; Lorem Ipsu; Lorem Ipsu; Lorem Ipsu Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.is nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.',
      image:
        'https://images.unsplash.com/photo-1558293842-c0fd3db86157?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z2FyZGVufGVufDB8fDB8fHww'
    },
    {
      id: 2,
      title: 'Lotte Gardens',
      subtitle: ' ',
      description:
        'Lotte Gardens is a gardening studio based in Cape Cod, EEUU. We specialize in creating beautiful and functional gardens that are both functional and aesthetically pleasing.',
      image:
        'https://plus.unsplash.com/premium_photo-1673141390222-2bd01b623bf3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGdhcmRlbnxlbnwwfHwwfHx8MA%3D%3D'
    },
    {
      id: 3,
      title: 'Lotte Gardens',
      subtitle: ' ',
      description:
        'Lotte Gardens is a gardening studio based in Cape Cod, EEUU. We specialize in creating beautiful and functional gardens that are both functional and aesthetically pleasing.',
      image:
        'https://images.unsplash.com/photo-1544727219-d2ff78f0f148?q=80&w=2127&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      id: 4,
      title: 'Lotte Gardens',
      subtitle: ' ',
      description:
        'Lotte Gardens is a gardening studio based in Cape Cod, EEUU. We specialize in creating beautiful and functional gardens that are both functional and aesthetically pleasing.',
      image:
        'https://plus.unsplash.com/premium_photo-1667308529745-eef03bcf486f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      id: 5,
      title: '2024		Garden 01',
      subtitle: 'Gardening for Lou and Alfred',
      description:
        'Plants we used: Lorem Ipsu; Lorem Ipsu; Lorem Ipsu; Lorem Ipsu; Lorem Ipsu Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.is nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.',
      image:
        'https://images.unsplash.com/photo-1591091421779-f5ffb333c27c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGdhcmRlbnxlbnwwfHwwfHx8MA%3D%3D'
    },
    {
      id: 6,
      title: 'Lotte Gardens',
      subtitle: ' ',
      description:
        'Lotte Gardens is a gardening studio based in Cape Cod, EEUU. We specialize in creating beautiful and functional gardens that are both functional and aesthetically pleasing.',
      image:
        'https://plus.unsplash.com/premium_photo-1678382341022-0d8a8765f141?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fGdhcmRlbnxlbnwwfHwwfHx8MA%3D%3D'
    },
    {
      id: 7,
      title: 'Lotte Gardens',
      subtitle: ' ',
      description:
        'Lotte Gardens is a gardening studio based in Cape Cod, EEUU. We specialize in creating beautiful and functional gardens that are both functional and aesthetically pleasing.',
      image:
        'https://plus.unsplash.com/premium_photo-1683586217826-f8496c0adec2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fGdhcmRlbnxlbnwwfHwwfHx8MA%3D%3D'
    },
    {
      id: 8,
      title: 'Lotte Gardens',
      subtitle: ' ',
      description:
        'Lotte Gardens is a gardening studio based in Cape Cod, EEUU. We specialize in creating beautiful and functional gardens that are both functional and aesthetically pleasing.',
      image:
        'https://plus.unsplash.com/premium_photo-1678382345446-a85d04a5e95b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D'
    }
  ]

  return (
    <section>
      <List data={data} />
    </section>
  )
}

export default index
