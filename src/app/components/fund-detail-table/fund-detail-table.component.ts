import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FundAnalysisService } from 'src/app/services/fund-analysis.service';

@Component({
  selector: 'vex-fund-detail-table',
  templateUrl: './fund-detail-table.component.html',
  styleUrls: ['./fund-detail-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FundDetailTableComponent implements OnInit {

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

  constructor(public fonService: FundAnalysisService) { }

  ngOnInit(): void {
  }

}
