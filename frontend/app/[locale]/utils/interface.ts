export interface Category {
  data: {
    id: string
    attributes: {
      title: string
      createdAt: string
      updatedAt: string
      publishedAt: string
    }
  }
}

export interface Post {
  data: {
    id: string
    attributes: {
      title: string
      createdAt: string
      updatedAt: string
      publishedAt: string
      content: [
        {
          type: string
          children: [
            {
              type: string
              text: string
            }
          ]
        }
      ]
      img: any
      categories: Category
    }
  }
}
