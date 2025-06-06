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
case 1761:
case 1207:
case 1268:
case 317:
case 2975:
case 3938:
case 602:
case 1031:
case 3211:
case 1622:
case 468:
case 2604:
case 3845:
case 3384:
case 64:
case 1097:
case 2457:
case 1339:
case 533:
case 1709:
case 1647:
case 2129:
case 432:
case 3624:
case 2059:
case 3161:
case 3517:
case 982:
case 128:
case 3808:
case 1438:
case 2370:
case 3999:
case 4006:
case 3044:
case 2418:
case 2138:
case 620:
case 793:
case 1692:
case 2319:
case 443:
case 384:
case 2886:
case 542:
case 1429:
case 2839:
case 3757:
case 3929:
case 1042:
case 4002:
case 780:
case 426:
case 817:
case 941:
case 913:
case 1671:
case 3580:
case 2882:
case 1688:
case 2011:
case 3596:
case 3588:
case 2672:
case 370:
case 1878:
case 3232:
case 1962:
case 3571:
case 1012:
case 1464:
case 2041:
case 199:
case 22:
case 3466:
case 517:
case 2863:
case 1255:
case 1234:
case 3592:
case 2795:
case 2890:
case 110:
case 3453:
case 774:
case 3425:
case 3277:
case 272:
case 2637:
case 356:
case 414:
case 2349:
case 2410:
case 3601:
case 192:
case 618:
case 240:
case 2077:
case 1356:
case 2381:
case 2502:
case 1430:
case 3705:
case 1524:
case 2036:
case 1148:
case 856:
case 1995:
case 758:
case 3526:
case 2766:
case 3547:
case 487:
case 279:
case 2506:
case 1363:
case 3930:
case 1260:
case 2762:
case 937:
case 2725:
case 1293:
case 3522:
case 2032:
case 342:
case 3815:
case 3710:
case 2621:
case 4074:
case 2331:
case 1846:
case 2701:
case 58:
case 641:
case 613:
case 1480:
case 2943:
case 3385:
case 3844:
case 753:
case 304:
case 689:
case 2509:
case 3873:
case 2397:
case 369:
case 2648:
case 2769:
case 2491:
case 1458:
case 736:
case 909:
case 2245:
case 3662:
case 3653:
case 2811:
case 1070:
case 3625:
case 535:
case 1359:
case 2117:
case 2437:
case 3228:
case 3721:
case 2610:
case 920:
case 3401:
case 338:
case 3772:
case 2028:
case 869:
case 77:
case 682:
case 445:
case 1137:
case 2158:
case 3174:
case 3239:
case 1969:
case 3045:
case 94:
case 3298:
case 1774:
case 1284:
case 2342:
case 3008:
case 1311:
case 1743:
case 2180:
case 3737:
case 362:
case 804:
case 2421:
case 3000:
case 2312:
case 569:
case 221:
case 3360:
case 2902:
case 3393:
case 2196:
case 2877:
case 2188:
case 3263:
case 2404:
case 3252:
case 801:
case 896:
case 1924:
case 3926:
case 2836:
case 1713:
case 2657:
case 1426:
case 2906:
case 2889:
case 3113:
case 407:
case 1254:
case 3530:
case 3965:
case 918:
case 1049:
case 2794:
case 4009:
case 1638:
case 2020:
case 3256:
case 1078:
case 3996:
case 3102:
case 1812:
case 2618:
case 1553:
case 1994:
case 1081:
case 1525:
case 1450:
case 3704:
case 3355:
case 2147:
case 1492:
case 2640:
case 3323:
case 2126:
case 562:
case 2841:
case 1629:
case 1706:
case 2063:
case 4075:
case 1566:
case 1104:
case 2090:
case 3106:
case 1816:
case 3564:
case 3950:
case 644:
case 3992:
case 1702:
case 835:
case 3494:
case 1496:
case 301:
case 1488:
case 2021:
case 337:
case 844:
case 3408:
case 3272:
case 3467:
case 2689:
case 3597:
case 3309:
case 2857:
case 3184:
case 36:
case 1186:
case 2151:
case 3069:
case 90:
case 635:
case 3445:
case 772:
case 1419:
case 541:
case 513:
case 68:
case 3291:
case 2636:
case 1274:
case 412:
case 2329:
case 3786:
case 3798:
case 589:
case 405:
case 1967:
case 2428:
case 1318:
case 3001:
case 2170:
case 2338:
case 2708:
case 956:
case 2767:
case 2201:
case 258:
case 1573:
case 3614:
case 2439:
case 2076:
case 2119:
case 1357:
case 431:
case 949:
case 1058:
case 490:
case 2984:
case 740:
case 2641:
case 582:
case 1829:
case 2269:
case 2498:
case 2486:
case 2399:
case 419:
case 779:
case 4023:
case 86:
case 2818:
case 4055:
case 696:
case 2611:
case 2593:
case 3825:
case 3862:
case 313:
case 2954:
case 2935:
case 2560:
case 3978:
case 1387:
case 3094:
case 1642:
case 2490:
case 669:
case 2224:
case 537:
case 4085:
case 3673:
case 3866:
case 984:
case 130:
case 1627:
case 2456:
case 1481:
case 1:
case 2805:
case 1202:
case 1478:
case 2149:
case 2700:
case 2181:
case 3154:
case 3135:
case 3415:
case 544:
case 293:
case 382:
case 3024:
case 797:
case 1348:
case 447:
case 3033:
case 4007:
case 3790:
case 1047:
case 3763:
case 2555:
case 1026:
case 2879:
case 2364:
case 1163:
case 1697:
case 841:
case 15:
case 813:
case 3756:
case 280:
case 917:
case 3949:
case 1065:
case 1631:
case 662:
case 889:
case 1754:
case 2131:
case 1944:
case 670:
case 1321:
case 3759:
case 298:
case 3185:
case 2837:
case 721:
case 2891:
case 1973:
case 3083:
case 1858:
case 154:
case 1442:
case 2584:
case 450:
case 2652:
case 476:
case 403:
case 716:
case 818:
case 2040:
case 1427:
case 2872:
case 54:
case 1681:
case 2656:
case 2907:
case 1446:
case 2018:
case 3444:
case 1678:
case 656:
case 1038:
case 3343:
case 3711:
case 1261:
case 1707:
case 2459:
case 3997:
case 98:
case 467:
case 1545:
case 3519:
case 3240:
case 1497:
case 2773:
case 60:
case 520:
case 861:
case 1431:
case 3801:
case 1567:
case 2744:
case 1099:
case 2380:
case 3107:
case 642:
case 127:
case 2087:
case 2371:
case 617:
case 2432:
case 3205:
case 302:
case 1500:
case 864:
case 3608:
case 3160:
case 2388:
case 3667:
case 1847:
case 1826:
case 3824:
case 2923:
case 2955:
case 315:
case 1619:
case 820:
case 561:
case 2350:
case 488:
case 2116:
case 2079:
case 3313:
case 3248:
case 3210:
case 938:
case 809:
case 1030:
case 200:
case 1822:
case 2477:
case 1760:
case 1865:
case 2253:
case 1871:
case 3894:
case 2010:
case 2554:
case 3302:
case 2960:
case 2535:
case 3581:
case 3025:
case 3062:
case 1177:
case 3053:
case 3789:
case 2347:
case 2639:
case 27:
case 3123:
case 684:
case 3279:
case 760:
case 2048:
case 2295:
case 3066:
case 1755:
case 1850:
case 1304:
case 904:
case 3306:
case 364:
case 1064:
case 1132:
case 3287:
case 222:
case 724:
case 3492:
case 1323:
case 3336:
case 2413:
case 285:
case 3629:
case 3706:
case 2124:
case 1102:
case 346:
case 2510:
case 2054:
case 3078:
case 2661:
case 1996:
case 1971:
case 3525:
case 2765:
case 2860:
case 3471:
case 1494:
case 3702:
case 323:
case 3488:
case 3566:
case 3104:
case 1814:
case 2726:
case 2609:
case 954:
case 1683:
case 1992:
case 3816:
case 852:
case 1106:
case 1564:
case 1950:
case 3595:
case 2823:
case 823:
case 2792:
case 1263:
case 1252:
case 2855:
case 1947:
case 2406:
case 135:
case 2587:
case 1000:
case 4040:
case 3422:
case 3465:
case 2402:
case 3235:
case 3254:
case 1965:
case 1530:
case 3638:
case 2675:
case 250:
case 1256:
case 2281:
case 2796:
case 2314:
case 3447:
case 18:
case 2579:
case 1424:
case 846:
case 1113:
case 3803:
case 2904:
case 498:
case 4005:
case 3191:
case 422:
case 1174:
case 3176:
case 3019:
case 3897:
case 3969:
case 523:
case 2921:
case 1143:
case 3831:
case 138:
case 2344:
case 2885:
case 3417:
case 2780:
case 1008:
case 3172:
case 1067:
case 745:
case 1368:
case 3774:
case 4010:
case 546:
case 1695:
case 1776:
case 2169:
case 436:
case 3583:
case 104:
case 2976:
case 1873:
case 400:
case 1666:
case 2084:
case 3827:
case 986:
case 3846:
case 2937:
case 288:
case 4079:
case 2717:
case 3480:
case 429:
case 3121:
case 2443:
case 3070:
case 6:
case 1625:
case 2518:
case 673:
case 1653:
case 691:
case 2972:
case 606:
case 2807:
case 2474:
case 1529:
case 3458:
case 453:
case 2219:
case 3842:
case 2540:
case 219:
case 3148:
case 2764:
case 2216:
case 4072:
case 2023:
case 2034:
case 1526:
case 283:
case 2162:
case 3356:
case 1601:
case 2125:
case 1335:
case 1354:
case 3293:
case 678:
case 1522:
case 231:
case 899:
case 4076:
case 1930:
case 3260:
case 2212:
case 627:
case 1710:
case 290:
case 1241:
case 1669:
case 3390:
case 3363:
case 3352:
case 458:
case 577:
case 528:
case 2910:
case 133:
case 3881:
case 170:
case 714:
case 1588:
case 3680:
case 1571:
case 825:
case 3594:
case 2854:
case 2835:
case 3878:
case 474:
case 2643:
case 3320:
case 1277:
case 181:
case 310:
case 2905:
case 156:
case 2315:
case 1787:
case 3966:
case 4021:
case 2674:
case 994:
case 1592:
case 3223:
case 1014:
case 1550:
case 892:
case 3234:
case 3983:
case 3692:
case 480:
case 2345:
case 2884:
case 2576:
case 3650:
case 726:
case 2591:
case 1558:
case 877:
case 366:
case 2799:
case 525:
case 1259:
case 2537:
case 3328:
case 3027:
case 906:
case 3046:
case 1175:
case 991:
case 4004:
case 1580:
case 1694:
case 2007:
case 2918:
case 651:
case 3870:
case 2738:
case 3775:
case 3696:
case 3688:
case 1929:
case 2297:
case 493:
case 1483:
case 743:
case 1109:
case 1384:
case 1740:
case 732:
case 2606:
case 2729:
case 3398:
case 3386:
case 3499:
case 3268:
case 1938:
case 2521:
case 0:
case 3207:
case 1211:
case 3622:
case 3665:
case 3031:
case 1718:
case 1161:
case 1517:
case 3382:
case 455:
case 2602:
case 1808:
case 2475:
case 1999:
case 3501:
case 2246:
case 3647:
case 3339:
case 69:
case 866:
case 768:
case 675:
case 1633:
case 1789:
case 2941:
case 1155:
case 2333:
case 2703:
case 2324:
case 1279:
case 1578:
case 666:
case 89:
case 1732:
case 1894:
case 3888:
case 1053:
case 3670:
case 1025:
case 1912:
case 1287:
case 2460:
case 1777:
case 3755:
case 3850:
case 3734:
case 2552:
case 3892:
case 3723:
case 1066:
case 460:
case 21:
case 2590:
case 164:
case 3064:
case 3651:
case 2813:
case 245:
case 851:
case 2936:
case 3141:
case 3403:
case 2716:
case 886:
case 4082:
case 788:
case 1205:
case 3500:
case 2394:
case 4039:
case 1193:
case 1667:
case 1608:
case 1160:
case 4086:
case 3030:
case 3515:
case 2712:
case 677:
case 554:
case 3865:
case 2520:
case 2455:
case 2114:
case 3619:
case 2423:
case 39:
case 457:
case 2806:
case 1869:
case 1997:
case 1374:
case 3376:
case 2742:
case 4052:
case 3038:
case 1343:
case 118:
case 1711:
case 3261:
case 3707:
case 2528:
case 2144:
case 3649:
case 378:
case 263:
case 3372:
case 2727:
case 1168:
case 854:
case 3099:
case 3817:
case 73:
case 2485:
case 625:
case 416:
case 703:
case 354:
case 827:
case 1551:
case 3858:
case 1083:
case 2874:
case 2009:
case 3442:
case 4020:
case 699:
case 161:
case 3944:
case 207:
case 1185:
case 575:
case 2468:
case 923:
case 3321:
case 59:
case 2301:
case 3446:
case 2731:
case 248:
case 3427:
case 610:
case 2238:
case 3275:
case 946:
case 1570:
case 2061:
case 2635:
case 3880:
case 3785:
case 1444:
case 1257:
case 2539:
case 2797:
case 1473:
case 891:
case 3213:
case 2536:
case 708:
case 1763:
case 3026:
case 1790:
case 1895:
case 3900:
case 2362:
case 3156:
case 928:
case 1154:
case 3449:
case 226:
case 3310:
case 2296:
case 3631:
case 3065:
case 2288:
case 1756:
case 211:
case 3022:
case 2532:
case 3305:
case 2778:
case 1400:
case 35:
case 497:
case 747:
case 2366:
case 3152:
case 3697:
case 2541:
case 3206:
case 1204:
case 113:
case 85:
case 1978:
case 3088:
case 232:
case 1981:
case 3387:
case 2956:
case 1094:
case 2749:
case 3646:
case 3:
case 3627:
case 966:
case 3481:
case 2435:
case 391:
case 306:
case 3864:
case 2226:
case 3092:
case 1673:
case 1866:
case 2247:
case 3514:
case 2145:
case 2986:
case 2809:
case 4032:
case 3616:
case 659:
case 3058:
case 2074:
case 646:
case 287:
case 910:
case 479:
case 3128:
case 1546:
case 4089:
case 3470:
case 2861:
case 1970:
case 4036:
case 3612:
case 1221:
case 2660:
case 2982:
case 2484:
case 4077:
case 999:
case 265:
case 3829:
case 1309:
case 712:
case 16:
case 925:
case 1597:
case 3603:
case 472:
case 1069:
case 506:
case 591:
case 3945:
case 1919:
case 2383:
case 137:
case 1782:
case 2280:
case 652:
case 1531:
case 1467:
case 1272:
case 2875:
case 3838:
case 2770:
case 3967:
case 1237:
case 3182:
case 4041:
case 3017:
case 1001:
case 894:
case 42:
case 3243:
case 2655:
case 3419:
case 3340:
case 2751:
case 1798:
case 1291:
case 3274:
case 2258:
case 805:
case 2849:
case 3212:
case 1487:
case 390:
case 2293:
case 1820:
case 2260:
case 2390:
case 3979:
case 914:
case 2352:
case 1506:
case 225:
case 1214:
case 1766:
case 3023:
case 3034:
case 3055:
case 2524:
case 319:
case 1036:
case 3216:
case 2617:
case 444:
case 2110:
case 3162:
case 1077:
case 3987:
case 3153:
case 1349:
case 819:
case 1130:
case 1410:
case 1637:
case 3643:
case 2320:
case 648:
case 3905:
case 1795:
case 1676:
case 1852:
case 2234:
case 1513:
case 1691:
case 2658:
case 2966:
case 3674:
case 2016:
case 2179:
case 1448:
case 4001:
case 299:
case 3948:
case 12:
case 1041:
case 890:
case 3203:
case 2464:
case 607:
case 2925:
case 312:
case 3730:
case 3854:
case 1405:
case 3835:
case 2953:
case 3910:
case 2881:
case 3060:
case 1011:
case 2870:
case 932:
case 75:
case 2285:
case 1882:
case 3007:
case 519:
case 3918:
case 3940:
case 645:
case 482:
case 3297:
case 3409:
case 1839:
case 583:
case 3591:
case 2429:
case 1574:
case 590:
case 1886:
case 2983:
case 1319:
case 2157:
case 531:
case 1440:
case 1543:
case 1138:
case 308:
case 968:
case 3537:
case 2328:
case 1370:
case 2501:
case 489:
case 505:
case 277:
case 1783:
case 512:
case 1129:
case 2647:
case 2339:
case 2626:
case 2709:
case 3729:
case 2398:
case 2569:
case 847:
case 2386:
case 3242:
case 2819:
case 2097:
case 1604:
case 2665:
case 2031:
case 2268:
case 3085:
case 1975:
case 2761:
case 2207:
case 2496:
case 2471:
case 3505:
case 778:
case 2816:
case 1303:
case 665:
case 2566:
case 3747:
case 1913:
case 1090:
case 418:
case 2389:
case 3609:
case 1052:
case 33:
case 1841:
case 2336:
case 3133:
case 2629:
case 2706:
case 259:
case 3124:
case 3548:
case 1640:
case 3722:
case 3893:
case 2081:
case 2377:
case 3765:
case 3860:
case 2812:
case 3510:
case 3054:
case 3035:
case 2078:
case 3661:
case 2638:
case 3675:
case 1020:
case 3796:
case 2049:
case 1794:
case 3771:
case 3278:
case 1832:
case 116:
case 2254:
case 3579:
case 1316:
case 588:
case 1150:
case 1906:
case 2447:
case 1192:
case 1657:
case 461:
case 2426:
case 614:
case 2595:
case 3792:
case 3834:
case 3750:
case 3855:
case 2933:
case 1877:
case 2465:
case 121:
case 83:
case 1902:
case 1312:
case 963:
case 376:
case 1421:
case 585:
case 1180:
case 2901:
case 2311:
case 611:
case 2284:
case 4025:
case 888:
case 4053:
case 751:
case 2176:
case 2019:
case 3557:
case 2969:
case 639:
case 2191:
case 1158:
case 3885:
case 2417:
case 626:
case 1028:
case 1327:
case 53:
case 4066:
case 3921:
case 1346:
case 3868:
case 3807:
case 1117:
case 2359:
case 79:
case 3101:
case 3443:
case 4095:
case 668:
case 3518:
case 44:
case 3219:
case 3540:
case 1476:
case 503:
case 3084:
case 3991:
case 2583:
case 1098:
case 1086:
case 3976:
case 2051:
case 2480:
case 1943:
case 1605:
case 157:
case 2121:
case 1472:
case 2827:
case 1331:
case 3937:
case 1267:
case 1701:
case 2754:
case 2830:
case 3685:
case 3296:
case 2631:
case 2065:
case 180:
case 343:
case 3781:
case 311:
case 2915:
case 934:
case 3366:
case 2163:
case 3006:
case 1879:
case 4044:
case 587:
case 868:
case 1534:
case 2047:
case 2348:
case 2213:
case 3536:
case 565:
case 3002:
case 1659:
case 326:
case 193:
case 2900:
case 3362:
case 1181:
case 3353:
case 2156:
case 1420:
case 3577:
case 1149:
case 3115:
case 3435:
case 3454:
case 1330:
case 839:
case 514:
case 206:
case 2120:
case 368:
case 1456:
case 273:
case 2050:
case 3226:
case 3247:
case 3952:
case 3963:
case 3013:
case 417:
case 1224:
case 1452:
case 2642:
case 843:
case 811:
case 2206:
case 3607:
case 2071:
case 3956:
case 1810:
case 3100:
case 1715:
case 3749:
case 1954:
case 947:
case 2088:
case 688:
case 1818:
case 912:
case 3167:
case 3861:
case 1568:
case 2080:
case 667:
case 2612:
case 1269:
case 1498:
case 2829:
case 905:
case 3719:
case 2616:
case 792:
case 2058:
case 3074:
case 2357:
case 1119:
case 3809:
case 3998:
case 543:
case 511:
case 294:
case 1767:
case 3043:
case 1338:
case 1037:
case 2128:
case 650:
case 1170:
case 2243:
case 1677:
case 1428:
case 2182:
case 2899:
case 887:
case 532:
case 1329:
case 3258:
case 3634:
case 2419:
case 2139:
case 433:
case 2603:
case 456:
case 2198:
case 314:
case 481:
case 1857:
case 603:
case 3875:
case 2838:
case 990:
case 3770:
case 4014:
case 1632:
case 676:
case 3280:
case 1585:
case 799:
case 1021:
case 1365:
case 251:
case 3493:
case 4045:
case 122:
case 286:
case 2412:
case 647:
case 1698:
case 2064:
case 2651:
case 1103:
case 2850:
case 438:
case 3552:
case 2304:
case 1295:
case 2723:
case 3684:
case 3333:
case 1048:
case 2416:
case 462:
case 563:
case 4008:
case 3941:
case 1347:
case 2896:
case 2888:
case 2670:
case 3556:
case 1535:
case 3230:
case 2871:
case 1993:
case 2760:
case 2865:
case 3932:
case 1253:
case 100:
case 1477:
case 1628:
case 29:
case 129:
case 3434:
case 2141:
case 1955:
case 634:
case 1923:
case 1396:
case 1388:
case 81:
case 1432:
case 3802:
case 1112:
case 2500:
case 690:
case 1744:
case 1380:
case 2431:
case 2111:
case 2567:
case 2372:
case 976:
case 2508:
case 3727:
case 2497:
case 723:
case 848:
case 3173:
case 2376:
case 746:
case 2545:
case 496:
case 3742:
case 1358:
case 2261:
case 2337:
case 1821:
case 759:
case 1985:
case 2038:
case 1620:
case 3654:
case 3635:
case 2880:
case 2785:
case 3911:
case 1317:
case 1907:
case 3238:
case 1872:
case 2681:
case 3797:
case 4000:
case 2029:
case 1876:
case 3009:
case 1663:
case 1197:
case 2442:
case 863:
case 1690:
case 93:
case 605:
case 4015:
case 1891:
case 2858:
case 3874:
case 307:
case 1837:
case 3468:
case 3039:
case 3648:
case 995:
case 1807:
case 3437:
case 2228:
case 1868:
case 2721:
case 2662:
case 2653:
case 1101:
case 3811:
case 2980:
case 2625:
case 49:
case 3605:
case 824:
case 1717:
case 475:
case 74:
case 2385:
case 2844:
case 3331:
case 922:
case 3701:
case 3472:
case 702:
case 1991:
case 3098:
case 204:
case 3086:
case 655:
case 1169:
case 3342:
case 2695:
case 324:
case 2469:
case 2298:
case 1251:
case 2286:
case 1758:
case 2791:
case 262:
case 2307:
case 953:
case 2067:
case 2008:
case 2282:
case 1780:
case 2401:
case 3346:
case 3575:
case 2772:
case 1557:
case 451:
case 720:
case 3158:
case 2174:
case 486:
case 2113:
case 1579:
case 2424:
case 3192:
case 3150:
case 3906:
case 1314:
case 3020:
case 150:
case 2256:
case 1281:
case 2965:
case 2922:
case 2360:
case 3902:
case 3188:
case 3171:
case 1194:
case 2000:
case 1587:
case 4029:
case 2947:
case 1406:
case 235:
case 2263:
case 1750:
case 1834:
case 1792:
case 2950:
case 2992:
case 1726:
case 3063:
case 821:
case 3052:
case 1747:
case 3913:
case 2814:
case 201:
case 3122:
case 3165:
case 296:
case 1505:
case 167:
case 1893:
case 1722:
case 658:
case 1054:
case 2988:
case 1035:
case 2996:
case 2102:
case 3215:
case 1249:
case 524:
case 1510:
case 1124:
case 427:
case 1548:
case 816:
case 3841:
case 1133:
case 1413:
case 185:
case 478:
case 2355:
case 3147:
case 2334:
case 3640:
case 2323:
case 2633:
case 3129:
case 3783:
case 3273:
case 2867:
case 1227:
case 3370:
case 636:
case 1602:
case 2161:
case 4050:
case 2718:
case 4092:
case 2211:
case 217:
case 980:
case 2938:
case 1183:
case 1606:
case 4:
case 430:
case 2109:
case 2740:
case 2483:
case 2929:
case 955:
case 1297:
case 1231:
case 4026:
case 3011:
case 4047:
case 3199:
case 1007:
case 1068:
case 2694:
case 622:
case 3418:
case 3138:
case 45:
case 397:
case 108:
case 579:
case 1799:
case 3909:
case 1613:
case 1591:
case 2558:
case 3574:
case 1576:
case 695:
case 4065:
case 67:
case 2073:
case 3319:
case 4022:
case 2592:
case 3795:
case 2014:
case 3890:
case 249:
case 3513:
case 3691:
case 958:
case 3637:
case 1315:
case 2787:
case 3130:
case 281:
case 1643:
case 2425:
case 1730:
case 879:
case 76:
case 1060:
case 2588:
case 1910:
case 233:
case 1093:
case 3672:
case 270:
case 3856:
case 1195:
case 32:
case 2466:
case 2289:
case 3041:
case 105:
case 4017:
case 2779:
case 1166:
case 1504:
case 2495:
case 2669:
case 3506:
case 3032:
case 1212:
case 2710:
case 4058:
case 2565:
case 494:
case 744:
case 3378:
case 2335:
case 3502:
case 2705:
case 2601:
case 1162:
case 340:
case 3077:
case 1153:
case 2526:
case 3766:
case 3214:
case 1023:
case 1764:
case 872:
case 119:
case 2257:
case 1539:
case 553:
case 452:
case 1635:
case 1061:
case 3968:
case 3907:
case 1731:
case 2927:
case 2759:
case 107:
case 2185:
case 3837:
case 1407:
case 1843:
case 3131:
case 261:
case 735:
case 3584:
case 62:
case 3690:
case 500:
case 4049:
case 3891:
case 2083:
case 1874:
case 1369:
case 1598:
case 1586:
case 2551:
case 4081:
case 3773:
case 446:
case 701:
case 3283:
case 4078:
case 3380:
case 2107:
case 459:
case 2600:
case 921:
case 163:
case 1727:
case 57:
case 2801:
case 1959:
case 595:
case 1746:
case 3821:
case 2931:
case 1144:
case 1075:
case 3985:
case 3620:
case 2711:
case 2218:
case 640:
case 916:
case 423:
case 1742:
case 1173:
case 1229:
case 2869:
case 3116:
case 1806:
case 2313:
case 598:
case 2741:
case 2248:
case 329:
case 2645:
case 1423:
case 3350:
case 2903:
case 1434:
case 3804:
case 1114:
case 1520:
case 300:
case 895:
case 3225:
case 3477:
case 3262:
case 2549:
case 960:
case 3628:
case 2608:
case 704:
case 2160:
case 3396:
case 2193:
case 3388:
case 1977:
case 3371:
case 1394:
case 2205:
case 202:
case 2824:
case 3923:
case 822:
case 215:
case 4070:
case 3489:
case 1936:
case 924:
case 24:
case 1813:
case 3103:
case 3441:
case 2306:
case 2736:
case 3698:
case 3686:
case 3295:
case 2066:
case 762:
case 1590:
case 1563:
case 2916:
case 2777:
case 3322:
case 2287:
case 3005:
case 220:
case 697:
case 2025:
case 1556:
case 2053:
case 2894:
case 3010:
case 3682:
case 3960:
case 1230:
case 829:
case 2732:
case 1324:
case 738:
case 836:
case 209:
case 1703:
case 2134:
case 2414:
case 3639:
case 2123:
case 3636:
case 781:
case 3329:
case 1751:
case 2786:
case 374:
case 2798:
case 858:
case 2276:
case 1634:
case 1655:
case 749:
case 3677:
case 616:
case 555:
case 2237:
case 3428:
case 2408:
case 2272:
case 1875:
case 621:
case 2531:
case 2782:
case 4016:
case 3632:
case 114:
case 3151:
case 2069:
case 733:
case 2597:
case 410:
case 2309:
case 26:
case 165:
case 244:
case 92:
case 3269:
case 3498:
case 1939:
case 3486:
case 571:
case 1484:
case 742:
case 3745:
case 492:
case 3072:
case 1693:
case 1108:
case 3818:
case 1660:
case 3399:
case 3568:
case 2970:
case 70:
case 2728:
case 1861:
case 3507:
case 1043:
case 2375:
case 2546:
case 3201:
case 972:
case 3482:
case 425:
case 4003:
case 874:
case 2614:
case 1986:
case 3076:
case 3439:
case 1145:
case 1998:
case 580:
case 2673:
case 871:
case 4031:
case 1013:
case 1990:
case 2516:
case 1963:
case 3805:
case 1435:
case 3456:
case 168:
case 2981:
case 1668:
case 1956:
case 2512:
case 1100:
case 2094:
case 1749:
case 3593:
case 2720:
case 1222:
case 2825:
case 241:
case 213:
case 1265:
case 3935:
case 2853:
case 3560:
case 2978:
case 1395:
case 355:
case 289:
case 3848:
case 477:
case 1366:
case 4027:
case 558:
case 4046:
case 466:
case 624:
case 2503:
case 1271:
case 1685:
case 1920:
case 3294:
case 1778:
case 2400:
case 2756:
case 111:
case 380:
case 1296:
case 1288:
case 126:
case 393:
case 784:
case 1577:
case 1325:
case 660:
case 1362:
case 371:
case 1353:
case 3181:
case 2895:
case 3523:
case 1250:
case 2752:
case 2763:
case 3534:
case 1536:
case 139:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1749196802/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,0,1,0,0,1,0,1,1,1,1,1,0,1,1,0,0,1,0,1,1,0,0,1,0,1,0,0,1,0,1,1,0,0,1,0,0,1,1,0,1,1,0,1,0,0,1,1,1,0,1,1,1,0,0,1,1,0,0,0,0,1,0,1,0,1,1,0,0,0,0,1,1,0,0,0,0,0,1,0,1,0,1,0,1,0,0,1,1,0,0,1,0,0,0,1,1,1,0,1,0,1,1,1,0,0,1,0,0,1,0,0,1,0,0,1,0,1,0,0,1,0,0,1,1,1,0,0,0,0,0,1,1,0,1,0,1,0,0,0,1,1,1,1,1,1,1,1,1,1,0,1,1,1,0,1,0,0,1,1,1,0,1,0,0,0,1,0,0,1,0,1,1,1,1,1,1,1,1,1,0,0,1,1,1,0,1,1,1,1,1,1,0,0,1,1,1,1,1,0,0,0,0,1,0,1,0,0,1,0,1,0,1,0,1,0,1,0,1,0,0,0,0,1,1,0,0,1,1,1,1,0,0,0,1,0,1,1,1,1,0,0,1,1,0,0,1,1,0,0,0,0,1,1,1,1,1,1,0,0,1,0,0,0,1,0,1,1,1,1,0,1,0,0,1,1,1,0,1,0,0,0,1,0,1,0,0,0,0,0,0,1,1,0,0,1,0,1,0,0,0,0,0,1,0,1,0,0,0,1,0,0,0,0,0,0,1,0,1,0,1,1,1,0,0,1,0,1,1,0,1,1,1,1,1,1,1,0,0,1,0,1,0,0,1,1,0,1,1,1,1,1,1,1,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0,0,0,0,1,1,0,1,0,1,0,1,0,1,0,1,0,1,1,1,1,1,0,0,1,0,1,1,1,0,1,1,0,1,1,0,1,0,1,0,1,1,0,1,0,1,0,1,0,0,0,0,1,1,0,0,1,0,0,0,1,0,0,0,0,0,1,1,0,1,0,1,1,1,1,0,0,0,0,0,1,1,0,0,0,0,1,0,0,0,0,0,0,0,0,1,1,1,0,0,0,1,1,1,0,1,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,1,0,0,0,1,0,0,0,1,0,1,1,0,1,0,0,1,1,1,1,0,0,0,0,1,1,0,1,0,0,1,1,0,0,0,1,1,0,1,1,0,0,0,1,0,1,0,1,1,1,0,0,0,0,1,0,1,1,1,1,1,1,0,0,0,1,1,0,1,1,0,0,0,1,0,1,1,1,0,1,0,1,1,1,0,1,0,1,0,0,1,0,0,1,0,1,0,0,0,0,0,1,1,1,0,1,1,0,1,1,1,0,0,1,0,0,0,1,1,0,0,1,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,1,1,1,1,1,1,0,0,0,1,1,0,0,0,0,1,0,0,0,0,0,1,0,0,0,1,1,0,0,1,0,0,0,1,0,1,1,0,0,0,0,0,0,1,1,0,1,0,0,0,0,1,1,1,0,1,0,1,1,1,0,0,0,0,1,1,1,0,0,0,1,0,1,0,0,0,0,1,1,1,0,1,1,1,0,1,0,1,0,1,1,1,0,0,1,0,0,1,0,1,1,1,1,1,0,0,1,0,0,1,0,1,0,1,0,0,0,0,0,0,1,0,1,0,1,0,1,1,1,1,0,0,0,1,0,1,1,1,1,1,0,1,1,1,0,1,0,1,1,1,0,0,0,0,1,1,0,1,1,1,0,1,1,1,0,0,1,1,1,0,1,0,1,0,1,1,0,0,1,1,1,0,1,0,1,0,1,1,0,0,0,0,0,0,0,0,0,0,1,0,1,0,1,1,1,1,1,0,0,1,1,0,1,0,1,0,0,1,0,0,0,1,1,0,0,1,0,1,0,1,0,1,1,0,1,0,0,1,0,1,0,0,1,0,0,1,0,1,1,0,1,0,1,1,1,1,1,1,0,0,0,0,0,0,0,1,0,0,0,1,1,0,1,1,1,1,0,0,0,1,1,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,1,1,0,1,1,1,0,1,0,1,1,0,0,1,1,0,1,1,1,1,0,0,1,0,1,1,1,0,0,0,0,1,0,1,0,1,1,0,1,1,0,1,0,1,1,1,0,1,1,1,0,1,1,1,0,1,0,1,0,1,0,1,1,1,0,0,1,1,0,0,1,1,1,0,0,0,1,1,1,1,1,0,0,1,1,0,0,0,0,1,1,1,1,1,0,0,1,0,1,0,0,1,0,1,0,0,1,1,1,0,0,0,0,1,1,0,0,0,1,1,1,0,0,0,1,1,0,0,0,1,1,1,0,1,0,0,1,1,0,0,0,0,0,0,0,1,1,1,1,0,1,0,0,1,1,0,1,0,1,1,0,1,1,1,0,1,1,0,0,1,1,0,0,0,0,0,0,0,0,1,0,1,0,0,1,1,0,0,0,1,1,0,1,0,1,1,1,1,0,1,1,1,1,0,0,1,0,0,1,1,1,0,0,1,1,1,1,0,0,0,1,1,0,0,0,1,1,0,0,0,1,1,0,1,0,0,0,0,1,1,0,1,0,0,0,1,1,0,0,0,1,0,1,1,0,0,1,0,1,0,0,1,1,1,1,1,0,0,0,0,1,0,1,1,1,1,0,1,0,0,1,0,1,1,1,0,0,1,0,1,1,1,1,1,1,0,0,1,0,1,1,0,1,0,0,0,1,1,0,1,1,0,1,1,1,0,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,1,0,1,0,0,0,1,0,0,1,0,1,1,0,1,0,1,0,1,1,0,1,1,0,0,1,1,0,1,0,1,0,0,0,1,1,1,1,1,0,0,1,1,1,1,0,1,0,0,1,0,0,0,0,0,0,1,0,1,0,0,0,1,0,1,0,0,0,1,1,1,0,1,1,0,0,1,1,1,0,1,1,0,0,0,0,1,1,1,0,0,1,0,0,0,0,1,1,0,0,1,0,0,1,0,0,0,1,1,1,0,1,1,1,1,1,0,1,1,1,0,1,1,0,0,1,1,1,1,1,0,0,0,1,1,1,0,1,1,1,1,0,0,0,1,1,0,1,1,0,1,1,1,1,1,0,0,0,1,0,0,1,0,0,0,0,0,0,0,1,0,0,1,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,1,1,0,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,0,0,1,1,0,0,0,1,0,0,1,0,0,1,1,0,0,1,1,1,0,1,0,1,0,0,0,1,0,1,1,1,0,0,0,1,1,1,0,1,1,0,1,1,1,0,1,1,0,1,0,1,0,0,0,1,1,0,0,0,1,1,0,0,0,1,1,0,1,1,1,0,1,0,0,1,0,1,0,0,1,0,1,1,0,0,0,1,1,1,1,0,0,1,0,0,0,1,0,0,1,0,0,1,0,0,0,0,0,1,1,1,1,0,0,0,0,1,0,0,0,1,1,1,1,0,0,1,1,0,0,1,0,0,0,1,0,1,1,1,1,0,1,1,1,1,1,0,0,1,0,1,1,0,1,0,0,0,1,0,0,0,0,0,1,0,0,1,0,1,0,0,1,1,1,0,1,1,1,1,1,0,1,0,1,0,1,0,0,1,1,0,1,1,0,0,0,0,1,0,1,0,1,1,0,0,0,1,1,0,1,0,1,0,1,1,0,1,0,0,0,0,0,0,1,0,0,1,1,0,0,0,1,1,0,0,1,0,0,0,1,0,1,0,1,0,0,1,1,1,0,1,1,1,0,0,1,1,0,0,0,1,1,1,1,1,1,1,0,1,0,0,0,1,0,0,1,0,0,0,1,1,0,0,0,1,0,1,0,0,1,0,0,1,0,0,1,1,1,1,1,1,0,1,0,0,0,1,0,1,0,0,1,1,1,0,1,0,0,1,0,1,0,0,1,1,0,0,1,1,1,1,1,1,0,0,0,1,0,1,0,0,0,1,0,1,0,1,0,0,0,1,1,1,0,1,1,0,1,1,0,1,0,1,1,0,1,0,1,0,1,0,1,1,0,0,1,1,0,1,0,1,1,1,1,0,0,1,1,0,1,1,1,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,1,1,0,1,1,1,0,1,1,1,1,0,1,0,0,0,1,1,1,1,1,1,0,1,1,1,0,0,1,1,0,1,0,0,1,1,1,1,1,0,0,1,1,0,0,1,1,1,1,0,0,1,1,1,1,1,0,1,0,0,1,1,1,0,0,1,1,0,1,1,0,1,1,1,0,0,0,1,1,0,1,1,0,0,1,0,1,0,1,0,0,0,1,0,1,0,1,0,0,1,1,0,1,1,1,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,1,1,0,1,0,1,0,0,0,0,1,0,1,0,1,1,0,0,1,0,0,1,0,1,0,1,0,1,0,0,1,1,1,1,1,0,0,0,0,0,1,0,0,1,1,1,0,0,1,0,1,0,0,0,0,0,1,0,1,0,1,0,0,1,0,0,0,0,0,0,1,0,0,1,1,0,0,1,0,1,1,1,0,1,1,0,1,1,1,1,0,1,1,1,1,0,1,0,0,0,1,0,0,1,0,0,1,0,0,0,1,0,0,0,0,1,0,0,1,0,1,1,0,1,1,1,0,0,1,0,1,1,0,0,1,0,1,0,1,0,1,1,1,1,0,0,0,1,0,0,0,0,1,1,1,1,1,0,0,1,1,1,0,1,0,1,1,0,0,0,0,1,1,0,1,1,0,1,1,0,1,0,1,1,0,1,0,1,1,0,1,1,1,0,0,0,1,1,1,0,0,0,1,1,0,1,0,0,1,1,1,1,0,1,0,1,0,1,1,1,1,1,0,1,1,0,0,1,1,1,1,0,1,0,0,0,0,1,1,1,1,0,0,1,0,0,0,1,0,0,1,0,1,1,1,1,0,0,1,1,0,1,1,1,0,1,1,1,0,0,0,1,0,0,0,0,0,0,1,1,1,0,1,0,0,0,0,1,1,0,1,1,0,1,0,0,1,0,1,0,0,0,0,0,1,1,1,0,0,1,1,0,0,1,1,1,0,0,1,0,1,0,0,0,0,0,0,0,1,1,0,1,0,0,1,0,0,0,0,1,0,1,1,0,1,0,1,0,0,1,0,1,0,1,0,1,1,1,0,0,0,1,1,0,0,0,1,1,0,0,1,0,1,0,0,1,0,0,0,1,1,1,0,1,1,0,0,0,0,0,0,1,0,1,0,1,0,1,0,1,0,0,0,1,0,0,0,0,1,0,1,0,0,0,0,1,0,0,1,0,0,1,1,0,1,0,1,0,1,1,0,0,1,1,1,0,1,1,1,1,1,1,1,0,0,0,1,0,0,1,1,1,0,0,0,1,0,0,1,0,1,1,0,0,1,0,1,1,0,1,1,0,0,0,0,1,1,1,0,0,1,1,1,0,0,0,0,1,0,0,0,0,1,1,0,1,0,0,0,1,0,1,1,1,0,1,0,1,0,0,1,1,0,1,0,1,0,1,1,0,0,1,1,0,0,0,1,0,0,0,1,1,1,0,0,1,1,0,1,0,0,1,0,0,1,1,0,1,0,1,1,1,1,0,0,0,1,0,1,1,1,1,1,1,0,1,1,0,1,1,1,0,0,1,1,0,0,1,0,0,0,0,1,0,1,0,1,1,0,0,0,0,0,1,0,1,0,0,0,0,0,1,0,1,0,0,0,1,1,0,1,1,1,0,0,1,1,0,1,0,1,0,1,0,0,0,0,0,0,0,0,0,1,0,1,0,0,1,1,0,0,0,1,0,0,0,0,1,0,0,0,1,1,0,1,1,1,0,0,1,0,0,0,0,1,1,1,1,1,0,1,1,1,1,1,1,1,0,1,1,1,1,0,0,1,1,1,1,0,0,1,0,1,0,0,1,0,0,0,0,0,1,1,1,0,0,0,1,0,0,1,0,1,0,0,0,0,0,1,0,0,1,1,1,0,1,0,1,0,0,0,1,0,1,1,1,1,0,1,0,0,1,0,1,0,1,1,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,1,1,1,0,0,0,0,1,0,1,1,0,0,0,1,1,1,0,0,1,0,0,0,0,0,0,1,0,1,1,1,0,0,0,1,0,1,0,0,0,0,1,0,1,0,0,1,1,1,0,0,0,1,0,1,0,0,1,1,1,1,0,0,0,0,0,1,0,1,1,0,1,1,1,1,0,0,1,1,0,0,0,1,0,0,1,0,0,1,0,1,0,1,0,1,0,0,0,0,1,0,0,1,0,1,0,0,0,0,1,0,0,0,1,0,0,0,0,1,1,0,0,0,1,1,0,0,0,0,0,0,0,0,0,1,1,0,1,1,1,1,0,0,1,0,1,1,0,0,0,1,0,1,0,1,0,1,0,1,0,1,0,0,0,0,1,1,0,1,0,1,1,1,0,1,1,0,1,1,0,0,0,0,1,1,1,0,1,1,1,1,0,0,1,1,0,0,1,0,1,1,0,0,1,0,1,0,0,0,0,0,1,0,1,0,1,1,1,0,1,1,1,0,1,1,1,0,0,0,1,1,0,0,0,0,0,0,0,1,0,1,1,1,0,1,0,0,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1,1,0,0,1,0,1,0,0,0,0,1,1,1,1,1,0,0,0,0,1,1,0,1,0,1,0,0,0,0,0,1,1,0,0,1,0,1,0,1,0,0,0,1,1,1,1,0,0,0,0,1,0,1,1,1,0,1,0,1,1,1,0,0,0,0,0,0,0,1,0,0,1,1,1,1,1,0,1,0,0,1,1,1,1,0,0,0,0,1,1,1,0,0,0,0,1,0,1,0,1,1,0,1,1,0,1,1,1,1,1,0,0,1,0,0,0,0,0,1,0,1,0,1,0,0,0,1,1,0,1,0,1,1,1,0,0,0,0,1,0,1,1,1,1,0,0,1,0,0,1,1,0,1,1,0,0,1,1,1,1,1,1,0,1,0,1,0,1,0,0,0,1,1,0,0,0,0,0,0,0,1,1,0,1,1,1,0,1,0,0,1,0,1,0,1,0,1,0,0,1,1,0,0,0,1,0,0,1,1,1,0,0,1,1,1,0,1,0,1,0,1,0,1,0,0,0,0,1,1,1,1,0,0,1,1,0,0,0,0,1,0,0,0,0,1,1,0,1,1,1,0,1,1,1,0,1,0,0,0,0,0,0,1,1,1,0,1,1,0,0,1,1,0,0,1,1,0,1,1,1,1,1,0,0,0,0,0,1,1,1,1,0,0,1,0,1,0,1,1,0,1,1,0,0,1,0,0,1,1,0,1,1,1,0,1,0,0,1,0,0,1,1,1,0,1,0,0,1,1,0,1,1,1,0,0,0,1,1,1,0,1,0,1,0,1,0,1,0,0,0,0,0,1,0,1,1,0,1,1,0,1,0,0,1,0,1,0,1,1,1,1,0,0,1,1,1,1,1,0,1,0,0,0,1,1,0,1,1,0,1,0,0,1,1,1,1,1,0,0,1,0,1,0,1,0,0,0,0,0,0,0,1,0,1,1,1,0,0,1,0,1,0,1,1,1,1,1,1,0,0,0,0,1,0,0,0,1,1,1,1,0,1,1,0,0,0,1,1,1,0,1,0,0,1,1,0,0,0,1,1,1,0,0,0,0,0,1,1,0,0,0,1,1,0,1,1,0,0,0,1,0,0,0,1,1,0,0,1,0,0,1,1,1,0,1,1,1,0,1,0,0,1,1,0,1,1,1,1,1,1,0,0,1,1,1,0,1,1,1,0,0,1,1,0,1,1,1,0,1,0,1,0,1,1,0,1,1,0,0,1,0,1,0,0,0,1,0,0,1,1,1,0,1,1,0,0,0,0,0,0,0,1,1,1,0,1,0,1,0,1,0,0,0,1,1,0,1,0,1,0,1,1,0,0,1,0,1,0,0,1,0,0,0,1,0,0,1,0,0,0,0,0,0,0,1,1,0,1,1,0,0,0,0,0,0,1,0,0,1,1,1,1,1,1,0,0,1,1,0,1,0,1,1,0,1,0,0,0,0,1,0,1,1,0,1,0,1,0,0,0,1,0,1,0,0,0,1,1,1,0,0,0,1,1,0,0,1,0,0,0,0,1,1,0,0,1,1,1,1,1,1,1,0,1,0,0,0,1,1,1,0,1,0,0,1,1,1,0,1,1,0,1,1,1,1,0,1,1,0,1,0,1,0,0,1,1,1,1,0,0,0,1,0,1,1,1,0,1,0,0,1,1,1,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,0,1,1,0,0,1,0,1,1,0,0,0,0,1,1,0,0,0,0,0,1,0,0,0,1,0,1,1,1,0,0,0,0,1,1,0,1,1,0,0,1,0,1,0,1,0,1,1,0,0,1,0,0,1,1,0,0,1,0,0,0,1,0,1,0,1,1,1,0,0,0,1,0,1,0,0,0,1,0,0,0,1,0,1,0,1,1,0,0,0,1,1,0,1,0,0,1,1,1,0,1,1,0,1,0,0,0,0,0,1,1,0,1,1,0,1,0,1,1,0,0,0,1,0,0,0,1,0,1,1,1,1,0,1,1,0,1,0,1,1,0,1,1,0,0,1,0,1,1,0,1,0,0,1,0,0,1,1,0,0,1,1,0,0,0,1,0,1,1,1,0,1,1,1,0,1,1,0,1,0,0,0,0,0,1,1,1,1,1,1,0,1,0,0,1,1,1,0,1,0,1,0,1,1,1,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,1,1,0,0,0,0,1,0,0,0,1,0,1,0,0,1,1,1,0,1,1,0,0,0,1,1,0,0,0,0,1,0,0,1,0,0,1,0,1,1,0,1,1,1,1,1,1,0,0,1,1,1,0,1,0,1,0,0,0,0,0,0,1,0,0,1,1,0,0,1,1,0,1,1,0,1,1,0,];
var gg_b = "1749196802/";

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
