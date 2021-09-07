import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FonAnaliziService } from 'src/app/services/fon-analizi.service';

@Component({
  selector: 'vex-fon-detay-table',
  templateUrl: './fon-detay-table.component.html',
  styleUrls: ['./fon-detay-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FonDetayTableComponent implements OnInit {

  displayedColumns: string[] = [
    'Tarih',
    'BankaBonosu',
    'Diger',
    'DevletTahvili',
    'DovizOdemeliBono',
    'DovizOdemeliTahvil',
    'Eurobond',
    'FinansmanBonosu',
    'FonKatilmaBelgesi',
    'GayrimenkulSertifikasi',
    'HazineBonosu',
    'HisseSenedi',
    'KamuDisBorclanmaAraci',
    'KamuKiraSertifikasi',
    'KatilimHesabi',
    'KiymetliMaden',
    'OzelSektorKiraSertifikasi',
    'OzelSektorTahvili',
    'TersRepo',
    'TPP',
    'TurevAraci',
    'VarligaDayaliMenkulKiymet',
    'VadeliMevduat',
    'YabanciBorclanmaAraci',
    'YabanciHisseSenedi',
    'YabanciMenkulKiymet',
  ];

  constructor(public fonService: FonAnaliziService) { }

  ngOnInit(): void {
  }

}
