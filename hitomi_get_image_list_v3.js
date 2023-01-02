// This source code is a part of Project Violet.
// Copyright (C) 2021. violet-team. Licensed under the Apache-2.0 License.
//
// Script Name: hitomi_get_image_list.js
// Input:  $id     [int] - Hitomi.la Article Id
// Output: $result [Map] - Image List, Thumbnail List

function create_download_url(id) {
  return "https://ltn.hitomi.la/galleries/" + id + ".js";
}

var gg = {};
var window = {};
var document = {};
var name = {};
var location = {};
var customElements = {};
var history = {};
var locationbar = {};
var menubar = {};
var personalbar = {};
var scrollbars = {};
var statusbar = {};
var toolbar = {};
var status = {};
var closed = {};
var frames = {};
var length = {};
var top = {};
var opener = {};
var parent = {};
var frameElement = {};
var navigator = {};
var origin = {};
var external = {};
var screen = {};
var innerWidth = {};
var innerHeight = {};
var scrollX = {};
var pageXOffset = {};
var scrollY = {};
var pageYOffset = {};
var visualViewport = {};
var screenX = {};
var screenY = {};
var outerWidth = {};
var outerHeight = {};
var devicePixelRatio = {};
var clientInformation = {};
var screenLeft = {};
var screenTop = {};
var defaultStatus = {};
var defaultstatus = {};
var styleMedia = {};
var onsearch = {};
var isSecureContext = {};
var performance = {};
var onappinstalled = {};
var onbeforeinstallprompt = {};
var crypto = {};
var indexedDB = {};
var webkitStorageInfo = {};
var sessionStorage = {};
var localStorage = {};
var onbeforexrselect = {};
var onabort = {};
var onblur = {};
var oncancel = {};
var oncanplay = {};
var oncanplaythrough = {};
var onchange = {};
var onclick = {};
var onclose = {};
var oncontextmenu = {};
var oncuechange = {};
var ondblclick = {};
var ondrag = {};
var ondragend = {};
var ondragenter = {};
var ondragleave = {};
var ondragover = {};
var ondragstart = {};
var ondrop = {};
var ondurationchange = {};
var onemptied = {};
var onended = {};
var onerror = {};
var onfocus = {};
var onformdata = {};
var oninput = {};
var oninvalid = {};
var onkeydown = {};
var onkeypress = {};
var onkeyup = {};
var onload = {};
var onloadeddata = {};
var onloadedmetadata = {};
var onloadstart = {};
var onmousedown = {};
var onmouseenter = {};
var onmouseleave = {};
var onmousemove = {};
var onmouseout = {};
var onmouseover = {};
var onmouseup = {};
var onmousewheel = {};
var onpause = {};
var onplay = {};
var onplaying = {};
var onprogress = {};
var onratechange = {};
var onreset = {};
var onresize = {};
var onscroll = {};
var onseeked = {};
var onseeking = {};
var onselect = {};
var onstalled = {};
var onsubmit = {};
var onsuspend = {};
var ontimeupdate = {};
var ontoggle = {};
var onvolumechange = {};
var onwaiting = {};
var onwebkitanimationend = {};
var onwebkitanimationiteration = {};
var onwebkitanimationstart = {};
var onwebkittransitionend = {};
var onwheel = {};
var onauxclick = {};
var ongotpointercapture = {};
var onlostpointercapture = {};
var onpointerdown = {};
var onpointermove = {};
var onpointerup = {};
var onpointercancel = {};
var onpointerover = {};
var onpointerout = {};
var onpointerenter = {};
var onpointerleave = {};
var onselectstart = {};
var onselectionchange = {};
var onanimationend = {};
var onanimationiteration = {};
var onanimationstart = {};
var ontransitionrun = {};
var ontransitionstart = {};
var ontransitionend = {};
var ontransitioncancel = {};
var onafterprint = {};
var onbeforeprint = {};
var onbeforeunload = {};
var onhashchange = {};
var onlanguagechange = {};
var onmessage = {};
var onmessageerror = {};
var onoffline = {};
var ononline = {};
var onpagehide = {};
var onpageshow = {};
var onpopstate = {};
var onrejectionhandled = {};
var onstorage = {};
var onunhandledrejection = {};
var onunload = {};
var alert = {};
var atob = {};
var blur = {};
var btoa = {};
var cancelAnimationFrame = {};
var cancelIdleCallback = {};
var captureEvents = {};
var clearInterval = {};
var clearTimeout = {};
var close = {};
var confirm = {};
var createImageBitmap = {};
var fetch = {};
var find = {};
var focus = {};
var getComputedStyle = {};
var getSelection = {};
var matchMedia = {};
var moveBy = {};
var moveTo = {};
var open = {};
var postMessage = {};
var print = {};
var prompt = {};
var queueMicrotask = {};
var releaseEvents = {};
var reportError = {};
var requestAnimationFrame = {};
var requestIdleCallback = {};
var resizeBy = {};
var resizeTo = {};
var scroll = {};
var scrollBy = {};
var scrollTo = {};
var setInterval = {};
var setTimeout = {};
var stop = {};
var webkitCancelAnimationFrame = {};
var webkitRequestAnimationFrame = {};
var chrome = {};
var caches = {};
var cookieStore = {};
var ondevicemotion = {};
var ondeviceorientation = {};
var ondeviceorientationabsolute = {};
var showDirectoryPicker = {};
var showOpenFilePicker = {};
var showSaveFilePicker = {};
var originAgentCluster = {};
var trustedTypes = {};
var speechSynthesis = {};
var onpointerrawupdate = {};
var crossOriginIsolated = {};
var scheduler = {};
var openDatabase = {};
var webkitRequestFileSystem = {};
var webkitResolveLocalFileSystemURL = {};
var cr = {};


