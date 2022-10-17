export  interface IPost{
        id: number,
        date:string,
        date_gmt:string,
        guid: {
            rendered:string,
        },
        better_featured_image: {
            id: number,
            alt_text: string,
            caption: string,
            media_type: string,
            media_details: {
                width: number,
                height: number,
                file: string,
                filesize: number,
                sizes: {
                    medium: {
                        file: string,
                        width: number,
                        height: number,
                        'mime-type': string,
                        filesize: number,
                        source_url: string,
                    },
                    thumbnail: {
                        file: string,
                        width: number,
                        height: number,
                        'mime-type': string,
                        filesize: number,
                        source_url: string,
                    },
                    medium_large: {
                        file: string,
                        width: number,
                        height: number,
                        'mime-type': string,
                        filesize: number,
                        source_url: string,
                    }
                }
            },
            post: number,
            source_url: string,
        },
        modified:string,
        modified_gmt:string,
        slug:string,
        status:string,
        type:string,
        link:string,
        title: {
            rendered:string,
        },
        content: {
            rendered:string,
            protected: boolean
        },
        excerpt: {
            rendered:string,
            protected: boolean
        },
        author: number,
        featured_media: boolean,
        comment_status:string,
        ping_status:string,
        sticky: boolean,
        template:string,
        format:string,
        meta: [],
        categories: [
            number
        ],
        tags: [],
        _links: {
            self: [
                {
                    href:string,
                }
            ],
            collection: [
                {
                    href:string,
                }
            ],
            about: [
                {
                    href:string,
                }
            ],
            author: [
                {
                    embeddable: boolean,
                    href:string,
                }
            ],
            replies: [
                {
                    embeddable: boolean,
                    href:string,
                }
            ],
            versionhistory: [
                {
                    count: number,
                    href:string,
                }
            ],
            predecessorversion: [
                {
                    id: number,
                    href:string,
                }
            ],
            wpattachment: [
                {
                    href:string,
                }
            ],
            wpterm: [
                {
                    taxonomy:string,
                    embeddable: boolean,
                    href:string,
                },
                {
                    taxonomy:string,
                    embeddable: boolean,
                    href:string,
                }
            ],
            curies: [
                {
                    name:string,
                    href:string,
                    templated: boolean
                }
            ]
        }
}