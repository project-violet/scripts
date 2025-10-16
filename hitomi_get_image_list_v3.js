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
case 2440:
case 1201:
case 2017:
case 1398:
case 4006:
case 1219:
case 1514:
case 2530:
case 625:
case 3736:
case 3273:
case 3088:
case 2917:
case 2445:
case 67:
case 3848:
case 1408:
case 2546:
case 1709:
case 453:
case 3740:
case 74:
case 1325:
case 2503:
case 2542:
case 1320:
case 2194:
case 2089:
case 873:
case 3581:
case 1979:
case 3548:
case 4009:
case 770:
case 245:
case 640:
case 483:
case 1270:
case 112:
case 4011:
case 3057:
case 2327:
case 1212:
case 797:
case 2280:
case 387:
case 3881:
case 3041:
case 639:
case 1972:
case 2053:
case 428:
case 1915:
case 721:
case 1076:
case 375:
case 1706:
case 2082:
case 1976:
case 662:
case 2086:
case 1910:
case 2738:
case 1743:
case 1702:
case 2439:
case 3727:
case 3630:
case 2761:
case 3115:
case 947:
case 3172:
case 1826:
case 2607:
case 176:
case 1141:
case 3110:
case 3635:
case 1822:
case 1529:
case 2269:
case 1157:
case 951:
case 1067:
case 511:
case 267:
case 1792:
case 1967:
case 2723:
case 1796:
case 2564:
case 1224:
case 302:
case 817:
case 1829:
case 229:
case 1374:
case 752:
case 434:
case 981:
case 4092:
case 2065:
case 73:
case 1633:
case 1291:
case 1654:
case 1308:
case 1605:
case 331:
case 1188:
case 406:
case 1799:
case 1498:
case 3649:
case 2262:
case 2178:
case 99:
case 2025:
case 2591:
case 1465:
case 3184:
case 3099:
case 2824:
case 954:
case 3494:
case 3612:
case 1389:
case 2659:
case 2020:
case 3378:
case 263:
case 3140:
case 2098:
case 861:
case 1562:
case 2222:
case 1293:
case 3658:
case 492:
case 2226:
case 1566:
case 3145:
case 1382:
case 3601:
case 710:
case 1334:
case 2683:
case 908:
case 3463:
case 3619:
case 2372:
case 2315:
case 998:
case 2721:
case 529:
case 3996:
case 1927:
case 1106:
case 2891:
case 3290:
case 2763:
case 2229:
case 431:
case 396:
case 899:
case 3421:
case 3687:
case 3002:
case 3715:
case 3043:
case 2575:
case 4088:
case 2512:
case 441:
case 1580:
case 195:
case 3906:
case 3233:
case 2516:
case 3691:
case 3776:
case 105:
case 3254:
case 2570:
case 3902:
case 1741:
case 2237:
case 3856:
case 666:
case 457:
case 2415:
case 4013:
case 1486:
case 1453:
case 3200:
case 2410:
case 1482:
case 1249:
case 2123:
case 1844:
case 487:
case 1668:
case 1713:
case 1945:
case 2501:
case 1040:
case 3552:
case 3779:
case 3009:
case 1235:
case 926:
case 3478:
case 2519:
case 3583:
case 724:
case 1203:
case 1242:
case 0:
case 1788:
case 1036:
case 1880:
case 2587:
case 2704:
case 3394:
case 1032:
case 2479:
case 2816:
case 2974:
case 1246:
case 4041:
case 3624:
case 328:
case 1199:
case 933:
case 3271:
case 1980:
case 2016:
case 3625:
case 1085:
case 3506:
case 2700:
case 4007:
case 2699:
case 2912:
case 2975:
case 3502:
case 728:
case 3543:
case 2551:
case 2705:
case 1985:
case 421:
case 3400:
case 303:
case 1234:
case 2547:
case 562:
case 3811:
case 1944:
case 497:
case 1449:
case 539:
case 324:
case 4081:
case 407:
case 1286:
case 2215:
case 783:
case 2272:
case 278:
case 2001:
case 880:
case 2771:
case 3052:
case 3511:
case 1623:
case 4048:
case 2019:
case 3278:
case 3083:
case 1435:
case 177:
case 2414:
case 3056:
case 3204:
case 2901:
case 1393:
case 44:
case 753:
case 2987:
case 3806:
case 185:
case 348:
case 3471:
case 1077:
case 3255:
case 3250:
case 57:
case 2851:
case 1289:
case 1442:
case 805:
case 1403:
case 1536:
case 1661:
case 3918:
case 2574:
case 816:
case 904:
case 109:
case 3726:
case 3294:
case 1638:
case 3651:
case 1303:
case 1342:
case 715:
case 2525:
case 923:
case 2091:
case 2606:
case 3722:
case 3177:
case 3599:
case 386:
case 994:
case 796:
case 1156:
case 872:
case 1493:
case 1330:
case 2173:
case 3647:
case 3896:
case 1335:
case 936:
case 1966:
case 1062:
case 2131:
case 161:
case 3144:
case 3428:
case 1349:
case 113:
case 3263:
case 3300:
case 958:
case 1069:
case 530:
case 2429:
case 1159:
case 3221:
case 3495:
case 663:
case 3354:
case 3899:
case 356:
case 1969:
case 3617:
case 438:
case 3223:
case 1678:
case 629:
case 1358:
case 927:
case 3331:
case 2105:
case 2865:
case 2154:
case 1370:
case 2064:
case 2964:
case 2768:
case 2227:
case 33:
case 410:
case 2377:
case 792:
case 1387:
case 702:
case 868:
case 1220:
case 667:
case 2641:
case 1319:
case 3653:
case 2993:
case 1301:
case 969:
case 3373:
case 164:
case 3114:
case 635:
case 876:
case 51:
case 379:
case 230:
case 2935:
case 2366:
case 240:
case 2886:
case 3907:
case 3126:
case 2245:
case 3473:
case 1815:
case 645:
case 1872:
case 3588:
case 3777:
case 3007:
case 2362:
case 2517:
case 1401:
case 1663:
case 1876:
case 1718:
case 2882:
case 2003:
case 2042:
case 960:
case 2773:
case 3857:
case 2236:
case 3513:
case 1487:
case 424:
case 1621:
case 2946:
case 307:
case 1756:
case 1783:
case 1197:
case 1579:
case 1752:
case 403:
case 2942:
case 262:
case 2903:
case 1391:
case 1475:
case 3238:
case 1251:
case 2889:
case 34:
case 3557:
case 3948:
case 3660:
case 3744:
case 757:
case 3665:
case 1879:
case 225:
case 620:
case 1470:
case 173:
case 578:
case 3431:
case 3780:
case 2444:
case 2239:
case 3888:
case 1572:
case 27:
case 2534:
case 1510:
case 566:
case 2553:
case 671:
case 4018:
case 2582:
case 3916:
case 2059:
case 440:
case 683:
case 10:
case 2543:
case 1538:
case 2502:
case 3970:
case 3075:
case 2169:
case 1:
case 19:
case 3700:
case 3975:
case 2454:
case 3016:
case 4035:
case 3808:
case 1749:
case 4003:
case 3168:
case 3272:
case 3215:
case 224:
case 570:
case 1031:
case 3058:
case 181:
case 2328:
case 1931:
case 597:
case 3276:
case 3958:
case 203:
case 2400:
case 1241:
case 462:
case 801:
case 2811:
case 3901:
case 2166:
case 2952:
case 1288:
case 1073:
case 2204:
case 151:
case 2509:
case 1746:
case 2278:
case 3019:
case 968:
case 3001:
case 1407:
case 1481:
case 2714:
case 3087:
case 3574:
case 1838:
case 2802:
case 1213:
case 3851:
case 366:
case 2471:
case 248:
case 1397:
case 774:
case 869:
case 85:
case 3508:
case 2018:
case 1735:
case 3987:
case 2806:
case 286:
case 2177:
case 3091:
case 2371:
case 3991:
case 1187:
case 842:
case 3602:
case 2651:
case 1823:
case 912:
case 2647:
case 2896:
case 1101:
case 1639:
case 53:
case 2300:
case 3790:
case 3609:
case 711:
case 582:
case 1068:
case 2428:
case 2729:
case 2592:
case 3131:
case 2305:
case 3024:
case 122:
case 1684:
case 1170:
case 2490:
case 3825:
case 2185:
case 1116:
case 1561:
case 2221:
case 3267:
case 2674:
case 2180:
case 2495:
case 579:
case 1112:
case 3924:
case 1175:
case 31:
case 430:
case 3105:
case 2331:
case 2769:
case 3344:
case 2137:
case 1563:
case 4091:
case 1149:
case 538:
case 1928:
case 3100:
case 1724:
case 1296:
case 2261:
case 1521:
case 1095:
case 510:
case 1990:
case 3964:
case 1359:
case 3768:
case 3469:
case 3613:
case 3064:
case 252:
case 126:
case 729:
case 1995:
case 1090:
case 3133:
case 1821:
case 2997:
case 3560:
case 846:
case 2766:
case 1594:
case 1103:
case 735:
case 349:
case 1142:
case 3657:
case 3171:
case 318:
case 1615:
case 995:
case 1356:
case 279:
case 1672:
case 2114:
case 2373:
case 602:
case 3462:
case 916:
case 1135:
case 1791:
case 1383:
case 1610:
case 905:
case 2122:
case 3930:
case 3882:
case 687:
case 2007:
case 1452:
case 804:
case 2777:
case 4070:
case 3853:
case 2473:
case 3245:
case 2588:
case 989:
case 823:
case 1193:
case 340:
case 221:
case 3903:
case 362:
case 3477:
case 1071:
case 1555:
case 1701:
case 1418:
case 3232:
case 972:
case 297:
case 888:
case 2081:
case 3946:
case 3773:
case 3042:
case 3236:
case 2513:
case 593:
case 675:
case 3589:
case 1971:
case 478:
case 4001:
case 2665:
case 325:
case 1054:
case 1933:
case 2744:
case 3480:
case 3369:
case 1954:
case 3195:
case 1243:
case 1850:
case 2557:
case 2785:
case 1878:
case 1716:
case 657:
case 3534:
case 2541:
case 1905:
case 143:
case 548:
case 1000:
case 519:
case 1005:
case 1712:
case 3586:
case 3128:
case 959:
case 96:
case 3949:
case 3444:
case 2780:
case 3917:
case 2088:
case 1256:
case 1004:
case 241:
case 1978:
case 843:
case 2732:
case 1411:
case 854:
case 2988:
case 1252:
case 1800:
case 725:
case 544:
case 2581:
case 257:
case 1629:
case 2745:
case 3089:
case 3194:
case 1950:
case 2664:
case 2740:
case 3484:
case 1571:
case 1055:
case 158:
case 3277:
case 2848:
case 1218:
case 1854:
case 1399:
case 3432:
case 1165:
case 3280:
case 1259:
case 2881:
case 808:
case 3803:
case 762:
case 3327:
case 2057:
case 1747:
case 2957:
case 188:
case 3697:
case 345:
case 1406:
case 1533:
case 2548:
case 136:
case 3846:
case 2941:
case 3934:
case 1751:
case 697:
case 3439:
case 1626:
case 1392:
case 909:
case 104:
case 3244:
case 4008:
case 740:
case 999:
case 1622:
case 2807:
case 3986:
case 607:
case 3034:
case 123:
case 884:
case 670:
case 3053:
case 4025:
case 2176:
case 3607:
case 1496:
case 2268:
case 1528:
case 3893:
case 682:
case 1492:
case 3761:
case 2630:
case 2727:
case 463:
case 202:
case 1306:
case 146:
case 679:
case 1921:
case 2646:
case 1021:
case 411:
case 2338:
case 1343:
case 1302:
case 2461:
case 977:
case 2603:
case 900:
case 718:
case 1994:
case 3332:
case 3065:
case 3960:
case 3336:
case 1895:
case 3060:
case 534:
case 1189:
case 3150:
case 1725:
case 63:
case 1117:
case 506:
case 1828:
case 833:
case 596:
case 3266:
case 1720:
case 3593:
case 3345:
case 3659:
case 2675:
case 2612:
case 2494:
case 3824:
case 2616:
case 1297:
case 3025:
case 2355:
case 3920:
case 2132:
case 1868:
case 3998:
case 2145:
case 2304:
case 3226:
case 1760:
case 311:
case 467:
case 3222:
case 1765:
case 3098:
case 363:
case 2378:
case 429:
case 2228:
case 2996:
case 3315:
case 2092:
case 3656:
case 160:
case 3372:
case 686:
case 3721:
case 4065:
case 2992:
case 2619:
case 2463:
case 1341:
case 3683:
case 3652:
case 1147:
case 3376:
case 2096:
case 1061:
case 2687:
case 3467:
case 296:
case 1151:
case 3229:
case 865:
case 3524:
case 142:
case 3891:
case 837:
case 3763:
case 3570:
case 4017:
case 1734:
case 2710:
case 1248:
case 2233:
case 3516:
case 2818:
case 132:
case 420:
case 374:
case 3887:
case 2906:
case 2772:
case 964:
case 1457:
case 2043:
case 1038:
case 766:
case 3367:
case 1786:
case 3051:
case 619:
case 1662:
case 3123:
case 2883:
case 3819:
case 3047:
case 3801:
case 2363:
case 3472:
case 3415:
case 1873:
case 557:
case 471:
case 1531:
case 244:
case 3558:
case 2478:
case 445:
case 3519:
case 1207:
case 3755:
case 1198:
case 881:
case 1573:
case 2911:
case 2556:
case 2909:
case 1831:
case 2455:
case 4034:
case 4053:
case 228:
case 624:
case 3778:
case 3479:
case 3008:
case 2518:
case 8:
case 3974:
case 4082:
case 1125:
case 575:
case 3908:
case 1120:
case 89:
case 1281:
case 2859:
case 2394:
case 1669:
case 1413:
case 3875:
case 2450:
case 3632:
case 3116:
case 322:
case 2969:
case 2464:
case 3348:
case 3175:
case 1924:
case 3636:
case 1267:
case 564:
case 3968:
case 1611:
case 3764:
case 213:
case 3640:
case 1790:
case 659:
case 1795:
case 517:
case 3068:
case 1337:
case 957:
case 2152:
case 1598:
case 426:
case 2335:
case 2966:
case 2183:
case 3823:
case 1422:
case 689:
case 92:
case 2493:
case 3639:
case 2066:
case 1525:
case 2265:
case 2118:
case 433:
case 2346:
case 3381:
case 742:
case 2638:
case 2827:
case 1991:
case 3861:
case 3838:
case 1851:
case 2442:
case 3213:
case 454:
case 347:
case 3627:
case 3481:
case 1087:
case 2446:
case 1279:
case 3735:
case 285:
case 166:
case 2584:
case 3397:
case 4000:
case 1414:
case 2430:
case 992:
case 1692:
case 2781:
case 3742:
case 695:
case 290:
case 2623:
case 902:
case 4033:
case 2435:
case 791:
case 2044:
case 1058:
case 1437:
case 2286:
case 1215:
case 1272:
case 3241:
case 2253:
case 1276:
case 1733:
case 1958:
case 1012:
case 1705:
case 2080:
case 1916:
case 1874:
case 1016:
case 2832:
case 2364:
case 1070:
case 650:
case 2884:
case 1912:
case 78:
case 3905:
case 2247:
case 2510:
case 3000:
case 1817:
case 343:
case 3770:
case 2937:
case 585:
case 2576:
case 3716:
case 1582:
case 447:
case 3804:
case 354:
case 2037:
case 3775:
case 1586:
case 1239:
case 2515:
case 3900:
case 2572:
case 3033:
case 1190:
case 2416:
case 590:
case 3206:
case 125:
case 3054:
case 871:
case 3855:
case 758:
case 3202:
case 2475:
case 4073:
case 3459:
case 3954:
case 1731:
case 1195:
case 577:
case 1480:
case 1232:
case 2208:
case 3719:
case 2783:
case 3418:
case 1046:
case 1477:
case 162:
case 1903:
case 1942:
case 3555:
case 1042:
case 1003:
case 3550:
case 3971:
case 2487:
case 736:
case 1946:
case 934:
case 2756:
case 915:
case 1834:
case 1517:
case 1362:
case 555:
case 2663:
case 2419:
case 3483:
case 3209:
case 2718:
case 906:
case 1930:
case 3578:
case 996:
case 3787:
case 3504:
case 612:
case 1366:
case 3193:
case 140:
case 1245:
case 2815:
case 723:
case 1093:
case 1466:
case 3356:
case 2026:
case 2319:
case 2298:
case 3676:
case 3863:
case 3135:
case 2301:
case 1462:
case 3594:
case 746:
case 149:
case 944:
case 561:
case 217:
case 3821:
case 835:
case 2181:
case 2220:
case 1565:
case 2491:
case 3318:
case 3299:
case 1171:
case 3894:
case 2029:
case 2650:
case 1768:
case 2375:
case 3521:
case 3990:
case 1154:
case 829:
case 3995:
case 2148:
case 3679:
case 1064:
case 326:
case 1385:
case 2424:
case 2655:
case 2316:
case 437:
case 3028:
case 1344:
case 1105:
case 509:
case 3724:
case 465:
case 3149:
case 3117:
case 2799:
case 442:
case 2498:
case 2600:
case 1178:
case 1262:
case 4061:
case 3720:
case 1104:
case 2605:
case 2188:
case 2526:
case 1266:
case 589:
case 1648:
case 2291:
case 1384:
case 2425:
case 2654:
case 3890:
case 1864:
case 1155:
case 3499:
case 1332:
case 3798:
case 3094:
case 129:
case 924:
case 2113:
case 726:
case 1150:
case 3895:
case 460:
case 993:
case 2967:
case 1723:
case 3590:
case 2796:
case 3306:
case 135:
case 2529:
case 3021:
case 2792:
case 1607:
case 2141:
case 276:
case 3134:
case 617:
case 3182:
case 2822:
case 3063:
case 2347:
case 830:
case 1893:
case 1339:
case 3492:
case 919:
case 3614:
case 3528:
case 2826:
case 559:
case 1244:
case 2258:
case 427:
case 3505:
case 2702:
case 3392:
case 1738:
case 3626:
case 2072:
case 1986:
case 2010:
case 323:
case 3500:
case 1053:
case 394:
case 1549:
case 2706:
case 986:
case 1163:
case 1082:
case 1842:
case 2275:
case 3402:
case 910:
case 1327:
case 2212:
case 1280:
case 401:
case 3533:
case 145:
case 491:
case 336:
case 1846:
case 3554:
case 2270:
case 388:
case 212:
case 3871:
case 2320:
case 3050:
case 1436:
case 3955:
case 1089:
case 171:
case 2287:
case 3833:
case 3165:
case 2079:
case 2709:
case 3218:
case 3854:
case 3399:
case 1484:
case 3950:
case 2711:
case 2325:
case 1989:
case 3774:
case 120:
case 3256:
case 595:
case 3978:
case 2628:
case 3805:
case 4038:
case 1445:
case 1917:
case 2201:
case 516:
case 3800:
case 1017:
case 505:
case 1535:
case 3708:
case 87:
case 432:
case 3409:
case 754:
case 2885:
case 3125:
case 7:
case 2084:
case 2577:
case 70:
case 2242:
case 2203:
case 2788:
case 3413:
case 79:
case 2036:
case 1812:
case 404:
case 1908:
case 3120:
case 1587:
case 1074:
case 2417:
case 1755:
case 512:
case 488:
case 952:
case 250:
case 2844:
case 1858:
case 301:
case 655:
case 3488:
case 2940:
case 1801:
case 2453:
case 4055:
case 3441:
case 2434:
case 3662:
case 2482:
case 2249:
case 280:
case 1237:
case 878:
case 2544:
case 1415:
case 685:
case 1472:
case 2039:
case 4050:
case 2757:
case 2486:
case 3666:
case 3248:
case 747:
case 332:
case 205:
case 3938:
case 600:
case 2741:
case 2877:
case 216:
case 3038:
case 1575:
case 1051:
case 690:
case 866:
case 4004:
case 2580:
case 979:
case 1161:
case 289:
case 3151:
case 1229:
case 2102:
case 1138:
case 3961:
case 2927:
case 1618:
case 3923:
case 360:
case 1656:
case 1372:
case 2386:
case 3568:
case 2673:
case 2866:
case 2382:
case 997:
case 3147:
case 1376:
case 2862:
case 1683:
case 3341:
case 111:
case 4021:
case 3644:
case 1998:
case 3868:
case 1794:
case 2111:
case 1222:
case 2869:
case 3313:
case 613:
case 3680:
case 3174:
case 1925:
case 1659:
case 1025:
case 1591:
case 3108:
case 81:
case 2465:
case 3685:
case 1824:
case 661:
case 3188:
case 3605:
case 4027:
case 2637:
case 626:
case 3522:
case 2311:
case 2725:
case 2117:
case 3498:
case 2309:
case 3420:
case 852:
case 2895:
case 3374:
case 2189:
case 2094:
case 3308:
case 3291:
case 3633:
case 3351:
case 882:
case 2021:
case 2595:
case 2302:
case 1338:
case 3792:
case 1603:
case 1642:
case 3157:
case 2306:
case 3796:
case 368:
case 246:
case 3967:
case 978:
case 2921:
case 2590:
case 717:
case 459:
case 1268:
case 46:
case 1172:
case 2186:
case 2963:
case 1727:
case 2063:
case 3822:
case 966:
case 1635:
case 879:
case 1423:
case 764:
case 3347:
case 1176:
case 2153:
case 1110:
case 376:
case 3141:
case 4032:
case 175:
case 3076:
case 698:
case 2622:
case 3010:
case 1807:
case 821:
case 4084:
case 3447:
case 3915:
case 1323:
case 3972:
case 1941:
case 204:
case 3976:
case 1693:
case 3814:
case 2747:
case 2871:
case 312:
case 870:
case 2406:
case 591:
case 450:
case 2259:
case 1167:
case 187:
case 1739:
case 1438:
case 2443:
case 3275:
case 2055:
case 654:
case 84:
case 2165:
case 3690:
case 3408:
case 480:
case 643:
case 3979:
case 1581:
case 2629:
case 773:
case 2050:
case 4039:
case 3320:
case 532:
case 2904:
case 2283:
case 2078:
case 1732:
case 405:
case 1507:
case 2411:
case 1784:
case 3201:
case 416:
case 1736:
case 3628:
case 1273:
case 2004:
case 3514:
case 91:
case 3880:
case 1859:
case 1394:
case 2281:
case 504:
case 2669:
case 2413:
case 3788:
case 28:
case 3489:
case 4010:
case 523:
case 4076:
case 3032:
case 1518:
case 3713:
case 2488:
case 3668:
case 1911:
case 3844:
case 350:
case 1909:
case 1404:
case 69:
case 201:
case 1009:
case 893:
case 1583:
case 291:
case 588:
case 2207:
case 824:
case 3417:
case 1011:
case 412:
case 1552:
case 3757:
case 3039:
case 1205:
case 3486:
case 3544:
case 380:
case 2531:
case 3192:
case 2662:
case 700:
case 558:
case 153:
case 3939:
case 3196:
case 647:
case 1363:
case 1200:
case 1852:
case 2441:
case 785:
case 3580:
case 930:
case 395:
case 269:
case 1043:
case 2038:
case 1715:
case 1943:
case 651:
case 316:
case 3877:
case 3741:
case 2782:
case 1233:
case 305:
case 819:
case 3585:
case 2677:
case 709:
case 3927:
case 3106:
case 2061:
case 886:
case 2357:
case 3027:
case 196:
case 3569:
case 838:
case 2151:
case 799:
case 3143:
case 940:
case 3862:
case 3353:
case 1992:
case 2341:
case 1619:
case 3334:
case 637:
case 1601:
case 3382:
case 372:
case 1228:
case 1139:
case 3866:
case 3673:
case 939:
case 1092:
case 2923:
case 3386:
case 1767:
case 761:
case 3317:
case 3109:
case 1140:
case 925:
case 2868:
case 3566:
case 3293:
case 2760:
case 4067:
case 3631:
case 2388:
case 1658:
case 622:
case 1099:
case 1184:
case 1670:
case 476:
case 1616:
case 2685:
case 3465:
case 1132:
case 3389:
case 3460:
case 856:
case 2313:
case 1350:
case 1136:
case 1999:
case 1612:
case 3159:
case 1221:
case 464:
case 1180:
case 1674:
case 2175:
case 920:
case 3069:
case 4026:
case 2636:
case 3969:
case 156:
case 2170:
case 2348:
case 2684:
case 759:
case 2632:
case 1185:
case 971:
case 2645:
case 1428:
case 1729:
case 2640:
case 313:
case 2764:
case 1596:
case 3349:
case 3330:
case 3066:
case 642:
case 2823:
case 3062:
case 3183:
case 3797:
case 3152:
case 526:
case 3335:
case 1896:
case 3827:
case 3303:
case 3342:
case 3638:
case 237:
case 1726:
case 1651:
case 1599:
case 186:
case 660:
case 138:
case 1371:
case 148:
case 1255:
case 3532:
case 1806:
case 1018:
case 2735:
case 247:
case 1714:
case 2730:
case 554:
case 716:
case 1250:
case 1802:
case 2213:
case 119:
case 3442:
case 914:
case 3403:
case 935:
case 3623:
case 390:
case 1956:
case 1278:
case 780:
case 65:
case 2407:
case 1511:
case 3217:
case 473:
case 844:
case 1052:
case 3545:
case 3839:
case 1166:
case 2288:
case 1952:
case 2073:
case 2742:
case 2703:
case 300:
case 1204:
case 377:
case 853:
case 3430:
case 251:
case 1809:
case 2931:
case 3282:
case 68:
case 3234:
case 627:
case 3286:
case 598:
case 193:
case 124:
case 883:
case 2124:
case 3884:
case 1625:
case 3832:
case 1506:
case 3364:
case 1959:
case 1433:
case 3985:
case 828:
case 4014:
case 1737:
case 1059:
case 584:
case 1620:
case 20:
case 1502:
case 691:
case 2538:
case 2257:
case 3836:
case 1395:
case 1169:
case 2712:
case 2005:
case 2775:
case 1888:
case 3515:
case 3759:
case 2804:
case 3458:
case 3937:
case 2716:
case 485:
case 3510:
case 3247:
case 2905:
case 2770:
case 4077:
case 243:
case 1948:
case 477:
case 1744:
case 1660:
case 3694:
case 3475:
case 2850:
case 2202:
case 1238:
case 1557:
case 14:
case 1813:
case 2855:
case 3470:
case 373:
case 2164:
case 1665:
case 490:
case 963:
case 2033:
case 2206:
case 3324:
case 3879:
case 581:
case 170:
case 3756:
case 1081:
case 107:
case 2550:
case 712:
case 1513:
case 694:
case 2971:
case 2555:
case 2701:
case 3391:
case 2418:
case 2719:
case 197:
case 1981:
case 3197:
case 5:
case 1907:
case 1588:
case 3872:
case 50:
case 2504:
case 4080:
case 2456:
case 3014:
case 2483:
case 2578:
case 1122:
case 455:
case 3810:
case 1007:
case 2452:
case 1777:
case 2211:
case 3401:
case 3022:
case 2676:
case 2352:
case 2791:
case 1682:
case 3298:
case 3319:
case 1634:
case 3107:
case 522:
case 1686:
case 4069:
case 2615:
case 179:
case 974:
case 2356:
case 364:
case 3922:
case 2130:
case 2318:
case 892:
case 3491:
case 1762:
case 1997:
case 2821:
case 768:
case 1766:
case 2594:
case 2103:
case 226:
case 3316:
case 4062:
case 2090:
case 1261:
case 13:
case 2359:
case 2563:
case 565:
case 831:
case 233:
case 2296:
case 2028:
case 409:
case 3358:
case 1331:
case 1468:
case 2292:
case 3604:
case 1137:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1760612402/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,1,0,0,0,1,0,1,1,0,1,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,1,1,0,0,1,0,1,1,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,1,1,0,1,0,0,0,1,0,0,0,0,0,1,0,1,0,1,1,1,1,0,0,1,1,0,0,0,1,1,0,1,0,0,1,1,0,1,0,1,0,1,1,0,0,0,1,0,0,1,0,0,0,0,1,1,0,1,0,1,0,1,1,1,0,0,0,0,0,1,1,0,1,1,1,1,1,0,0,1,0,0,1,0,0,1,1,0,1,0,1,0,1,1,0,1,1,0,1,1,0,1,0,1,0,0,1,0,1,0,1,1,1,0,1,0,1,0,0,0,1,1,0,1,0,1,1,1,0,1,0,1,0,0,0,1,1,1,1,0,0,0,0,1,0,1,1,1,0,0,0,1,1,1,1,1,0,0,0,0,0,0,1,1,0,0,1,1,0,0,0,1,0,0,1,1,1,0,1,1,1,0,0,1,0,0,0,1,0,0,1,1,0,1,1,1,1,1,1,0,1,1,1,0,0,0,0,1,0,0,0,0,1,1,0,0,0,1,0,1,0,0,0,0,0,0,1,0,1,1,1,0,0,0,0,1,1,0,0,1,1,1,0,0,0,0,1,1,0,0,1,1,1,1,0,1,0,1,0,0,0,1,1,1,0,0,1,0,1,0,0,0,1,1,1,1,1,0,1,0,0,1,1,0,0,0,1,0,0,0,1,0,0,1,0,1,0,1,1,1,1,0,0,0,1,0,1,0,0,0,1,0,1,1,1,0,1,0,1,0,0,0,1,1,1,1,1,1,0,1,1,0,0,0,0,0,1,1,1,0,1,0,0,0,1,1,1,0,0,0,0,1,0,1,1,1,1,1,0,1,1,1,1,0,0,0,1,0,0,0,1,1,0,0,1,0,1,1,1,1,1,1,1,1,1,0,0,1,1,0,1,1,1,0,0,1,0,1,0,0,1,0,0,1,1,1,0,1,0,1,1,0,1,1,1,1,0,1,0,0,0,1,0,1,0,0,1,1,1,0,1,0,0,1,0,1,0,1,1,0,1,1,1,0,0,0,0,1,0,0,0,0,0,0,1,1,1,0,0,1,1,1,1,0,0,0,1,1,0,1,0,0,1,1,0,0,1,0,0,1,1,0,1,0,1,0,0,0,1,1,0,0,0,0,1,0,0,0,1,0,0,0,0,0,1,1,0,1,1,1,0,1,1,0,1,1,1,0,0,0,1,0,0,0,0,1,0,1,1,1,0,1,1,0,1,1,0,0,1,1,1,1,0,1,0,1,1,1,1,0,1,0,1,0,0,0,0,1,0,0,0,0,1,1,0,0,0,1,0,1,1,0,1,0,1,1,1,1,0,1,0,0,0,0,0,1,0,1,0,1,1,0,1,1,0,1,0,1,0,0,1,1,0,0,1,1,0,1,0,1,1,1,1,1,0,0,1,1,0,0,1,1,0,0,0,1,0,0,0,1,0,0,1,1,0,1,1,1,0,1,1,1,0,0,1,1,0,1,1,0,1,0,1,0,0,0,0,0,0,1,1,1,1,0,0,1,1,1,1,0,0,1,0,1,1,1,1,0,1,1,0,0,0,0,0,1,1,0,0,0,1,0,1,0,0,0,1,1,0,0,0,0,1,1,1,0,0,1,1,1,0,1,1,0,1,0,1,0,1,0,1,0,0,1,1,0,0,0,0,0,1,0,0,1,0,1,0,0,0,0,0,1,1,0,0,0,1,1,0,1,0,1,0,0,1,1,0,0,1,0,0,0,0,0,0,0,1,1,0,1,0,1,0,1,1,0,0,0,1,1,1,1,0,1,0,1,0,1,1,0,0,0,1,1,1,0,1,0,0,0,0,0,1,1,1,0,1,0,0,0,0,1,0,0,0,1,1,0,1,1,1,1,1,1,0,0,1,0,1,1,1,1,1,1,1,0,1,0,1,0,0,0,1,1,0,0,0,0,0,1,1,0,1,0,1,1,1,0,1,1,1,0,1,0,1,1,1,0,0,1,1,0,0,1,1,1,1,1,0,0,1,0,0,1,1,1,1,0,0,1,1,0,0,0,1,0,0,1,0,0,0,1,1,0,1,0,0,1,1,1,1,0,0,1,1,0,1,0,1,1,0,1,1,0,1,0,0,1,1,1,0,1,0,0,0,0,1,0,0,1,0,0,1,1,1,1,1,1,1,1,1,0,0,1,1,1,0,1,0,1,0,1,1,0,0,0,1,1,1,0,0,1,0,0,0,1,0,0,0,0,0,1,1,0,0,0,1,0,1,0,1,0,1,1,0,0,1,0,0,0,0,1,1,1,1,1,0,0,1,1,0,1,1,0,1,0,0,1,1,1,1,1,0,1,1,0,1,1,0,0,0,1,1,0,0,1,0,1,0,1,1,0,1,1,0,1,0,0,0,1,0,1,0,1,1,1,1,0,0,0,1,0,1,0,0,0,1,1,0,0,1,0,1,0,0,1,0,0,0,0,0,0,1,0,0,1,1,1,1,1,1,1,1,0,0,0,0,1,0,1,1,1,0,0,1,1,1,1,0,1,0,1,0,1,0,1,1,1,0,1,1,1,1,0,0,1,1,0,1,0,1,0,0,0,1,1,0,1,1,1,1,0,0,1,0,1,0,1,1,1,1,1,0,1,1,1,0,1,0,0,0,0,1,1,0,1,0,0,1,1,1,1,1,0,1,0,0,0,1,1,0,0,1,1,1,1,0,1,1,1,0,1,1,1,1,1,1,0,1,1,1,1,1,0,0,1,1,0,0,1,0,1,1,0,0,0,1,1,1,0,1,0,1,1,0,0,1,0,1,1,1,1,0,0,0,0,1,0,1,1,0,1,0,1,0,0,1,1,0,0,0,1,1,1,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,1,1,0,0,1,0,1,0,1,0,0,1,1,1,0,1,1,0,1,1,1,0,1,1,1,1,0,0,0,0,1,1,0,0,0,0,0,1,0,1,1,0,0,1,1,0,0,1,0,0,0,1,1,1,0,1,0,1,0,0,0,0,0,1,1,1,1,0,1,0,1,0,1,1,1,1,1,0,1,1,1,0,1,0,1,1,0,1,1,1,0,0,1,0,1,1,1,0,0,1,0,0,0,1,1,0,0,0,0,1,0,0,0,0,1,0,1,1,1,1,0,0,0,1,0,0,1,0,0,0,1,0,0,1,1,0,0,0,1,0,0,0,0,1,0,0,1,1,0,1,0,1,0,1,0,0,1,0,1,0,0,1,1,1,0,1,0,1,1,0,0,0,0,1,1,0,0,1,0,1,0,0,0,1,0,0,0,1,1,0,0,1,1,0,1,1,0,0,1,1,0,0,1,0,0,0,1,0,0,1,1,0,1,0,1,0,1,1,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,1,0,1,0,0,0,1,1,1,0,1,1,0,0,0,0,1,1,1,0,1,0,0,0,1,1,1,1,1,0,0,1,1,1,0,0,1,0,0,1,0,1,0,1,1,0,1,0,1,0,1,0,1,0,0,1,1,1,0,0,1,1,0,1,1,1,1,1,1,0,1,1,0,0,1,0,0,0,1,1,1,0,0,1,1,0,0,1,0,0,0,0,0,1,0,0,1,0,0,1,0,1,0,1,1,1,1,1,1,0,1,0,0,1,1,1,0,1,0,1,0,0,0,1,0,0,0,1,1,1,0,1,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,1,0,0,1,1,0,0,1,0,0,1,1,1,1,1,0,1,0,1,0,0,1,1,1,1,1,0,1,0,1,1,1,1,1,1,1,1,1,0,1,0,1,1,0,1,1,0,1,0,1,1,0,0,1,1,0,0,0,1,0,1,0,0,1,1,1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,1,0,1,0,1,0,1,1,1,0,1,1,1,0,0,1,1,1,1,0,0,0,1,1,0,1,0,0,1,1,0,1,0,1,0,0,0,1,1,1,1,0,1,0,1,1,0,1,0,0,1,0,0,0,1,0,0,0,1,0,1,0,1,0,0,0,1,1,1,0,1,0,0,0,1,1,0,0,0,0,1,0,0,0,1,0,0,0,1,1,1,0,1,0,1,1,1,0,0,0,0,0,0,0,1,0,0,0,0,1,0,1,1,0,0,0,0,0,0,1,0,1,0,1,1,1,1,1,1,0,0,1,1,1,0,0,0,1,0,0,1,1,0,1,1,0,1,1,0,1,0,0,0,0,0,0,0,1,1,1,1,1,1,0,1,0,1,0,1,0,1,0,1,0,1,1,0,0,0,0,0,0,1,1,0,1,0,1,1,0,0,0,1,0,1,1,1,1,0,0,0,1,1,0,0,1,1,1,1,0,1,1,0,1,1,1,0,1,0,1,1,1,0,1,0,0,1,0,0,0,0,0,1,1,1,1,1,1,0,0,0,1,1,0,1,1,0,0,0,1,0,0,1,1,1,1,0,0,1,1,1,0,0,0,0,0,1,0,0,1,0,1,0,1,0,1,0,1,0,1,1,1,1,0,0,0,0,0,1,1,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,1,1,1,1,0,1,0,1,0,1,0,0,0,1,1,0,1,0,0,0,0,0,1,0,1,1,0,0,1,1,0,0,0,1,1,1,0,0,0,0,0,1,1,1,0,0,0,0,1,0,0,0,1,0,0,0,1,0,0,1,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,0,0,1,1,0,0,1,0,1,1,1,1,0,1,1,0,1,0,1,1,0,1,1,0,0,0,0,1,0,0,0,0,0,0,1,1,1,1,0,1,1,1,0,0,1,1,1,0,1,0,0,0,0,1,1,1,0,0,0,1,1,1,1,0,0,0,1,0,0,1,1,0,1,0,0,1,0,0,1,0,1,0,1,0,0,0,1,0,0,0,1,1,1,0,1,1,0,0,1,0,0,1,1,1,0,1,0,0,1,0,0,1,0,1,1,0,1,0,0,1,1,1,0,0,1,1,0,0,0,1,0,1,0,1,1,1,0,1,1,1,0,0,1,0,1,0,1,0,1,1,0,1,1,1,0,0,0,0,1,0,1,1,0,0,1,0,0,0,1,0,0,1,0,0,1,0,0,0,0,1,1,1,0,0,0,1,0,0,1,1,1,0,1,0,0,1,1,1,0,1,0,0,0,0,1,1,1,0,1,0,1,1,0,0,0,1,0,0,0,1,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,1,0,0,1,1,0,1,1,1,1,1,1,1,0,0,0,0,1,1,0,0,1,1,1,0,0,0,1,1,0,0,0,1,1,1,1,1,1,1,1,0,0,0,1,0,1,1,1,1,1,0,0,0,0,1,0,1,1,1,0,0,0,0,0,1,0,1,0,1,0,0,1,1,0,0,1,1,0,0,1,1,1,0,1,1,0,1,1,1,0,0,1,0,0,1,1,1,1,0,0,0,0,1,1,0,1,1,0,1,1,1,1,1,0,0,0,0,0,1,1,0,0,1,1,1,0,0,1,0,0,0,1,0,0,1,1,1,1,0,1,1,1,0,1,1,0,1,0,1,1,1,0,0,0,0,0,1,1,0,0,0,0,0,1,0,1,0,1,1,1,1,1,0,1,1,1,0,1,0,0,1,1,0,1,1,1,0,1,1,0,0,0,0,1,0,0,1,0,1,1,1,0,0,0,0,1,0,0,1,1,0,0,1,0,0,1,1,0,0,0,0,1,1,1,0,1,0,0,0,1,1,1,0,1,1,0,0,0,1,1,1,0,0,1,1,0,0,1,1,0,0,0,1,0,0,1,1,1,1,0,0,0,1,0,0,0,1,1,1,1,1,0,0,0,0,0,1,1,1,0,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,0,1,1,1,1,0,1,0,1,0,1,1,0,1,0,1,0,1,0,1,0,1,1,0,1,0,0,1,0,0,1,0,1,1,1,0,1,1,0,1,0,0,0,0,0,0,0,0,1,1,0,0,1,1,0,1,1,0,1,0,1,1,1,1,1,1,0,1,0,1,0,0,1,1,1,1,0,1,0,0,1,0,0,1,1,0,0,0,1,0,0,1,0,0,1,0,1,0,1,1,0,0,0,1,0,0,0,1,1,0,1,0,0,1,1,1,1,0,1,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,1,1,0,0,0,1,0,0,0,1,0,0,1,0,0,1,1,0,1,1,0,1,0,0,0,0,0,1,0,0,0,1,1,1,1,1,1,0,0,1,0,1,0,0,0,1,1,0,0,0,0,1,0,1,1,1,1,0,0,1,0,1,1,0,0,0,0,1,0,0,0,1,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,1,0,0,1,1,1,0,0,0,1,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,1,1,0,1,1,0,1,0,1,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,1,1,0,0,1,1,0,0,1,1,1,0,0,0,0,1,1,1,1,0,0,0,1,0,1,0,0,1,0,1,1,0,1,1,0,1,1,0,0,0,1,1,1,0,0,0,1,1,0,1,1,1,0,0,0,1,0,0,1,1,1,1,1,0,1,1,1,0,1,0,1,1,1,1,1,0,1,1,0,0,0,0,0,1,1,0,0,0,0,0,0,1,0,0,0,1,1,1,0,1,0,0,1,0,0,0,1,1,1,0,0,0,0,1,1,1,1,1,1,0,0,0,1,1,1,1,0,0,1,0,0,1,0,1,1,0,1,0,0,1,0,1,1,1,0,0,0,0,1,1,0,1,1,1,0,1,0,1,1,1,1,0,0,0,0,1,0,1,0,0,0,0,0,1,0,0,1,0,0,1,1,0,1,1,0,1,0,0,0,0,1,1,1,0,0,0,1,0,0,0,1,1,1,1,1,1,0,0,1,1,1,0,1,0,1,0,0,1,0,0,0,1,0,1,0,1,1,0,0,1,1,1,0,0,1,0,0,1,0,0,1,1,1,0,1,0,1,0,0,1,0,0,1,1,0,1,1,0,1,0,0,0,1,1,1,0,0,0,0,0,0,1,0,0,1,1,0,0,0,1,1,1,0,1,1,1,1,0,1,0,1,0,0,0,1,0,0,0,1,1,0,1,1,0,0,0,1,1,1,0,0,1,0,0,1,0,1,0,0,0,0,1,0,1,1,1,1,1,1,0,0,0,1,0,0,1,0,0,1,1,1,0,1,1,1,0,0,0,0,1,1,0,1,1,0,1,1,1,0,1,0,1,1,0,1,0,1,0,0,0,0,0,1,0,0,1,0,1,0,0,1,1,1,0,1,0,1,0,0,1,1,0,0,0,1,0,0,1,0,1,1,0,1,0,0,1,0,1,1,1,1,1,0,0,0,0,1,1,0,0,0,1,0,1,0,1,1,0,1,1,0,0,0,0,0,0,1,0,1,1,1,0,0,0,0,0,0,1,0,1,1,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,1,1,1,0,1,1,0,1,0,1,0,1,1,1,1,1,0,1,0,1,1,1,1,1,0,1,1,0,1,0,1,1,0,1,1,0,1,1,0,0,1,1,1,0,1,0,1,1,1,0,1,0,1,1,0,1,1,1,1,0,0,1,0,1,1,0,1,0,0,0,1,0,0,0,1,1,1,0,0,0,0,0,0,0,0,1,1,1,0,0,1,0,1,0,1,0,1,1,0,1,1,0,1,0,0,0,0,0,1,0,1,1,1,0,0,0,1,0,0,0,1,0,1,1,0,1,0,1,1,0,1,1,1,0,0,1,1,0,0,0,0,1,0,1,1,0,1,1,0,1,0,1,0,0,1,1,1,0,0,1,0,1,0,0,0,1,1,1,1,1,1,0,1,1,1,1,0,1,1,0,1,1,1,0,0,0,1,0,0,1,0,1,0,1,1,1,0,0,1,1,1,1,1,0,1,0,0,1,1,0,1,0,0,0,0,1,0,0,1,0,0,1,1,0,0,1,0,1,0,1,0,0,1,1,0,0,1,0,0,1,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,1,0,1,1,0,0,1,1,1,1,0,1,0,1,1,0,0,0,0,0,0,0,1,1,0,0,0,1,1,1,0,1,0,0,0,0,0,0,0,0,0,0,1,1,1,0,1,0,1,0,1,1,0,0,0,1,0,1,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0,0,1,1,0,1,0,1,0,0,0,1,1,1,0,1,1,0,1,1,1,1,0,1,0,1,1,0,0,1,0,0,0,0,1,0,1,1,1,1,1,0,1,0,0,0,0,1,1,0,0,1,0,1,1,0,0,0,0,1,0,1,0,1,0,0,1,0,1,1,1,1,1,0,0,0,1,1,1,0,0,1,0,1,0,0,1,1,0,0,1,0,1,0,1,1,1,1,0,1,0,0,1,1,0,1,1,0,1,1,1,1,0,0,1,1,1,1,1,0,1,1,1,1,0,0,0,0,0,0,1,1,1,1,0,1,0,1,1,1,0,0,1,0,0,1,0,0,0,1,0,0,1,1,1,0,0,0,0,0,0,1,0,1,1,1,0,0,0,1,1,0,0,1,0,1,1,0,0,1,0,0,1,1,1,1,1,1,0,1,1,1,0,1,1,0,0,0,0,0,1,1,1,0,0,1,1,0,0,0,1,1,0,1,0,1,1,0,1,1,0,1,1,1,1,1,1,0,1,1,0,0,1,1,0,0,1,0,0,0,1,1,1,0,0,0,0,1,1,1,1,0,0,1,1,0,1,0,0,0,0,0,0,1,0,1,0,0,1,0,1,0,0,0,0,0,1,1,0,0,1,0,1,0,1,1,0,0,1,0,0,1,1,0,0,1,1,1,0,1,0,0,0,1,0,0,1,1,0,0,0,];
var gg_b = "1760612402/";

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