gg = { m: function(g) {
var o = 1;
switch (g) {
case 975:
case 3481:
case 3439:
case 1713:
case 3705:
case 3079:
case 3139:
case 2862:
case 2431:
case 3057:
case 4003:
case 118:
case 3682:
case 3129:
case 889:
case 1495:
case 1284:
case 387:
case 2867:
case 2396:
case 345:
case 673:
case 3785:
case 1138:
case 1267:
case 2958:
case 2220:
case 1785:
case 1534:
case 2638:
case 2966:
case 135:
case 244:
case 1000:
case 122:
case 686:
case 3545:
case 3553:
case 1851:
case 1030:
case 3390:
case 2686:
case 2240:
case 197:
case 2482:
case 2913:
case 1149:
case 2199:
case 2671:
case 1066:
case 1114:
case 1451:
case 1509:
case 3762:
case 2746:
case 3363:
case 3165:
case 3104:
case 1491:
case 4092:
case 2984:
case 1727:
case 3240:
case 998:
case 24:
case 1990:
case 1879:
case 3208:
case 2052:
case 1508:
case 3330:
case 411:
case 1712:
case 60:
case 3537:
case 1298:
case 462:
case 4017:
case 834:
case 3516:
case 1987:
case 2305:
case 1477:
case 610:
case 139:
case 3666:
case 3702:
case 3223:
case 47:
case 1683:
case 3338:
case 158:
case 3774:
case 1106:
case 2156:
case 49:
case 1117:
case 3440:
case 2673:
case 1535:
case 3829:
case 467:
case 2967:
case 3997:
case 381:
case 2818:
case 1465:
case 2056:
case 30:
case 633:
case 2785:
case 742:
case 1285:
case 1036:
case 3287:
case 2128:
case 497:
case 198:
case 600:
case 2592:
case 3361:
case 2089:
case 964:
case 3619:
case 1411:
case 2987:
case 3405:
case 3839:
case 3836:
case 4050:
case 1717:
case 1401:
case 1049:
case 3536:
case 604:
case 51:
case 3018:
case 1242:
case 3388:
case 3627:
case 3151:
case 3813:
case 3236:
case 2998:
case 1895:
case 2971:
case 3323:
case 1004:
case 119:
case 1787:
case 2238:
case 2161:
case 1877:
case 3749:
case 1669:
case 3875:
case 839:
case 1772:
case 1390:
case 1651:
case 1257:
case 3889:
case 676:
case 1218:
case 838:
case 3874:
case 3586:
case 1434:
case 2426:
case 639:
case 1316:
case 3526:
case 2140:
case 2791:
case 925:
case 1650:
case 1226:
case 2011:
case 3314:
case 879:
case 2969:
case 4038:
case 3810:
case 2590:
case 3820:
case 1961:
case 67:
case 1691:
case 3588:
case 3483:
case 2333:
case 363:
case 1565:
case 1974:
case 3146:
case 907:
case 3092:
case 1630:
case 405:
case 2436:
case 321:
case 1240:
case 1398:
case 4065:
case 3964:
case 952:
case 2329:
case 3860:
case 2879:
case 473:
case 3171:
case 1264:
case 10:
case 338:
case 3873:
case 120:
case 1002:
case 316:
case 3331:
case 1577:
case 2432:
case 195:
case 2946:
case 2953:
case 3531:
case 496:
case 437:
case 523:
case 627:
case 1122:
case 2902:
case 3645:
case 2189:
case 2960:
case 1978:
case 3003:
case 1069:
case 1383:
case 3706:
case 1800:
case 2186:
case 1871:
case 1797:
case 1685:
case 2316:
case 2720:
case 219:
case 2945:
case 2493:
case 3676:
case 149:
case 106:
case 1351:
case 598:
case 440:
case 2849:
case 3834:
case 2293:
case 803:
case 2949:
case 1768:
case 3494:
case 418:
case 1945:
case 2524:
case 1013:
case 1335:
case 2898:
case 1789:
case 3326:
case 1562:
case 416:
case 3289:
case 2453:
case 3928:
case 284:
case 943:
case 3163:
case 2696:
case 113:
case 335:
case 2169:
case 1924:
case 2944:
case 1323:
case 318:
case 2831:
case 4044:
case 1203:
case 3066:
case 3035:
case 3396:
case 3927:
case 3626:
case 301:
case 128:
case 2422:
case 428:
case 1250:
case 476:
case 1051:
case 494:
case 1736:
case 3751:
case 640:
case 3953:
case 1115:
case 3435:
case 3593:
case 1921:
case 2007:
case 533:
case 340:
case 40:
case 1608:
case 3153:
case 3383:
case 3764:
case 2716:
case 2315:
case 2626:
case 3518:
case 3963:
case 347:
case 1062:
case 740:
case 3149:
case 2067:
case 2317:
case 2228:
case 46:
case 1664:
case 1633:
case 3709:
case 2610:
case 3738:
case 3723:
case 653:
case 1815:
case 1917:
case 2700:
case 1956:
case 3029:
case 624:
case 813:
case 91:
case 3607:
case 1528:
case 3083:
case 2182:
case 2166:
case 3544:
case 1279:
case 1319:
case 3292:
case 1725:
case 2404:
case 860:
case 3198:
case 3675:
case 80:
case 69:
case 4055:
case 1624:
case 976:
case 2313:
case 2631:
case 3891:
case 177:
case 179:
case 3921:
case 446:
case 2449:
case 1345:
case 423:
case 660:
case 2232:
case 1762:
case 5:
case 2151:
case 2286:
case 3914:
case 2331:
case 3306:
case 875:
case 2438:
case 3053:
case 2145:
case 1560:
case 1709:
case 3144:
case 2623:
case 3352:
case 1488:
case 1321:
case 2118:
case 1405:
case 3116:
case 962:
case 3007:
case 3595:
case 479:
case 2625:
case 2109:
case 1154:
case 2216:
case 1358:
case 3520:
case 632:
case 3940:
case 187:
case 310:
case 1840:
case 1933:
case 45:
case 3276:
case 1599:
case 747:
case 4024:
case 3952:
case 2158:
case 2773:
case 3631:
case 3615:
case 3678:
case 2093:
case 790:
case 1159:
case 2806:
case 3906:
case 3638:
case 4063:
case 2826:
case 966:
case 2598:
case 1110:
case 1027:
case 4064:
case 3387:
case 224:
case 2470:
case 587:
case 3436:
case 1185:
case 3987:
case 3939:
case 2096:
case 2212:
case 3175:
case 4086:
case 2563:
case 727:
case 3539:
case 3975:
case 2178:
case 3857:
case 3196:
case 3624:
case 391:
case 239:
case 2751:
case 993:
case 2116:
case 3211:
case 1639:
case 701:
case 810:
case 3655:
case 2478:
case 2068:
case 1881:
case 1716:
case 1909:
case 2809:
case 1151:
case 588:
case 1539:
case 1531:
case 3568:
case 1490:
case 2480:
case 2456:
case 3660:
case 3651:
case 1353:
case 2857:
case 1777:
case 3862:
case 1058:
case 275:
case 2086:
case 1702:
case 2327:
case 2048:
case 2582:
case 1908:
case 1082:
case 1379:
case 2046:
case 157:
case 4042:
case 775:
case 2343:
case 1823:
case 3273:
case 1337:
case 194:
case 383:
case 453:
case 3680:
case 1778:
case 2088:
case 1799:
case 1994:
case 2136:
case 1:
case 346:
case 3182:
case 2506:
case 2257:
case 3438:
case 1883:
case 1141:
case 1744:
case 637:
case 1925:
case 3828:
case 2023:
case 262:
case 1256:
case 2080:
case 4080:
case 3525:
case 3699:
case 3365:
case 2527:
case 1989:
case 2951:
case 3515:
case 1308:
case 3780:
case 3826:
case 1260:
case 2813:
case 2355:
case 2281:
case 1485:
case 569:
case 3769:
case 302:
case 365:
case 3776:
case 2000:
case 2509:
case 501:
case 589:
case 2962:
case 2455:
case 2255:
case 2160:
case 3046:
case 125:
case 1157:
case 3942:
case 1112:
case 2424:
case 1726:
case 1667:
case 1947:
case 3219:
case 1258:
case 3162:
case 1668:
case 1422:
case 2508:
case 1948:
case 999:
case 1873:
case 1773:
case 2737:
case 942:
case 3336:
case 3160:
case 892:
case 1118:
case 2267:
case 33:
case 2912:
case 3580:
case 774:
case 3281:
case 864:
case 1440:
case 709:
case 1093:
case 908:
case 662:
case 1519:
case 1212:
case 231:
case 688:
case 1906:
case 1543:
case 965:
case 2465:
case 4058:
case 146:
case 651:
case 455:
case 3934:
case 1983:
case 3350:
case 2015:
case 205:
case 595:
case 3014:
case 2002:
case 1899:
case 3636:
case 14:
case 1636:
case 1072:
case 96:
case 1223:
case 2516:
case 251:
case 1334:
case 2717:
case 507:
case 1361:
case 3497:
case 3245:
case 1293:
case 3239:
case 2016:
case 3765:
case 3349:
case 1791:
case 2203:
case 3721:
case 3804:
case 4025:
case 3540:
case 3291:
case 3422:
case 3279:
case 3617:
case 307:
case 2029:
case 1600:
case 3040:
case 3447:
case 3404:
case 1629:
case 1529:
case 3697:
case 2400:
case 2650:
case 2609:
case 2206:
case 974:
case 2689:
case 615:
case 970:
case 980:
case 1057:
case 1176:
case 1209:
case 3881:
case 3632:
case 2083:
case 3195:
case 2919:
case 3734:
case 2416:
case 2844:
case 2908:
case 1483:
case 3115:
case 945:
case 421:
case 2839:
case 3235:
case 3773:
case 1734:
case 2535:
case 3062:
case 3590:
case 2553:
case 679:
case 4046:
case 2264:
case 1538:
case 1167:
case 2817:
case 3662:
case 3644:
case 871:
case 856:
case 672:
case 3377:
case 1999:
case 3608:
case 1196:
case 1098:
case 3801:
case 3754:
case 2575:
case 2579:
case 326:
case 4034:
case 2545:
case 2877:
case 3460:
case 1903:
case 4056:
case 88:
case 1844:
case 1826:
case 4014:
case 1623:
case 4032:
case 2571:
case 311:
case 1455:
case 3351:
case 928:
case 2707:
case 325:
case 492:
case 2722:
case 1468:
case 3285:
case 1462:
case 867:
case 293:
case 2577:
case 3554:
case 3563:
case 2339:
case 680:
case 822:
case 290:
case 2421:
case 174:
case 646:
case 2721:
case 2927:
case 1241:
case 127:
case 71:
case 3819:
case 3556:
case 143:
case 2141:
case 2628:
case 718:
case 2621:
case 1146:
case 4068:
case 2311:
case 2695:
case 1430:
case 58:
case 2354:
case 2890:
case 2630:
case 1045:
case 2126:
case 1188:
case 1291:
case 1950:
case 222:
case 1107:
case 3443:
case 3009:
case 1109:
case 2491:
case 3716:
case 2748:
case 1456:
case 296:
case 409:
case 2734:
case 3150:
case 3634:
case 327:
case 3752:
case 2559:
case 1121:
case 2672:
case 3542:
case 1776:
case 1525:
case 606:
case 2956:
case 3360:
case 280:
case 2251:
case 2200:
case 199:
case 3519:
case 2439:
case 3247:
case 2900:
case 960:
case 233:
case 1374:
case 2863:
case 3663:
case 2334:
case 1782:
case 659:
case 2759:
case 2782:
case 3073:
case 2845:
case 977:
case 1063:
case 3901:
case 3739:
case 3538:
case 2581:
case 3392:
case 3640:
case 2237:
case 3827:
case 1421:
case 3087:
case 2803:
case 2558:
case 3833:
case 2073:
case 3406:
case 1788:
case 1213:
case 1234:
case 1831:
case 2633:
case 1553:
case 1028:
case 3561:
case 763:
case 442:
case 2352:
case 3865:
case 689:
case 3167:
case 297:
case 98:
case 2568:
case 2952:
case 225:
case 2604:
case 2428:
case 1849:
case 1964:
case 2640:
case 2788:
case 13:
case 3394:
case 2485:
case 2565:
case 3312:
case 540:
case 132:
case 2505:
case 1252:
case 4029:
case 1350:
case 1418:
case 2467:
case 1559:
case 3398:
case 3582:
case 1652:
case 3130:
case 3581:
case 778:
case 2477:
case 3591:
case 2552:
case 3355:
case 1261:
case 281:
case 2881:
case 2615:
case 1839:
case 447:
case 2258:
case 870:
case 3455:
case 3846:
case 2654:
case 623:
case 712:
case 2981:
case 951:
case 536:
case 586:
case 3970:
case 3217:
case 944:
case 343:
case 3926:
case 2254:
case 1998:
case 3372:
case 3877:
case 532:
case 207:
case 2275:
case 2236:
case 2888:
case 400:
case 2587:
case 3457:
case 1162:
case 3523:
case 3991:
case 427:
case 1048:
case 3661:
case 2022:
case 903:
case 528:
case 1841:
case 594:
case 3258:
case 1882:
case 2991:
case 2846:
case 206:
case 1811:
case 1637:
case 344:
case 1660:
case 4060:
case 1926:
case 1474:
case 667:
case 1056:
case 70:
case 3969:
case 1672:
case 1645:
case 21:
case 2865:
case 3886:
case 3876:
case 842:
case 470:
case 2450:
case 2021:
case 1237:
case 859:
case 1312:
case 2820:
case 1641:
case 2870:
case 2033:
case 827:
case 1927:
case 3684:
case 3386:
case 3727:
case 2066:
case 3665:
case 1315:
case 487:
case 575:
case 4091:
case 512:
case 4016:
case 3817:
case 1480:
case 3985:
case 357:
case 916:
case 596:
case 3332:
case 2124:
case 1929:
case 1775:
case 3915:
case 792:
case 2895:
case 4094:
case 1254:
case 862:
case 764:
case 2092:
case 2476:
case 1551:
case 1541:
case 3329:
case 1392:
case 3086:
case 791:
case 3257:
case 3947:
case 2101:
case 3522:
case 3685:
case 2645:
case 2187:
case 2383:
case 2244:
case 3838:
case 3788:
case 3333:
case 55:
case 1135:
case 39:
case 3428:
case 643:
case 2980:
case 1164:
case 1111:
case 1163:
case 522:
case 3263:
case 2389:
case 1246:
case 2901:
case 393:
case 2171:
case 2041:
case 3885:
case 3791:
case 1949:
case 752:
case 656:
case 2931:
case 745:
case 2045:
case 2473:
case 1875:
case 463:
case 796:
case 1292:
case 2567:
case 853:
case 654:
case 313:
case 1445:
case 857:
case 2670:
case 1245:
case 1942:
case 2193:
case 1244:
case 209:
case 1371:
case 3812:
case 3189:
case 3763:
case 3974:
case 2026:
case 4002:
case 482:
case 3461:
case 1809:
case 84:
case 2139:
case 4051:
case 3642:
case 1134:
case 2049:
case 618:
case 2999:
case 2259:
case 1759:
case 1302:
case 2391:
case 3205:
case 1150:
case 2515:
case 102:
case 1281:
case 2075:
case 2697:
case 2323:
case 3384:
case 2810:
case 1412:
case 110:
case 818:
case 1830:
case 3923:
case 1127:
case 276:
case 3419:
case 227:
case 175:
case 2217:
case 1396:
case 3242:
case 768:
case 1764:
case 1556:
case 3577:
case 2028:
case 3403:
case 320:
case 3107:
case 1728:
case 235:
case 1941:
case 2213:
case 155:
case 1705:
case 64:
case 2607:
case 1997:
case 2570:
case 1075:
case 3760:
case 215:
case 4079:
case 744:
case 3496:
case 1996:
case 3193:
case 3527:
case 2249:
case 2489:
case 3380:
case 1567:
case 3792:
case 664:
case 212:
case 286:
case 3866:
case 4088:
case 3870:
case 2377:
case 3078:
case 213:
case 2858:
case 289:
case 3783:
case 2024:
case 938:
case 3695:
case 1038:
case 1277:
case 2324:
case 1448:
case 1243:
case 601:
case 2864:
case 34:
case 3535:
case 3601:
case 1552:
case 529:
case 3625:
case 2957:
case 1024:
case 1340:
case 1632:
case 1458:
case 1464:
case 2685:
case 189:
case 997:
case 234:
case 168:
case 2835:
case 103:
case 4000:
case 1481:
case 1306:
case 3852:
case 3268:
case 2899:
case 2885:
case 3024:
case 3548:
case 771:
case 1647:
case 2201:
case 169:
case 873:
case 3472:
case 2172:
case 3628:
case 3728:
case 3936:
case 641:
case 1177:
case 3759:
case 258:
case 2174:
case 4067:
case 1229:
case 2375:
case 770:
case 2288:
case 83:
case 2341:
case 3421:
case 1216:
case 1846:
case 1158:
case 2095:
case 1385:
case 26:
case 2635:
case 1943:
case 666:
case 3415:
case 3411:
case 3298:
case 134:
case 303:
case 475:
case 2155:
case 164:
case 1193:
case 3176:
case 711:
case 4:
case 3867:
case 2703:
case 2014:
case 378:
case 4011:
case 2733:
case 2533:
case 2157:
case 585:
case 1470:
case 3474:
case 1420:
case 2709:
case 2936:
case 3220:
case 1372:
case 868:
case 481:
case 2248:
case 1087:
case 210:
case 3393:
case 1029:
case 3382:
case 1584:
case 3837:
case 2113:
case 3495:
case 2714:
case 359:
case 1995:
case 762:
case 3557:
case 1303:
case 193:
case 114:
case 761:
case 1671:
case 2409:
case 749:
case 1144:
case 2273:
case 228:
case 2561:
case 1853:
case 1935:
case 2770:
case 2636:
case 1526:
case 1582:
case 1025:
case 3132:
case 2474:
case 12:
case 52:
case 2574:
case 1341:
case 1729:
case 3913:
case 2799:
case 2430:
case 605:
case 485:
case 2920:
case 181:
case 524:
case 1131:
case 909:
case 3803:
case 2529:
case 2874:
case 2708:
case 3418:
case 477:
case 2995:
case 1011:
case 3100:
case 3794:
case 815:
case 1861:
case 3464:
case 819:
case 1771:
case 3988:
case 264:
case 360:
case 2164:
case 2644:
case 2819:
case 1616:
case 820:
case 1377:
case 3984:
case 358:
case 2429:
case 1408:
case 2992:
case 486:
case 874:
case 2165:
case 755:
case 1878:
case 4052:
case 3408:
case 2392:
case 2292:
case 2766:
case 3809:
case 3956:
case 3552:
case 1970:
case 1386:
case 1039:
case 3271:
case 35:
case 3658:
case 1533:
case 2525:
case 2062:
case 3430:
case 648:
case 2464:
case 3034:
case 1810:
case 3691:
case 2328:
case 3517:
case 850:
case 1934:
case 2061:
case 3779:
case 3815:
case 28:
case 3733:
case 3154:
case 2665:
case 431:
case 398:
case 2520:
case 592:
case 17:
case 2037:
case 1570:
case 1518:
case 804:
case 4040:
case 3044:
case 1461:
case 1589:
case 1747:
case 2662:
case 2345:
case 2310:
case 3501:
case 439:
case 2758:
case 2744:
case 3227:
case 863:
case 931:
case 3262:
case 18:
case 769:
case 1857:
case 785:
case 1194:
case 3451:
case 636:
case 4089:
case 4045:
case 846:
case 3031:
case 3566:
case 3173:
case 2789:
case 2521:
case 1009:
case 2928:
case 4013:
case 2195:
case 825:
case 43:
case 3565:
case 3303:
case 743:
case 707:
case 3202:
case 3771:
case 880:
case 240:
case 1399:
case 2197:
case 1441:
case 1739:
case 153:
case 650:
case 781:
case 2411:
case 1850:
case 545:
case 2861:
case 1389:
case 550:
case 2208:
case 2279:
case 3296:
case 3717:
case 1152:
case 896:
case 2130:
case 1007:
case 3318:
case 133:
case 2112:
case 563:
case 674:
case 1339:
case 186:
case 2840:
case 1344:
case 3669:
case 877:
case 2036:
case 3600:
case 1410:
case 3194:
case 1573:
case 3004:
case 201:
case 3611:
case 2889:
case 1360:
case 20:
case 2790:
case 3949:
case 353:
case 2755:
case 2833:
case 136:
case 1129:
case 1720:
case 2484:
case 2922:
case 4009:
case 3142:
case 1357:
case 3101:
case 2769:
case 561:
case 220:
case 2698:
case 3641:
case 1217:
case 68:
case 376:
case 3633:
case 1656:
case 4069:
case 2627:
case 3550:
case 2098:
case 638:
case 3252:
case 3072:
case 2893:
case 3482:
case 1181:
case 2379:
case 443:
case 1838:
case 3448:
case 2010:
case 2209:
case 2706:
case 3799:
case 352:
case 682:
case 1085:
case 208:
case 3039:
case 38:
case 1523:
case 3999:
case 1644:
case 2111:
case 1352:
case 572:
case 3017:
case 3128:
case 1540:
case 238:
case 583:
case 2578:
case 2148:
case 1010:
case 1752:
case 2541:
case 312:
case 2278:
case 3370:
case 2366:
case 1666:
case 2175:
case 3346:
case 3932:
case 848:
case 1813:
case 3584:
case 2784:
case 2603:
case 2536:
case 1198:
case 1587:
case 3491:
case 1684:
case 3325:
case 1380:
case 3587:
case 2917:
case 2425:
case 2415:
case 971:
case 3441:
case 211:
case 2519:
case 265:
case 72:
case 1891:
case 1332:
case 910:
case 2795:
case 252:
case 570:
case 576:
case 25:
case 4039:
case 2044:
case 2451:
case 2593:
case 564:
case 3085:
case 1749:
case 661:
case 3623:
case 1803:
case 2727:
case 514:
case 420:
case 1266:
case 372:
case 3755:
case 2108:
case 1643:
case 2443:
case 2269:
case 1331:
case 1795:
case 2444:
case 2606:
case 2371:
case 0:
case 3620:
case 2921:
case 1794:
case 319:
case 4010:
case 1638:
case 3095:
case 4021:
case 3313:
case 3191:
case 236:
case 505:
case 2514:
case 2025:
case 1478:
case 2246:
case 1395:
case 2234:
case 737:
case 3917:
case 3050:
case 784:
case 3753:
case 4006:
case 3861:
case 554:
case 2287:
case 86:
case 341:
case 2741:
case 902:
case 1309:
case 1224:
case 3729:
case 3277:
case 1041:
case 2934:
case 923:
case 2454:
case 3635:
case 547:
case 1305:
case 438:
case 1233:
case 699:
case 3231:
case 183:
case 3502:
case 1985:
case 1697:
case 700:
case 3103:
case 2613:
case 2121:
case 795:
case 692:
case 3180:
case 404:
case 2144:
case 162:
case 1610:
case 1679:
case 669:
case 1676:
case 2223:
case 1071:
case 3677:
case 3348:
case 555:
case 2926:
case 3364:
case 1116:
case 2374:
case 3560:
case 1731:
case 3778:
case 990:
case 872:
case 3847:
case 3844:
case 3713:
case 1189:
case 468:
case 3307:
case 1207:
case 3558:
case 2963:
case 1649:
case 3391:
case 2948:
case 2556:
case 2856:
case 2896:
case 2757:
case 2955:
case 1359:
case 2779:
case 2039:
case 579:
case 1035:
case 4078:
case 2471:
case 552:
case 1730:
case 2224:
case 647:
case 1932:
case 2440:
case 3899:
case 268:
case 1168:
case 3929:
case 2047:
case 2801:
case 2322:
case 288:
case 1805:
case 1546:
case 1090:
case 3098:
case 2031:
case 3720:
case 1514:
case 826:
case 1079:
case 2532:
case 1487:
case 782:
case 2107:
case 203:
case 160:
case 805:
case 738:
case 1155:
case 2622:
case 1628:
case 2540:
case 2829:
case 483:
case 1804:
case 334:
case 2280:
case 3933:
case 2903:
case 1005:
case 1631:
case 3618:
case 1901:
case 2530:
case 2602:
case 1364:
case 2064:
case 1859:
case 2663:
case 2825:
case 3032:
case 61:
case 355:
case 2786:
case 243:
case 2841:
case 2975:
case 924:
case 3308:
case 1187:
case 831:
case 1818:
case 2601:
case 3493:
case 2110:
case 306:
case 861:
case 4059:
case 746:
case 255:
case 1467:
case 617:
case 2069:
case 2523:
case 2546:
case 972:
case 3088:
case 3375:
case 3850:
case 3028:
case 1059:
case 3681:
case 3064:
case 3016:
case 3437:
case 2490:
case 2620:
case 3041:
case 1622:
case 1708:
case 3637:
case 571:
case 3656:
case 1296:
case 4033:
case 1588:
case 1055:
case 3746:
case 1017:
case 1754:
case 1355:
case 1482:
case 568:
case 3228:
case 2284:
case 2057:
case 2997:
case 176:
case 3147:
case 823:
case 1700:
case 2718:
case 3105:
case 732:
case 899:
case 726:
case 919:
case 1020:
case 4018:
case 3707:
case 1721:
case 3110:
case 90:
case 1148:
case 1806:
case 953:
case 3507:
case 2202:
case 502:
case 1433:
case 756:
case 89:
case 3190:
case 1210:
case 1397:
case 2677:
case 337:
case 1690:
case 115:
case 1968:
case 495:
case 37:
case 294:
case 3807:
case 2468:
case 3498:
case 728:
case 1370:
case 464:
case 4070:
case 317:
case 2745:
case 23:
case 3718:
case 2710:
case 2299:
case 2005:
case 2937:
case 79:
case 2003:
case 333:
case 3178:
case 2497:
case 597:
case 2078:
case 1699:
case 3724:
case 2338:
case 1866:
case 1404:
case 3473:
case 1856:
case 1170:
case 833:
case 645:
case 814:
case 3946:
case 2883:
case 1722:
case 3077:
case 1486:
case 900:
case 3233:
case 2715:
case 866:
case 3567:
case 3704:
case 614:
case 374:
case 3528:
case 2437:
case 356:
case 2797:
case 2072:
case 3082:
case 758:
case 2407:
case 3148:
case 2260:
case 936:
case 1793:
case 780:
case 553:
case 109:
case 3293:
case 3174:
case 1939:
case 82:
case 4001:
case 2728:
case 3301:
case 3442:
case 2483:
case 3022:
case 3487:
case 3668:
case 1179:
case 1620:
case 3399:
case 2043:
case 1738:
case 3215:
case 2185:
case 978:
case 958:
case 2866:
case 2847:
case 111:
case 2147:
case 1578:
case 630:
case 348:
case 1575:
case 2192:
case 1715:
case 2814:
case 329:
case 2346:
case 1326:
case 3274:
case 3589:
case 2017:
case 1889:
case 2875:
case 1329:
case 54:
case 3212:
case 63:
case 2296:
case 2408:
case 1175:
case 342:
case 410:
case 1576:
case 1388:
case 991:
case 731:
case 196:
case 124:
case 703:
case 1342:
case 2923:
case 2605:
case 2019:
case 1654:
case 2513:
case 2750:
case 2301:
case 878:
case 4022:
case 1585:
case 3622:
case 2079:
case 845:
case 2884:
case 3055:
case 2682:
case 3005:
case 2993:
case 430:
case 2492:
case 3357:
case 1969:
case 142:
case 3925:
case 1457:
case 62:
case 1542:
case 779:
case 1230:
case 1548:
case 3845:
case 3118:
case 4015:
case 3466:
case 500:
case 3745:
case 1378:
case 611:
case 3514:
case 1278:
case 2380:
case 429:
case 1295:
case 3737:
case 2680:
case 2641:
case 2277:
case 2358:
case 232:
case 2886:
case 2793:
case 42:
case 3020:
case 2537:
case 2266:
case 2905:
case 4061:
case 2807:
case 3126:
case 2133:
case 1784:
case 1510:
case 138:
case 2539:
case 2511:
case 3748:
case 1026:
case 1068:
case 626:
case 253:
case 3994:
case 2771:
case 1262:
case 1469:
case 1192:
case 499:
case 223:
case 685:
case 2876:
case 3479:
case 1042:
case 2684:
case 3091:
case 2643:
case 525:
case 2364:
case 1614:
case 386:
case 2848:
case 3598:
case 3805:
case 1549:
case 2076:
case 3541:
case 504:
case 2447:
case 2614:
case 515:
case 3238:
case 1758:
case 4049:
case 3446:
case 488:
case 1648:
case 3121:
case 94:
case 2996:
case 1147:
case 397:
case 3747:
case 2990:
case 456:
case 2783:
case 4084:
case 513:
case 2597:
case 670:
case 3884:
case 1503:
case 736:
case 1701:
case 613:
case 1092:
case 121:
case 1900:
case 933:
case 2298:
case 794:
case 3797:
case 2215:
case 2910:
case 2146:
case 2897:
case 3758:
case 2518:
case 2229:
case 720:
case 1301:
case 73:
case 584:
case 2494:
case 2318:
case 548:
case 1884:
case 3616:
case 2892:
case 719:
case 3840:
case 1586:
case 2842:
case 3409:
case 1037:
case 1757:
case 4020:
case 4053:
case 150:
case 4075:
case 350:
case 3597:
case 3596:
case 2106:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1672635601/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,0,1,1,0,0,1,1,1,1,0,1,0,0,0,1,1,0,0,1,0,0,1,0,0,0,0,1,0,1,0,1,1,0,0,0,1,0,0,0,0,1,0,0,1,0,0,0,1,0,1,0,0,1,0,0,1,1,0,1,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,1,1,1,1,0,0,1,0,0,0,1,0,1,0,0,0,0,1,1,0,1,0,1,0,1,1,1,0,0,1,1,0,1,1,0,0,0,1,0,0,0,1,1,0,0,0,0,0,1,0,0,1,0,0,1,1,1,0,0,0,0,0,1,0,0,1,1,0,0,1,1,0,1,1,0,0,1,1,0,1,0,1,0,0,1,0,1,0,1,0,1,1,1,0,0,1,1,1,1,0,0,0,0,1,0,1,0,1,0,1,1,0,0,1,0,1,1,1,0,0,0,0,0,0,0,1,0,1,0,1,0,0,0,0,0,0,0,0,0,1,0,1,1,1,0,0,1,0,0,0,0,1,0,0,1,1,0,0,0,0,0,0,1,0,0,0,1,1,0,0,1,1,1,1,1,1,0,0,0,1,0,1,1,0,1,1,1,0,1,0,0,1,1,0,1,1,1,1,1,1,0,0,1,1,1,0,0,1,1,0,1,0,1,0,0,0,1,1,0,0,1,0,0,1,1,1,0,0,0,1,1,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,1,1,1,0,0,0,1,0,1,1,1,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,1,0,1,0,0,1,0,0,0,0,0,0,1,1,0,1,0,1,1,1,1,1,1,0,1,0,1,0,1,0,1,1,0,1,0,1,1,0,0,1,1,1,0,1,0,1,1,1,0,0,1,0,1,1,1,0,0,1,1,1,0,0,0,1,1,1,1,0,1,0,1,0,0,1,0,1,1,1,0,0,0,0,0,1,1,1,1,1,0,0,0,0,1,0,0,1,1,0,0,1,1,1,1,1,0,1,0,0,1,1,1,1,1,0,0,0,1,1,0,0,1,0,1,1,0,1,0,0,0,1,0,1,0,0,0,1,0,0,0,0,1,1,1,0,1,0,0,0,0,1,0,0,0,0,1,0,0,1,0,1,1,1,1,0,0,0,0,1,1,1,1,1,1,0,0,0,0,1,1,0,0,1,1,0,0,1,1,0,1,1,1,0,1,1,1,1,0,1,0,0,1,0,1,0,0,0,0,1,1,1,1,1,0,1,0,0,1,1,1,0,0,0,0,0,1,1,0,0,1,1,0,1,1,1,0,0,0,0,0,0,0,1,1,0,1,0,0,0,0,0,1,0,0,1,1,0,0,0,1,1,1,0,0,1,0,0,0,1,0,0,1,1,1,1,0,0,1,0,0,1,1,0,1,0,0,1,1,0,0,0,0,0,0,1,0,1,0,0,0,0,1,0,0,1,0,0,1,0,1,1,0,0,0,0,1,0,1,0,0,1,0,0,1,0,0,0,1,0,1,1,0,0,1,0,1,1,0,0,1,0,0,1,1,0,1,1,1,1,1,1,0,0,0,1,0,1,1,1,0,1,0,1,0,0,1,1,1,1,1,0,0,0,1,1,1,1,1,0,0,0,1,1,0,0,1,1,1,0,0,0,1,0,1,0,0,0,0,0,0,1,0,1,1,0,1,1,0,0,1,0,1,1,0,0,0,0,1,1,1,0,0,0,0,1,1,0,0,1,1,0,0,0,0,0,1,0,0,1,1,1,1,0,0,0,1,0,0,0,1,1,1,1,1,1,0,0,0,1,1,1,1,0,1,1,0,0,0,1,1,0,0,0,1,0,0,1,0,0,0,1,1,1,0,1,0,0,1,1,1,0,0,1,1,0,1,1,0,0,1,0,1,0,1,1,0,1,1,0,0,1,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,0,1,1,0,0,1,0,0,1,1,1,0,0,0,0,1,1,1,1,1,0,1,1,0,1,1,1,0,0,0,1,1,0,1,1,0,1,0,1,1,0,1,0,1,1,1,0,0,0,0,1,1,1,1,1,0,0,0,1,1,1,1,0,1,0,1,0,1,0,0,0,1,1,1,0,0,0,1,0,0,0,0,0,1,0,1,1,1,1,1,1,1,1,1,0,0,1,0,1,1,1,0,0,0,0,1,0,1,0,0,1,0,1,0,0,0,1,0,1,1,1,0,1,1,0,1,1,1,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,1,0,0,1,1,0,1,1,0,0,1,0,1,1,1,0,0,0,0,0,1,1,0,0,1,1,0,1,0,0,1,0,0,1,1,0,1,1,1,0,1,1,0,1,1,0,1,0,1,1,0,1,0,0,1,1,1,1,0,1,1,1,1,1,1,1,0,0,1,0,0,0,0,1,0,0,0,0,0,1,1,0,0,1,1,1,1,0,1,0,1,0,1,1,0,0,1,1,0,1,1,0,1,1,0,1,0,0,0,0,0,0,0,1,0,0,1,0,0,0,1,1,0,0,0,1,1,0,0,1,0,1,1,1,1,0,0,0,1,0,1,0,1,1,1,0,1,0,0,0,1,1,0,0,0,1,0,1,0,1,1,1,1,0,1,1,1,0,1,0,0,1,0,0,1,1,0,0,0,1,1,1,1,0,0,1,0,1,1,0,0,1,1,0,0,1,1,0,1,1,0,0,0,0,0,0,0,1,1,1,0,1,0,1,0,1,0,0,0,1,0,0,0,1,0,1,0,0,1,1,1,1,1,1,1,1,1,0,0,0,1,0,1,1,0,0,1,1,1,1,1,0,0,0,1,0,0,1,0,1,1,0,0,0,1,0,0,1,0,0,1,1,0,1,1,0,0,1,1,0,1,0,1,0,1,1,0,1,1,0,1,0,0,1,0,0,1,0,1,0,0,0,0,1,0,0,1,1,1,1,0,0,0,0,1,0,1,0,0,0,0,0,1,1,0,1,1,1,1,1,0,0,0,1,0,1,1,0,0,0,0,1,1,0,1,0,0,1,0,0,0,1,0,1,1,0,0,0,0,0,1,0,1,1,0,0,1,1,0,1,0,0,0,1,1,1,1,1,0,1,0,0,0,1,1,1,1,1,1,1,0,1,1,0,0,1,1,1,1,1,0,0,1,1,1,0,1,1,0,1,1,0,1,1,1,0,0,0,0,1,1,0,0,1,0,0,1,0,0,0,0,1,1,1,0,1,1,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,1,1,1,0,1,1,1,1,1,1,1,0,1,1,1,1,0,0,0,1,1,1,0,1,1,1,0,0,1,1,1,0,1,0,0,1,0,0,1,0,1,0,0,0,1,1,0,0,0,0,0,0,1,1,0,1,0,0,1,0,0,0,1,1,0,1,1,0,0,1,0,1,1,0,1,0,1,1,0,1,1,0,1,0,0,0,0,1,1,1,0,1,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,0,1,0,1,1,1,0,1,0,1,1,1,0,1,0,0,0,1,1,1,0,0,0,0,0,0,1,1,0,0,0,0,1,0,1,0,0,0,1,0,0,0,0,0,0,1,0,1,0,1,1,1,0,1,1,1,0,1,0,0,0,0,1,0,0,1,1,1,0,1,1,0,1,1,1,0,0,0,1,1,1,1,0,0,1,1,1,1,1,0,1,0,0,0,0,1,1,0,1,1,0,0,1,1,0,0,1,0,0,0,1,1,0,0,0,1,1,0,0,0,0,0,0,0,1,1,0,1,0,1,0,0,1,1,1,1,0,1,1,0,1,0,1,1,0,1,0,1,1,0,0,0,1,1,0,1,0,1,1,1,0,1,1,0,0,0,1,0,0,0,0,1,1,1,0,1,0,0,1,0,0,0,1,0,1,0,0,0,1,0,1,0,0,1,1,0,0,0,0,1,1,0,0,0,1,0,1,0,1,1,0,1,1,1,1,0,1,1,0,1,1,1,0,0,1,1,1,1,1,1,0,0,0,0,1,1,0,1,0,1,1,0,0,0,1,0,1,1,0,0,1,0,1,0,1,1,1,1,0,1,1,1,1,0,1,0,1,0,1,0,0,0,1,0,0,0,0,1,1,1,1,0,1,0,1,1,1,0,1,1,1,0,0,0,1,0,1,1,0,1,0,0,1,1,1,1,1,1,1,0,1,1,1,0,1,1,0,0,0,0,1,0,1,1,0,0,0,0,1,1,1,0,1,0,0,0,1,0,1,0,0,0,0,1,1,1,1,1,0,1,1,1,1,0,1,1,0,1,1,1,0,0,0,1,1,1,0,1,1,1,0,1,1,1,1,0,1,0,1,0,1,0,0,1,1,1,0,0,0,0,0,0,0,1,0,0,1,0,1,0,1,1,0,0,1,1,0,0,0,0,1,0,1,0,0,0,0,0,0,1,0,0,1,0,1,0,1,1,0,0,1,0,1,0,1,0,0,0,0,0,0,0,1,1,0,1,1,1,0,0,1,1,1,0,0,1,0,1,0,0,0,0,1,1,0,0,1,0,0,1,0,0,0,1,1,0,1,1,0,1,0,0,1,1,0,0,1,0,0,1,0,1,1,0,1,1,1,1,0,0,0,0,0,0,0,0,1,1,0,1,0,1,1,0,1,1,0,1,0,1,0,1,0,1,1,0,1,1,0,1,1,0,0,0,1,1,0,0,0,0,0,1,1,0,1,1,1,0,0,0,0,1,0,0,1,1,0,0,0,1,1,0,1,0,0,1,0,0,1,1,0,1,1,1,0,1,1,0,0,0,1,0,1,1,0,0,1,0,1,0,1,0,0,0,0,0,1,1,0,1,0,0,1,1,0,0,1,0,0,0,1,1,0,1,1,0,0,1,1,1,0,0,1,1,0,1,0,1,0,0,0,1,0,1,1,1,0,1,0,1,0,0,1,0,1,1,0,0,1,0,0,0,0,1,1,1,0,1,0,0,1,0,1,1,1,0,1,0,1,0,0,0,0,0,1,1,0,1,0,0,0,1,1,1,0,0,1,1,0,1,0,0,1,0,1,1,1,0,1,1,1,1,0,0,1,0,1,0,0,0,0,1,1,1,0,0,0,1,1,0,0,0,1,0,1,0,0,1,1,1,0,0,1,0,1,0,1,0,0,1,1,1,1,1,0,1,0,0,1,1,0,1,1,1,1,1,0,1,0,1,1,1,1,0,1,1,0,0,1,0,1,0,0,1,1,0,1,1,1,1,1,0,1,0,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,0,0,0,1,0,1,1,1,0,0,1,1,1,1,0,0,1,0,0,0,1,0,0,0,0,0,1,1,1,0,0,0,0,0,1,1,0,0,1,1,0,1,0,0,0,1,0,0,0,0,1,1,1,1,1,1,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,0,1,0,1,0,0,0,0,1,1,1,0,0,0,0,0,0,1,1,0,1,1,1,1,1,1,1,0,0,1,0,0,1,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,1,0,1,0,0,1,0,0,1,0,0,0,1,0,0,0,1,1,1,0,0,1,1,1,1,1,0,0,1,1,0,1,0,0,1,0,1,0,1,0,1,0,0,1,0,0,1,1,0,0,1,0,0,0,1,0,0,1,1,1,1,0,1,1,0,1,0,0,1,1,1,0,0,1,1,0,0,0,0,0,0,0,1,0,0,1,1,0,0,0,1,1,1,1,0,0,0,0,1,0,0,0,0,1,0,0,1,0,1,0,0,1,0,1,0,0,1,0,0,0,1,1,1,1,0,1,1,1,0,1,1,1,1,1,1,1,0,0,1,0,1,1,1,1,0,0,0,0,1,1,1,0,1,1,0,1,0,1,0,0,0,1,1,0,1,1,1,1,1,0,0,0,0,1,0,1,1,0,1,1,0,0,0,0,0,1,1,1,0,0,0,0,0,1,0,0,0,1,1,1,1,0,0,1,1,1,1,0,0,1,1,0,1,1,1,0,1,1,0,0,0,1,0,1,0,0,1,1,1,0,1,0,0,0,1,1,1,1,1,1,0,1,1,0,0,0,1,0,1,1,1,1,1,0,1,1,0,0,0,0,0,1,0,0,0,0,1,0,1,0,1,0,1,0,1,0,1,0,1,1,0,0,1,0,0,1,1,0,0,1,1,0,0,0,0,1,1,1,1,0,0,1,1,0,1,0,1,0,1,0,1,1,1,0,0,0,0,1,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,1,1,0,0,0,0,0,0,0,1,1,0,1,1,1,0,0,0,0,1,0,1,0,1,0,0,0,0,1,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,1,0,1,1,0,1,0,1,0,0,1,1,1,0,1,0,0,0,0,0,1,1,0,0,0,1,1,0,1,1,0,1,0,0,1,1,1,1,1,1,0,0,0,1,0,0,1,0,0,0,1,0,0,0,0,1,0,1,0,0,1,1,0,0,1,0,1,0,1,1,1,0,1,1,1,1,0,0,1,1,0,1,1,0,1,1,0,0,0,0,1,0,0,0,0,0,1,1,1,0,0,0,1,0,1,0,1,1,1,1,0,1,0,0,0,1,0,1,0,1,0,1,1,1,0,0,1,0,0,1,0,0,1,1,1,0,0,0,1,1,0,1,0,1,1,1,0,1,1,0,1,0,1,0,1,1,1,1,0,1,0,1,0,1,1,1,1,1,0,0,1,1,1,0,0,0,1,1,0,0,1,0,0,0,0,1,1,0,0,1,1,0,1,1,0,1,0,0,1,0,0,0,1,0,1,1,0,1,1,1,1,0,0,1,0,1,1,0,1,1,1,1,0,1,0,0,0,1,0,1,1,1,1,1,1,0,1,1,0,1,0,1,0,0,0,0,0,0,1,0,0,1,1,1,1,1,0,1,0,0,1,0,1,0,1,1,1,0,1,0,0,0,0,1,0,1,0,1,0,1,1,1,1,1,1,0,0,0,1,0,0,0,0,1,0,1,1,1,0,1,1,0,1,1,0,1,1,0,0,1,1,0,1,0,1,0,0,1,1,0,1,1,1,0,0,1,1,0,1,0,1,0,0,1,0,0,0,1,0,1,1,0,1,0,1,1,1,1,0,1,1,1,1,0,0,1,1,1,0,0,1,1,1,1,0,1,1,0,1,0,0,1,0,0,1,0,1,0,1,1,1,0,1,0,1,0,1,0,0,0,1,1,0,1,0,1,1,0,1,0,1,1,0,0,0,1,1,1,0,0,0,1,1,1,0,1,1,1,1,0,1,0,0,1,1,0,0,0,0,0,1,1,0,1,0,1,1,1,1,1,1,1,0,1,0,0,0,0,0,1,1,0,1,0,1,1,0,0,1,0,0,0,1,1,1,1,0,1,0,1,1,0,1,0,1,1,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,1,0,1,0,0,1,1,1,0,0,0,0,1,0,0,1,0,1,1,1,0,1,1,0,0,1,0,0,1,1,1,1,1,0,1,0,1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,0,0,0,1,1,0,1,1,1,0,1,0,1,1,0,0,1,1,0,1,0,1,1,1,1,1,0,0,0,1,1,1,1,0,1,0,0,0,1,1,1,0,1,1,1,0,1,0,0,0,0,0,0,1,1,0,0,1,1,1,1,0,1,1,1,1,1,1,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,1,1,0,1,1,1,0,0,0,0,0,0,0,0,1,0,0,1,1,0,1,0,1,0,0,0,1,0,0,0,1,0,0,1,0,1,0,0,0,0,1,1,1,1,1,1,1,1,0,1,1,0,0,0,1,0,1,0,0,0,0,0,0,1,0,1,0,0,0,0,1,0,0,1,1,1,1,1,0,0,1,1,0,1,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,1,1,1,1,1,0,1,1,1,0,0,1,0,1,0,0,0,0,1,0,0,1,0,0,1,1,1,1,1,0,0,0,0,1,0,0,0,1,0,0,1,1,1,1,1,0,1,1,1,0,1,0,1,0,1,1,0,1,0,0,0,0,1,0,1,1,1,0,1,1,0,0,0,1,0,0,1,0,0,1,1,0,0,0,1,1,1,0,0,1,1,0,0,0,1,1,1,1,1,0,0,0,0,0,1,0,0,0,0,0,1,1,0,0,0,1,0,0,0,0,1,1,1,0,1,0,1,0,0,1,0,1,0,0,0,1,1,0,1,0,1,1,0,1,1,0,0,1,0,1,1,0,1,0,1,0,1,0,0,0,1,0,1,0,0,1,0,0,1,0,1,0,1,0,0,1,1,1,1,1,0,0,0,0,1,1,1,0,0,1,0,0,0,0,0,1,1,1,0,0,0,0,1,1,0,1,0,1,1,1,1,0,1,1,0,0,0,1,1,0,0,0,1,1,0,1,1,0,0,0,0,0,1,1,1,0,1,1,0,0,0,1,1,0,1,0,1,1,1,1,1,1,1,0,1,0,1,1,1,1,0,1,1,1,1,1,1,0,0,0,1,0,1,1,1,0,1,0,1,0,0,0,0,0,1,1,0,0,0,1,0,1,1,0,0,1,0,1,1,1,0,0,1,0,1,1,0,0,1,1,0,1,1,1,1,1,1,0,0,1,1,1,1,0,0,1,1,1,0,0,1,1,1,1,1,1,1,1,0,0,1,0,0,1,1,0,1,1,0,1,1,0,1,0,0,0,0,0,1,1,0,1,1,0,0,0,1,0,0,0,0,0,0,1,0,0,0,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,0,0,0,1,0,1,0,0,0,1,1,0,0,0,0,0,1,0,0,1,0,0,0,0,1,0,0,0,1,0,0,0,0,1,1,1,1,0,1,1,0,0,0,1,1,1,0,1,0,1,0,0,1,0,0,1,0,1,];
var gg_b = "1672635601/";

function hitomi_get_image_list() {
  files = galleryinfo["files"];
  // function test(id, files) {
  number_of_frontends = 3;
  subdomain = "a";
  btresult = [];
  stresult = [];
  result = [];
  for (var rr of files) {
    hash = rr["hash"];
    postfix = hash.substr(hash.length - 3);
    subdomainx = subdomain;
    if (rr["haswebp"] == 0 || rr["haswebp"] == null) subdomainx = "b";
    x = parseInt(postfix[2] + postfix[0] + postfix[1], 16);
    if (!isNaN(x)) {
      if (x < 4096) subdomainx = String.fromCharCode(97 + gg_m[x]);
      else subdomainx = String.fromCharCode(97 + 0);
    }
    if (rr["haswebp"] == 0 || rr["haswebp"] == null) {
      result.push(
        `https://${subdomainx}b.hitomi.la/images/${gg_b + gg.s(hash)}/${hash}.${
          rr["name"].split(".").slice(-1)[0]
        }`
      );
    } else if (hash == "")
      result.push(`https://${subdomainx}a.hitomi.la/webp/${rr["name"]}.webp`);
    else if (hash.length < 3)
      result.push(`https://${subdomainx}a.hitomi.la/webp/${hash}.webp`);
    else {
      result.push(
        `https://${subdomainx}a.hitomi.la/webp/${
            gg.b + gg.s(hash)
        }/${hash}.webp`
      );
    }
    if (rr["haswebp"] == 1)
    {
      btresult.push(
        `https://tn.hitomi.la/webpbigtn/${postfix[2]}/${postfix[0]}${postfix[1]}/${hash}.webp`
      );
      stresult.push(
        `https://${subdomainx}tn.hitomi.la/webpsmalltn/${postfix[2]}/${postfix[0]}${postfix[1]}/${hash}.webp`
      );
    }
    // else if (rr["hasavif"] == 1)
    // {
    //   btresult.push(
    //     `https://tn.hitomi.la/avifbigtn/${postfix[2]}/${postfix[0]}${postfix[1]}/${hash}.avif`
    //   );
    //   stresult.push(
    //     `https://${subdomainx}tn.hitomi.la/avifsmallbigtn/${postfix[2]}/${postfix[0]}${postfix[1]}/${hash}.avif`
    //   );
    // }
    else 
    {
      btresult.push(
        `https://tn.hitomi.la/bigtn/${postfix[2]}/${postfix[0]}${postfix[1]}/${hash}.jpg`
      );
      stresult.push(
        `https://${subdomainx}tn.hitomi.la/smalltn/${postfix[2]}/${postfix[0]}${postfix[1]}/${hash}.jpg`
      );
    }
  }
  return JSON.stringify({
    btresult: btresult,
    stresult: stresult,
    result: result,
  });
}

function hitomi_get_header_content(id) {
  return JSON.stringify({
      'referer': `https://hitomi.la/reader/${id}.html`,
      'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
      'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.3',
  });
}
