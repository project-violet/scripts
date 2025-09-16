// This source code is a part of Project Violet.
// Copyright (C) 2021. violet-team. Licensed under the Apache-2.0 License.
//
// Script Name: hitomi_get_image_list.js
// Input:  $id     [int] - Hitomi.la Article Id
// Output: $result [Map] - Image List, Thumbnail List

const domain2 = 'gold-usergeneratedcontent.net';

function create_download_url(id) {
  return "https://ltn.gold-usergeneratedcontent.net/galleries/" + id + ".js";
}

function gg_s(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); }

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
case 3807:
case 1811:
case 928:
case 1966:
case 920:
case 2456:
case 1674:
case 1135:
case 3820:
case 714:
case 1341:
case 2807:
case 659:
case 1238:
case 3456:
case 2887:
case 835:
case 124:
case 1845:
case 2880:
case 3435:
case 1315:
case 2827:
case 2574:
case 2232:
case 537:
case 783:
case 3363:
case 2483:
case 384:
case 231:
case 2859:
case 3170:
case 1123:
case 3245:
case 3726:
case 1477:
case 1832:
case 2245:
case 143:
case 331:
case 857:
case 484:
case 3442:
case 73:
case 3403:
case 1093:
case 1207:
case 3706:
case 3211:
case 1103:
case 2177:
case 3354:
case 3669:
case 2423:
case 2354:
case 3177:
case 2706:
case 3273:
case 62:
case 3838:
case 1470:
case 213:
case 413:
case 2786:
case 730:
case 2271:
case 426:
case 3213:
case 622:
case 1084:
case 2865:
case 3330:
case 738:
case 1004:
case 1194:
case 1555:
case 3865:
case 3271:
case 326:
case 746:
case 2330:
case 1536:
case 2481:
case 1121:
case 2494:
case 2337:
case 628:
case 2401:
case 3655:
case 3494:
case 3946:
case 3481:
case 237:
case 2361:
case 3110:
case 437:
case 2655:
case 1417:
case 3751:
case 1375:
case 3396:
case 849:
case 2468:
case 531:
case 3162:
case 2308:
case 2751:
case 941:
case 2690:
case 2388:
case 3514:
case 3328:
case 2952:
case 1939:
case 1462:
case 1265:
case 186:
case 3697:
case 3952:
case 1343:
case 2328:
case 1614:
case 1382:
case 455:
case 3320:
case 1586:
case 1373:
case 21:
case 41:
case 3626:
case 3579:
case 1506:
case 885:
case 3307:
case 1311:
case 1692:
case 1957:
case 1254:
case 2467:
case 31:
case 1950:
case 2592:
case 2327:
case 3686:
case 3300:
case 1526:
case 1679:
case 2460:
case 3380:
case 1263:
case 1167:
case 1345:
case 4:
case 2380:
case 1909:
case 1774:
case 3215:
case 2118:
case 3359:
case 381:
case 1995:
case 4016:
case 2359:
case 281:
case 3118:
case 3016:
case 2664:
case 3412:
case 1332:
case 510:
case 1112:
case 1564:
case 3653:
case 2653:
case 644:
case 2338:
case 995:
case 3202:
case 3147:
case 51:
case 175:
case 3243:
case 2499:
case 1125:
case 1029:
case 3790:
case 2830:
case 3651:
case 905:
case 3499:
case 1749:
case 2243:
case 2202:
case 2365:
case 3830:
case 788:
case 2282:
case 3178:
case 2916:
case 1095:
case 3222:
case 1089:
case 923:
case 287:
case 487:
case 1185:
case 1009:
case 2425:
case 599:
case 2222:
case 5:
case 3916:
case 3425:
case 2808:
case 2888:
case 2544:
case 534:
case 1934:
case 2896:
case 409:
case 209:
case 1261:
case 127:
case 410:
case 944:
case 695:
case 3808:
case 1619:
case 3896:
case 2736:
case 581:
case 142:
case 1802:
case 717:
case 1371:
case 2828:
case 3828:
case 616:
case 3433:
case 412:
case 3519:
case 1230:
case 1644:
case 2543:
case 1528:
case 1675:
case 1933:
case 3608:
case 1819:
case 3696:
case 561:
case 3765:
case 3502:
case 298:
case 3543:
case 2390:
case 490:
case 2688:
case 3582:
case 1349:
case 615:
case 3628:
case 2397:
case 3575:
case 1508:
case 392:
case 1596:
case 1588:
case 797:
case 1844:
case 1602:
case 3522:
case 953:
case 701:
case 30:
case 1682:
case 3434:
case 1251:
case 492:
case 843:
case 760:
case 157:
case 1561:
case 574:
case 3630:
case 1925:
case 3244:
case 3947:
case 2947:
case 2244:
case 1537:
case 502:
case 367:
case 3661:
case 1999:
case 762:
case 1905:
case 2637:
case 3219:
case 2116:
case 3355:
case 2940:
case 508:
case 267:
case 2661:
case 500:
case 519:
case 906:
case 3116:
case 2219:
case 261:
case 461:
case 2787:
case 3663:
case 2040:
case 4040:
case 1005:
case 1554:
case 2429:
case 3176:
case 1099:
case 1773:
case 1109:
case 2864:
case 1085:
case 3429:
case 1298:
case 3040:
case 1286:
case 361:
case 76:
case 2720:
case 653:
case 1711:
case 1206:
case 3707:
case 2176:
case 1563:
case 3047:
case 50:
case 3780:
case 3292:
case 3654:
case 3700:
case 3369:
case 2489:
case 2853:
case 2727:
case 1129:
case 2495:
case 2654:
case 592:
case 2292:
case 4047:
case 789:
case 1476:
case 1745:
case 3495:
case 3727:
case 2369:
case 3489:
case 2700:
case 2450:
case 49:
case 29:
case 707:
case 1892:
case 302:
case 1374:
case 3515:
case 402:
case 1732:
case 1641:
case 606:
case 3450:
case 3826:
case 791:
case 865:
case 2759:
case 1157:
case 2886:
case 3457:
case 300:
case 2541:
case 1931:
case 2898:
case 1150:
case 308:
case 400:
case 200:
case 2457:
case 567:
case 3806:
case 1879:
case 408:
case 778:
case 3571:
case 356:
case 3730:
case 2962:
case 1849:
case 2730:
case 3513:
case 2571:
case 652:
case 1319:
case 185:
case 3962:
case 3439:
case 1671:
case 2737:
case 1814:
case 772:
case 1968:
case 929:
case 3737:
case 1613:
case 821:
case 2897:
case 277:
case 2761:
case 658:
case 571:
case 1042:
case 95:
case 3665:
case 3796:
case 1901:
case 3708:
case 3351:
case 2351:
case 203:
case 2917:
case 2214:
case 2708:
case 1023:
case 3070:
case 225:
case 425:
case 1921:
case 3249:
case 2146:
case 3728:
case 2493:
case 745:
case 1290:
case 2070:
case 4070:
case 1782:
case 2728:
case 3493:
case 2249:
case 325:
case 1702:
case 3910:
case 2404:
case 629:
case 1538:
case 2484:
case 3364:
case 2948:
case 1923:
case 958:
case 3010:
case 3404:
case 3491:
case 3948:
case 950:
case 3484:
case 556:
case 1632:
case 1983:
case 739:
case 1001:
case 1191:
case 2424:
case 2977:
case 1094:
case 2532:
case 1104:
case 1942:
case 3353:
case 1081:
case 2869:
case 3424:
case 2353:
case 1715:
case 952:
case 3274:
case 3977:
case 1068:
case 2607:
case 827:
case 3326:
case 3763:
case 1166:
case 1580:
case 2687:
case 1611:
case 503:
case 3687:
case 2763:
case 1874:
case 2326:
case 525:
case 848:
case 3600:
case 3573:
case 2466:
case 2511:
case 3386:
case 1956:
case 3754:
case 763:
case 3306:
case 1379:
case 840:
case 2573:
case 836:
case 1645:
case 3627:
case 3062:
case 2680:
case 1587:
case 2306:
case 655:
case 3182:
case 3944:
case 3496:
case 541:
case 182:
case 1026:
case 931:
case 1272:
case 1534:
case 2092:
case 3368:
case 1128:
case 2944:
case 2247:
case 3428:
case 1285:
case 2240:
case 3122:
case 2634:
case 3919:
case 1205:
case 1402:
case 1188:
case 3079:
case 1196:
case 2833:
case 1006:
case 1098:
case 3175:
case 2122:
case 863:
case 2739:
case 1233:
case 1616:
case 740:
case 1137:
case 320:
case 1310:
case 3430:
case 1752:
case 2885:
case 3739:
case 2805:
case 2430:
case 117:
case 420:
case 220:
case 2394:
case 727:
case 2437:
case 2872:
case 2758:
case 3394:
case 894:
case 247:
case 3381:
case 2461:
case 2516:
case 1130:
case 1053:
case 3872:
case 222:
case 422:
case 1317:
case 626:
case 613:
case 22:
case 42:
case 872:
case 2342:
case 3812:
case 32:
case 3383:
case 133:
case 3576:
case 341:
case 74:
case 2812:
case 1953:
case 1589:
case 804:
case 3454:
case 684:
case 2689:
case 111:
case 955:
case 2454:
case 3609:
case 1676:
case 3695:
case 3323:
case 631:
case 3766:
case 3689:
case 1267:
case 3019:
case 2791:
case 2356:
case 2979:
case 2218:
case 2704:
case 520:
case 1441:
case 3650:
case 2115:
case 3218:
case 3867:
case 169:
case 3356:
case 3657:
case 937:
case 3044:
case 2335:
case 259:
case 459:
case 3141:
case 3335:
case 1415:
case 2044:
case 4044:
case 1550:
case 2657:
case 547:
case 3724:
case 359:
case 1997:
case 1652:
case 981:
case 612:
case 216:
case 2171:
case 873:
case 416:
case 3113:
case 1201:
case 934:
case 2914:
case 316:
case 3639:
case 2217:
case 132:
case 2658:
case 3552:
case 146:
case 618:
case 3333:
case 86:
case 1990:
case 2385:
case 3465:
case 1646:
case 2305:
case 2262:
case 1340:
case 3399:
case 2465:
case 3385:
case 1810:
case 1955:
case 3262:
case 2821:
case 91:
case 3305:
case 3894:
case 3881:
case 3372:
case 1268:
case 2325:
case 9:
case 3801:
case 2546:
case 891:
case 3734:
case 3693:
case 1347:
case 3325:
case 1165:
case 523:
case 897:
case 244:
case 183:
case 3459:
case 909:
case 2684:
case 2312:
case 3842:
case 2750:
case 918:
case 3803:
case 2459:
case 344:
case 2883:
case 3604:
case 1138:
case 2803:
case 3691:
case 1877:
case 1036:
case 724:
case 3312:
case 1969:
case 3684:
case 1432:
case 595:
case 2624:
case 1318:
case 3438:
case 3823:
case 3757:
case 114:
case 1870:
case 1504:
case 2132:
case 1055:
case 634:
case 1591:
case 1848:
case 2823:
case 6:
case 3049:
case 405:
case 1127:
case 2729:
case 1223:
case 3145:
case 862:
case 3270:
case 2487:
case 3856:
case 1411:
case 3331:
case 2049:
case 4049:
case 2420:
case 1090:
case 1100:
case 2145:
case 3835:
case 2427:
case 3400:
case 2666:
case 1187:
case 743:
case 2173:
case 860:
case 1097:
case 2360:
case 2974:
case 1203:
case 2709:
case 223:
case 3666:
case 3789:
case 1445:
case 61:
case 3277:
case 2480:
case 1776:
case 608:
case 619:
case 2656:
case 754:
case 1535:
case 2945:
case 882:
case 3656:
case 3357:
case 3866:
case 2174:
case 2973:
case 1718:
case 1204:
case 206:
case 602:
case 3973:
case 2911:
case 2866:
case 674:
case 888:
case 1556:
case 4013:
case 2013:
case 1266:
case 2731:
case 3891:
case 2570:
case 596:
case 3884:
case 990:
case 3548:
case 2804:
case 1169:
case 3683:
case 2548:
case 1523:
case 1065:
case 2884:
case 1938:
case 3603:
case 2309:
case 2760:
case 453:
case 253:
case 3824:
case 3932:
case 992:
case 3469:
case 2395:
case 515:
case 17:
case 1648:
case 2623:
case 1959:
case 2824:
case 353:
case 3760:
case 1542:
case 3395:
case 2577:
case 1503:
case 2469:
case 1316:
case 3436:
case 833:
case 902:
case 3032:
case 2517:
case 667:
case 2621:
case 4032:
case 2032:
case 1155:
case 1594:
case 1846:
case 99:
case 2436:
case 3621:
case 1501:
case 766:
case 3517:
case 2681:
case 919:
case 785:
case 900:
case 1239:
case 908:
case 3893:
case 3252:
case 1038:
case 1965:
case 170:
case 2455:
case 1521:
case 2510:
case 1136:
case 1087:
case 3490:
case 496:
case 3011:
case 3839:
case 1293:
case 4073:
case 2073:
case 2785:
case 2668:
case 3562:
case 2114:
case 2490:
case 2562:
case 3073:
case 3799:
case 2011:
case 4011:
case 3149:
case 2246:
case 2725:
case 3772:
case 690:
case 88:
case 3045:
case 698:
case 3725:
case 315:
case 1414:
case 3334:
case 1000:
case 1190:
case 35:
case 2742:
case 2631:
case 3915:
case 3850:
case 2703:
case 4075:
case 1289:
case 2783:
case 189:
case 3703:
case 1106:
case 3631:
case 1088:
case 3742:
case 25:
case 1560:
case 2667:
case 3783:
case 2022:
case 1198:
case 3075:
case 1008:
case 3082:
case 2366:
case 3002:
case 3192:
case 2660:
case 1567:
case 830:
case 3406:
case 846:
case 671:
case 2486:
case 1126:
case 4082:
case 3723:
case 2406:
case 4043:
case 2043:
case 2304:
case 550:
case 3829:
case 956:
case 3518:
case 2391:
case 3756:
case 1257:
case 2829:
case 3304:
case 2518:
case 2464:
case 1876:
case 2324:
case 2735:
case 3889:
case 329:
case 977:
case 3453:
case 2809:
case 2453:
case 429:
case 1061:
case 2895:
case 3735:
case 2768:
case 1234:
case 1640:
case 1816:
case 3699:
case 3768:
case 1961:
case 197:
case 1525:
case 971:
case 2393:
case 1599:
case 1151:
case 814:
case 3393:
case 1647:
case 1505:
case 1930:
case 3578:
case 1054:
case 3943:
case 2721:
case 3144:
case 3902:
case 1710:
case 250:
case 450:
case 2339:
case 358:
case 1533:
case 964:
case 2144:
case 3721:
case 1928:
case 2982:
case 1419:
case 3339:
case 4041:
case 162:
case 2216:
case 2701:
case 3015:
case 2794:
case 2781:
case 656:
case 3701:
case 3975:
case 168:
case 2119:
case 529:
case 3358:
case 1988:
case 757:
case 160:
case 3781:
case 1444:
case 3794:
case 2834:
case 352:
case 2015:
case 1115:
case 2906:
case 469:
case 624:
case 269:
case 2986:
case 517:
case 2441:
case 2998:
case 3557:
case 369:
case 1356:
case 1867:
case 3906:
case 1218:
case 1979:
case 1650:
case 3441:
case 3986:
case 3212:
case 1141:
case 2926:
case 1044:
case 28:
case 48:
case 1992:
case 159:
case 1724:
case 781:
case 2212:
case 3550:
case 2953:
case 965:
case 2589:
case 1463:
case 233:
case 433:
case 2260:
case 2377:
case 3953:
case 1342:
case 3595:
case 3154:
case 141:
case 582:
case 1576:
case 1383:
case 7:
case 12:
case 799:
case 3348:
case 2163:
case 2267:
case 2370:
case 311:
case 71:
case 1454:
case 2676:
case 3964:
case 211:
case 1689:
case 411:
case 1323:
case 2348:
case 588:
case 1609:
case 0:
case 3752:
case 3878:
case 217:
case 2840:
case 2064:
case 4064:
case 1885:
case 1899:
case 3616:
case 3137:
case 128:
case 2878:
case 712:
case 2752:
case 2233:
case 2616:
case 2951:
case 2317:
case 1825:
case 3847:
case 1461:
case 1516:
case 147:
case 4053:
case 853:
case 924:
case 709:
case 2847:
case 3317:
case 710:
case 1437:
case 1872:
case 1758:
case 718:
case 3130:
case 3746:
case 787:
case 1944:
case 1408:
case 1182:
case 2026:
case 2422:
case 686:
case 2225:
case 3128:
case 282:
case 3534:
case 943:
case 2475:
case 3026:
case 2108:
case 1278:
case 2482:
case 2098:
case 1919:
case 4086:
case 3285:
case 3299:
case 2443:
case 2196:
case 388:
case 4006:
case 665:
case 1833:
case 480:
case 3086:
case 3098:
case 2362:
case 1634:
case 2205:
case 1079:
case 288:
case 3443:
case 488:
case 3402:
case 621:
case 2100:
case 3223:
case 3127:
case 64:
case 2180:
case 2411:
case 2566:
case 858:
case 1049:
case 3473:
case 975:
case 1248:
case 2223:
case 3100:
case 3090:
case 1487:
case 713:
case 1407:
case 3411:
case 3180:
case 1331:
case 1111:
case 3203:
case 2776:
case 731:
case 3107:
case 852:
case 3242:
case 2120:
case 3187:
case 123:
case 1400:
case 33:
case 3120:
case 1173:
case 3776:
case 2203:
case 1709:
case 1277:
case 1360:
case 784:
case 23:
case 43:
case 3445:
case 2283:
case 1666:
case 2036:
case 4036:
case 2877:
case 1842:
case 2969:
case 2524:
case 532:
case 1459:
case 1883:
case 479:
case 279:
case 1684:
case 3969:
case 1312:
case 942:
case 2235:
case 1604:
case 379:
case 483:
case 2591:
case 3256:
case 1757:
case 314:
case 2584:
case 538:
case 936:
case 2504:
case 546:
case 3584:
case 3848:
case 940:
case 214:
case 2256:
case 3159:
case 3591:
case 1624:
case 2955:
case 2810:
case 3646:
case 1465:
case 1262:
case 3810:
case 3593:
case 2340:
case 1399:
case 2646:
case 1801:
case 2347:
case 1546:
case 2069:
case 1881:
case 921:
case 94:
case 3165:
case 2817:
case 1693:
case 3347:
case 53:
case 829:
case 1734:
case 3069:
case 1113:
case 3716:
case 432:
case 3281:
case 3997:
case 3652:
case 2558:
case 583:
case 2716:
case 2201:
case 1074:
case 3558:
case 2652:
case 85:
case 2281:
case 640:
case 430:
case 2539:
case 3221:
case 1949:
case 1552:
case 3862:
case 2221:
case 330:
case 627:
case 514:
case 3990:
case 2471:
case 246:
case 1562:
case 563:
case 2020:
case 3007:
case 345:
case 1839:
case 725:
case 1490:
case 2197:
case 245:
case 1073:
case 4007:
case 1799:
case 1785:
case 3020:
case 1668:
case 4087:
case 2087:
case 1705:
case 196:
case 3027:
case 3662:
case 2568:
case 4000:
case 2000:
case 2190:
case 1858:
case 1772:
case 2747:
case 3000:
case 3414:
case 2662:
case 2027:
case 115:
case 3080:
case 3747:
case 1246:
case 1725:
case 703:
case 2501:
case 304:
case 2059:
case 539:
case 2155:
case 1032:
case 3258:
case 472:
case 841:
case 676:
case 3316:
case 1436:
case 2610:
case 3059:
case 3501:
case 777:
case 3581:
case 372:
case 2258:
case 3155:
case 3594:
case 1893:
case 478:
case 2136:
case 3239:
case 2038:
case 2965:
case 3617:
case 1733:
case 3965:
case 1694:
case 3038:
case 2065:
case 3677:
case 935:
case 1891:
case 2169:
case 3266:
case 463:
case 1767:
case 651:
case 3938:
case 1603:
case 2677:
case 3523:
case 828:
case 363:
case 1329:
case 545:
case 2542:
case 3648:
case 37:
case 2670:
case 2503:
case 1469:
case 394:
case 2959:
case 771:
case 1389:
case 3503:
case 1623:
case 822:
case 3583:
case 3376:
case 294:
case 3474:
case 2980:
case 239:
case 2900:
case 957:
case 1945:
case 339:
case 3980:
case 793:
case 2927:
case 2224:
case 1712:
case 3284:
case 570:
case 3291:
case 2556:
case 3907:
case 3204:
case 3718:
case 1357:
case 106:
case 1071:
case 2284:
case 3920:
case 1635:
case 2907:
case 2419:
case 1041:
case 666:
case 805:
case 1144:
case 2928:
case 3352:
case 150:
case 767:
case 3419:
case 1339:
case 2710:
case 2988:
case 460:
case 260:
case 2996:
case 1834:
case 1922:
case 3996:
case 1781:
case 591:
case 823:
case 954:
case 685:
case 1633:
case 1216:
case 1975:
case 1451:
case 3572:
case 573:
case 70:
case 497:
case 2961:
case 2234:
case 2572:
case 1605:
case 3063:
case 2640:
case 201:
case 401:
case 3525:
case 397:
case 1685:
case 1768:
case 1672:
case 2599:
case 1578:
case 798:
case 3505:
case 3647:
case 1393:
case 56:
case 3585:
case 790:
case 2762:
case 3151:
case 1518:
case 2153:
case 2257:
case 562:
case 1612:
case 700:
case 985:
case 1391:
case 654:
case 719:
case 3954:
case 3257:
case 3030:
case 1453:
case 207:
case 1889:
case 2061:
case 79:
case 129:
case 3618:
case 1895:
case 966:
case 3876:
case 3250:
case 2164:
case 560:
case 702:
case 3512:
case 3061:
case 291:
case 3164:
case 4037:
case 1324:
case 2876:
case 473:
case 816:
case 597:
case 1022:
case 2186:
case 389:
case 1667:
case 2560:
case 1426:
case 3295:
case 4008:
case 2008:
case 3209:
case 1915:
case 1276:
case 1850:
case 4088:
case 3008:
case 3198:
case 3560:
case 289:
case 2289:
case 3088:
case 501:
case 1742:
case 3096:
case 1703:
case 3106:
case 3567:
case 1043:
case 895:
case 1002:
case 2770:
case 1486:
case 2531:
case 1498:
case 3229:
case 3028:
case 1660:
case 2479:
case 46:
case 2748:
case 3531:
case 1366:
case 1857:
case 1388:
case 543:
case 688:
case 2649:
case 365:
case 3375:
case 1751:
case 2597:
case 1690:
case 89:
case 2322:
case 265:
case 465:
case 1468:
case 1514:
case 3322:
case 933:
case 802:
case 2614:
case 3462:
case 911:
case 155:
case 3066:
case 2265:
case 3168:
case 682:
case 2302:
case 3813:
case 1328:
case 486:
case 3590:
case 2066:
case 4066:
case 1549:
case 3382:
case 2462:
case 3614:
case 2939:
case 800:
case 1697:
case 1952:
case 3871:
case 2168:
case 3194:
case 3555:
case 3993:
case 3410:
case 3181:
case 3084:
case 795:
case 3101:
case 861:
case 3091:
case 1117:
case 2181:
case 2993:
case 2555:
case 1421:
case 2194:
case 1271:
case 2091:
case 2101:
case 3719:
case 2084:
case 4084:
case 3024:
case 2417:
case 3121:
case 716:
case 3536:
case 3417:
case 4024:
case 524:
case 617:
case 98:
case 2121:
case 3744:
case 2792:
case 3832:
case 982:
case 3569:
case 1726:
case 1245:
case 1170:
case 443:
case 611:
case 1046:
case 3280:
case 2569:
case 1442:
case 3792:
case 3200:
case 1859:
case 2924:
case 1148:
case 2123:
case 1798:
case 3991:
case 113:
case 3984:
case 1669:
case 2470:
case 980:
case 705:
case 1786:
case 988:
case 3904:
case 3779:
case 3207:
case 633:
case 2183:
case 2984:
case 1838:
case 1423:
case 2448:
case 2779:
case 1273:
case 4093:
case 2103:
case 2238:
case 3135:
case 3674:
case 1887:
case 1764:
case 3966:
case 3811:
case 2341:
case 917:
case 1456:
case 2674:
case 890:
case 3238:
case 2135:
case 3873:
case 3341:
case 2039:
case 4039:
case 1820:
case 898:
case 1232:
case 3845:
case 1827:
case 2315:
case 3156:
case 892:
case 1880:
case 2058:
case 4058:
case 424:
case 669:
case 2156:
case 3259:
case 1435:
case 2845:
case 3934:
case 871:
case 2619:
case 118:
case 3050:
case 1736:
case 983:
case 2261:
case 227:
case 109:
case 110:
case 2875:
case 1888:
case 342:
case 638:
case 747:
case 4050:
case 3619:
case 2934:
case 1808:
case 2822:
case 3261:
case 440:
case 2644:
case 3371:
case 248:
case 1755:
case 3802:
case 2882:
case 3644:
case 340:
case 728:
case 3230:
case 2802:
case 3313:
case 1433:
case 1828:
case 720:
case 2371:
case 2843:
case 436:
case 1790:
case 3029:
case 2478:
case 1243:
case 3125:
case 2228:
case 1365:
case 1405:
case 2440:
case 475:
case 3749:
case 1076:
case 2296:
case 3009:
case 3185:
case 2288:
case 3089:
case 1222:
case 93:
case 2208:
case 1178:
case 3095:
case 3288:
case 4009:
case 1797:
case 2551:
case 4095:
case 2105:
case 3208:
case 1140:
case 187:
case 4089:
case 3553:
case 3989:
case 527:
case 759:
case 181:
case 3909:
case 2989:
case 3332:
case 2553:
case 2774:
case 1118:
case 134:
case 1863:
case 1653:
case 3418:
case 1338:
case 946:
case 3929:
case 3112:
case 2418:
case 2564:
case 2929:
case 3506:
case 1626:
case 2311:
case 2254:
case 1320:
case 2957:
case 2692:
case 3957:
case 3254:
case 2160:
case 3311:
case 2586:
case 1431:
case 741:
case 3679:
case 1:
case 199:
case 1300:
case 1686:
case 2167:
case 3034:
case 2345:
case 2131:
case 2950:
case 1592:
case 1759:
case 2253:
case 249:
case 2157:
case 449:
case 102:
case 2641:
case 174:
case 349:
case 3253:
case 557:
case 1826:
case 3641:
case 972:
case 1515:
case 2892:
case 2967:
case 3033:
case 3150:
case 3931:
case 2615:
case 119:
case 3879:
case 4033:
case 978:
case 2033:
case 855:
case 1806:
case 3264:
case 1886:
case 970:
case 639:
case 1541:
case 576:
case 2931:
case 694:
case 2711:
case 2206:
case 3109:
case 1176:
case 3099:
case 945:
case 3773:
case 3554:
case 1663:
case 3189:
case 1279:
case 4085:
case 2085:
case 161:
case 1787:
case 2005:
case 2195:
case 1429:
case 3129:
case 2226:
case 2745:
case 1700:
case 3912:
case 1292:
case 2072:
case 1780:
case 3025:
case 251:
case 663:
case 1853:
case 2129:
case 1495:
case 4025:
case 2025:
case 2563:
case 1409:
case 1947:
case 3925:
case 1630:
case 2537:
case 3012:
case 3416:
case 831:
case 3972:
case 2925:
case 257:
case 884:
case 2416:
case 1219:
case 3530:
case 2713:
case 3999:
case 604:
case 3985:
case 1661:
case 167:
case 276:
case 2771:
case 813:
case 476:
case 2905:
case 1116:
case 672:
case 1018:
case 1765:
case 335:
case 1608:
case 3134:
case 3528:
case 3349:
case 2031:
case 4031:
case 235:
case 2819:
case 963:
case 3622:
case 2528:
case 3067:
case 1543:
case 2675:
case 1502:
case 2933:
case 3844:
case 3588:
case 2251:
case 192:
case 3596:
case 3508:
case 1628:
case 3251:
case 3682:
case 1434:
case 10:
case 3643:
case 1522:
case 2508:
case 3580:
case 1326:
case 2874:
case 66:
case 3935:
case 3068:
case 3874:
case 171:
case 1687:
case 4068:
case 3527:
case 809:
case 1607:
case 2673:
case 810:
case 1680:
case 1306:
case 3956:
case 1386:
case 689:
case 3520:
case 2956:
case 3587:
case 2520:
case 1627:
case 3645:
case 812:
case 673:
case 1466:
case 2741:
case 3923:
case 3538:
case 1364:
case 1970:
case 706:
case 3021:
case 1491:
case 2124:
case 2021:
case 1404:
case 607:
case 3081:
case 3942:
case 3104:
case 2715:
case 3094:
case 1638:
case 3559:
case 887:
case 3184:
case 1532:
case 1274:
case 566:
case 1977:
case 2094:
case 2104:
case 2942:
case 960:
case 2081:
case 4081:
case 2184:
case 2001:
case 1424:
case 968:
case 2722:
case 715:
case 103:
case 3901:
case 834:
case 3994:
case 1665:
case 2775:
case 973:
case 4083:
case 2981:
case 2003:
case 1077:
case 1836:
case 2297:
case 2193:
case 881:
case 2743:
case 1728:
case 2702:
case 2782:
case 1910:
case 125:
case 1493:
case 4023:
case 3782:
case 2023:
case 2565:
case 3290:
case 3849:
case 285:
case 81:
case 3158:
case 1730:
case 156:
case 3056:
case 3452:
case 2158:
case 3319:
case 2452:
case 4056:
case 1890:
case 1761:
case 3814:
case 554:
case 2613:
case 1897:
case 366:
case 991:
case 3344:
case 2814:
case 4035:
case 1152:
case 907:
case 2968:
case 2139:
case 2671:
case 466:
case 1737:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1758009601/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,0,1,1,0,0,0,0,1,0,0,1,0,1,1,1,1,0,1,1,1,0,0,0,1,0,1,1,0,0,0,0,0,0,1,0,1,0,1,1,1,0,0,0,1,1,0,1,0,0,0,0,1,0,1,1,0,1,1,1,1,0,0,1,0,1,0,1,1,1,0,0,1,0,0,1,0,1,1,0,1,0,1,1,1,0,0,1,0,0,1,0,1,0,0,0,1,1,0,0,1,1,0,0,1,1,0,1,1,0,0,0,1,0,0,0,1,0,0,0,1,1,1,0,0,0,1,0,0,0,1,1,0,0,0,1,1,1,1,1,1,0,0,0,1,1,0,0,1,1,0,1,1,1,1,0,0,0,1,0,0,0,0,1,1,1,1,0,0,0,0,0,1,1,0,0,1,1,1,1,1,0,0,0,1,0,0,0,1,0,1,1,0,1,1,1,0,0,1,0,0,0,1,0,1,1,0,0,1,0,1,0,1,0,0,1,0,0,1,1,0,1,0,0,1,0,1,0,1,1,1,0,1,0,1,0,1,0,1,0,1,1,1,1,0,0,0,0,0,0,0,0,1,0,1,1,1,0,1,0,0,0,1,1,1,0,1,0,1,0,1,1,1,1,1,1,0,0,1,0,1,0,0,1,1,0,1,0,0,0,1,0,1,1,0,1,1,1,0,1,0,1,0,1,0,1,1,1,0,1,1,0,1,1,0,0,0,1,1,1,0,1,1,1,1,0,0,1,1,0,0,0,1,1,1,0,1,1,1,0,0,0,0,1,0,0,1,1,1,0,1,1,0,0,1,1,0,1,0,0,1,0,1,0,1,0,0,0,1,0,1,1,0,1,1,1,1,1,1,0,1,0,1,1,0,1,1,1,0,0,1,1,0,1,0,1,1,0,1,1,0,0,0,1,1,0,1,1,0,0,0,0,0,0,1,1,0,1,1,1,0,1,0,1,0,0,0,1,1,0,0,1,0,0,1,1,0,0,1,1,0,1,1,0,1,1,1,1,1,0,0,1,1,0,1,0,1,1,1,0,0,0,1,0,1,0,0,1,1,0,1,1,0,0,1,0,0,1,0,0,0,1,1,0,0,1,0,0,0,1,0,1,0,1,1,1,0,0,1,1,0,0,0,0,1,1,1,1,0,1,0,1,1,1,0,0,1,0,1,0,0,1,1,0,0,0,1,0,1,0,1,0,0,1,0,1,1,0,0,0,1,0,1,0,1,0,0,0,1,1,0,1,1,1,0,1,0,0,1,1,0,0,0,0,1,1,0,0,1,1,0,0,1,0,0,1,0,1,1,1,1,0,0,0,1,1,1,1,0,1,1,0,0,1,1,0,0,0,1,0,1,1,0,1,0,1,0,0,0,1,1,0,0,0,1,0,0,0,0,0,1,0,0,1,0,1,0,0,0,0,1,0,1,0,0,1,1,1,0,0,0,1,1,1,0,1,1,1,1,1,1,0,0,0,0,0,0,1,0,0,1,1,1,0,1,0,0,0,1,0,1,0,0,0,0,1,0,1,1,1,1,1,0,1,0,0,0,1,0,0,0,1,1,1,0,0,1,1,0,1,0,0,0,0,1,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,1,1,1,0,0,1,0,0,1,0,0,1,1,1,1,1,1,0,0,0,0,1,0,1,0,0,0,1,1,1,1,1,1,0,1,1,0,1,0,0,1,0,0,1,1,0,0,1,1,1,0,0,1,1,1,1,0,0,1,1,0,1,0,0,0,1,0,0,0,0,0,1,0,1,0,1,0,0,0,0,1,0,1,0,0,1,1,1,0,0,1,0,0,0,1,0,1,1,1,1,0,0,0,1,1,1,0,0,0,0,0,1,0,0,0,0,1,1,1,0,0,1,0,1,1,0,1,0,0,1,1,0,0,1,0,1,0,0,1,0,0,0,0,1,0,1,1,1,1,1,0,0,0,1,1,1,1,1,1,1,0,0,1,0,0,1,0,0,1,0,0,0,1,0,0,1,0,0,1,0,1,0,1,1,0,0,0,0,0,1,0,1,1,1,1,1,0,0,0,0,0,1,0,0,1,1,1,0,0,1,0,1,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,1,1,0,1,0,0,0,0,0,0,0,1,0,1,1,0,0,0,0,1,0,1,0,0,0,0,1,0,1,0,0,1,0,0,0,0,1,0,1,1,0,1,0,0,0,1,1,0,1,1,1,1,0,0,0,1,0,0,0,1,0,0,1,1,1,1,1,1,1,1,0,1,1,1,0,0,1,1,0,1,1,0,1,1,0,1,1,1,0,1,0,1,1,0,0,0,0,1,0,1,1,0,1,1,1,0,0,0,1,1,1,1,1,0,1,1,1,0,1,1,0,1,1,0,1,0,0,1,0,0,1,0,1,0,1,1,0,0,1,0,0,0,0,1,1,0,0,0,1,0,0,0,0,1,1,0,0,1,0,1,1,0,1,0,0,0,1,0,0,0,0,1,1,0,1,0,1,0,0,0,0,0,0,1,1,1,1,0,0,0,0,1,0,0,1,1,0,1,1,1,0,1,0,0,0,1,1,0,1,0,1,1,1,1,1,1,1,0,0,0,1,0,0,1,1,0,1,1,0,1,0,1,1,1,0,1,1,0,1,0,0,1,0,0,1,1,0,1,0,1,0,1,1,0,1,0,0,0,0,0,1,1,1,1,1,1,1,1,0,1,0,0,1,1,0,0,1,1,1,1,1,1,0,1,0,0,0,1,1,1,0,0,1,1,1,0,1,0,0,1,0,1,1,0,1,1,0,1,1,0,1,1,1,0,0,0,1,0,0,0,0,1,1,0,0,0,0,1,0,0,0,0,1,1,1,1,1,0,0,1,1,0,0,1,0,0,1,1,1,1,0,1,0,1,1,1,1,1,0,1,1,1,0,0,0,1,1,0,0,0,0,0,0,1,1,0,0,1,0,1,0,0,1,0,0,1,1,1,1,1,0,0,0,0,0,0,1,0,1,0,1,0,1,1,1,1,1,1,0,0,1,1,0,1,1,1,0,0,0,1,1,1,1,0,1,0,0,0,1,1,1,0,1,1,0,0,1,1,0,1,0,0,1,0,1,0,1,1,1,1,1,0,0,1,0,1,0,0,1,0,0,0,1,0,1,1,0,0,1,0,1,0,1,0,1,0,0,1,0,1,1,0,1,0,0,0,0,0,0,0,1,1,1,0,0,1,0,0,1,1,1,1,1,0,1,0,0,1,0,1,1,0,1,0,0,0,1,0,0,1,0,0,0,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,0,0,1,1,0,0,1,0,1,0,1,1,0,1,1,0,0,0,0,0,0,1,0,1,1,1,1,1,0,0,0,1,0,1,1,0,0,0,1,0,0,1,0,1,1,1,0,0,0,0,0,0,0,1,1,0,0,0,1,1,0,1,1,0,0,1,0,1,0,0,0,1,1,1,0,0,0,0,0,1,1,0,1,1,1,1,1,1,1,1,0,1,0,1,0,1,1,1,1,1,0,0,0,0,1,0,0,1,0,1,0,1,1,0,1,1,0,0,0,0,1,0,0,0,1,0,0,0,0,1,0,1,1,0,1,1,1,0,0,1,0,0,0,1,0,1,0,0,0,0,1,1,0,1,0,0,1,1,0,0,0,0,0,1,0,1,0,0,1,1,1,1,1,1,0,0,1,0,1,0,0,0,0,0,1,0,0,1,0,0,0,1,1,0,0,1,0,1,0,0,0,0,1,0,0,1,0,0,0,1,1,0,1,1,0,1,0,0,1,0,1,1,1,0,0,0,0,1,1,0,1,1,0,1,1,1,1,1,0,0,0,1,0,1,0,1,0,0,0,1,0,0,1,1,1,1,0,1,1,0,1,1,1,0,1,0,0,1,1,0,1,0,0,0,1,0,1,1,0,0,1,0,0,1,1,1,0,0,0,1,0,1,1,1,0,0,0,1,1,0,0,0,1,1,0,1,1,1,1,1,1,0,0,0,1,0,0,1,1,1,0,1,0,1,0,0,1,1,0,1,0,1,1,0,0,1,1,1,1,0,0,0,0,1,1,1,0,0,0,1,0,1,0,0,1,1,0,1,0,0,0,1,0,0,0,1,1,0,1,1,1,0,0,0,1,1,1,0,1,1,1,0,1,1,0,1,0,1,0,1,0,0,1,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,1,0,1,0,1,0,1,0,1,1,1,0,1,1,1,0,0,1,1,1,1,0,1,1,1,0,1,0,0,0,1,0,1,1,0,1,0,0,1,0,0,1,1,1,0,0,1,1,0,1,0,0,1,0,1,0,0,1,0,0,1,0,0,0,1,0,1,0,1,1,1,0,0,1,0,0,0,1,1,1,1,0,1,0,1,0,1,1,1,0,1,1,1,1,0,1,0,1,0,1,1,0,1,0,1,0,0,0,1,0,1,0,1,1,0,1,1,0,1,0,1,0,1,1,1,1,0,0,0,0,1,0,0,0,1,1,1,0,0,0,1,1,0,1,0,0,0,1,1,0,0,1,1,1,1,0,1,1,1,1,1,1,1,1,0,0,1,0,1,1,0,0,0,1,1,0,0,1,0,0,1,1,1,1,1,1,1,0,1,1,0,0,1,0,1,1,1,0,0,1,0,1,1,1,0,1,0,0,1,0,0,0,1,1,0,1,1,1,1,1,0,0,0,1,0,0,0,0,0,0,0,1,1,1,1,0,1,0,0,1,1,0,0,1,1,0,1,1,1,1,0,0,0,1,1,1,1,1,1,0,1,0,0,0,0,1,0,1,1,0,0,1,1,0,0,0,1,0,1,0,0,1,0,0,1,1,0,0,1,0,0,1,0,1,1,1,0,1,1,0,0,0,0,0,1,1,1,0,0,0,1,0,0,1,0,1,1,1,0,1,0,1,0,0,0,0,1,0,0,0,0,0,0,1,0,1,1,1,0,0,0,0,1,1,0,1,0,1,1,0,0,0,0,0,1,0,1,0,1,0,0,1,0,0,0,1,0,0,0,1,1,0,1,0,1,1,1,0,1,1,1,1,1,1,1,1,1,0,0,0,0,1,1,1,0,0,1,1,0,1,1,1,0,0,1,1,1,1,0,1,0,0,0,1,0,0,1,0,0,1,1,0,1,0,1,1,1,1,0,1,0,0,0,0,0,1,0,1,1,1,1,0,1,0,0,0,0,0,0,1,1,0,1,0,0,1,1,0,1,0,0,1,0,1,1,0,0,0,0,1,1,0,0,1,1,0,0,0,1,1,1,1,1,0,1,1,0,1,1,1,1,0,1,1,0,1,0,0,1,0,0,0,1,0,1,1,1,0,1,1,0,1,0,1,1,1,1,0,1,1,1,1,0,0,0,0,0,1,0,0,0,0,1,0,1,0,0,1,1,1,1,1,0,0,1,1,0,0,1,0,1,1,1,1,0,1,0,1,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,1,1,1,0,1,1,0,0,0,0,0,0,0,1,0,0,1,0,0,1,1,0,0,0,1,1,1,0,1,0,1,0,0,1,1,1,0,1,0,0,1,1,1,1,0,0,0,1,0,1,1,1,0,1,1,1,0,1,1,0,0,1,1,1,1,0,1,0,1,0,0,0,0,1,0,1,0,1,1,0,1,0,1,0,0,1,0,1,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,1,1,0,1,1,1,1,1,1,0,1,0,1,1,0,1,0,0,1,1,1,1,0,1,0,1,1,1,1,1,1,1,0,1,1,0,1,1,0,0,0,0,1,1,0,1,0,1,0,0,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,0,0,1,1,0,1,0,1,1,0,1,1,0,0,0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,1,0,0,1,0,0,0,0,0,1,1,0,0,1,1,0,1,1,0,0,0,0,1,0,1,1,1,1,1,1,1,0,0,0,0,0,1,0,1,0,0,0,0,1,0,1,0,0,1,1,1,0,0,0,1,1,0,1,0,0,0,0,0,1,1,1,0,0,0,1,0,1,0,0,0,1,0,1,0,0,1,0,0,0,1,1,1,1,1,0,0,0,0,0,0,1,1,1,1,0,1,0,0,1,1,0,0,0,1,1,0,1,0,0,0,1,0,0,0,1,1,1,0,0,1,0,1,1,1,1,1,1,1,0,0,0,0,1,0,0,0,0,1,0,1,0,1,1,0,1,0,1,0,0,0,0,1,1,0,0,0,0,1,1,0,0,1,1,1,1,1,0,1,1,0,1,0,1,0,1,1,1,1,1,0,1,1,1,1,1,0,1,1,1,1,0,0,0,1,1,0,1,1,0,1,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,1,1,1,0,1,1,0,0,0,0,1,0,1,1,1,1,0,0,0,1,1,1,0,1,1,0,1,0,0,1,1,1,1,1,1,0,0,0,0,0,0,1,0,1,0,0,1,1,1,1,0,0,1,0,1,0,0,1,0,0,1,0,0,0,0,1,0,0,0,1,0,1,0,0,1,1,0,1,0,0,0,1,1,1,0,0,1,1,0,1,0,0,0,0,1,0,1,0,1,0,0,1,1,1,0,1,1,0,1,0,1,0,1,0,1,1,1,1,0,0,0,0,0,0,1,1,0,0,1,1,0,0,0,1,1,0,0,0,0,0,0,0,1,0,0,0,1,1,1,0,1,0,1,1,1,0,0,1,0,1,0,0,1,1,1,1,1,0,1,1,0,1,0,0,0,1,1,0,0,0,0,0,1,1,0,1,0,1,1,1,0,0,0,0,1,0,1,0,1,0,0,0,0,1,1,0,0,0,1,0,0,0,0,1,1,0,1,0,0,1,0,0,1,0,0,1,1,0,1,0,1,0,0,0,1,1,0,1,0,0,0,0,1,1,1,0,0,1,0,1,1,1,0,1,1,0,0,1,0,1,0,0,0,1,1,0,0,0,1,0,0,1,1,0,1,0,0,1,1,0,1,0,1,1,1,1,0,0,0,0,1,0,0,0,1,0,0,1,0,1,0,1,1,0,1,0,1,1,1,0,1,0,1,0,0,0,1,1,0,0,0,1,0,0,0,1,0,1,1,0,0,1,0,0,0,1,1,1,1,1,0,0,1,1,1,1,1,1,1,0,0,1,1,0,0,0,0,1,1,1,0,0,0,0,0,0,1,0,0,0,0,1,0,0,1,0,1,0,1,1,1,0,0,1,0,0,1,1,0,1,1,0,0,1,1,0,0,1,1,0,1,0,0,0,1,1,0,1,1,1,0,0,1,1,1,0,0,0,0,1,1,1,0,0,0,1,1,0,0,1,0,0,1,0,0,1,0,0,1,0,1,0,0,0,0,0,0,1,1,1,0,1,0,1,1,0,1,1,0,0,0,1,0,0,0,0,0,0,0,0,0,1,1,1,0,0,1,1,1,0,0,1,0,0,1,1,0,0,1,1,1,0,0,0,0,1,0,0,1,1,1,1,1,1,0,0,0,0,1,1,0,0,1,0,0,0,1,0,1,1,1,0,0,0,1,0,1,0,0,0,0,1,1,1,1,0,0,1,1,0,0,0,1,1,0,0,0,0,1,0,0,1,0,0,0,1,0,1,1,1,1,0,1,0,0,0,1,0,0,1,0,1,1,0,1,1,0,1,1,1,0,1,1,1,0,0,1,1,1,1,1,1,0,1,1,0,1,1,1,1,0,0,0,1,0,0,0,0,1,1,0,1,0,0,0,1,0,0,1,0,1,1,1,0,0,0,0,1,0,0,0,0,1,0,0,1,0,1,0,0,1,0,0,1,1,0,1,0,1,0,1,1,1,1,0,1,1,1,1,0,1,0,1,0,0,0,0,1,0,0,0,0,1,0,1,1,1,1,0,1,0,1,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,1,0,0,1,0,0,1,0,0,0,0,1,1,1,0,1,1,0,0,1,1,1,0,0,1,1,1,1,0,1,0,0,0,0,1,0,0,1,1,1,0,0,0,1,0,0,1,1,1,1,1,1,1,0,1,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,1,1,0,0,0,1,0,0,1,1,0,1,1,1,1,0,1,1,0,1,0,1,1,0,0,0,1,0,0,1,0,1,0,1,0,1,0,0,0,1,0,0,0,1,0,1,1,0,0,0,1,1,1,1,1,1,1,0,1,0,0,1,0,1,0,0,0,0,0,0,1,0,1,1,1,0,0,1,0,1,0,1,1,0,1,0,1,0,0,1,0,1,0,0,1,0,1,0,0,1,1,0,1,1,0,1,0,0,1,0,1,1,1,0,0,1,1,0,1,1,0,0,0,0,0,1,1,1,1,1,0,0,1,0,1,0,1,0,1,1,0,1,0,0,0,1,1,0,0,0,1,0,0,0,0,0,1,1,1,1,1,0,1,1,0,0,1,0,1,0,0,0,1,0,1,1,0,1,1,0,0,1,1,0,1,0,0,1,0,0,0,0,1,1,1,1,1,0,1,1,1,1,1,0,1,1,0,0,0,1,1,1,0,0,0,0,1,0,1,0,0,1,0,1,1,0,1,1,1,1,0,1,0,1,0,0,1,0,1,1,1,1,0,0,1,0,1,0,0,1,0,0,1,0,1,1,0,0,1,1,0,0,1,1,0,1,0,1,1,1,0,1,0,0,1,0,0,1,1,0,1,1,1,0,0,0,1,0,0,0,1,1,1,0,0,0,1,0,0,1,1,1,1,0,1,0,0,0,1,1,0,1,1,0,0,1,0,1,0,1,1,0,1,1,1,0,0,0,1,1,0,0,0,1,0,0,1,0,0,1,0,0,1,1,1,1,1,0,0,0,0,1,0,1,0,1,1,0,1,1,1,1,1,1,0,0,0,1,1,1,1,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,1,1,0,1,0,0,1,1,0,1,1,0,1,0,1,1,1,1,1,0,1,0,1,0,1,0,1,1,0,1,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,0,1,0,];
var gg_b = "1758009601/";

