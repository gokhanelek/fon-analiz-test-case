import { Component, OnInit } from "@angular/core";
import { map, tap } from "rxjs/operators";
import { FonAnaliziService } from "src/app/services/fon-analizi.service";

const data = {
  chart: {
    caption: "Fon Detay Analizi",
    subcaption: "[Fon Kodu]",
    showhovereffect: "1",
    numbersuffix: "%",
    drawcrossline: "1",
    plottooltext: "<b>$dataValue</b> data $seriesName",
    theme: "fusion",
    xAxisName: "Tarih",
    yAxisName: "Yüzde",
  },
  categories: [{ category: [] }],
  dataset: [],
};

@Component({
  selector: "vex-fon-detay-analiz-chart",
  templateUrl: "./fon-detay-analiz-chart.component.html",
  styleUrls: ["./fon-detay-analiz-chart.component.scss"],
})
export class FonDetayAnalizChartComponent implements OnInit {
  width = "100%";
  height = 400;
  type = "msline";
  dataFormat = "json";
  dataSource = data;

  constructor(private fonAnalizService: FonAnaliziService) {
    fonAnalizService.chartData$
      .pipe(
        map((data) => {
          const dataset = [
            {
              seriesname: "Banka Bonusu",
              data: [],
            },
            {
              seriesname: "Diğer",
              data: [],
            },
            {
              seriesname: "DevletTahvili",
              data: [],
            },
            {
              seriesname: "DovizOdemeliBono",
              data: [],
            },
            {
              seriesname: "DovizOdemeliTahvil",
              data: [],
            },
            {
              seriesname: "Eurobond",
              data: [],
            },
            {
              seriesname: "FinansmanBonosu",
              data: [],
            },
            {
              seriesname: "FonKatilmaBelgesi",
              data: [],
            },
            {
              seriesname: "GayrimenkulSertifikasi",
              data: [],
            },
            {
              seriesname: "HazineBonosu",
              data: [],
            },
            {
              seriesname: "HisseSenedi",
              data: [],
            },
            {
              seriesname: "KamuDisBorclanmaAraci",
              data: [],
            },
            {
              seriesname: "KamuKiraSertifikasi",
              data: [],
            },
            {
              seriesname: "KatilimHesabi",
              data: [],
            },
            {
              seriesname: "KiymetliMaden",
              data: [],
            },
            {
              seriesname: "OzelSektorKiraSertifikasi",
              data: [],
            },
            {
              seriesname: "OzelSektorTahvili",
              data: [],
            },
            {
              seriesname: "TersRepo",
              data: [],
            },
            {
              seriesname: "TPP",
              data: [],
            },
            {
              seriesname: "TurevAraci",
              data: [],
            },
            {
              seriesname: "VarligaDayaliMenkulKiymet",
              data: [],
            },
            {
              seriesname: "VadeliMevduat",
              data: [],
            },
            {
              seriesname: "YabanciBorclanmaAraci",
              data: [],
            },
            {
              seriesname: "YabanciHisseSenedi",
              data: [],
            },
            {
              seriesname: "YabanciMenkulKiymet",
              data: [],
            },
          ];
          const categories = [{ category: [] }];

          if (data) {
            data.forEach((item) => {
              dataset[0].data.push({ value: item.BankaBonosu });
              dataset[1].data.push({ value: item.Diger });
              dataset[2].data.push({ value: item.DevletTahvili });
              dataset[3].data.push({ value: item.DovizOdemeliBono });
              dataset[4].data.push({ value: item.DovizOdemeliTahvil });
              dataset[5].data.push({ value: item.Eurobond });
              dataset[6].data.push({ value: item.FinansmanBonosu });
              dataset[7].data.push({ value: item.FonKatilmaBelgesi });
              dataset[8].data.push({ value: item.GayrimenkulSertifikasi });
              dataset[9].data.push({ value: item.HazineBonosu });
              dataset[10].data.push({ value: item.HisseSenedi });
              dataset[11].data.push({ value: item.KamuDisBorclanmaAraci });
              dataset[12].data.push({ value: item.KamuKiraSertifikasi });
              dataset[13].data.push({ value: item.KatilimHesabi });
              dataset[14].data.push({ value: item.KiymetliMaden });
              dataset[15].data.push({ value: item.OzelSektorKiraSertifikasi });
              dataset[16].data.push({ value: item.OzelSektorTahvili });
              dataset[17].data.push({ value: item.TersRepo });
              dataset[18].data.push({ value: item.TPP });
              dataset[19].data.push({ value: item.TurevAraci });
              dataset[20].data.push({ value: item.VarligaDayaliMenkulKiymet });
              dataset[21].data.push({ value: item.VadeliMevduat });
              dataset[22].data.push({ value: item.YabanciBorclanmaAraci });
              dataset[23].data.push({ value: item.YabanciHisseSenedi });
              dataset[24].data.push({ value: item.YabanciMenkulKiymet });
              categories[0].category.push({ label: item.label });
            });
          }

          return { categories, dataset };
        }),
        tap((info) => {
          this.dataSource = {
            ...data,
            categories: info.categories,
            dataset: info.dataset,
          };
        })
      )
      .subscribe();
  }

  ngOnInit(): void {}
}
