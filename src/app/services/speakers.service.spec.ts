import { TestBed } from '@angular/core/testing';
import { DataService } from './data.service';
import { SpeakersService } from './speakers.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Speaker } from '../models/speaker';

const speakers: Speaker[] = [
  {
    name: {
      title: "mr",
      first: "peter",
      last: "kertesz"
    },
    email: "peter@gmail.com",
    phone: "001000102" 
  },
  {
    name: {
      title: "mrs",
      first: "michael",
      last: "daniel"
    },
    email: "michael@hotmail.com",
    phone: "04440102" 
  },
  {
    name: {
      title: "ms",
      first: "Nicole",
      last: "Adams"
    },
    email: "Nicole@google.com",
    phone: "3424533" 
  }
]

describe('SpeakersService', () => {
  let dataService: DataService;
  let service: SpeakersService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [ 
        DataService
      ]
    });

    service = TestBed.inject(SpeakersService);
    dataService = TestBed.inject(DataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe("[method]: getSpeakersWithMergedName", () => {
    it('should add the mergedName property to each speaker.', () => {
      const expectedOutput = [
        {
          name: {
            title: "mr",
            first: "peter",
            last: "kertesz"
          },
          email: "peter@gmail.com",
          phone: "001000102",
          mergedName: "mr peter kertesz" 
        },
        {
          name: {
            title: "mrs",
            first: "michael",
            last: "daniel"
          },
          email: "michael@hotmail.com",
          phone: "04440102",
          mergedName: "mrs michael daniel"  
        },
        {
          name: {
            title: "ms",
            first: "Nicole",
            last: "Adams"
          },
          email: "Nicole@google.com",
          phone: "3424533",
          mergedName: "ms Nicole Adams"  
        }
      ]

      expect(service.getSpeakersWithMergedName(speakers)).toEqual(expectedOutput);
    });
  })

  describe("[method]: filterSpeakers", () => {
    it('should return all speakers on empty input.', () => {
      expect(service.filterSpeakers("", speakers)).toEqual(speakers);
    });

    it('should return only the speaker "Peter" on input "pet".', () => {
      const expectedOutput = speakers[0];

      expect(service.filterSpeakers("pet", speakers)).toEqual([expectedOutput]);
    });

    it('should return only the speaker "Nicole" on input "adams".', () => {
      const expectedOutput = speakers[2];

      expect(service.filterSpeakers("adams", speakers)).toEqual([expectedOutput]);
    });

    it('should return only the speaker "Nicole" on input "3424533".', () => {
      const expectedOutput = speakers[2];

      expect(service.filterSpeakers("3424533", speakers)).toEqual([expectedOutput]);
    });

    it('should return all speakers on input ".com".', () => {
      expect(service.filterSpeakers(".com", speakers)).toEqual(speakers);
    });

    it('should return only the mr speakers on input "mr".', () => {
      const expectedOutput = [ speakers[0], speakers[1] ];

      expect(service.filterSpeakers("mr", speakers)).toEqual(expectedOutput);
    });
  })
});