function subdomain_from_url(url, base, dir) {
        var retval = '';
        if (!base) {
                if (dir === 'webp') {
                        retval = 'w';
                } else if (dir === 'avif') {
                        retval = 'a';
                }
        }
        
        var b = 16;
        
        var r = /\/[0-9a-f]{61}([0-9a-f]{2})([0-9a-f])/;
        var m = r.exec(url);
        if (!m) {
                return retval;
        }
        
        var g = parseInt(m[2]+m[1], b);
        if (!isNaN(g)) {
                if (base) {
                        retval = String.fromCharCode(97 + gg_m[g]) + base;
                } else {
                        retval = retval + (1+gg_m[g]);
                }
        }
        
        return retval;
}


function url_from_url(url, base, dir) {
        return url.replace(/\/\/..?\.(?:gold-usergeneratedcontent\.net|hitomi\.la)\//, '//'+subdomain_from_url(url, base, dir)+'.'+domain2+'/');
}

function full_path_from_hash(hash) {
        return gg_b+gg_s(hash)+'/'+hash;
}


function real_full_path_from_hash(hash) {
        return hash.replace(/^.*(..)(.)$/, '$2/$1/'+hash);
}

function url_from_hash(_galleryid, image, dir, ext) {
        ext = ext || dir || image.name.split('.').pop();
        if (dir === 'webp' || dir === 'avif') {
                dir = '';
        } else {
                dir += '/';
        }
        
        return 'https://a.'+domain2+'/'+dir+full_path_from_hash(image.hash)+'.'+ext;
}

function url_from_url_from_hash(_galleryid, image, dir, ext, base) {
        if ('tn' === base) {
                return url_from_url('https://a.'+domain2+'/'+dir+'/'+real_full_path_from_hash(image.hash)+'.'+ext, base);
        }
        return url_from_url(url_from_hash(_galleryid, image, dir, ext), base, dir);
}


function hitomi_get_image_list() {
  files = galleryinfo["files"];
  dir = "webp";
  type = "webp";
  base = "webp";
  result = [];
  btresult = [];
  stresult = [];
  for (var file of files) {
    result.push(url_from_url(url_from_hash(0, file, dir), undefined, dir));
    btresult.push(url_from_url_from_hash(0, file, 'webpbigtn', 'webp', 'tn'));
    stresult.push(url_from_url_from_hash(0, file, type+'smalltn', type, 'tn'));
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
