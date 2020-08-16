import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { YoutubeResponse } from '../models/youtube.models';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  private youtubeUrl = 'https://www.googleapis.com/youtube/v3';
  private apikey = 'AIzaSyCL5oLSLV47BixlM99lwAoQOaVOVcHxAzM';
  private playlist = 'UUsN8M73DMWa8SPp5o_0IAQQ';
  private nextPageToken = '';

  constructor(private http: HttpClient) {}

  getVideos(){

    const url = `${this.youtubeUrl}/playlistItems`;

    const params = new HttpParams()
                  .set('part', 'snippet')
                  .set('maxResults', '10')
                  .set('playlistId', this.playlist)
                  .set('key', this.apikey)
                  .set('pageToken', this.nextPageToken);

    return this.http.get<YoutubeResponse>(url, {params})
            .pipe(map(resp => {
              this.nextPageToken = resp.nextPageToken;
              return resp.items;
            }),
            map (items => items.map( video => video.snippet))
            );
  }
}
