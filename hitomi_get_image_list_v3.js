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
case 1697:
case 2293:
case 2391:
case 1000:
case 3406:
case 2758:
case 2837:
case 2628:
case 3068:
case 2719:
case 565:
case 1356:
case 572:
case 3982:
case 2004:
case 100:
case 960:
case 528:
case 3135:
case 2339:
case 2938:
case 1074:
case 2322:
case 1798:
case 2287:
case 1119:
case 2465:
case 25:
case 2657:
case 1680:
case 2812:
case 1911:
case 1045:
case 4035:
case 2070:
case 809:
case 3218:
case 125:
case 3259:
case 3401:
case 583:
case 3113:
case 2396:
case 4010:
case 99:
case 908:
case 2684:
case 1873:
case 1598:
case 1870:
case 3086:
case 2665:
case 3025:
case 2845:
case 1012:
case 187:
case 3879:
case 2874:
case 1480:
case 545:
case 940:
case 6:
case 892:
case 4002:
case 2519:
case 1804:
case 3514:
case 2803:
case 1037:
case 4047:
case 3772:
case 2428:
case 2800:
case 1723:
case 1549:
case 354:
case 2257:
case 2687:
case 1381:
case 1720:
case 128:
case 2284:
case 3337:
case 3540:
case 3543:
case 500:
case 2724:
case 3729:
case 905:
case 3891:
case 2654:
case 165:
case 3659:
case 2690:
case 2120:
case 2123:
case 2788:
case 2561:
case 1386:
case 3952:
case 212:
case 1124:
case 3312:
case 269:
case 1462:
case 1694:
case 484:
case 3839:
case 920:
case 466:
case 3717:
case 736:
case 525:
case 2042:
case 1034:
case 203:
case 2379:
case 548:
case 1494:
case 1662:
case 2941:
case 989:
case 2149:
case 3144:
case 718:
case 587:
case 3206:
case 2490:
case 847:
case 3517:
case 2493:
case 2033:
case 1523:
case 1749:
case 3300:
case 374:
case 2454:
case 1520:
case 396:
case 1969:
case 2766:
case 3056:
case 1453:
case 330:
case 1309:
case 1908:
case 3743:
case 3960:
case 1450:
case 2602:
case 3580:
case 3973:
case 124:
case 423:
case 1148:
case 67:
case 1171:
case 1341:
case 1055:
case 2867:
case 1378:
case 397:
case 2647:
case 1346:
case 586:
case 3904:
case 488:
case 2413:
case 2369:
case 1414:
case 2968:
case 241:
case 3364:
case 2095:
case 1706:
case 2435:
case 447:
case 2771:
case 1205:
case 3392:
case 2635:
case 1472:
case 467:
case 737:
case 3797:
case 3157:
case 2610:
case 2981:
case 884:
case 3816:
case 1506:
case 544:
case 3184:
case 2189:
case 2613:
case 3780:
case 2855:
case 3698:
case 3811:
case 1501:
case 3128:
case 2925:
case 3783:
case 3220:
case 378:
case 2402:
case 607:
case 1229:
case 3942:
case 2536:
case 771:
case 1417:
case 492:
case 3762:
case 524:
case 649:
case 1272:
case 603:
case 3550:
case 1429:
case 1432:
case 164:
case 733:
case 3553:
case 355:
case 1518:
case 3808:
case 1085:
case 3423:
case 1026:
case 4093:
case 2885:
case 3620:
case 2826:
case 801:
case 3046:
case 1440:
case 2956:
case 3193:
case 3623:
case 1064:
case 1629:
case 1718:
case 206:
case 1759:
case 375:
case 2444:
case 3449:
case 443:
case 2892:
case 1991:
case 409:
case 2731:
case 2736:
case 1996:
case 427:
case 669:
case 2235:
case 612:
case 3930:
case 1214:
case 2213:
case 1852:
case 2951:
case 4054:
case 2118:
case 2159:
case 2799:
case 1922:
case 2210:
case 3078:
case 1338:
case 1939:
case 328:
case 3077:
case 1543:
case 365:
case 372:
case 2992:
case 2926:
case 3653:
case 2544:
case 3188:
case 3549:
case 453:
case 154:
case 2985:
case 2575:
case 3283:
case 7:
case 2132:
case 3694:
case 2699:
case 3325:
case 1717:
case 383:
case 1839:
case 3815:
case 1505:
case 2921:
case 1896:
case 3833:
case 615:
case 679:
case 3297:
case 2370:
case 839:
case 4066:
case 1206:
case 3807:
case 3166:
case 1517:
case 2140:
case 938:
case 1175:
case 659:
case 2499:
case 3494:
case 3662:
case 431:
case 1144:
case 214:
case 1051:
case 3453:
case 1056:
case 3908:
case 2304:
case 1740:
case 1532:
case 352:
case 2276:
case 3523:
case 1300:
case 2744:
case 2775:
case 3368:
case 2964:
case 1459:
case 894:
case 3916:
case 2713:
case 300:
case 2881:
case 1982:
case 2299:
case 2471:
case 3697:
case 2236:
case 3127:
case 3000:
case 1406:
case 2735:
case 2330:
case 1218:
case 1401:
case 1113:
case 2231:
case 2079:
case 3074:
case 1334:
case 3683:
case 111:
case 3119:
case 2315:
case 2955:
case 64:
case 4058:
case 4019:
case 3045:
case 3911:
case 2825:
case 3483:
case 2967:
case 706:
case 3480:
case 2307:
case 1601:
case 3598:
case 3873:
case 3870:
case 2676:
case 348:
case 2671:
case 1377:
case 2868:
case 2648:
case 1772:
case 530:
case 1606:
case 991:
case 31:
case 457:
case 1102:
case 574:
case 3262:
case 1081:
case 1514:
case 2809:
case 251:
case 2488:
case 614:
case 729:
case 456:
case 3272:
case 1594:
case 259:
case 637:
case 3021:
case 80:
case 898:
case 3417:
case 2590:
case 857:
case 1808:
case 2554:
case 1420:
case 3643:
case 3640:
case 2846:
case 2666:
case 3092:
case 3429:
case 142:
case 75:
case 1550:
case 3432:
case 2587:
case 22:
case 364:
case 1649:
case 1869:
case 386:
case 1553:
case 3199:
case 119:
case 3718:
case 2624:
case 3629:
case 3991:
case 1449:
case 77:
case 1750:
case 3443:
case 2787:
case 3440:
case 3136:
case 1623:
case 2466:
case 1193:
case 3852:
case 2461:
case 3131:
case 3617:
case 810:
case 1355:
case 215:
case 1794:
case 1915:
case 4031:
case 1041:
case 3939:
case 193:
case 2934:
case 3338:
case 3405:
case 2688:
case 3996:
case 2153:
case 2793:
case 2790:
case 2150:
case 1187:
case 3214:
case 2258:
case 1930:
case 2266:
case 3589:
case 2584:
case 2427:
case 2765:
case 197:
case 1580:
case 1973:
case 26:
case 2557:
case 1583:
case 651:
case 1364:
case 3414:
case 1165:
case 3672:
case 2903:
case 2900:
case 712:
case 555:
case 769:
case 2360:
case 2528:
case 895:
case 3346:
case 4076:
case 3176:
case 2016:
case 2363:
case 882:
case 542:
case 3882:
case 671:
case 3506:
case 3217:
case 970:
case 562:
case 3614:
case 2728:
case 2619:
case 1392:
case 917:
case 2937:
case 703:
case 934:
case 2180:
case 1797:
case 749:
case 2288:
case 593:
case 2565:
case 633:
case 3229:
case 2224:
case 98:
case 1780:
case 2197:
case 2838:
case 1128:
case 1811:
case 3501:
case 1698:
case 1220:
case 1783:
case 3533:
case 3742:
case 465:
case 1596:
case 2017:
case 791:
case 3962:
case 3530:
case 3347:
case 3302:
case 2551:
case 13:
case 620:
case 3515:
case 1805:
case 1522:
case 921:
case 353:
case 2492:
case 2029:
case 166:
case 2844:
case 3849:
case 483:
case 906:
case 2032:
case 2556:
case 2875:
case 1660:
case 2485:
case 1591:
case 501:
case 1843:
case 3310:
case 1460:
case 2043:
case 2040:
case 2685:
case 3313:
case 1463:
case 3211:
case 3953:
case 2756:
case 2196:
case 1358:
case 395:
case 1959:
case 1918:
case 146:
case 2692:
case 331:
case 3335:
case 2139:
case 1075:
case 1151:
case 4034:
case 1044:
case 2931:
case 689:
case 3542:
case 2936:
case 452:
case 1796:
case 1295:
case 824:
case 1327:
case 1282:
case 2999:
case 2398:
case 3715:
case 373:
case 1739:
case 1817:
case 2976:
case 2802:
case 126:
case 2264:
case 608:
case 4003:
case 3100:
case 3411:
case 3027:
case 2667:
case 3208:
case 69:
case 53:
case 2455:
case 1168:
case 3103:
case 377:
case 1779:
case 468:
case 3416:
case 1366:
case 584:
case 1495:
case 3058:
case 101:
case 2581:
case 2014:
case 1035:
case 4045:
case 3174:
case 2179:
case 4074:
case 3344:
case 2349:
case 3145:
case 2971:
case 1872:
case 232:
case 1125:
case 487:
case 941:
case 1186:
case 2072:
case 9:
case 3504:
case 281:
case 2509:
case 4012:
case 3997:
case 2568:
case 2320:
case 1252:
case 2810:
case 546:
case 2323:
case 2221:
case 3616:
case 2467:
case 2725:
case 4037:
case 3570:
case 1047:
case 1002:
case 398:
case 30:
case 1181:
case 0:
case 357:
case 1923:
case 2887:
case 1850:
case 1920:
case 1569:
case 2477:
case 3818:
case 3859:
case 3121:
case 2854:
case 192:
case 3929:
case 3328:
case 1630:
case 770:
case 2578:
case 2541:
case 2237:
case 3696:
case 2389:
case 3185:
case 547:
case 1633:
case 734:
case 3639:
case 163:
case 486:
case 3622:
case 3752:
case 3192:
case 949:
case 3917:
case 4092:
case 3357:
case 289:
case 750:
case 3439:
case 969:
case 3365:
case 3422:
case 4064:
case 2961:
case 1430:
case 1146:
case 2301:
case 2203:
case 3496:
case 3036:
case 1433:
case 2108:
case 1376:
case 1273:
case 800:
case 1949:
case 1348:
case 2677:
case 2306:
case 1141:
case 1270:
case 2966:
case 2245:
case 3763:
case 1087:
case 2274:
case 3760:
case 1331:
case 2637:
case 3296:
case 1138:
case 3795:
case 2958:
case 1230:
case 592:
case 1716:
case 681:
case 240:
case 1404:
case 3782:
case 3387:
case 147:
case 2857:
case 2738:
case 1065:
case 1880:
case 339:
case 2927:
case 1711:
case 3889:
case 2884:
case 97:
case 1336:
case 3076:
case 563:
case 1670:
case 2538:
case 29:
case 543:
case 1511:
case 3801:
case 883:
case 208:
case 2083:
case 907:
case 3679:
case 167:
case 1057:
case 713:
case 2645:
case 872:
case 1516:
case 3806:
case 799:
case 3582:
case 2600:
case 3972:
case 4067:
case 1028:
case 1411:
case 2745:
case 553:
case 1208:
case 4068:
case 2965:
case 2246:
case 2774:
case 177:
case 2305:
case 1773:
case 110:
case 28:
case 326:
case 301:
case 3906:
case 3035:
case 789:
case 2700:
case 1145:
case 1344:
case 2278:
case 862:
case 2241:
case 875:
case 2343:
case 2537:
case 3482:
case 2340:
case 2173:
case 270:
case 3366:
case 3013:
case 635:
case 3252:
case 2503:
case 842:
case 3682:
case 2500:
case 1616:
case 3695:
case 936:
case 2928:
case 3324:
case 2332:
case 250:
case 1504:
case 2737:
case 2858:
case 3002:
case 96:
case 3181:
case 1573:
case 1980:
case 1898:
case 2317:
case 2957:
case 3047:
case 1088:
case 1302:
case 577:
case 33:
case 1515:
case 2534:
case 1742:
case 1533:
case 3596:
case 822:
case 1962:
case 915:
case 2641:
case 1347:
case 510:
case 2678:
case 1530:
case 3840:
case 2646:
case 2866:
case 3663:
case 3843:
case 1849:
case 366:
case 1669:
case 202:
case 2142:
case 2115:
case 3319:
case 195:
case 3959:
case 3358:
case 3075:
case 1335:
case 1134:
case 3044:
case 2049:
case 3151:
case 3791:
case 92:
case 1950:
case 1310:
case 2130:
case 1823:
case 708:
case 1820:
case 2133:
case 1953:
case 1313:
case 1061:
case 1216:
case 638:
case 3327:
case 496:
case 2441:
case 3652:
case 1994:
case 299:
case 3817:
case 2478:
case 2734:
case 173:
case 1542:
case 858:
case 959:
case 4056:
case 1730:
case 430:
case 3295:
case 760:
case 2353:
case 3404:
case 650:
case 1387:
case 3215:
case 1222:
case 2910:
case 951:
case 2350:
case 1239:
case 830:
case 3331:
case 1071:
case 3138:
case 3897:
case 2935:
case 2006:
case 3230:
case 235:
case 1155:
case 1914:
case 2468:
case 2001:
case 388:
case 1889:
case 1390:
case 2567:
case 1291:
case 3473:
case 1076:
case 3336:
case 2686:
case 1479:
case 3399:
case 2755:
case 2625:
case 1679:
case 933:
case 2486:
case 68:
case 2362:
case 3057:
case 2767:
case 3670:
case 2876:
case 2089:
case 1801:
case 854:
case 3516:
case 1167:
case 670:
case 1582:
case 2668:
case 2848:
case 576:
case 422:
case 634:
case 617:
case 2481:
case 1595:
case 1563:
case 1859:
case 1818:
case 3508:
case 1691:
case 1932:
case 2831:
case 392:
case 2152:
case 1560:
case 3923:
case 2785:
case 613:
case 3853:
case 3569:
case 2286:
case 2564:
case 1639:
case 2383:
case 1752:
case 1192:
case 1357:
case 1917:
case 442:
case 2721:
case 3894:
case 2651:
case 2380:
case 3407:
case 699:
case 2836:
case 1696:
case 1126:
case 1185:
case 811:
case 3430:
case 3607:
case 2163:
case 1905:
case 4046:
case 1036:
case 2521:
case 343:
case 1099:
case 1365:
case 216:
case 3415:
case 1164:
case 475:
case 419:
case 3204:
case 2209:
case 3642:
case 2451:
case 2456:
case 3708:
case 1943:
case 327:
case 4041:
case 2526:
case 4078:
case 2944:
case 2585:
case 3178:
case 2975:
case 3054:
case 2764:
case 2018:
case 176:
case 3141:
case 1023:
case 517:
case 694:
case 1107:
case 1646:
case 676:
case 818:
case 3556:
case 747:
case 1777:
case 1372:
case 570:
case 2024:
case 3029:
case 3492:
case 3664:
case 975:
case 102:
case 919:
case 3844:
case 2515:
case 723:
case 993:
case 1861:
case 3421:
case 58:
case 2177:
case 84:
case 2742:
case 2507:
case 4091:
case 2994:
case 199:
case 2715:
case 3191:
case 3621:
case 2730:
case 2542:
case 2733:
case 3931:
case 437:
case 282:
case 304:
case 113:
case 414:
case 2134:
case 295:
case 942:
case 656:
case 1314:
case 2066:
case 1577:
case 3040:
case 2820:
case 1133:
case 3043:
case 1987:
case 550:
case 1446:
case 3255:
case 955:
case 3971:
case 4079:
case 134:
case 433:
case 3349:
case 1700:
case 763:
case 2344:
case 3179:
case 2375:
case 2174:
case 2058:
case 3581:
case 3768:
case 502:
case 3709:
case 1537:
case 1241:
case 1170:
case 1774:
case 2103:
case 277:
case 3455:
case 1098:
case 3667:
case 471:
case 3847:
case 2208:
case 2100:
case 3586:
case 2269:
case 879:
case 815:
case 18:
case 3802:
case 1512:
case 2773:
case 978:
case 3976:
case 257:
case 1574:
case 639:
case 727:
case 599:
case 298:
case 1545:
case 1984:
case 1827:
case 1638:
case 859:
case 2570:
case 3655:
case 1712:
case 1317:
case 2898:
case 3226:
case 2611:
case 958:
case 2573:
case 2980:
case 82:
case 3221:
case 2616:
case 3323:
case 513:
case 3568:
case 3781:
case 3320:
case 2997:
case 743:
case 1737:
case 1858:
case 3509:
case 150:
case 1332:
case 3072:
case 1329:
case 1928:
case 1651:
case 1380:
case 1721:
case 389:
case 701:
case 2622:
case 3062:
case 2752:
case 1383:
case 2639:
case 42:
case 3890:
case 3988:
case 3389:
case 138:
case 3237:
case 3893:
case 673:
case 996:
case 2328:
case 3924:
case 1792:
case 2929:
case 3546:
case 851:
case 974:
case 2691:
case 2859:
case 1397:
case 1286:
case 682:
case 535:
case 591:
case 3887:
case 3050:
case 3274:
case 2279:
case 871:
case 2943:
case 3746:
case 954:
case 3053:
case 3245:
case 3966:
case 1764:
case 1018:
case 276:
case 305:
case 3306:
case 1975:
case 1944:
case 294:
case 3677:
case 479:
case 1521:
case 3108:
case 3200:
case 833:
case 3301:
case 3961:
case 320:
case 1209:
case 3741:
case 116:
case 2164:
case 3094:
case 653:
case 3434:
case 2076:
case 814:
case 2393:
case 1567:
case 3116:
case 3884:
case 3445:
case 1256:
case 60:
case 766:
case 1625:
case 3612:
case 1394:
case 3474:
case 1350:
case 73:
case 1681:
case 46:
case 1910:
case 2222:
case 2782:
case 1409:
case 340:
case 1913:
case 3919:
case 191:
case 3958:
case 3359:
case 1006:
case 2048:
case 1848:
case 1668:
case 1871:
case 3600:
case 2167:
case 3097:
case 3865:
case 3080:
case 3645:
case 610:
case 746:
case 1767:
case 1362:
case 1486:
case 3674:
case 308:
case 2801:
case 1902:
case 516:
case 3277:
case 1555:
case 2366:
case 3537:
case 4070:
case 1709:
case 3173:
case 370:
case 2482:
case 3343:
case 3241:
case 3278:
case 2010:
case 2872:
case 1948:
case 3700:
case 1349:
case 407:
case 3703:
case 1179:
case 2035:
case 201:
case 1768:
case 1581:
case 38:
case 4004:
case 1586:
case 1264:
case 2901:
case 3512:
case 1976:
case 2779:
case 3774:
case 3965:
case 2168:
case 3098:
case 821:
case 1847:
case 2361:
case 3745:
case 2263:
case 2047:
case 1786:
case 3638:
case 794:
case 3827:
case 3712:
case 1725:
case 688:
case 1467:
case 3317:
case 1285:
case 1292:
case 3574:
case 480:
case 2989:
case 2814:
case 181:
case 3858:
case 1072:
case 2695:
case 623:
case 3928:
case 3329:
case 1323:
case 2682:
case 3503:
case 504:
case 1813:
case 1781:
case 1568:
case 412:
case 739:
case 944:
case 4042:
case 1032:
case 1844:
case 284:
case 1029:
case 627:
case 1426:
case 2663:
case 3023:
case 1267:
case 3866:
case 3020:
case 2840:
case 3678:
case 1421:
case 2539:
case 643:
case 2522:
case 2295:
case 2156:
case 1936:
case 3478:
case 2739:
case 2652:
case 3441:
case 2722:
case 1398:
case 2282:
case 2327:
case 1621:
case 1751:
case 3133:
case 1040:
case 4030:
case 3577:
case 4033:
case 2460:
case 449:
case 4015:
case 2832:
case 1931:
case 403:
case 104:
case 2044:
case 964:
case 3824:
case 2791:
case 2151:
case 2075:
case 3314:
case 2918:
case 3115:
case 2358:
case 3954:
case 2959:
case 3256:
case 2711:
case 1612:
case 2065:
case 3625:
case 1857:
case 1738:
case 247:
case 948:
case 2473:
case 2336:
case 1116:
case 3567:
case 288:
case 1884:
case 2470:
case 4082:
case 589:
case 335:
case 1359:
case 2230:
case 391:
case 1318:
case 3935:
case 2897:
case 1828:
case 2331:
case 2233:
case 3910:
case 3350:
case 1234:
case 3681:
case 753:
case 3251:
case 3481:
case 601:
case 900:
case 160:
case 3609:
case 2242:
case 3668:
case 3848:
case 3871:
case 773:
case 1097:
case 2084:
case 3902:
case 108:
case 3089:
case 520:
case 925:
case 869:
case 1538:
case 1645:
case 1865:
case 731:
case 3425:
case 3362:
case 1674:
case 782:
case 626:
case 1083:
case 3486:
case 2633:
case 1389:
case 338:
case 1578:
case 2894:
case 3721:
case 2442:
case 3380:
case 87:
case 3281:
case 3564:
case 2569:
case 3286:
case 952:
case 2920:
case 3225:
case 3785:
case 2850:
case 3726:
case 2923:
case 945:
case 1924:
case 880:
case 1854:
case 1477:
case 777:
case 3397:
case 2054:
case 3059:
case 105:
case 972:
case 965:
case 2270:
case 1306:
case 2178:
case 1677:
case 3585:
case 2949:
case 3944:
case 928:
case 227:
case 666:
case 1050:
case 798:
case 757:
case 421:
case 1245:
case 1966:
case 3456:
case 2642:
case 1961:
case 2204:
case 63:
case 1094:
case 1169:
case 316:
case 1741:
case 1434:
case 508:
case 1108:
case 3163:
case 1200:
case 2093:
case 1301:
case 807:
case 4063:
case 2146:
case 2607:
case 2689:
case 1231:
case 2113:
case 2110:
case 2401:
case 3070:
case 1547:
case 2259:
case 417:
case 1502:
case 3812:
case 1886:
case 1955:
case 3322:
case 3465:
case 3287:
case 764:
case 3938:
case 3339:
case 434:
case 133:
case 622:
case 1299:
case 48:
case 2982:
case 1713:
case 2995:
case 3198:
case 3758:
case 171:
case 3628:
case 3290:
case 3391:
case 1448:
case 1236:
case 1471:
case 3428:
case 2772:
case 1671:
case 3803:
case 1513:
case 2514:
case 151:
case 1809:
case 380:
case 3558:
case 2102:
case 1342:
case 1967:
case 2879:
case 939:
case 2025:
case 1747:
case 744:
case 2086:
case 1702:
case 537:
case 1676:
case 3527:
case 2601:
case 514:
case 1307:
case 697:
case 1921:
case 2822:
case 2839:
case 2717:
case 2952:
case 312:
case 1851:
case 369:
case 1699:
case 1132:
case 3561:
case 533:
case 4020:
case 3123:
case 3120:
case 693:
case 1992:
case 2659:
case 3654:
case 976:
case 2543:
case 2337:
case 994:
case 2289:
case 3566:
case 1117:
case 619:
case 675:
case 724:
case 1575:
case 3687:
case 1856:
case 1544:
case 3257:
case 571:
case 956:
case 642:
case 2960:
case 3524:
case 2529:
case 3487:
case 891:
case 2532:
case 1304:
case 230:
case 1105:
case 3766:
case 2963:
case 3877:
case 1964:
case 1775:
case 2303:
case 2201:
case 1091:
case 2300:
case 1431:
case 1373:
case 2705:
case 1436:
case 1248:
case 2517:
case 2206:
case 3490:
case 1143:
case 3149:
case 3761:
case 114:
case 1499:
case 349:
case 3941:
case 3379:
case 2175:
case 137:
case 1903:
case 3435:
case 341:
case 1419:
case 2364:
case 136:
case 2165:
case 783:
case 2597:
case 1016:
case 1363:
case 1261:
case 3909:
case 2904:
case 3101:
case 3410:
case 297:
case 2038:
case 1765:
case 1945:
case 1584:
case 957:
case 899:
case 1557:
case 16:
case 2249:
case 998:
case 2973:
case 2580:
case 1224:
case 1565:
case 579:
case 515:
case 1784:
case 278:
case 3447:
case 2783:
case 3986:
case 2220:
case 1912:
case 3925:
case 1627:
case 1757:
case 1197:
case 2780:
case 3576:
case 2321:
case 2223:
case 3613:
case 3571:
case 3189:
case 2385:
case 3548:
case 3981:
case 1288:
case 2797:
case 1180:
case 1183:
case 3635:
case 361:
case 3531:
case 536:
case 1846:
case 725:
case 674:
case 438:
case 1554:
case 696:
case 3247:
case 2808:
case 2553:
case 3864:
case 2869:
case 630:
case 2649:
case 590:
case 3675:
case 1162:
case 242:
case 1424:
case 2907:
case 3599:
case 159:
case 1488:
case 973:
case 3052:
case 2367:
case 1841:
case 2942:
case 1661:
case 3536:
case 2078:
case 3210:
case 88:
case 2915:
case 2041:
case 3799:
case 3821:
case 179:
case 2154:
case 2794:
case 54:
case 4018:
case 3213:
case 1461:
case 953:
case 1258:
case 3235:
case 870:
case 416:
case 3731:
case 2449:
case 3444:
case 3892:
case 1624:
case 787:
case 262:
case 1754:
case 1194:
case 219:
case 2193:
case 2753:
case 1466:
case 2623:
case 3063:
case 3316:
case 1227:
case 2298:
case 3826:
case 748:
case 2750:
case 2620:
case 3885:
case 3060:
case 1788:
case 1120:
case 1007:
case 89:
case 3921:
case 4029:
case 1834:
case 3699:
case 2462:
case 2694:
case 2325:
case 3851:
case 909:
case 2386:
case 2720:
case 2650:
case 3856:
case 644:
case 1257:
case 2549:
case 3985:
case 3544:
case 2188:
case 2723:
case 2653:
case 1654:
case 265:
case 758:
case 797:
case 2077:
case 529:
case 3117:
case 228:
case 1284:
case 3631:
case 2368:
case 992:
case 1454:
case 3775:
case 3744:
case 2161:
case 985:
case 3276:
case 2450:
case 1487:
case 1946:
case 778:
case 2309:
case 3105:
case 3304:
case 1766:
case 1149:
case 314:
case 1588:
case 1941:
case 2842:
case 57:
case 337:
case 963:
case 103:
case 3373:
case 2166:
case 1490:
case 1030:
case 3143:
case 2680:
case 2253:
case 3886:
case 1727:
case 2119:
case 3114:
case 3955:
case 2798:
case 2074:
case 1339:
case 2683:
case 2250:
case 1938:
case 967:
case 820:
case 268:
case 1073:
case 3476:
case 1396:
case 755:
case 512:
case 569:
case 225:
case 1254:
case 3330:
case 3547:
case 371:
case 1719:
case 1198:
case 1837:
case 1290:
case 3735:
case 2000:
case 1293:
case 2697:
case 3710:
case 2294:
case 129:
case 3881:
case 1004:
case 200:
case 2356:
case 2916:
case 1519:
case 2804:
case 3535:
case 3510:
case 1428:
case 2037:
case 3513:
case 503:
case 248:
case 1527:
case 889:
case 2870:
case 2598:
case 988:
case 3342:
case 4072:
case 287:
case 762:
case 624:
case 775:
case 1845:
case 3172:
case 3747:
case 2483:
case 32:
case 264:
case 1644:
case 286:
case 3977:
case 1864:
case 489:
case 2092:
case 2429:
case 652:
case 3846:
case 3666:
case 881:
case 2085:
case 2863:
case 5:
case 2643:
case 2518:
case 645:
case 1247:
case 3554:
case 3590:
case 3593:
case 3878:
case 1536:
case 2021:
case 3661:
case 2272:
case 1599:
case 2605:
case 2214:
case 3219:
case 4053:
case 3790:
case 3150:
case 4050:
case 683:
case 3793:
case 93:
case 2996:
case 2405:
case 1736:
case 2939:
case 1210:
case 2922:
case 1821:
case 315:
case 1118:
case 2131:
case 405:
case 1951:
case 1213:
case 3461:
case 1311:
case 3466:
case 1956:
case 628:
case 2440:
case 3382:
case 3008:
case 2136:
case 3227:
case 1826:
case 672:
case 1731:
case 2991:
case 1892:
case 2632:
case 3395:
case 2759:
case 966:
case 2629:
case 2718:
case 106:
case 3016:
case 804:
case 390:
case 3360:
case 61:
case 2205:
case 1:
case 3900:
case 2672:
case 3903:
case 336:
case 1369:
case 2414:
case 3419:
case 754:
case 440:
case 2701:
case 1275:
case 1244:
case 36:
case 3557:
case 1776:
case 1602:
case 1867:
case 3974:
case 2055:
case 2341:
case 2240:
case 648:
case 3945:
case 2589:
case 774:
case 1986:
case 1447:
case 625:
case 1925:
case 3352:
case 2501:
case 796:
case 2067:
case 1855:
case 1576:
case 926:
case 730:
case 2229:
case 3565:
case 2232:
case 2789:
case 1402:
case 3784:
case 2895:
case 3937:
case 4083:
case 3183:
case 2472:
case 3619:
case 161:
case 2614:
case 1571:
case 506:
case 1613:
case 1548:
case 318:
case 2506:
case 1610:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1759248001/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,0,1,1,1,0,0,0,1,0,1,1,1,0,1,1,0,1,0,1,1,1,0,1,1,0,0,1,0,0,0,0,0,0,1,1,0,1,0,1,1,1,0,1,1,1,0,1,0,1,1,1,1,0,0,1,1,0,0,1,0,0,1,0,0,1,1,0,0,0,1,1,1,0,1,0,1,0,1,1,0,1,0,1,0,1,1,0,0,0,1,1,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,1,0,0,1,0,1,1,0,1,1,1,1,0,0,0,1,0,0,1,1,1,0,0,1,0,0,0,1,1,1,0,1,1,1,0,0,1,1,0,0,1,1,0,1,1,1,1,0,0,0,1,0,0,0,0,0,1,1,1,0,1,0,1,1,0,0,1,0,1,0,1,1,1,1,1,0,1,1,1,0,0,0,1,0,1,0,1,0,0,0,0,0,1,1,0,1,0,1,1,1,0,1,0,0,0,1,1,0,1,1,1,1,1,0,1,0,0,1,0,1,0,1,1,0,1,1,1,1,0,0,0,1,1,1,1,0,0,1,0,0,1,1,1,1,1,0,1,0,1,1,0,1,0,0,1,1,0,0,0,1,1,1,1,1,0,0,0,1,1,0,0,1,0,1,0,0,0,0,1,1,1,1,0,0,1,0,0,0,0,0,1,1,0,0,1,1,0,1,1,1,0,1,0,0,0,1,0,1,0,1,1,1,1,1,0,0,0,1,0,0,1,1,1,0,0,0,0,0,0,0,1,0,1,1,1,1,0,0,1,1,0,0,0,0,1,0,1,1,1,0,1,1,0,0,0,1,1,0,0,0,0,0,0,0,1,0,0,1,0,1,1,0,1,1,0,1,0,0,0,0,0,1,1,0,0,0,0,1,1,1,1,0,1,0,1,0,1,0,1,1,0,1,0,1,0,0,1,0,1,0,0,0,1,1,1,0,1,1,0,0,1,0,0,1,1,0,0,1,0,1,0,0,1,1,1,0,1,0,1,1,0,0,1,1,0,0,1,1,1,1,1,1,1,0,0,0,0,1,1,0,1,1,1,0,1,1,1,0,0,1,1,0,0,1,0,0,0,0,1,1,0,1,1,1,0,1,1,1,0,0,0,0,0,1,0,1,0,1,0,1,0,0,0,0,0,0,1,1,0,1,1,1,0,0,1,1,0,0,0,1,1,0,1,0,0,0,1,1,1,1,0,0,0,0,0,0,0,1,0,1,1,0,1,0,1,1,1,1,1,1,0,0,1,0,1,1,1,0,0,0,0,1,0,1,0,0,1,0,1,1,1,0,0,1,0,0,1,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,1,1,0,0,1,0,1,0,0,0,0,1,0,1,0,0,1,0,0,0,0,0,0,0,1,0,1,1,0,0,0,1,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,1,1,0,1,1,0,1,1,1,1,1,1,0,1,1,0,0,0,0,0,0,0,0,1,1,0,1,0,0,0,1,1,1,1,0,0,1,1,1,0,0,1,0,0,1,0,1,0,1,0,1,1,0,1,0,1,1,1,0,0,1,1,1,1,0,1,1,1,1,0,0,0,1,0,1,0,0,0,1,0,0,1,0,0,1,0,1,1,1,0,0,1,0,0,0,0,0,1,1,0,0,0,1,0,0,1,0,1,0,0,0,1,0,1,1,0,0,0,1,0,0,0,1,0,0,1,1,1,0,0,1,1,1,0,1,0,1,0,1,1,0,1,0,0,0,0,0,0,1,1,0,1,1,0,1,0,0,0,1,1,0,0,1,1,0,1,0,0,0,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,0,1,1,1,0,1,1,0,1,1,0,0,0,1,1,0,1,1,1,1,1,1,0,0,0,0,1,1,0,1,1,1,0,0,0,0,0,0,1,1,1,1,0,1,0,0,1,0,0,1,1,0,0,0,1,1,1,1,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,0,0,1,1,1,0,0,1,0,1,1,1,1,0,0,1,0,1,0,0,0,0,0,1,0,0,1,1,0,0,1,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,1,0,0,1,0,0,0,0,0,1,0,1,1,1,1,1,1,0,1,1,0,0,1,0,0,0,0,1,0,1,0,1,0,1,0,1,0,1,0,0,1,1,1,1,0,1,1,1,0,1,0,1,1,1,1,0,1,1,0,1,0,0,0,1,0,1,0,0,0,0,1,1,0,0,1,1,0,0,1,0,1,1,0,0,1,1,1,0,0,0,1,1,1,0,1,1,0,0,1,1,1,1,1,0,0,0,0,0,0,1,1,1,1,0,1,0,1,0,1,0,0,1,1,0,1,1,0,1,1,0,0,0,1,1,0,1,1,0,1,0,0,1,1,1,1,0,1,1,0,0,0,0,0,1,1,1,0,0,0,1,0,1,1,1,0,0,0,1,1,1,0,1,1,0,1,0,0,0,0,1,0,0,1,0,1,1,1,0,1,1,1,1,1,1,0,1,0,0,1,0,0,0,0,0,1,1,1,0,1,1,1,0,0,0,1,0,1,0,0,0,1,1,1,1,0,0,0,1,1,0,0,1,0,1,1,1,1,0,0,1,0,0,0,1,1,0,0,1,0,1,0,1,0,1,0,1,0,1,1,0,1,0,0,0,1,1,0,1,0,1,1,0,1,0,1,1,0,0,1,0,0,1,1,1,0,1,0,1,0,0,0,1,1,0,1,1,0,1,1,0,1,1,0,1,0,0,1,0,1,1,1,1,1,1,0,1,0,0,0,1,0,1,0,0,0,0,1,0,1,1,1,0,0,0,0,1,0,1,0,0,1,0,0,0,1,0,0,1,1,0,0,1,1,1,1,0,1,1,1,0,1,0,1,0,0,1,0,0,0,1,0,0,1,0,0,1,0,1,0,0,0,0,0,1,1,1,1,0,0,0,0,0,1,1,0,0,0,0,0,1,1,0,1,1,0,0,1,1,0,0,0,1,0,0,1,0,1,1,0,0,1,0,0,1,0,1,0,1,0,0,0,1,1,0,0,1,0,1,0,1,1,0,1,0,1,1,0,1,1,0,1,0,0,0,1,1,0,1,0,1,0,0,0,0,0,0,0,1,0,1,1,1,0,1,1,1,1,1,0,0,0,0,0,1,1,0,0,1,1,1,1,0,0,0,0,0,1,1,0,0,1,1,1,0,0,1,1,1,1,0,1,0,0,1,1,1,1,1,0,0,0,1,0,1,1,1,0,0,1,1,1,0,1,0,0,1,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,1,1,0,1,0,0,1,1,0,0,0,1,1,1,0,0,0,0,1,0,0,0,0,1,1,0,0,0,1,0,1,1,0,1,1,0,1,0,1,0,0,0,1,0,1,0,0,0,0,0,0,1,0,0,0,0,0,1,0,1,0,1,1,0,1,1,0,0,0,1,0,0,1,0,0,1,1,1,0,1,1,1,0,1,0,0,1,1,0,1,1,1,1,0,1,0,0,0,1,0,1,0,0,1,1,0,1,1,1,1,0,0,1,1,1,1,0,0,0,1,1,0,1,0,1,1,0,1,1,1,1,1,0,0,0,1,1,1,1,1,0,0,0,0,1,1,0,1,0,0,1,0,0,0,1,1,1,1,1,1,1,1,1,0,1,1,0,1,0,0,0,0,0,1,0,1,1,1,0,1,1,0,1,0,0,0,1,1,0,0,0,0,0,0,1,0,1,0,1,0,1,1,0,0,1,1,1,1,0,0,0,0,0,0,0,1,1,1,1,0,1,0,0,0,0,1,0,1,1,0,1,0,1,1,1,1,0,0,0,0,0,1,1,1,0,0,0,0,0,0,1,0,0,0,1,0,0,1,0,1,0,1,1,1,0,1,0,1,0,0,0,1,1,0,1,1,0,0,1,1,0,0,1,0,1,0,1,1,1,0,0,1,0,0,1,0,1,1,0,0,0,1,1,1,1,1,0,1,1,0,1,0,1,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,1,1,0,0,1,0,1,0,0,0,0,0,1,1,1,1,1,1,0,1,1,1,0,1,0,1,1,0,1,1,0,1,1,1,0,1,0,1,1,1,0,0,1,0,1,1,0,1,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,1,1,0,1,0,0,0,1,1,1,0,1,0,0,1,0,1,0,0,0,0,1,0,0,0,0,1,0,1,0,0,1,1,0,1,0,0,1,0,1,0,0,1,0,1,1,1,0,1,0,0,1,1,1,0,1,0,1,0,1,0,0,1,1,1,0,0,1,0,1,0,1,1,1,0,0,1,1,0,1,0,1,1,1,0,1,1,1,0,1,0,0,0,1,1,0,1,1,0,0,1,1,1,0,1,1,0,0,1,0,1,0,0,1,0,0,0,0,0,1,1,0,0,0,1,1,1,1,0,0,1,1,0,1,1,1,1,1,1,0,0,0,1,1,0,1,0,1,0,0,0,0,0,0,1,1,1,0,0,0,0,1,1,0,1,1,0,0,1,0,1,1,1,1,0,1,0,0,1,1,1,1,0,1,0,1,1,0,1,0,1,1,0,0,0,1,1,0,1,1,1,1,1,1,0,0,0,0,0,1,0,1,1,0,0,1,0,1,1,1,0,1,1,0,0,0,0,0,0,1,0,1,1,0,1,0,1,0,0,0,0,0,0,1,1,1,1,0,0,0,1,0,0,0,0,1,1,1,1,1,1,1,0,0,1,1,1,0,1,1,0,0,1,1,1,0,1,0,0,0,0,1,0,0,0,1,1,0,0,1,1,1,1,1,0,0,0,0,0,1,1,1,1,0,0,0,0,0,1,0,0,0,1,1,0,0,0,1,1,0,0,1,1,0,0,1,1,0,1,1,1,0,0,0,1,1,1,0,0,1,0,1,1,0,0,1,0,1,0,1,0,1,0,0,1,1,0,1,0,1,0,0,0,0,1,1,1,0,0,0,1,1,0,0,0,0,1,0,0,0,0,0,1,0,1,1,1,1,1,0,1,0,1,1,0,0,0,0,1,0,1,0,0,1,0,0,0,1,1,1,0,0,1,0,0,0,1,0,0,1,1,1,1,0,0,1,1,0,1,1,0,1,0,1,0,0,0,0,0,1,0,0,0,0,0,1,1,1,1,0,1,1,1,0,0,1,1,0,1,0,0,1,1,0,1,0,1,0,1,1,0,1,0,1,1,0,0,1,1,0,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1,1,0,1,1,1,1,0,0,0,1,0,1,1,1,1,0,0,0,1,1,0,0,0,1,1,1,0,0,0,1,1,0,0,0,0,1,0,0,0,0,1,1,1,0,0,1,1,0,0,0,1,0,0,1,0,1,0,1,0,0,1,1,1,1,1,0,0,0,1,0,1,1,0,0,1,0,1,1,1,1,0,0,1,0,0,0,1,0,0,1,1,1,0,1,0,0,1,1,0,1,0,1,0,0,0,0,1,0,0,0,0,1,1,1,1,0,1,0,1,0,0,1,0,0,1,1,1,0,1,1,0,0,1,0,0,0,0,1,1,0,1,0,1,1,0,1,0,0,1,1,0,0,1,0,1,0,0,1,1,1,1,1,1,0,0,1,0,0,0,1,1,0,1,0,1,1,0,0,1,0,0,1,0,1,1,0,0,1,0,0,0,0,1,1,0,0,1,1,0,0,1,0,1,0,1,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,1,0,1,0,1,1,1,0,1,0,0,0,0,1,1,0,0,1,1,1,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,1,0,0,0,1,1,1,0,1,1,1,1,1,0,1,0,1,0,1,0,0,0,0,0,0,0,0,0,1,1,0,1,0,0,1,0,0,0,0,0,0,0,1,1,0,1,0,0,1,1,1,1,0,1,0,0,1,0,0,1,0,0,1,1,1,1,0,0,0,0,1,1,1,0,0,0,0,0,1,1,1,0,0,1,0,0,1,0,1,0,0,0,0,0,1,0,0,1,1,0,0,0,0,0,0,0,0,1,1,1,0,0,0,1,0,1,0,1,1,1,1,1,0,1,0,1,1,0,0,1,1,1,1,0,0,1,1,1,0,0,0,0,0,1,0,1,0,0,0,1,0,1,0,1,1,1,0,0,1,0,0,0,1,1,1,0,1,1,0,0,0,0,0,1,0,1,0,0,0,1,1,0,1,0,1,1,0,0,1,0,1,1,1,1,0,1,0,0,1,0,0,1,0,0,1,0,0,1,1,0,1,1,0,1,1,1,1,0,0,1,0,1,0,0,0,0,1,0,0,0,0,0,1,0,1,1,0,0,0,0,0,0,1,0,0,0,0,1,1,1,1,0,1,0,0,1,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,1,0,1,0,1,0,0,1,1,1,0,0,0,1,1,0,1,1,1,0,1,0,0,1,0,0,0,0,1,0,0,1,0,1,1,1,1,1,0,1,1,1,1,0,1,1,0,1,1,1,0,0,1,0,1,0,1,0,1,0,1,1,1,1,1,0,0,1,1,1,0,1,1,0,0,0,0,0,1,1,0,1,0,0,0,1,0,0,0,0,0,1,0,0,1,1,1,1,0,1,0,1,0,1,0,0,0,0,0,1,0,1,1,1,1,1,0,1,1,0,1,1,0,1,0,1,1,0,0,1,0,0,1,0,1,0,1,1,0,1,1,1,1,0,0,0,0,0,1,0,0,0,1,0,1,1,1,0,0,1,1,0,1,0,1,0,0,1,0,1,1,0,1,0,0,0,1,1,1,0,0,0,1,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,0,0,1,0,1,0,0,1,0,1,0,0,0,1,1,0,0,1,0,0,0,1,1,1,1,0,0,0,1,1,1,0,1,0,1,0,1,0,0,1,0,0,0,1,0,0,0,0,0,1,1,1,0,0,0,1,0,0,1,1,1,1,0,1,0,1,1,1,0,1,1,1,0,1,0,1,1,1,0,0,1,1,0,0,0,1,0,1,1,0,1,1,1,1,1,1,1,1,1,0,1,0,1,0,0,0,1,1,0,1,0,1,1,0,0,1,1,0,1,1,1,1,0,0,0,1,1,0,0,0,1,0,1,0,1,1,1,0,1,0,0,0,1,0,0,1,0,0,1,0,0,0,0,1,0,0,0,0,0,1,1,1,0,0,0,0,0,1,1,0,0,0,1,0,0,1,0,0,1,0,1,1,1,1,0,0,0,0,1,0,1,0,0,0,1,0,1,1,1,1,0,1,1,1,1,1,0,0,1,0,1,1,1,1,0,1,0,1,0,0,1,1,0,1,0,1,0,1,0,1,1,0,0,0,0,1,1,0,0,1,1,0,0,0,0,1,0,1,0,0,0,1,0,1,1,0,0,0,1,0,1,0,0,1,1,1,0,0,0,1,0,0,0,1,0,1,0,1,1,1,0,1,0,0,1,1,1,1,0,1,1,1,0,0,1,1,1,1,1,1,0,0,1,0,1,0,1,0,0,0,0,1,1,0,0,1,1,0,1,0,1,0,1,0,1,1,1,1,0,1,0,0,1,0,1,0,0,0,1,0,0,0,0,0,0,1,1,1,1,1,0,0,1,1,0,1,1,0,0,1,0,1,0,0,0,1,1,0,1,0,0,0,1,0,0,0,0,0,1,1,0,0,1,0,0,0,1,1,0,1,1,0,0,0,0,0,0,0,0,1,1,0,1,0,0,1,1,0,0,0,1,1,0,0,1,1,0,0,1,1,0,1,1,0,1,0,0,0,1,1,1,1,1,1,0,1,0,1,1,0,0,0,1,0,0,1,0,0,0,0,0,1,0,1,1,0,0,1,0,1,1,1,0,1,1,0,0,0,1,0,0,1,0,1,1,1,1,1,1,0,0,0,0,1,1,1,0,1,0,0,0,0,1,0,0,0,1,0,1,0,1,0,0,1,0,0,0,1,0,0,0,1,1,1,0,1,1,1,1,1,1,0,0,0,0,0,0,0,1,1,0,1,1,1,1,0,0,0,1,0,1,1,0,1,0,0,1,1,0,1,1,1,1,0,1,1,0,1,0,1,1,1,0,1,1,1,1,1,0,0,0,0,0,0,0,1,1,1,1,0,1,1,1,1,1,0,1,0,0,0,0,1,1,0,1,0,1,1,1,0,1,0,0,1,1,1,1,0,0,0,0,0,0,1,1,1,1,0,0,1,0,1,0,1,0,1,0,1,0,0,0,1,1,0,0,0,1,1,0,0,1,1,0,0,0,0,1,1,0,1,1,0,1,0,0,1,1,1,1,1,0,1,1,1,1,1,0,0,1,1,0,0,1,0,0,0,0,1,0,0,0,1,1,0,1,0,0,1,1,1,1,0,0,0,1,1,1,0,0,1,0,1,1,1,0,0,0,1,0,0,1,0,0,0,0,1,0,0,0,0,0,0,1,1,0,1,1,0,1,0,0,0,1,0,1,0,0,0,0,1,1,1,1,0,0,1,0,1,0,1,0,0,0,1,1,0,0,0,0,1,1,1,0,1,0,0,0,1,0,0,1,0,0,1,1,1,1,1,1,0,0,0,0,1,1,0,0,0,0,0,1,1,0,0,1,1,1,1,0,0,0,0,1,0,0,1,1,1,0,0,1,1,0,0,1,0,1,1,0,1,1,1,1,0,0,1,1,1,1,0,0,0,1,1,1,1,1,0,1,0,1,1,0,1,1,0,0,0,1,1,1,1,1,1,1,1,0,0,0,1,0,0,0,1,0,1,1,1,0,0,1,1,0,0,0,1,1,0,1,1,0,0,1,0,1,0,1,1,1,1,0,0,1,0,0,0,1,0,1,0,1,0,1,0,1,0,0,1,1,0,0,1,1,1,1,1,1,1,0,0,0,1,1,];
var gg_b = "1759248001/";

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
