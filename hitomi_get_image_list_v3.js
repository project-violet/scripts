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
var o = 0;
switch (g) {
case 2601:
case 809:
case 763:
case 3715:
case 931:
case 1598:
case 3131:
case 2794:
case 3920:
case 1361:
case 3750:
case 1448:
case 67:
case 1801:
case 1102:
case 2232:
case 2953:
case 10:
case 3227:
case 864:
case 782:
case 1421:
case 2637:
case 1709:
case 2407:
case 912:
case 2908:
case 920:
case 422:
case 951:
case 1398:
case 1234:
case 1199:
case 3845:
case 390:
case 1406:
case 3824:
case 3351:
case 1014:
case 1826:
case 3062:
case 3893:
case 2585:
case 2765:
case 2104:
case 2224:
case 3775:
case 3634:
case 425:
case 2045:
case 370:
case 1981:
case 1843:
case 915:
case 1185:
case 3742:
case 3036:
case 2890:
case 2272:
case 3667:
case 3854:
case 1690:
case 3262:
case 4069:
case 895:
case 2643:
case 3480:
case 3171:
case 3348:
case 2695:
case 3216:
case 3461:
case 1992:
case 641:
case 1040:
case 2656:
case 1034:
case 2599:
case 2161:
case 2862:
case 2180:
case 2093:
case 2254:
case 3149:
case 2302:
case 616:
case 1688:
case 2664:
case 2857:
case 761:
case 3915:
case 1713:
case 3521:
case 1304:
case 3735:
case 1252:
case 3276:
case 2994:
case 933:
case 3027:
case 1864:
case 3812:
case 2746:
case 2032:
case 3652:
case 249:
case 1022:
case 1274:
case 3548:
case 3257:
case 3306:
case 785:
case 2399:
case 319:
case 466:
case 2617:
case 848:
case 2502:
case 1397:
case 684:
case 95:
case 1751:
case 1550:
case 3153:
case 3800:
case 1619:
case 2907:
case 2453:
case 1068:
case 1125:
case 2819:
case 878:
case 856:
case 1515:
case 2135:
case 677:
case 2596:
case 1948:
case 3435:
case 3509:
case 2446:
case 3003:
case 2555:
case 3420:
case 1597:
case 2749:
case 123:
case 1163:
case 3560:
case 93:
case 3279:
case 2828:
case 3780:
case 1473:
case 382:
case 880:
case 1447:
case 2269:
case 693:
case 501:
case 3904:
case 836:
case 2771:
case 1628:
case 1575:
case 1906:
case 2396:
case 2879:
case 3108:
case 101:
case 1679:
case 3309:
case 363:
case 2142:
case 2408:
case 3592:
case 222:
case 1320:
case 202:
case 1282:
case 3691:
case 673:
case 2175:
case 2465:
case 1687:
case 2858:
case 4093:
case 3704:
case 2887:
case 1542:
case 2949:
case 385:
case 845:
case 1818:
case 1706:
case 1481:
case 3682:
case 1291:
case 3573:
case 1170:
case 1460:
case 3079:
case 2344:
case 3497:
case 3123:
case 2839:
case 3884:
case 3019:
case 1409:
case 3513:
case 266:
case 898:
case 1535:
case 1721:
case 1342:
case 299:
case 1878:
case 2707:
case 130:
case 1155:
case 2629:
case 2363:
case 1433:
case 2494:
case 3239:
case 1268:
case 586:
case 2150:
case 770:
case 2731:
case 3373:
case 3450:
case 2544:
case 2115:
case 1748:
case 64:
case 1253:
case 1094:
case 3764:
case 3459:
case 2387:
case 1578:
case 2635:
case 3244:
case 3901:
case 178:
case 2159:
case 3105:
case 2620:
case 807:
case 3225:
case 1644:
case 2752:
case 27:
case 3055:
case 959:
case 556:
case 608:
case 477:
case 578:
case 2825:
case 1119:
case 3717:
case 1766:
case 4051:
case 738:
case 3096:
case 3937:
case 2339:
case 260:
case 2642:
case 2558:
case 2587:
case 243:
case 3608:
case 1141:
case 471:
case 2767:
case 1378:
case 493:
case 2273:
case 355:
case 180:
case 580:
case 1993:
case 3926:
case 1518:
case 939:
case 2714:
case 2940:
case 3847:
case 2092:
case 3756:
case 3873:
case 1772:
case 758:
case 1897:
case 473:
case 241:
case 491:
case 2967:
case 1745:
case 1670:
case 2118:
case 4006:
case 3300:
case 850:
case 3418:
case 2319:
case 2697:
case 1265:
case 311:
case 1954:
case 821:
case 545:
case 1875:
case 145:
case 2073:
case 2281:
case 1158:
case 3665:
case 796:
case 1972:
case 803:
case 1187:
case 2541:
case 2740:
case 2914:
case 1538:
case 3270:
case 3191:
case 3789:
case 2734:
case 4048:
case 198:
case 3701:
case 654:
case 98:
case 3429:
case 2615:
case 2328:
case 1223:
case 3500:
case 3694:
case 649:
case 628:
case 3964:
case 1046:
case 3255:
case 2519:
case 2209:
case 2186:
case 1815:
case 968:
case 1655:
case 3168:
case 2722:
case 2896:
case 3737:
case 2379:
case 2178:
case 1559:
case 1696:
case 3809:
case 1610:
case 2341:
case 2952:
case 44:
case 1484:
case 598:
case 3623:
case 3369:
case 2468:
case 1053:
case 247:
case 2316:
case 2248:
case 2390:
case 2422:
case 3202:
case 3821:
case 2137:
case 3122:
case 277:
case 3607:
case 2588:
case 1564:
case 3512:
case 1377:
case 1784:
case 3372:
case 1517:
case 3848:
case 1602:
case 164:
case 80:
case 1207:
case 3631:
case 2905:
case 284:
case 906:
case 1395:
case 4033:
case 2802:
case 3134:
case 175:
case 2126:
case 2206:
case 1049:
case 2590:
case 2604:
case 622:
case 1283:
case 2388:
case 983:
case 3312:
case 1577:
case 271:
case 592:
case 1699:
case 1556:
case 1969:
case 3718:
case 3938:
case 2782:
case 575:
case 3085:
case 3649:
case 3285:
case 2156:
case 981:
case 4047:
case 2414:
case 2327:
case 3332:
case 4073:
case 717:
case 3114:
case 2991:
case 2195:
case 1880:
case 3671:
case 2982:
case 3738:
case 3099:
case 1589:
case 3918:
case 1769:
case 3593:
case 602:
case 1685:
case 273:
case 2006:
case 3443:
case 2021:
case 447:
case 1898:
case 529:
case 926:
case 2527:
case 24:
case 3532:
case 1007:
case 82:
case 2698:
case 1700:
case 1501:
case 396:
case 1466:
case 974:
case 1412:
case 304:
case 1389:
case 752:
case 1326:
case 4013:
case 3174:
case 2251:
case 3929:
case 2474:
case 1031:
case 666:
case 681:
case 1332:
case 415:
case 2462:
case 372:
case 2871:
case 2958:
case 925:
case 3880:
case 2987:
case 3301:
case 453:
case 395:
case 1456:
case 1545:
case 1114:
case 3116:
case 2741:
case 3271:
case 1593:
case 3083:
case 1099:
case 3589:
case 2534:
case 1918:
case 3769:
case 1443:
case 798:
case 3249:
case 3337:
case 2322:
case 665:
case 1532:
case 3984:
case 626:
case 2651:
case 2166:
case 3466:
case 1851:
case 1978:
case 11:
case 3176:
case 1345:
case 51:
case 4035:
case 999:
case 86:
case 4020:
case 3326:
case 3412:
case 2340:
case 1611:
case 104:
case 596:
case 569:
case 3188:
case 2457:
case 2811:
case 819:
case 1929:
case 3537:
case 2522:
case 687:
case 329:
case 309:
case 694:
case 1437:
case 1778:
case 2367:
case 2574:
case 3231:
case 2807:
case 3564:
case 1512:
case 3784:
case 2098:
case 1821:
case 1354:
case 4050:
case 3207:
case 2831:
case 2132:
case 364:
case 524:
case 1848:
case 1786:
case 1566:
case 3517:
case 736:
case 3395:
case 2648:
case 2552:
case 457:
case 606:
case 2314:
case 1631:
case 2427:
case 3432:
case 2567:
case 2374:
case 2787:
case 4075:
case 3543:
case 1134:
case 375:
case 890:
case 1489:
case 1299:
case 2758:
case 1554:
case 3699:
case 3445:
case 2979:
case 778:
case 756:
case 1085:
case 905:
case 3136:
case 2352:
case 2204:
case 437:
case 538:
case 2514:
case 2145:
case 2606:
case 1718:
case 2275:
case 200:
case 1943:
case 729:
case 1860:
case 2042:
case 2736:
case 2990:
case 3265:
case 111:
case 885:
case 1418:
case 1977:
case 152:
case 2487:
case 2297:
case 345:
case 1956:
case 511:
case 1270:
case 1569:
case 1892:
case 215:
case 2865:
case 3793:
case 3850:
case 954:
case 1429:
case 2633:
case 2035:
case 1833:
case 867:
case 2894:
case 2988:
case 2403:
case 3046:
case 1255:
case 928:
case 949:
case 546:
case 3912:
case 1030:
case 233:
case 3966:
case 1478:
case 1044:
case 2823:
case 668:
case 117:
case 1168:
case 1623:
case 3053:
case 2439:
case 3294:
case 3338:
case 2976:
case 1809:
case 3610:
case 2846:
case 3094:
case 3712:
case 3932:
case 2788:
case 2568:
case 257:
case 2391:
case 1105:
case 2050:
case 3578:
case 356:
case 2613:
case 659:
case 2776:
case 3318:
case 792:
case 2419:
case 908:
case 3246:
case 535:
case 2235:
case 1010:
case 644:
case 1937:
case 1717:
case 3529:
case 3023:
case 1653:
case 3400:
case 3754:
case 43:
case 1438:
case 3469:
case 2368:
case 237:
case 380:
case 3945:
case 882:
case 2591:
case 2169:
case 3378:
case 2936:
case 2790:
case 3924:
case 2479:
case 3842:
case 3141:
case 2716:
case 639:
case 342:
case 2582:
case 1926:
case 3518:
case 1989:
case 555:
case 3128:
case 2242:
case 3663:
case 3329:
case 2428:
case 4080:
case 2647:
case 4061:
case 1873:
case 513:
case 1704:
case 1313:
case 2508:
case 2346:
case 991:
case 2218:
case 3320:
case 4026:
case 973:
case 1691:
case 3492:
case 852:
case 1961:
case 2891:
case 185:
case 811:
case 1028:
case 321:
case 1165:
case 1980:
case 2353:
case 2799:
case 2882:
case 2038:
case 2160:
case 1287:
case 281:
case 3460:
case 1079:
case 3481:
case 3291:
case 3706:
case 3535:
case 3721:
case 3196:
case 2308:
case 2546:
case 1998:
case 1203:
case 3520:
case 2868:
case 287:
case 330:
case 3639:
case 1668:
case 2286:
case 4037:
case 2229:
case 3342:
case 2410:
case 3268:
case 1347:
case 817:
case 274:
case 1415:
case 567:
case 2133:
case 4001:
case 2278:
case 3886:
case 997:
case 226:
case 1450:
case 3603:
case 3619:
case 1381:
case 1153:
case 984:
case 3751:
case 2444:
case 3397:
case 65:
case 3144:
case 3130:
case 835:
case 2594:
case 2600:
case 1039:
case 3068:
case 977:
case 2029:
case 3948:
case 2523:
case 294:
case 2805:
case 444:
case 1219:
case 1003:
case 1509:
case 2365:
case 3859:
case 563:
case 262:
case 1581:
case 1761:
case 2147:
case 3350:
case 4056:
case 3473:
case 3163:
case 1560:
case 813:
case 3597:
case 1087:
case 2463:
case 3628:
case 3315:
case 1241:
case 4095:
case 2394:
case 993:
case 70:
case 182:
case 2173:
case 3447:
case 1442:
case 283:
case 1108:
case 3641:
case 582:
case 2669:
case 2323:
case 4043:
case 3575:
case 1869:
case 1592:
case 2018:
case 4077:
case 2785:
case 3679:
case 1997:
case 615:
case 3185:
case 481:
case 2654:
case 1742:
case 170:
case 3843:
case 2307:
case 2256:
case 4038:
case 1321:
case 3690:
case 1667:
case 3616:
case 2485:
case 1461:
case 3773:
case 2243:
case 730:
case 1216:
case 1872:
case 1290:
case 1149:
case 2672:
case 2763:
case 465:
case 3747:
case 2089:
case 3992:
case 3040:
case 426:
case 188:
case 2001:
case 2612:
case 916:
case 519:
case 3688:
case 32:
case 3864:
case 474:
case 1276:
case 1521:
case 3304:
case 1735:
case 3933:
case 3252:
case 3713:
case 56:
case 1674:
case 2531:
case 2725:
case 750:
case 1548:
case 2910:
case 2744:
case 2037:
case 3022:
case 3451:
case 119:
case 2852:
case 3909:
case 1288:
case 588:
case 28:
case 2064:
case 631:
case 1832:
case 1920:
case 244:
case 1715:
case 3913:
case 876:
case 2148:
case 1935:
case 3733:
case 858:
case 3380:
case 259:
case 4029:
case 97:
case 701:
case 3102:
case 3074:
case 3627:
case 314:
case 1057:
case 3361:
case 1622:
case 1107:
case 1076:
case 2755:
case 30:
case 1227:
case 2511:
case 2710:
case 2944:
case 723:
case 3837:
case 2796:
case 2822:
case 657:
case 406:
case 2106:
case 651:
case 4018:
case 2770:
case 2226:
case 3398:
case 2289:
case 3234:
case 612:
case 838:
case 1090:
case 239:
case 1016:
case 1824:
case 2549:
case 2043:
case 3406:
case 3199:
case 3561:
case 2095:
case 1404:
case 590:
case 3792:
case 3889:
case 2834:
case 3014:
case 3826:
case 943:
case 1634:
case 462:
case 3973:
case 2693:
case 960:
case 3857:
case 3411:
case 725:
case 288:
case 1217:
case 3266:
case 1001:
case 1874:
case 168:
case 2915:
case 2674:
case 889:
case 2027:
case 3032:
case 646:
case 2720:
case 2276:
case 3994:
case 2548:
case 1996:
case 818:
case 1730:
case 1910:
case 1744:
case 1037:
case 349:
case 568:
case 467:
case 3198:
case 2306:
case 1955:
case 998:
case 2288:
case 702:
case 4019:
case 1264:
case 354:
case 3212:
case 1151:
case 3677:
case 270:
case 3045:
case 3890:
case 2997:
case 3024:
case 1654:
case 2321:
case 461:
case 2667:
case 4041:
case 945:
case 3708:
case 1485:
case 2854:
case 1970:
case 2262:
case 2348:
case 4028:
case 2872:
case 2290:
case 485:
case 2975:
case 1331:
case 2506:
case 3656:
case 3599:
case 1089:
case 3862:
case 1026:
case 1814:
case 1277:
case 334:
case 3093:
case 3471:
case 1763:
case 766:
case 3908:
case 3483:
case 1624:
case 1077:
case 1226:
case 1499:
case 1289:
case 1645:
case 1043:
case 2845:
case 139:
case 2183:
case 2942:
case 2016:
case 2824:
case 942:
case 2797:
case 539:
case 482:
case 936:
case 1840:
case 3765:
case 2404:
case 2893:
case 655:
case 4058:
case 1693:
case 779:
case 2634:
case 3245:
case 3626:
case 1311:
case 2640:
case 2715:
case 1371:
case 3601:
case 1148:
case 2935:
case 1402:
case 3794:
case 4003:
case 144:
case 2832:
case 3431:
case 1632:
case 2057:
case 2750:
case 308:
case 1237:
case 2551:
case 559:
case 2107:
case 1755:
case 978:
case 3953:
case 2622:
case 1944:
case 544:
case 1201:
case 1121:
case 1822:
case 1017:
case 1925:
case 3723:
case 1546:
case 929:
case 2203:
case 1455:
case 526:
case 1868:
case 419:
case 2513:
case 1286:
case 1684:
case 3000:
case 267:
case 3629:
case 3686:
case 833:
case 1059:
case 1553:
case 2347:
case 3494:
case 3803:
case 2239:
case 696:
case 3284:
case 3911:
case 1133:
case 3544:
case 587:
case 3175:
case 302:
case 2691:
case 2704:
case 3465:
case 3971:
case 1508:
case 2028:
case 2980:
case 2475:
case 2961:
case 285:
case 1192:
case 3197:
case 261:
case 3563:
case 995:
case 1985:
case 2258:
case 1181:
case 3069:
case 1799:
case 1038:
case 2682:
case 3618:
case 3325:
case 470:
case 2497:
case 181:
case 3344:
case 2079:
case 2087:
case 837:
case 1147:
case 305:
case 583:
case 4062:
case 3269:
case 3771:
case 2241:
case 2333:
case 2904:
case 490:
case 1323:
case 240:
case 183:
case 2228:
case 992:
case 3396:
case 708:
case 3879:
case 3142:
case 263:
case 3408:
case 820:
case 310:
case 812:
case 3355:
case 2360:
case 1078:
case 1444:
case 379:
case 1430:
case 857:
case 2153:
case 3084:
case 1594:
case 1600:
case 2039:
case 2533:
case 2605:
case 3931:
case 3200:
case 1365:
case 1902:
case 2435:
case 2420:
case 194:
case 658:
case 1805:
case 2392:
case 676:
case 2003:
case 3974:
case 887:
case 404:
case 3519:
case 1727:
case 1020:
case 232:
case 3650:
case 3186:
case 2833:
case 4002:
case 3209:
case 3013:
case 1823:
case 217:
case 874:
case 1184:
case 133:
case 496:
case 1609:
case 3810:
case 3722:
case 2737:
case 3896:
case 2044:
case 92:
case 3952:
case 3233:
case 1215:
case 3178:
case 2369:
case 39:
case 1505:
case 3468:
case 347:
case 3528:
case 3967:
case 1916:
case 515:
case 1736:
case 341:
case 1275:
case 3118:
case 3319:
case 3292:
case 252:
case 3870:
case 3482:
case 211:
case 3281:
case 2665:
case 3579:
case 1865:
case 500:
case 670:
case 881:
case 1458:
case 2995:
case 2270:
case 2726:
case 2191:
case 2569:
case 3047:
case 3734:
case 3914:
case 3740:
case 3675:
case 784:
case 551:
case 1368:
case 512:
case 213:
case 3642:
case 520:
case 1808:
case 3060:
case 1790:
case 1479:
case 1097:
case 3587:
case 343:
case 3767:
case 2743:
case 1591:
case 1169:
case 3273:
case 883:
case 3940:
case 1673:
case 777:
case 2989:
case 2873:
case 2756:
case 1075:
case 151:
case 1428:
case 3539:
case 531:
case 1788:
case 1927:
case 2459:
case 2813:
case 3635:
case 3387:
case 2230:
case 771:
case 2105:
case 3620:
case 3213:
case 3009:
case 1853:
case 1220:
case 1100:
case 3503:
case 424:
case 894:
case 3922:
case 2937:
case 2717:
case 557:
case 2096:
case 269:
case 397:
case 3968:
case 3527:
case 1939:
case 4025:
case 21:
case 4044:
case 2851:
case 927:
case 296:
case 2978:
case 4030:
case 3336:
case 1298:
case 3705:
case 2464:
case 2002:
case 2174:
case 3048:
case 2929:
case 1522:
case 1112:
case 3164:
case 1457:
case 1004:
case 3680:
case 1172:
case 4063:
case 2495:
case 1958:
case 2332:
case 3661:
case 3414:
case 661:
case 2545:
case 1728:
case 3195:
case 921:
case 2738:
case 3143:
case 2167:
case 2593:
case 3467:
case 1154:
case 373:
case 1490:
case 1779:
case 1322:
case 1280:
case 3006:
case 3177:
case 2443:
case 663:
case 2140:
case 1061:
case 3791:
case 3126:
case 3590:
case 1080:
case 1787:
case 53:
case 640:
case 839:
case 3440:
case 901:
case 3434:
case 371:
case 1436:
case 2683:
case 393:
case 455:
case 2806:
case 2938:
case 4070:
case 3376:
case 923:
case 1145:
case 13:
case 2085:
case 1124:
case 413:
case 1352:
case 1941:
case 1807:
case 258:
case 3390:
case 3051:
case 276:
case 3316:
case 1367:
case 3248:
case 1574:
case 3137:
case 2122:
case 859:
case 2354:
case 224:
case 2512:
case 3768:
case 2607:
case 377:
case 1919:
case 1098:
case 907:
case 2401:
case 2729:
case 435:
case 3576:
case 3362:
case 1314:
case 2631:
case 1427:
case 3905:
case 15:
case 384:
case 2959:
case 1648:
case 3802:
case 1552:
case 731:
case 3928:
case 2049:
case 3193:
case 3080:
case 275:
case 963:
case 1126:
case 1357:
case 2543:
case 442:
case 1388:
case 2364:
case 571:
case 292:
case 601:
case 4065:
case 2283:
case 2071:
case 2445:
case 2317:
case 3979:
case 2424:
case 3436:
case 3883:
case 3941:
case 3352:
case 33:
case 623:
case 757:
case 1376:
case 1782:
case 3145:
case 3514:
case 751:
case 3367:
case 584:
case 4:
case 3621:
case 712:
case 1557:
case 2231:
case 2343:
case 177:
case 3098:
case 2564:
case 3739:
case 2784:
case 2127:
case 264:
case 577:
case 607:
case 2517:
case 2395:
case 1802:
case 3703:
case 35:
case 1905:
case 2432:
case 184:
case 1576:
case 1362:
case 3314:
case 4053:
case 3476:
case 2984:
case 14:
case 1021:
case 1336:
case 389:
case 627:
case 2466:
case 318:
case 630:
case 2389:
case 2031:
case 700:
case 854:
case 2537:
case 1251:
case 229:
case 1474:
case 54:
case 1156:
case 591:
case 603:
case 3871:
case 733:
case 1536:
case 3728:
case 2880:
case 2861:
case 2162:
case 295:
case 1991:
case 2271:
case 2190:
case 1885:
case 985:
case 2454:
case 621:
case 2589:
case 2526:
case 2769:
case 1177:
case 834:
case 3261:
case 2337:
case 3280:
case 1467:
case 3416:
case 3154:
case 173:
case 2754:
case 1642:
case 3368:
case 337:
case 805:
case 160:
case 3591:
case 280:
case 143:
case 1587:
case 2141:
case 236:
case 1060:
case 3790:
case 2518:
case 492:
case 3762:
case 242:
case 1092:
case 1863:
case 990:
case 2065:
case 2208:
case 2993:
case 2329:
case 2772:
case 2386:
case 4049:
case 351:
case 822:
case 3075:
case 3647:
case 810:
case 475:
case 879:
case 1358:
case 3015:
case 1405:
case 3927:
case 3568:
case 1539:
case 2712:
case 4011:
case 1774:
case 60:
case 1635:
case 256:
case 278:
case 3100:
case 2318:
case 2246:
case 3853:
case 3235:
case 1213:
case 1009:
case 2766:
case 2529:
case 409:
case 2:
case 1922:
case 331:
case 2023:
case 3957:
case 2223:
case 2103:
case 919:
case 866:
case 59:
case 429:
case 1328:
case 1615:
case 547:
case 96:
case 1186:
case 3020:
case 2912:
case 3988:
case 3894:
case 2046:
case 1519:
case 333:
case 62:
case 2966:
case 3609:
case 1810:
case 3184:
case 3823:
case 3250:
case 3439:
case 2294:
case 3976:
case 988:
case 2338:
case 1855:
case 147:
case 116:
case 2745:
case 2670:
case 3275:
case 1118:
case 300:
case 802:
case 3042:
case 141:
case 3990:
case 1528:
case 1697:
case 2008:
case 2265:
case 2954:
case 1292:
case 3681:
case 1319:
case 2158:
case 353:
case 3487:
case 3297:
case 2875:
case 245:
case 3692:
case 1740:
case 3962:
case 825:
case 1675:
case 472:
case 1047:
case 2359:
case 2793:
case 2187:
case 1541:
case 3147:
case 2597:
case 1828:
case 1771:
case 3463:
case 1570:
case 2447:
case 3394:
case 383:
case 2641:
case 201:
case 2575:
case 3323:
case 744:
case 3999:
case 2082:
case 122:
case 675:
case 2679:
case 3565:
case 1983:
case 2550:
case 3425:
case 1907:
case 2397:
case 3430:
case 306:
case 3259:
case 2515:
case 207:
case 1453:
case 2205:
case 3600:
case 2125:
case 1819:
case 3029:
case 1135:
case 924:
case 1596:
case 1659:
case 1510:
case 3113:
case 1711:
case 2375:
case 976:
case 1446:
case 394:
case 579:
case 3902:
case 3365:
case 2409:
case 166:
case 2535:
case 1678:
case 3546:
case 3455:
case 1423:
case 1707:
case 230:
case 3684:
case 2639:
case 2342:
case 3109:
case 199:
case 3410:
case 904:
case 3286:
case 3229:
case 1494:
case 2268:
case 227:
case 3553:
case 91:
case 1363:
case 1686:
case 3059:
case 2829:
case 1544:
case 1115:
case 326:
case 2886:
case 1530:
case 816:
case 2748:
case 2603:
case 1731:
case 1465:
case 2687:
case 1971:
case 841:
case 2335:
case 525:
case 2282:
case 2492:
case 4034:
case 3346:
case 4040:
case 78:
case 3218:
case 3192:
case 2542:
case 1887:
case 2658:
case 2818:
case 3181:
case 3353:
case 3470:
case 3799:
case 3882:
case 3985:
case 768:
case 1618:
case 2706:
case 125:
case 2481:
case 2291:
case 2170:
case 3226:
case 3770:
case 3499:
case 4082:
case 3289:
case 794:
case 3645:
case 2240:
case 3077:
case 3106:
case 3624:
case 1054:
case 1908:
case 3571:
case 1293:
case 401:
case 2067:
case 1836:
case 339:
case 2580:
case 642:
case 2199:
case 2781:
case 871:
case 3963:
case 1765:
case 636:
case 2014:
case 1245:
case 4091:
case 1626:
case 1104:
case 423:
case 1224:
case 1012:
case 1827:
case 3064:
case 1794:
case 3402:
case 2913:
case 3371:
case 2448:
case 2801:
case 2102:
case 783:
case 3349:
case 359:
case 2380:
case 3237:
case 214:
case 877:
case 2052:
case 1385:
case 935:
case 2709:
case 1232:
case 1953:
case 4068:
case 508:
case 678:
case 1723:
case 3796:
case 2837:
case 3121:
case 3930:
case 1066:
case 3710:
case 3001:
case 3874:
case 3217:
case 1266:
case 897:
case 3612:
case 1857:
case 427:
case 528:
case 4005:
case 22:
case 1032:
case 946:
case 1746:
case 2657:
case 2713:
case 2304:
case 368:
case 2252:
case 2933:
case 1923:
case 430:
case 2676:
case 3037:
case 128:
case 3730:
case 3383:
case 3852:
case 3151:
case 3666:
case 3264:
case 38:
case 3955:
case 765:
case 1876:
case 1816:
case 403:
case 3654:
case 2960:
case 726:
case 1890:
case 1677:
case 2981:
case 2214:
case 1643:
case 1708:
case 3485:
case 2504:
case 3243:
case 450:
case 2773:
case 1695:
case 952:
case 2267:
case 1093:
case 873:
case 1471:
case 3763:
case 1965:
case 2895:
case 1302:
case 2992:
case 2040:
case 134:
case 1656:
case 1161:
case 3089:
case 1862:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1763215202/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,0,1,0,1,0,0,0,0,0,1,1,0,1,1,1,0,0,0,0,0,1,1,0,1,0,0,1,1,0,1,0,1,1,0,1,0,0,1,1,0,0,0,1,1,0,0,0,0,0,0,1,0,1,1,0,1,0,0,1,1,0,1,0,1,1,0,1,0,0,1,0,0,0,0,0,0,0,1,0,1,0,1,0,0,0,1,0,0,0,0,1,1,1,0,1,1,1,1,0,0,1,0,0,1,0,0,0,0,0,0,1,0,0,0,0,1,1,0,1,0,0,1,1,0,1,0,0,1,0,1,0,0,1,1,0,0,0,0,1,0,1,0,1,1,1,0,1,0,0,0,1,1,0,0,0,0,0,0,0,1,0,0,0,1,0,1,0,1,0,1,0,0,1,0,1,0,1,1,0,1,1,1,1,1,1,0,0,1,0,0,0,0,0,1,0,0,0,1,1,1,1,1,0,0,0,0,1,0,0,0,1,0,1,1,1,0,1,0,0,0,0,1,0,1,0,1,1,0,1,1,0,1,1,0,0,1,1,0,1,1,1,1,1,1,1,0,1,0,1,0,0,1,0,0,0,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,0,1,1,1,1,1,1,0,1,1,0,1,1,1,0,1,1,0,0,0,1,0,1,1,1,0,0,1,1,0,1,0,1,1,1,0,1,1,1,1,0,0,1,0,0,0,1,1,0,1,0,0,0,0,1,0,0,1,1,1,0,1,1,0,0,1,0,1,0,1,1,1,0,1,0,1,0,1,0,1,0,1,1,1,1,0,0,1,0,0,0,1,1,0,0,0,1,0,1,1,1,1,0,1,0,1,0,1,1,0,1,1,1,1,0,0,0,1,1,0,0,1,1,1,1,1,0,0,0,1,0,1,1,0,1,0,0,1,0,0,0,1,0,1,0,0,0,1,0,0,1,1,1,1,1,1,0,1,1,0,0,0,0,1,0,1,0,0,0,0,1,0,1,0,0,1,0,0,1,0,0,1,0,1,0,1,0,0,0,1,1,0,0,1,1,1,0,0,1,1,1,1,1,1,0,1,0,0,0,1,1,0,0,1,0,0,0,0,1,1,1,1,0,0,1,0,0,0,1,1,0,0,0,0,0,0,1,0,0,1,1,1,0,1,0,0,0,1,1,0,0,0,1,1,1,0,1,1,0,1,0,0,0,1,0,0,1,1,0,0,0,0,1,1,1,1,0,0,0,1,0,0,0,1,1,1,0,1,0,0,0,1,0,0,0,1,1,1,0,1,0,0,0,1,0,1,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0,0,0,1,0,1,0,0,1,1,1,0,0,1,1,1,0,0,0,1,0,0,1,1,0,0,0,0,1,1,1,0,0,1,1,1,0,1,1,0,0,0,0,1,0,0,1,1,1,1,0,1,0,1,0,0,1,0,1,0,0,1,1,0,1,1,1,0,1,0,1,0,1,1,0,1,0,1,0,0,1,0,1,1,1,1,0,0,1,0,0,1,0,0,1,0,0,0,0,0,1,1,0,1,0,0,0,1,1,1,0,0,0,0,0,1,0,0,0,1,0,0,0,0,1,0,0,0,0,0,1,0,1,1,0,0,1,1,1,0,1,0,0,1,0,1,0,0,0,0,0,1,0,0,0,0,0,1,1,1,0,0,0,1,1,1,0,0,1,0,1,0,1,1,0,1,0,1,1,0,0,0,0,0,1,1,1,0,0,1,1,1,1,0,0,0,0,0,0,1,0,1,0,1,0,1,0,0,0,1,1,0,1,0,1,0,1,1,1,1,1,0,0,1,1,1,1,1,1,1,0,0,1,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,1,0,0,0,1,0,0,1,0,1,0,1,0,1,0,1,1,1,1,0,0,0,0,1,0,1,1,0,0,0,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,0,1,0,1,1,0,0,0,1,1,0,1,1,0,0,1,0,0,1,1,1,1,1,0,0,0,1,0,0,1,1,0,0,1,1,1,0,1,1,1,1,1,1,1,0,1,0,1,0,1,1,0,0,1,0,0,1,1,0,1,1,0,0,1,0,1,1,0,1,0,0,0,0,1,1,0,0,1,0,0,0,0,1,0,0,0,0,1,1,0,1,1,1,0,0,1,0,1,1,1,0,0,1,0,1,1,1,1,0,1,0,1,1,1,0,1,0,1,1,0,0,1,0,1,1,0,1,0,1,0,1,1,0,0,1,1,1,0,0,0,1,0,1,0,1,1,1,0,1,0,0,1,1,1,1,0,0,1,1,0,1,1,0,1,0,0,0,1,1,0,0,1,0,1,1,1,0,0,0,0,1,0,1,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,1,0,1,0,1,1,0,1,1,1,0,0,1,1,1,1,0,1,0,1,1,0,1,1,0,0,0,1,0,1,1,0,0,1,1,0,1,0,0,1,1,1,0,0,0,0,0,0,1,1,1,0,0,0,0,0,1,0,0,0,1,0,1,1,1,0,1,0,1,1,1,1,0,1,0,0,1,0,1,0,1,0,0,1,1,1,0,1,0,0,0,0,1,0,0,0,1,0,0,1,1,1,1,0,0,0,0,1,0,0,0,0,0,0,1,0,1,0,1,0,0,0,1,0,0,0,0,0,1,0,1,1,1,0,1,1,0,0,1,1,0,1,1,0,0,0,0,1,0,1,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,1,1,1,0,1,0,0,0,0,0,0,0,0,1,1,1,0,1,0,1,0,0,0,1,1,1,1,0,0,1,0,1,1,0,0,1,1,1,1,1,1,1,1,0,0,0,0,1,1,0,0,1,0,1,0,0,0,0,0,0,1,0,1,1,0,0,0,0,1,1,1,1,1,0,0,1,0,1,0,0,1,1,0,0,0,1,0,0,0,0,0,1,0,0,1,0,1,0,0,0,0,1,0,1,0,0,1,1,0,0,1,1,1,0,1,0,1,1,0,0,1,0,0,0,0,1,1,1,0,0,1,0,0,0,1,0,0,1,1,0,0,0,0,0,1,0,1,1,0,0,0,1,0,1,1,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,1,0,0,0,1,1,1,1,0,0,1,0,0,1,1,1,0,0,0,1,1,1,0,1,1,1,0,1,0,0,1,0,1,1,1,1,0,1,1,0,0,0,1,1,1,0,0,0,1,0,1,1,0,0,0,1,1,0,1,0,0,1,1,0,0,0,1,1,0,0,0,1,0,0,0,0,1,0,1,0,0,0,1,0,0,1,1,1,0,1,0,0,1,0,1,1,1,0,1,1,0,0,0,0,0,1,0,1,0,1,0,0,1,1,0,1,1,0,1,1,0,1,1,1,0,1,0,1,0,1,1,1,0,1,1,0,1,1,0,0,0,1,0,1,0,0,1,1,0,0,0,1,1,1,1,1,0,0,1,0,0,0,0,0,1,0,1,0,1,1,1,1,0,1,1,1,0,1,0,1,0,0,0,0,0,0,1,1,1,0,0,0,1,0,0,1,1,0,0,1,1,1,0,1,0,1,0,0,1,1,0,1,1,0,0,0,0,0,0,1,1,1,1,0,0,1,0,0,0,0,1,1,1,1,0,0,1,0,0,0,0,0,0,0,1,1,0,1,0,0,1,1,1,0,1,1,1,0,0,0,0,1,1,1,1,1,0,1,1,0,1,0,1,1,1,0,1,1,0,0,0,1,0,1,1,1,1,0,1,0,1,0,1,0,1,1,0,0,1,0,1,0,0,0,1,1,0,1,1,0,0,0,1,1,0,0,0,1,0,1,0,1,1,1,0,1,0,0,1,0,0,0,1,0,0,0,0,0,1,0,1,0,1,1,0,0,1,0,1,1,0,1,0,0,0,1,1,0,0,1,0,1,0,1,1,1,0,1,0,0,0,1,0,0,0,0,1,0,1,1,0,0,1,0,1,1,1,1,0,0,0,1,1,1,0,1,1,0,1,1,1,1,0,1,1,1,0,0,0,1,1,0,0,1,0,0,0,1,0,0,1,0,0,0,0,1,0,0,1,0,1,0,1,0,1,0,0,1,0,1,1,1,1,0,0,1,1,0,0,1,1,1,1,1,0,1,0,1,0,0,0,0,1,0,1,0,0,1,0,1,0,0,0,0,1,1,0,0,0,1,0,0,1,1,1,1,0,1,0,0,0,0,0,1,0,1,1,1,0,1,1,0,1,1,1,0,1,0,0,0,0,0,1,0,1,0,1,0,1,0,1,1,0,0,0,1,0,0,0,0,1,1,1,1,0,1,0,0,1,0,0,0,1,0,0,0,1,1,1,1,0,0,0,0,1,1,0,1,1,0,1,0,1,0,0,0,1,0,1,1,1,0,0,1,1,1,0,0,1,1,1,0,0,1,0,1,0,0,0,0,0,1,0,1,0,1,0,0,1,0,1,0,0,0,1,1,1,0,1,1,0,0,1,0,1,1,1,1,0,1,1,1,1,1,0,0,1,1,0,1,0,0,0,0,1,0,0,0,0,0,0,1,1,0,1,0,0,0,1,0,1,0,0,0,0,0,1,0,0,1,0,0,1,0,1,0,1,0,0,1,1,0,1,1,0,1,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,1,0,0,1,0,0,0,1,0,0,1,1,1,0,0,0,0,1,1,0,1,0,1,0,0,1,1,1,0,0,1,0,1,1,0,1,0,0,1,0,0,1,0,1,1,1,1,1,0,0,0,1,1,0,1,1,0,0,1,1,1,0,0,1,0,1,0,0,1,0,0,1,1,0,0,1,1,0,0,0,1,0,0,0,1,0,0,0,1,1,1,1,0,1,1,0,0,0,0,1,0,0,0,1,0,0,0,0,1,1,0,1,0,1,1,1,1,1,0,0,1,0,0,0,1,1,1,1,1,0,0,1,0,1,0,0,1,1,0,1,0,1,0,1,0,0,0,1,0,0,1,0,1,1,1,1,1,1,1,0,1,1,0,1,0,0,1,1,1,0,0,1,0,1,1,1,1,0,0,1,0,0,1,0,0,0,0,1,0,1,0,1,1,1,0,0,0,0,0,1,0,1,1,1,1,0,1,1,1,0,0,0,1,1,1,0,0,1,1,0,1,0,1,1,1,1,1,1,1,1,0,1,1,1,0,0,0,1,1,1,0,0,0,0,1,1,0,0,1,1,1,0,1,1,1,0,0,0,0,1,1,0,0,0,1,1,0,0,0,0,0,1,1,1,1,1,1,1,0,1,1,1,1,0,1,0,1,0,1,1,0,0,1,1,1,1,0,0,0,1,0,0,0,0,1,1,0,1,0,1,0,0,1,1,0,0,0,1,0,0,1,0,0,0,1,0,0,0,1,1,1,1,1,1,0,0,0,0,1,1,0,0,1,0,1,0,0,1,1,1,1,1,0,1,0,0,0,0,0,1,1,0,0,0,1,0,1,0,0,0,1,0,1,0,0,0,0,1,0,1,1,0,1,0,0,0,0,1,0,1,0,1,0,1,0,0,1,1,1,1,1,0,1,1,1,0,0,1,1,0,0,1,1,0,1,0,1,0,1,1,1,0,1,0,0,0,1,1,1,1,1,1,0,1,1,1,1,1,0,0,1,0,0,1,0,0,0,0,0,1,0,0,1,1,1,0,0,0,0,1,1,0,0,0,0,1,0,1,0,0,1,0,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,0,1,1,1,1,1,0,0,0,0,1,1,0,1,0,1,0,0,1,0,1,0,0,0,0,0,0,1,0,1,0,1,1,1,0,1,0,1,1,1,1,1,0,0,0,1,1,0,0,1,0,0,1,0,1,1,1,0,0,0,0,0,1,1,0,1,0,1,1,0,1,0,1,0,1,0,0,1,0,0,1,1,0,0,0,1,0,0,0,1,0,1,0,1,0,1,1,0,0,0,0,0,1,0,1,1,0,1,1,0,1,1,1,1,1,1,0,0,1,0,1,0,0,1,1,0,0,1,0,1,0,0,1,0,1,1,1,0,1,1,0,1,1,1,1,0,1,1,1,0,1,0,1,1,1,0,1,0,0,0,0,1,0,1,1,1,0,1,1,1,1,1,0,0,1,0,0,0,0,1,1,0,1,1,0,1,1,0,1,0,0,1,1,0,1,1,0,1,0,1,1,0,0,1,1,1,0,0,0,1,0,1,0,0,0,0,1,1,0,0,1,1,1,1,0,0,1,1,0,1,1,1,1,0,0,1,0,1,0,0,0,0,0,1,1,0,0,0,0,1,1,0,1,0,0,1,1,0,0,1,1,0,0,1,0,0,1,0,0,1,1,1,0,1,0,0,0,1,1,0,1,0,0,0,1,1,0,0,1,1,0,1,1,1,1,0,0,0,0,0,0,0,1,1,0,1,1,0,1,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,1,1,1,1,0,1,0,1,0,1,0,0,0,0,1,0,0,1,1,1,0,0,0,1,1,1,1,0,0,0,0,1,1,0,0,0,0,0,0,0,1,1,0,1,1,1,1,1,0,1,0,0,1,1,1,1,1,1,1,1,1,0,1,0,0,1,1,0,1,0,0,1,0,0,1,0,0,0,1,1,1,0,0,0,1,1,0,1,1,1,0,0,1,0,1,0,0,1,0,0,0,1,1,0,0,1,0,1,0,0,1,1,1,1,0,0,1,0,1,0,1,0,0,0,1,1,0,1,0,1,0,0,0,1,1,0,0,0,0,1,1,0,1,0,1,1,0,0,1,1,1,0,0,0,1,0,0,0,1,1,0,1,0,1,1,1,0,1,0,0,1,1,0,1,1,0,0,0,1,1,0,1,0,1,0,0,1,1,1,0,0,1,0,1,0,1,1,0,0,1,0,1,1,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0,1,1,0,0,0,0,0,0,0,0,1,1,0,0,0,1,0,0,1,0,0,1,1,1,1,1,0,0,1,0,0,1,1,1,0,1,0,0,1,1,1,0,1,1,1,1,1,1,0,1,0,0,0,0,1,0,1,0,0,1,1,0,0,1,1,1,0,0,0,0,0,0,1,1,1,0,1,0,1,0,1,1,1,0,1,0,1,0,0,0,1,1,1,1,0,1,1,1,0,1,0,0,1,0,1,0,1,0,1,1,0,1,1,1,0,1,1,1,1,0,1,0,1,1,0,0,1,1,1,0,0,1,1,1,0,0,1,0,1,1,0,1,0,0,1,0,0,1,1,0,0,1,0,1,0,0,1,0,0,1,0,1,1,1,0,1,1,1,0,0,1,0,1,1,0,0,1,0,0,1,0,0,0,1,1,1,0,0,0,1,0,1,0,1,0,1,1,1,1,1,1,0,1,0,0,0,0,0,1,1,0,0,1,0,1,1,1,0,1,1,1,0,0,1,0,1,0,1,0,0,1,0,0,0,1,0,0,1,0,0,0,1,1,1,1,1,0,1,0,1,0,0,0,1,0,1,0,1,1,1,0,1,0,1,0,1,0,1,0,0,0,0,1,0,0,0,1,1,1,1,0,1,1,1,0,0,1,1,0,0,1,0,1,0,1,0,0,1,1,0,0,0,1,0,0,0,1,1,1,0,1,0,1,1,1,1,1,1,1,0,1,0,0,1,0,0,0,1,1,1,1,0,1,0,1,0,0,0,0,1,0,1,0,0,1,0,1,1,0,0,1,0,0,0,0,0,1,0,0,1,1,1,0,0,1,1,1,1,1,0,0,0,0,0,1,1,1,0,0,1,0,0,1,0,1,0,1,0,0,0,1,1,0,1,0,1,0,0,0,0,1,0,0,0,0,0,0,1,1,0,1,1,1,0,0,1,0,0,1,0,1,0,1,1,0,1,1,0,0,0,0,0,0,0,1,0,1,1,1,1,1,0,0,0,1,0,1,1,1,0,1,0,0,0,1,1,1,1,0,1,0,0,0,1,0,1,1,1,1,0,1,1,0,1,1,1,1,0,1,0,0,1,1,0,0,0,1,0,1,1,0,0,1,0,1,0,1,1,0,1,0,1,0,1,0,0,0,0,1,0,1,0,1,1,1,0,0,0,1,0,0,0,1,0,1,0,1,1,1,1,0,1,0,1,0,1,0,1,1,1,0,1,0,0,0,0,1,0,1,0,1,1,1,1,0,1,0,1,0,1,1,0,1,0,1,1,0,0,1,1,1,0,0,0,0,1,0,1,0,0,1,1,1,0,1,1,1,1,0,1,0,0,0,0,1,0,0,1,1,0,0,1,0,1,0,0,0,0,0,1,1,1,1,0,1,1,1,1,1,0,1,0,1,0,0,0,0,1,0,0,0,1,0,0,0,0,1,1,1,1,1,1,0,1,0,0,1,1,0,1,1,0,0,0,0,0,1,1,0,1,0,0,0,0,0,0,0,0,1,0,1,1,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,1,0,1,0,1,1,0,1,0,1,1,1,0,0,1,0,1,0,0,1,0,1,0,0,0,0,0,1,1,0,1,1,0,0,0,0,1,1,0,1,1,1,0,1,0,0,1,1,0,0,1,1,0,1,0,0,0,0,1,1,0,1,1,0,0,1,1,0,1,1,1,1,1,0,0,1,0,1,0,1,0,1,0,1,1,1,1,1,1,1,1,0,0,0,1,1,0,1,1,0,0,0,1,0,0,1,0,0,0,1,1,0,1,0,1,0,0,0,0,1,1,1,0,1,1,1,0,0,1,0,1,1,0,1,0,0,1,0,0,0,0,1,1,0,0,1,0,1,0,1,0,1,0,0,0,0,1,0,1,1,1,0,1,1,0,0,0,0,1,0,1,0,0,0,0,1,1,1,0,0,0,0,1,1,0,1,1,1,0,0,1,1,1,0,1,1,0,1,1,0,1,1,0,0,1,1,1,1,1,0,1,0,0,1,0,1,0,0,1,1,1,0,1,0,0,1,1,1,0,0,1,0,1,0,1,0,0,1,0,1,0,0,0,0,0,0,0,0,1,0,1,0,1,];
var gg_b = "1763215202/";

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
