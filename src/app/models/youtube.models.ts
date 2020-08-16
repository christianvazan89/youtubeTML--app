export interface YoutubeResponse {
    kind:          string;
    etag:          string;
    nextPageToken: string;
    pageInfo:      PageInfo;
    items:         Item[];
}

export interface Item {
    kind:    ItemKind;
    etag:    string;
    id:      string;
    snippet: Video;
}

export enum ItemKind {
    YoutubePlaylistItem = 'youtube#playlistItem',
}

export interface Video {
    publishedAt:  Date;
    channelId:    ChannelID;
    title:        string;
    description:  string;
    thumbnails:   Thumbnails;
    channelTitle: ChannelTitle;
    playlistId:   PlaylistID;
    position:     number;
    resourceId:   ResourceID;
}

export enum ChannelID {
    UCsN8M73DMWa8SPp5o_0IAQQ = 'UCsN8M73DMWa8SPp5o_0IAQQ',
}

export enum ChannelTitle {
    Tomorrowland = 'Tomorrowland',
}

export enum PlaylistID {
    UUsN8M73DMWa8SPp5o_0IAQQ = 'UUsN8M73DMWa8SPp5o_0IAQQ',
}

export interface ResourceID {
    kind:    ResourceIDKind;
    videoId: string;
}

export enum ResourceIDKind {
    YoutubeVideo = 'youtube#video',
}

export interface Thumbnails {
    default:   Default;
    medium:    Default;
    high:      Default;
    standard?: Default;
    maxres?:   Default;
}

export interface Default {
    url:    string;
    width:  number;
    height: number;
}

export interface PageInfo {
    totalResults:   number;
    resultsPerPage: number;
}
