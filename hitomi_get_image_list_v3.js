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
case 2009:
case 2654:
case 3293:
case 2549:
case 1497:
case 2307:
case 625:
case 2037:
case 2794:
case 2339:
case 2929:
case 1645:
case 3115:
case 1543:
case 2928:
case 2338:
case 3405:
case 12:
case 2548:
case 3581:
case 1333:
case 3876:
case 2008:
case 2900:
case 2868:
case 3706:
case 3622:
case 3364:
case 708:
case 1552:
case 2869:
case 65:
case 1075:
case 4064:
case 1892:
case 1617:
case 1277:
case 2070:
case 895:
case 3672:
case 3212:
case 840:
case 2101:
case 1455:
case 321:
case 367:
case 1747:
case 1025:
case 213:
case 3053:
case 1416:
case 1905:
case 730:
case 2444:
case 304:
case 1715:
case 1696:
case 4041:
case 2691:
case 3390:
case 2819:
case 1756:
case 3042:
case 434:
case 2818:
case 3341:
case 1230:
case 1813:
case 2978:
case 3314:
case 453:
case 3884:
case 2440:
case 3917:
case 857:
case 100:
case 1922:
case 819:
case 1467:
case 329:
case 2074:
case 2491:
case 2899:
case 3880:
case 1188:
case 347:
case 1234:
case 2644:
case 3738:
case 624:
case 1616:
case 4010:
case 3739:
case 3472:
case 3394:
case 2558:
case 3945:
case 3525:
case 1189:
case 2898:
case 3195:
case 1746:
case 677:
case 3830:
case 606:
case 1417:
case 2741:
case 3213:
case 305:
case 2221:
case 1284:
case 1107:
case 2790:
case 3967:
case 1139:
case 3052:
case 435:
case 3422:
case 3996:
case 3827:
case 4060:
case 181:
case 852:
case 894:
case 197:
case 2661:
case 680:
case 1697:
case 1812:
case 1382:
case 1666:
case 1972:
case 2904:
case 3503:
case 2086:
case 2565:
case 786:
case 334:
case 4042:
case 2692:
case 2089:
case 1669:
case 450:
case 3342:
case 404:
case 3532:
case 269:
case 589:
case 2663:
case 1083:
case 4053:
case 241:
case 2370:
case 2131:
case 1510:
case 1136:
case 1228:
case 2102:
case 3999:
case 792:
case 3353:
case 1935:
case 639:
case 966:
case 700:
case 210:
case 1594:
case 754:
case 2181:
case 3148:
case 1840:
case 1618:
case 848:
case 3774:
case 3621:
case 3064:
case 462:
case 2273:
case 2896:
case 781:
case 738:
case 1551:
case 3250:
case 2867:
case 1619:
case 797:
case 2547:
case 2007:
case 961:
case 927:
case 2309:
case 2462:
case 2927:
case 358:
case 2337:
case 2493:
case 3804:
case 1303:
case 2038:
case 246:
case 3261:
case 2308:
case 586:
case 3829:
case 1758:
case 3254:
case 2175:
case 3635:
case 2753:
case 99:
case 1082:
case 941:
case 3060:
case 3533:
case 2934:
case 1699:
case 2386:
case 683:
case 3343:
case 2595:
case 1120:
case 3828:
case 1971:
case 789:
case 72:
case 2742:
case 1419:
case 3800:
case 1108:
case 4052:
case 636:
case 1418:
case 3969:
case 3787:
case 274:
case 2413:
case 554:
case 3051:
case 500:
case 222:
case 3421:
case 946:
case 2897:
case 2612:
case 3010:
case 3708:
case 1861:
case 2866:
case 2557:
case 3737:
case 261:
case 3094:
case 447:
case 863:
case 3709:
case 48:
case 1590:
case 103:
case 3919:
case 3158:
case 429:
case 1850:
case 2546:
case 1921:
case 1331:
case 1514:
case 3159:
case 1469:
case 688:
case 1541:
case 1001:
case 50:
case 3504:
case 3044:
case 1028:
case 3882:
case 1908:
case 2453:
case 971:
case 3169:
case 512:
case 1909:
case 2847:
case 331:
case 3470:
case 1937:
case 1327:
case 751:
case 1851:
case 3290:
case 2289:
case 1591:
case 1719:
case 990:
case 2856:
case 3674:
case 1283:
case 2288:
case 472:
case 2713:
case 3721:
case 2925:
case 2239:
case 1649:
case 2207:
case 1894:
case 3393:
case 3958:
case 2545:
case 907:
case 3771:
case 3437:
case 1233:
case 1970:
case 1121:
case 13:
case 477:
case 2126:
case 3362:
case 1648:
case 3061:
case 3624:
case 4093:
case 2238:
case 3264:
case 2073:
case 1768:
case 1078:
case 3832:
case 756:
case 3420:
case 1079:
case 1769:
case 964:
case 2792:
case 517:
case 21:
case 3620:
case 1384:
case 3883:
case 3578:
case 2846:
case 2902:
case 658:
case 1841:
case 1936:
case 944:
case 520:
case 3251:
case 4013:
case 425:
case 202:
case 712:
case 3785:
case 3579:
case 1550:
case 3486:
case 2177:
case 128:
case 3424:
case 1448:
case 1561:
case 1449:
case 2597:
case 1282:
case 2857:
case 2566:
case 3260:
case 3392:
case 3436:
case 3091:
case 2127:
case 264:
case 123:
case 584:
case 339:
case 1201:
case 3040:
case 979:
case 2642:
case 1232:
case 1799:
case 2762:
case 2555:
case 1924:
case 1659:
case 1986:
case 759:
case 2895:
case 3210:
case 2371:
case 2516:
case 1185:
case 3529:
case 556:
case 3949:
case 1798:
case 3735:
case 2373:
case 3802:
case 4050:
case 2220:
case 1988:
case 3526:
case 3946:
case 3584:
case 2983:
case 3831:
case 1513:
case 3145:
case 2464:
case 1379:
case 1275:
case 1615:
case 1077:
case 3350:
case 2651:
case 1767:
case 1656:
case 2791:
case 3117:
case 2237:
case 112:
case 2035:
case 642:
case 3093:
case 937:
case 4061:
case 2305:
case 306:
case 605:
case 3438:
case 10:
case 3957:
case 3407:
case 899:
case 1852:
case 1665:
case 2414:
case 2287:
case 1446:
case 3488:
case 1592:
case 1717:
case 117:
case 2441:
case 814:
case 372:
case 1300:
case 185:
case 2568:
case 1172:
case 1563:
case 1030:
case 3722:
case 1938:
case 53:
case 3995:
case 1843:
case 3311:
case 3576:
case 2270:
case 2848:
case 2323:
case 431:
case 3012:
case 1907:
case 1027:
case 1457:
case 1329:
case 1225:
case 301:
case 1797:
case 1034:
case 604:
case 2100:
case 650:
case 2494:
case 3803:
case 1657:
case 3527:
case 298:
case 528:
case 237:
case 3875:
case 3406:
case 2129:
case 621:
case 1646:
case 3530:
case 1465:
case 3773:
case 2641:
case 3688:
case 3340:
case 2858:
case 156:
case 1593:
case 2598:
case 870:
case 3354:
case 1853:
case 3825:
case 1755:
case 3723:
case 3243:
case 1173:
case 1447:
case 3580:
case 3638:
case 2178:
case 2224:
case 2744:
case 662:
case 626:
case 1415:
case 1906:
case 2021:
case 1026:
case 3252:
case 523:
case 2249:
case 3593:
case 2345:
case 2994:
case 1639:
case 2729:
case 356:
case 655:
case 2535:
case 689:
case 1243:
case 3447:
case 3562:
case 15:
case 2728:
case 428:
case 248:
case 3281:
case 1638:
case 2870:
case 3716:
case 3695:
case 2248:
case 539:
case 3906:
case 0:
case 1166:
case 3456:
case 2161:
case 1197:
case 3026:
case 2317:
case 963:
case 3105:
case 736:
case 1965:
case 2808:
case 869:
case 2960:
case 3512:
case 3034:
case 3657:
case 1705:
case 351:
case 2837:
case 4004:
case 1947:
case 320:
case 1092:
case 2401:
case 2367:
case 1875:
case 1391:
case 2585:
case 2432:
case 2396:
case 1406:
case 731:
case 3202:
case 3465:
case 2820:
case 3646:
case 1116:
case 2683:
case 1773:
case 2068:
case 2111:
case 3231:
case 243:
case 1340:
case 841:
case 3123:
case 3446:
case 4000:
case 3852:
case 861:
case 1488:
case 583:
case 124:
case 1489:
case 686:
case 3563:
case 2632:
case 2571:
case 3938:
case 739:
case 1995:
case 4029:
case 948:
case 1881:
case 1311:
case 2824:
case 3907:
case 2258:
case 1167:
case 3457:
case 3329:
case 3225:
case 101:
case 1196:
case 1802:
case 1526:
case 3988:
case 4079:
case 681:
case 1831:
case 697:
case 180:
case 1145:
case 3379:
case 3796:
case 3615:
case 4078:
case 2990:
case 3767:
case 312:
case 43:
case 2433:
case 106:
case 531:
case 268:
case 1093:
case 30:
case 1439:
case 1772:
case 2704:
case 1062:
case 2397:
case 1407:
case 3203:
case 3080:
case 1091:
case 1474:
case 2402:
case 2265:
case 2369:
case 2067:
case 994:
case 1436:
case 952:
case 2777:
case 211:
case 2431:
case 323:
case 2952:
case 240:
case 3201:
case 1363:
case 1040:
case 451:
case 3924:
case 2523:
case 3799:
case 3511:
case 3376:
case 2780:
case 1833:
case 1670:
case 1210:
case 55:
case 3659:
case 3544:
case 1528:
case 2839:
case 3185:
case 4076:
case 1735:
case 2807:
case 1294:
case 2625:
case 2730:
case 509:
case 1620:
case 484:
case 2573:
case 2318:
case 3841:
case 960:
case 2319:
case 1198:
case 1251:
case 2017:
case 777:
case 4026:
case 216:
case 3550:
case 706:
case 1785:
case 2193:
case 1486:
case 1637:
case 780:
case 2505:
case 818:
case 328:
case 6:
case 1424:
case 1408:
case 40:
case 3554:
case 1119:
case 3649:
case 4080:
case 1393:
case 1958:
case 2403:
case 136:
case 501:
case 3970:
case 3121:
case 2113:
case 2066:
case 1437:
case 412:
case 3233:
case 725:
case 3380:
case 1061:
case 2399:
case 97:
case 2681:
case 2097:
case 2734:
case 1801:
case 4077:
case 940:
case 75:
case 2806:
case 3078:
case 2522:
case 294:
case 183:
case 524:
case 911:
case 252:
case 1504:
case 1044:
case 3028:
case 2257:
case 630:
case 2425:
case 1168:
case 1882:
case 2055:
case 577:
case 3909:
case 2192:
case 1169:
case 3937:
case 3327:
case 131:
case 1470:
case 485:
case 1290:
case 580:
case 3591:
case 1487:
case 3540:
case 1636:
case 3283:
case 3718:
case 2246:
case 2726:
case 1214:
case 2602:
case 1674:
case 417:
case 2784:
case 1721:
case 2631:
case 3171:
case 3330:
case 1241:
case 3861:
case 486:
case 2142:
case 987:
case 2805:
case 2627:
case 750:
case 214:
case 704:
case 3187:
case 2434:
case 2153:
case 721:
case 3468:
case 2589:
case 2775:
case 4002:
case 1158:
case 330:
case 2267:
case 3032:
case 3514:
case 492:
case 1720:
case 1159:
case 3921:
case 3170:
case 505:
case 400:
case 3302:
case 454:
case 1918:
case 4081:
case 3758:
case 2725:
case 996:
case 2245:
case 1635:
case 3381:
case 2348:
case 3699:
case 2823:
case 3082:
case 481:
case 3844:
case 3759:
case 1828:
case 3971:
case 58:
case 2538:
case 1770:
case 497:
case 2963:
case 135:
case 1800:
case 3108:
case 726:
case 2056:
case 1787:
case 1969:
case 2426:
case 2992:
case 3109:
case 1352:
case 2015:
case 2484:
case 1051:
case 1774:
case 1736:
case 1148:
case 3124:
case 3278:
case 3618:
case 628:
case 4075:
case 3186:
case 3:
case 2477:
case 1064:
case 3985:
case 270:
case 3551:
case 3279:
case 1149:
case 3891:
case 1250:
case 4003:
case 2480:
case 893:
case 3303:
case 2095:
case 1261:
case 2872:
case 2297:
case 1435:
case 1582:
case 2266:
case 134:
case 3669:
case 1342:
case 3668:
case 1041:
case 1501:
case 2046:
case 3083:
case 2506:
case 1014:
case 78:
case 1485:
case 1211:
case 1786:
case 2359:
case 3228:
case 729:
case 3174:
case 1999:
case 2216:
case 2676:
case 1724:
case 623:
case 3510:
case 96:
case 3854:
case 3749:
case 1998:
case 3325:
case 2358:
case 2993:
case 3594:
case 296:
case 1195:
case 3746:
case 3138:
case 2783:
case 2520:
case 1673:
case 105:
case 1788:
case 60:
case 1789:
case 1575:
case 2356:
case 2991:
case 3107:
case 758:
case 1052:
case 2679:
case 4082:
case 381:
case 1605:
case 978:
case 2347:
case 3812:
case 3697:
case 3382:
case 2048:
case 879:
case 2508:
case 3081:
case 1360:
case 3666:
case 3972:
case 2164:
case 3445:
case 865:
case 4032:
case 1877:
case 4001:
case 2365:
case 973:
case 3031:
case 2268:
case 403:
case 3496:
case 3332:
case 535:
case 1263:
case 3862:
case 1310:
case 2141:
case 147:
case 1738:
case 1146:
case 3276:
case 3234:
case 2114:
case 2628:
case 734:
case 685:
case 1394:
case 386:
case 2404:
case 659:
case 2954:
case 1707:
case 753:
case 3553:
case 1672:
case 2604:
case 1212:
case 2059:
case 1966:
case 620:
case 3106:
case 1997:
case 2961:
case 2782:
case 121:
case 167:
case 3025:
case 1423:
case 3455:
case 2428:
case 1165:
case 3905:
case 558:
case 2058:
case 3696:
case 2950:
case 2194:
case 150:
case 3667:
case 2400:
case 3756:
case 651:
case 1826:
case 1502:
case 2574:
case 2821:
case 1884:
case 3383:
case 1531:
case 1156:
case 126:
case 1293:
case 3497:
case 3645:
case 3466:
case 1916:
case 2299:
case 3543:
case 2944:
case 2586:
case 1955:
case 735:
case 3923:
case 2911:
case 2701:
case 355:
case 2479:
case 1364:
case 389:
case 3863:
case 1622:
case 3765:
case 534:
case 2478:
case 1147:
case 1473:
case 3617:
case 162:
case 2418:
case 3056:
case 3992:
case 122:
case 877:
case 3484:
case 1413:
case 2137:
case 2564:
case 1103:
case 399:
case 1222:
case 1742:
case 2811:
case 3680:
case 3348:
case 1324:
case 1934:
case 3823:
case 694:
case 1976:
case 2082:
case 2120:
case 2844:
case 2971:
case 652:
case 4049:
case 4048:
case 166:
case 208:
case 3725:
case 1753:
case 2698:
case 3349:
case 3245:
case 2032:
case 2514:
case 3913:
case 1546:
case 657:
case 2331:
case 1006:
case 2541:
case 1926:
case 2001:
case 1492:
case 2469:
case 1374:
case 9:
case 203:
case 3153:
case 1125:
case 801:
case 3065:
case 230:
case 3805:
case 3627:
case 314:
case 872:
case 127:
case 2187:
case 2861:
case 660:
case 3142:
case 2204:
case 1412:
case 640:
case 2935:
case 2325:
case 2229:
case 110:
case 2594:
case 695:
case 3057:
case 3255:
case 2174:
case 1980:
case 3216:
case 3676:
case 3962:
case 611:
case 3781:
case 2510:
case 2136:
case 175:
case 1088:
case 3822:
case 1663:
case 2083:
case 3506:
case 382:
case 2669:
case 1692:
case 1387:
case 2303:
case 146:
case 1493:
case 3872:
case 825:
case 2498:
case 2560:
case 315:
case 2033:
case 616:
case 3266:
case 1462:
case 3480:
case 513:
case 387:
case 1337:
case 391:
case 34:
case 2985:
case 370:
case 1515:
case 2619:
case 2375:
case 2891:
case 1867:
case 3702:
case 1181:
case 2124:
case 2840:
case 2278:
case 3477:
case 1930:
case 566:
case 2893:
case 3404:
case 3835:
case 3190:
case 3954:
case 2553:
case 2655:
case 2862:
case 1899:
case 775:
case 3733:
case 2188:
case 3141:
case 1271:
case 1183:
case 663:
case 2795:
case 769:
case 1644:
case 3628:
case 741:
case 3268:
case 2922:
case 1764:
case 2002:
case 1074:
case 2301:
case 4065:
case 2467:
case 831:
case 3587:
case 1440:
case 574:
case 522:
case 3269:
case 2697:
case 2812:
case 1454:
case 3508:
case 2081:
case 1904:
case 1086:
case 2757:
case 2445:
case 4047:
case 3537:
case 238:
case 561:
case 3509:
case 297:
case 3049:
case 3347:
case 836:
case 2139:
case 3679:
case 3315:
case 549:
case 2746:
case 746:
case 2138:
case 2226:
case 4056:
case 3940:
case 1221:
case 2284:
case 1741:
case 1133:
case 668:
case 933:
case 992:
case 2765:
case 2552:
case 118:
case 3478:
case 648:
case 2892:
case 1869:
case 954:
case 255:
case 575:
case 1182:
case 470:
case 569:
case 289:
case 2863:
case 2543:
case 3395:
case 541:
case 2280:
case 2003:
case 3944:
case 3871:
case 1548:
case 491:
case 22:
case 1307:
case 986:
case 1009:
case 2497:
case 1929:
case 722:
case 2645:
case 415:
case 3298:
case 510:
case 1037:
case 1794:
case 2466:
case 3536:
case 1818:
case 1640:
case 2230:
case 2973:
case 3821:
case 3346:
case 727:
case 761:
case 3194:
case 1979:
case 1751:
case 2667:
case 1087:
case 1691:
case 4046:
case 1819:
case 2747:
case 113:
case 4057:
case 981:
case 2455:
case 3428:
case 1444:
case 2905:
case 997:
case 643:
case 378:
case 3604:
case 3059:
case 3357:
case 1101:
case 839:
case 1274:
case 1614:
case 2202:
case 2465:
case 1128:
case 4067:
case 3778:
case 3683:
case 1641:
case 343:
case 545:
case 3367:
case 1690:
case 440:
case 502:
case 3585:
case 3779:
case 3396:
case 3951:
case 495:
case 1750:
case 853:
case 912:
case 571:
case 3837:
case 47:
case 834:
case 3809:
case 3808:
case 1761:
case 1982:
case 90:
case 2797:
case 2512:
case 2304:
case 1071:
case 744:
case 2657:
case 3887:
case 3317:
case 3019:
case 132:
case 564:
case 284:
case 4017:
case 2415:
case 985:
case 1664:
case 1322:
case 2456:
case 3700:
case 2842:
case 1286:
case 765:
case 3633:
case 4045:
case 1599:
case 2173:
case 2562:
case 2755:
case 3910:
case 1744:
case 3728:
case 673:
case 348:
case 3870:
case 1178:
case 3248:
case 3249:
case 1179:
case 3994:
case 576:
case 256:
case 3150:
case 1460:
case 3482:
case 3366:
case 71:
case 3397:
case 3682:
case 3098:
case 951:
case 212:
case 702:
case 4066:
case 1237:
case 790:
case 1209:
case 2077:
case 771:
case 1464:
case 2379:
case 2615:
case 2796:
case 1791:
case 3154:
case 2989:
case 1740:
case 3836:
case 494:
case 1518:
case 1373:
case 452:
case 3914:
case 544:
case 2513:
case 3521:
case 1849:
case 2907:
case 419:
case 3258:
case 764:
case 2225:
case 4055:
case 1694:
case 2939:
case 3886:
case 3316:
case 2843:
case 457:
case 1323:
case 1933:
case 3355:
case 3259:
case 1270:
case 1848:
case 3140:
case 3824:
case 460:
case 1490:
case 1568:
case 3601:
case 2563:
case 2030:
case 579:
case 259:
case 2172:
case 2446:
case 1085:
case 1414:
case 984:
case 363:
case 2592:
case 2717:
case 707:
case 217:
case 1441:
case 2449:
case 1597:
case 670:
case 3603:
case 2282:
case 862:
case 3505:
case 228:
case 537:
case 2448:
case 2135:
case 2890:
case 3889:
case 102:
case 615:
case 2550:
case 826:
case 3730:
case 1846:
case 1321:
case 2814:
case 2936:
case 3162:
case 691:
case 1180:
case 3888:
case 3318:
case 1902:
case 2841:
case 176:
case 2185:
case 804:
case 850:
case 3807:
case 3625:
case 1653:
case 2334:
case 1762:
case 2924:
case 93:
case 2511:
case 2376:
case 1895:
case 3943:
case 682:
case 2004:
case 37:
case 2659:
case 2544:
case 2986:
case 2864:
case 1642:
case 3112:
case 696:
case 3368:
case 532:
case 3265:
case 164:
case 3777:
case 311:
case 223:
case 821:
case 1127:
case 2540:
case 2283:
case 2000:
case 1176:
case 3726:
case 3602:
case 463:
case 3631:
case 2330:
case 798:
case 1596:
case 1815:
case 1289:
case 2851:
case 360:
case 737:
case 2591:
case 1442:
case 3192:
case 2937:
case 2327:
case 2459:
case 2029:
case 319:
case 1903:
case 2028:
case 829:
case 3016:
case 3055:
case 1865:
case 2079:
case 1792:
case 2769:
case 1073:
case 3942:
case 165:
case 3522:
case 2970:
case 2121:
case 805:
case 842:
case 3113:
case 3066:
case 2233:
case 2380:
case 2648:
case 2810:
case 3295:
case 3399:
case 3681:
case 468:
case 699:
case 1925:
case 3953:
case 2649:
case 1005:
case 1545:
case 1207:
case 3403:
case 2050:
case 3865:
case 3652:
case 881:
case 838:
case 152:
case 563:
case 2264:
case 1475:
case 2801:
case 939:
case 1942:
case 365:
case 1806:
case 748:
case 2959:
case 1066:
case 2437:
case 2686:
case 622:
case 1097:
case 2061:
case 2624:
case 674:
case 1399:
case 1295:
case 1776:
case 3238:
case 1681:
case 3925:
case 3207:
case 236:
case 3005:
case 2958:
case 3134:
case 2214:
case 1602:
case 2674:
case 2487:
case 2636:
case 627:
case 661:
case 3288:
case 344:
case 1784:
case 2721:
case 160:
case 3596:
case 3289:
case 3385:
case 3442:
case 886:
case 3975:
case 854:
case 3847:
case 231:
case 2470:
case 833:
case 1163:
case 1016:
case 1572:
case 2044:
case 3023:
case 3453:
case 743:
case 1257:
case 1425:
case 2168:
case 2294:
case 307:
case 2949:
case 3653:
case 669:
case 2735:
case 4071:
case 498:
case 3762:
case 1943:
case 437:
case 548:
case 3895:
case 1838:
case 3516:
case 3130:
case 239:
case 140:
case 3206:
case 2040:
case 3642:
case 2392:
case 2436:
case 2091:
case 1265:
case 364:
case 1777:
case 1952:
case 889:
case 3597:
case 3712:
case 855:
case 3857:
case 1603:
case 1505:
case 1045:
case 1727:
case 2637:
case 3177:
case 3443:
case 371:
case 1481:
case 2424:
case 2609:
case 2054:
case 4021:
case 646:
case 1017:
case 1319:
case 1215:
case 2198:
case 1675:
case 2785:
case 2579:
case 390:
case 1256:
case 116:
case 3931:
case 2313:
case 2883:
case 2578:
case 432:
case 3022:
case 82:
case 2199:
case 1318:
case 2167:
case 803:
case 2253:
case 4023:
case 3694:
case 711:
case 2344:
case 1316:
case 740:
case 2881:
case 2311:
case 95:
case 1824:
case 3323:
case 795:
case 1355:
case 1259:
case 2534:
case 2012:
case 1601:
case 925:
case 2489:
case 3104:
case 2242:
case 3085:
case 594:
case 3287:
case 3441:
case 3569:
case 2772:
case 519:
case 2957:
case 3208:
case 1366:
case 3660:
case 1397:
case 1682:
case 277:
case 3237:
case 1098:
case 3305:
case 206:
case 168:
case 2145:
case 465:
case 280:
case 1990:
case 479:
case 3791:
case 3373:
case 909:
case 2802:
case 3220:
case 2526:
case 2946:
case 1521:
case 3983:
case 2831:
case 1019:
case 4022:
case 2252:
case 332:
case 1887:
case 1317:
case 511:
case 924:
case 3932:
case 402:
case 445:
case 3021:
case 2197:
case 3901:
case 490:
case 1700:
case 1018:
case 471:
case 3286:
case 1633:
case 618:
case 3224:
case 1248:
case 25:
case 57:
case 3859:
case 3858:
case 1729:
case 1150:
case 3179:
case 1994:
case 2639:
case 901:
case 1482:
case 2825:
case 2607:
case 2116:
case 1683:
case 613:
case 3274:
case 3614:
case 1820:
case 2773:
case 3641:
case 1111:
case 3690:
case 2875:
case 2956:
case 1069:
case 2092:
case 757:
case 2915:
case 1585:
case 1779:
case 1432:
case 760:
case 2705:
case 398:
case 906:
case 3410:
case 337:
case 4072:
case 476:
case 3100:
case 3761:
case 3071:
case 3494:
case 2826:
case 2042:
case 2502:
case 1110:
case 3388:
case 2341:
case 2531:
case 1346:
case 637:
case 942:
case 2884:
case 1194:
case 570:
case 3979:
case 250:
case 3751:
case 475:
case 4088:
case 3691:
case 3389:
case 1400:
case 2423:
case 221:
case 267:
case 313:
case 2165:
case 591:
case 2672:
case 1604:
case 2966:
case 3132:
case 3760:
case 515:
case 3101:
case 2997:
case 828:
case 3869:
case 262:
case 2147:
case 3900:
case 1701:
case 1160:
case 3868:
case 3450:
case 929:
case 2706:
case 2622:
case 1732:
case 2364:
case 76:
case 3020:
case 1395:
case 1944:
case 1871:
case 693:
case 2916:
case 2834:
case 98:
case 2955:
case 3548:
case 2876:
case 3008:
case 3009:
case 4038:
case 3549:
case 2293:
case 2156:
case 3307:
case 3461:
case 3037:
case 3235:
case 1298:
case 3661:
case 1508:
case 2360:
case 3454:
case 466:
case 1164:
case 2503:
case 3086:
case 2827:
case 2605:
case 967:
case 1537:
case 514:
case 1049:
case 787:
case 950:
case 2789:
case 2575:
case 904:
case 791:
case 1885:
case 1679:
case 1219:
case 1315:
case 2351:
case 2996:
case 3714:
case 1783:
case 2830:
case 2673:
case 2213:
case 3741:
case 3133:
case 2788:
case 422:
case 1629:
case 1954:
case 2525:
case 1835:
case 782:
case 3898:
case 2310:
case 2880:
case 1733:
case 3611:
case 247:
case 3271:
case 461:
case 28:
case 3183:
case 2738:
case 2146:
case 3306:
case 1268:
case 449:
case 1600:
case 3491:
case 3074:
case 1587:
case 4006:
case 2917:
case 796:
case 2292:
case 3493:
case 602:
case 2804:
case 1297:
case 346:
case 115:
case 3308:
case 2582:
case 1480:
case 3007:
case 187:
case 61:
case 3309:
case 884:
case 3462:
case 1152:
case 3039:
case 3896:
case 170:
case 2250:
case 4020:
case 3867:
case 856:
case 2149:
case 3181:
case 671:
case 1702:
case 2774:
case 1626:
case 3320:
case 1731:
case 3613:
case 1477:
case 2353:
case 3412:
case 820:
case 3845:
case 196:
case 310:
case 413:
case 3223:
case 1359:
case 341:
case 2671:
case 2211:
case 1057:
case 2786:
case 1676:
case 1962:
case 2724:
case 2244:
case 3980:
case 676:
case 375:
case 4087:
case 369:
case 2532:
case 2014:
case 2485:
case 1046:
case 1822:
case 3663:
case 1506:
case 234:
case 3817:
case 182:
case 851:
case 3546:
case 3984:
case 2583:
case 3006:
case 2878:
case 1913:
case 3374:
case 1873:
case 3926:
case 1589:
case 1296:
case 1775:
case 2919:
case 1153:
case 2158:
case 778:
case 3463:
case 1267:
case 4036:
case 1065:
case 2291:
case 114:
case 327:
case 361:
case 1434:
case 1476:
case 859:
case 2708:
case 3557:
case 885:
case 934:
case 1677:
case 1217:
case 374:
case 2051:
case 2352:
case 953:
case 3103:
case 80:
case 235:
case 2800:
case 3662:
case 1823:
case 3976:
case 2533:
case 1348:
case 3324:
case 3934:
case 1538:
case 3816:
case 2343:
case 16:
case 2828:
case 2829:
case 3693:
case 2254:
case 1245:
case 679:
case 3753:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1763172002/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,1,1,0,1,1,0,1,1,0,0,1,0,0,1,0,0,1,1,1,1,0,0,1,1,0,1,1,0,1,0,1,1,1,0,1,1,0,1,1,0,1,1,0,1,1,1,0,0,1,0,1,1,0,1,0,1,0,0,1,0,0,1,1,1,0,1,1,1,1,1,0,0,1,1,0,0,1,0,1,0,1,0,1,1,1,1,1,1,1,0,1,1,0,1,0,0,0,0,0,0,0,0,0,1,0,0,1,1,1,0,1,0,0,0,0,0,0,0,1,1,0,0,0,0,1,0,0,0,1,1,0,0,1,0,0,0,1,1,1,0,1,1,1,1,1,0,0,1,1,0,1,0,1,1,1,0,1,1,1,0,1,0,1,0,0,0,0,0,1,0,1,1,1,1,0,0,1,1,1,0,0,0,0,1,0,1,0,1,1,1,1,1,1,1,1,0,0,1,1,1,1,0,0,1,1,0,1,0,1,0,0,0,0,0,1,0,0,1,1,1,0,0,0,1,1,1,1,0,1,0,0,1,1,0,0,0,0,0,0,0,0,1,0,1,1,0,0,0,1,0,1,0,1,1,0,0,1,1,0,1,0,0,1,0,1,1,0,0,0,0,1,1,1,0,1,1,0,1,1,0,1,1,1,0,1,1,1,1,0,1,1,1,1,0,1,0,0,0,1,1,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,1,1,1,0,0,0,1,0,1,1,1,0,0,0,0,0,0,1,0,1,1,0,1,0,1,0,1,0,0,1,0,0,0,1,1,0,1,1,1,0,0,1,0,1,0,0,1,0,0,0,1,0,1,0,0,0,0,1,0,0,1,1,0,1,1,0,0,1,1,1,0,0,1,0,0,0,1,1,1,1,1,1,0,0,0,1,0,0,0,1,1,1,1,1,1,1,0,0,1,0,1,0,1,0,1,1,0,1,1,0,1,1,0,0,1,0,0,1,0,0,1,0,1,1,0,1,1,1,1,0,1,0,1,0,0,0,0,0,0,1,1,0,1,1,0,0,0,0,1,0,0,1,0,1,0,0,0,1,1,0,0,0,1,0,1,0,1,1,0,0,0,1,1,1,0,0,0,1,0,0,1,0,0,1,0,0,0,1,1,0,1,1,1,0,0,0,0,0,0,0,1,0,1,0,0,1,0,0,0,1,1,1,0,1,1,0,0,1,0,0,1,0,1,0,1,0,1,1,0,0,1,1,0,0,1,1,1,1,0,1,0,1,0,1,1,0,1,0,0,1,0,1,1,0,0,0,1,1,0,0,0,0,1,0,0,1,1,0,0,1,0,1,1,0,1,0,1,1,0,1,1,1,1,1,1,1,0,1,0,0,0,1,1,1,1,0,1,0,1,0,0,1,0,1,0,0,0,0,0,0,0,0,0,1,0,1,1,1,1,1,0,0,1,0,0,1,0,0,1,1,0,1,0,1,0,0,0,1,1,0,1,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,1,0,0,1,0,0,1,0,0,0,0,0,1,0,0,1,0,0,1,0,1,0,0,0,0,0,1,0,0,1,0,1,0,1,0,0,0,1,1,0,0,1,1,1,1,1,1,1,1,0,0,1,1,0,0,0,1,0,0,0,1,1,0,0,0,0,0,0,0,0,1,0,0,1,0,1,0,1,0,0,1,0,0,1,0,0,0,0,0,0,1,1,0,0,1,1,1,0,1,0,1,1,1,0,1,0,0,1,0,0,0,1,1,1,0,0,1,0,0,0,0,1,1,0,0,0,0,1,1,0,1,0,0,0,1,1,1,1,1,1,1,1,0,1,1,1,0,0,0,0,1,1,1,0,0,1,0,0,1,0,1,0,0,1,0,1,0,0,0,0,0,1,1,1,1,1,0,1,0,0,0,0,0,0,0,0,1,0,1,0,0,0,1,0,1,1,1,0,0,1,0,1,1,1,1,0,1,0,1,0,1,1,0,0,0,1,1,0,1,1,1,0,0,0,1,1,1,0,1,0,1,1,0,1,0,0,1,0,1,0,0,1,1,1,1,1,1,1,1,1,1,1,0,0,1,0,1,0,1,1,1,0,0,1,1,0,1,0,0,0,0,1,0,1,0,1,0,1,0,0,0,0,0,1,1,1,1,1,0,0,1,0,0,1,0,0,1,1,1,0,1,0,1,1,1,1,0,0,1,0,1,1,0,0,0,0,1,1,0,1,0,1,0,1,0,0,1,1,1,0,1,1,1,0,0,1,1,0,1,1,1,1,0,1,0,0,0,0,1,1,1,1,1,0,0,0,0,1,0,1,1,1,0,1,1,0,1,1,0,0,1,1,0,0,0,1,1,0,1,0,0,1,1,1,1,0,1,1,1,0,0,1,0,0,0,1,1,0,1,0,1,0,0,0,1,0,0,0,1,1,0,0,1,0,0,0,0,1,1,0,0,0,1,1,1,0,0,1,1,0,1,0,1,1,1,0,0,1,0,0,1,1,1,1,0,1,1,0,0,0,1,1,1,0,1,0,0,1,1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,0,0,0,0,0,0,1,0,0,1,1,0,1,0,0,0,1,1,0,0,0,0,0,0,0,1,1,0,0,1,1,0,1,0,0,0,0,0,0,1,0,1,1,0,0,1,1,1,1,0,0,0,0,0,1,1,0,1,1,1,1,1,0,1,0,0,0,0,1,0,0,1,0,1,0,1,0,0,1,1,0,1,1,0,1,0,1,0,0,0,1,1,0,1,1,1,0,1,0,1,0,1,1,0,1,0,0,1,1,1,1,0,0,1,0,1,0,1,0,1,0,1,0,0,1,0,0,1,1,0,0,1,0,1,1,1,1,0,0,0,1,0,1,1,0,0,1,1,0,0,0,0,0,0,1,0,1,1,0,1,1,1,0,1,1,0,0,1,1,1,0,0,0,0,0,1,0,0,0,0,1,1,0,1,0,1,0,1,0,1,1,1,0,1,1,0,1,0,1,1,1,0,1,0,1,1,1,0,1,1,0,1,1,1,0,0,1,1,0,0,1,0,1,1,1,1,1,1,0,0,1,1,1,1,0,1,1,0,1,0,1,1,0,1,1,1,0,1,0,0,0,1,0,1,0,0,1,1,1,1,1,0,0,0,1,1,1,0,0,0,0,0,0,0,0,1,1,1,0,0,0,1,1,1,1,1,1,0,1,0,0,0,0,1,0,0,0,0,1,0,1,0,0,0,0,1,1,1,1,0,0,1,0,1,1,0,1,0,1,0,0,1,0,1,0,0,1,1,0,0,0,0,0,1,1,0,0,0,1,1,0,0,0,0,0,0,1,0,0,1,1,1,0,1,1,1,0,0,1,0,0,0,1,0,1,0,1,1,0,0,0,1,1,0,1,1,0,1,1,1,1,0,1,0,1,1,0,1,1,1,1,1,0,0,1,1,0,1,0,1,0,0,1,0,1,0,0,0,1,1,1,1,1,1,1,1,0,1,0,1,1,1,1,0,1,1,1,0,1,1,0,1,1,1,1,1,1,0,1,1,0,1,0,1,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,1,0,1,1,1,0,1,1,0,1,1,1,0,1,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,1,1,1,0,1,1,0,0,1,0,1,1,1,0,0,0,0,1,1,0,0,1,0,0,0,0,0,0,1,0,1,0,0,0,1,1,1,1,1,1,0,0,0,1,0,1,0,0,1,0,0,0,0,1,1,0,1,0,1,1,1,1,1,1,1,0,1,0,1,0,0,0,1,1,0,1,1,0,1,0,1,0,0,0,1,0,0,1,0,1,0,0,0,1,0,1,0,0,1,1,0,0,1,0,1,0,0,1,0,1,1,0,0,1,0,1,1,0,0,0,0,1,0,0,0,0,0,0,1,0,1,1,1,0,0,0,0,0,0,0,1,0,0,1,0,1,1,0,0,0,0,0,0,1,1,1,0,1,1,1,1,1,0,0,1,0,1,1,0,0,0,1,0,0,0,1,0,1,0,1,1,0,1,0,1,0,1,1,0,1,0,0,1,0,1,1,0,1,0,0,0,0,0,0,1,1,1,1,1,1,1,0,1,1,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,1,1,0,0,1,0,0,1,0,1,1,1,1,0,1,0,0,1,1,1,0,1,1,0,0,0,0,0,0,0,0,1,1,1,0,1,1,0,1,0,1,1,0,0,1,0,0,0,1,1,0,0,1,1,0,0,0,0,0,0,1,1,1,0,0,0,1,1,0,1,1,1,1,0,1,0,0,1,1,0,1,1,1,0,1,1,0,0,1,1,0,0,0,0,1,1,1,0,1,1,0,0,1,0,1,1,1,0,1,0,1,0,1,1,1,0,0,1,0,0,0,0,0,0,0,0,1,1,0,0,0,1,1,0,1,0,0,1,0,1,1,1,0,1,1,1,1,1,1,0,0,0,1,0,0,1,0,1,0,0,1,0,1,0,1,0,1,0,1,0,1,0,0,1,1,0,0,0,1,0,0,1,0,1,1,1,1,0,0,0,1,0,1,1,0,0,1,1,0,1,0,1,0,0,0,1,1,0,1,1,0,1,0,0,1,1,0,1,0,1,1,0,0,0,1,1,1,1,1,1,1,1,0,1,0,0,1,0,1,1,1,0,0,1,1,0,1,0,0,1,0,1,0,1,1,1,0,0,0,0,0,1,0,0,1,1,0,0,0,1,0,1,1,1,0,1,1,0,1,0,1,1,0,1,1,0,0,1,0,0,1,1,1,0,0,0,0,1,0,0,1,1,0,1,1,1,0,1,0,0,1,1,1,0,0,0,1,1,0,0,0,1,1,0,1,0,1,1,0,1,1,1,0,1,0,0,1,0,1,1,1,0,0,1,1,0,0,0,1,1,0,0,1,1,0,1,1,1,0,0,0,1,1,0,1,0,0,0,1,0,0,0,1,0,0,0,1,1,0,0,1,1,1,1,1,0,0,0,0,0,1,0,1,1,0,1,1,1,1,0,1,0,1,0,0,0,1,1,0,0,0,1,0,0,0,0,1,1,0,1,0,1,0,1,0,0,0,1,0,0,0,0,0,1,0,1,1,1,0,0,0,1,1,1,0,1,0,1,0,1,1,0,0,1,1,0,1,1,0,0,0,1,0,1,0,0,0,1,0,0,1,1,0,0,0,1,1,0,1,0,0,0,1,1,1,0,0,1,0,1,0,0,0,1,0,1,0,0,1,1,0,0,1,1,1,1,1,0,1,1,1,1,1,0,1,1,1,0,0,1,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,1,1,0,1,1,1,1,0,0,0,0,1,0,1,1,0,0,0,0,1,0,0,1,1,0,0,1,1,0,0,0,1,0,0,1,1,1,0,1,0,0,1,1,0,1,1,0,1,0,0,0,0,1,0,0,1,1,1,1,1,1,0,0,0,0,1,1,1,0,0,1,0,1,0,1,0,1,0,0,1,1,0,0,1,1,1,0,0,1,0,0,1,0,1,0,0,0,0,0,1,0,1,1,1,0,1,0,0,1,0,0,1,1,1,1,0,0,0,0,0,1,1,0,1,0,0,1,0,0,0,0,0,0,0,0,1,0,0,1,0,1,0,0,1,0,1,0,0,0,0,0,1,0,1,1,0,1,0,0,0,1,1,0,0,1,1,0,0,1,0,0,1,1,0,1,0,0,1,0,0,1,0,0,1,1,1,0,1,0,0,1,0,1,0,1,1,0,1,1,0,1,1,1,0,1,1,0,1,0,0,1,0,0,1,1,0,0,1,1,1,0,0,1,0,1,0,0,1,0,0,1,1,0,0,1,0,1,1,0,0,1,0,1,0,1,0,1,0,1,1,1,0,1,0,1,0,0,0,0,1,0,1,1,0,1,0,1,0,1,1,0,1,1,1,1,0,0,1,1,1,1,0,0,1,1,0,1,1,0,0,0,1,0,1,1,1,1,0,1,1,1,0,1,1,1,0,1,1,0,0,0,1,0,0,0,1,1,1,0,0,1,1,0,1,1,0,0,1,0,1,0,0,1,1,1,1,1,0,1,0,1,0,1,1,1,1,0,1,1,0,1,1,1,0,1,1,0,0,0,0,1,0,1,1,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,1,1,0,0,0,1,0,0,0,0,0,1,0,0,0,1,0,1,1,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,1,0,1,1,0,1,0,0,0,0,0,0,1,0,0,0,1,1,0,1,1,1,1,0,0,0,1,1,0,0,0,0,1,0,0,0,0,0,1,0,1,1,0,0,1,0,1,0,0,1,0,0,1,1,1,1,1,0,0,0,0,1,0,0,0,0,0,0,1,0,1,0,0,1,0,1,1,1,0,1,1,1,0,0,0,1,0,1,1,0,1,0,0,1,0,0,0,1,1,1,1,0,0,0,0,1,0,1,1,1,1,0,1,0,1,1,0,0,1,0,1,0,0,0,0,0,0,0,0,1,0,1,1,0,1,1,1,0,0,1,0,1,1,1,1,0,1,1,1,1,0,1,0,0,1,1,0,0,0,0,0,0,1,0,0,1,1,1,1,1,1,1,0,0,0,0,0,0,1,0,1,1,1,0,1,1,0,0,0,0,0,1,0,0,1,0,1,1,0,0,1,0,1,1,0,1,0,0,1,0,1,0,1,1,1,1,0,1,0,0,0,1,0,0,0,1,0,0,0,1,1,0,0,0,1,1,1,1,0,1,1,0,1,1,1,0,1,0,0,0,0,1,0,0,1,1,1,1,0,1,0,0,1,1,1,0,1,0,0,1,0,0,0,0,0,0,0,1,1,0,0,1,0,1,0,1,1,1,0,1,0,0,1,1,1,1,1,0,1,0,0,0,1,1,1,0,1,0,0,0,1,1,0,1,1,0,1,0,1,1,0,0,1,1,1,0,0,1,1,0,1,1,1,1,1,1,0,0,0,1,1,0,1,1,0,1,0,1,0,1,0,1,0,0,0,1,1,0,1,0,1,0,0,1,1,1,1,1,0,0,0,1,1,0,0,0,1,0,1,0,0,1,1,0,1,1,1,0,1,1,0,0,0,1,1,0,1,1,0,1,0,0,0,1,0,0,1,1,1,1,0,1,0,1,1,0,0,0,0,0,1,0,0,1,1,0,0,0,0,1,1,0,0,0,1,0,0,1,0,1,1,0,1,0,1,0,0,1,0,1,0,1,1,0,0,0,0,0,1,1,0,1,0,1,1,0,1,1,1,0,0,1,0,0,0,0,0,1,0,1,1,0,0,0,0,0,1,0,1,1,0,0,0,1,0,1,0,0,1,0,1,1,1,1,1,1,1,0,0,0,0,1,1,0,0,0,0,0,1,1,0,0,0,1,0,1,1,1,1,0,1,0,1,0,0,0,1,1,1,1,0,0,1,0,1,1,0,0,0,0,0,1,0,1,1,0,0,0,1,0,0,0,0,0,0,1,0,1,1,1,0,0,0,0,0,1,1,0,1,0,1,1,1,1,1,1,1,0,0,0,1,0,1,1,1,0,1,1,1,1,1,1,1,0,0,0,1,1,0,0,0,1,0,0,0,1,1,0,1,1,0,0,0,0,0,1,1,1,0,0,0,1,0,0,1,0,1,0,1,0,1,1,1,1,0,0,1,0,1,0,1,0,1,0,1,0,1,1,0,1,0,0,1,0,0,1,1,1,1,1,0,0,0,0,1,0,0,0,0,0,1,0,1,0,1,1,1,1,0,0,1,1,0,0,0,1,0,0,1,0,0,1,1,0,0,1,1,0,1,1,0,0,1,0,1,0,0,0,0,1,0,0,1,1,0,1,1,1,1,0,0,1,1,1,1,1,0,1,1,1,1,1,1,0,1,0,0,0,0,1,1,0,0,1,0,1,1,1,0,1,0,0,1,0,0,1,1,1,0,0,0,0,1,1,1,1,1,1,0,1,0,0,0,1,0,0,1,0,0,0,1,0,0,1,0,0,1,1,0,1,0,1,0,1,1,0,1,1,0,0,1,1,0,0,1,1,0,1,1,0,0,1,1,1,0,1,0,0,0,0,0,1,1,0,0,0,0,1,1,0,1,0,1,0,1,1,0,0,0,0,0,1,1,1,1,0,1,0,0,1,0,0,0,0,0,1,0,0,1,0,1,1,1,0,1,0,0,1,1,0,1,0,1,0,1,0,1,1,0,0,0,1,0,0,1,0,1,0,1,1,0,1,0,1,0,0,0,1,0,1,1,1,1,0,1,1,0,1,0,1,0,1,1,0,1,0,0,0,0,0,1,1,0,1,0,1,1,1,0,1,0,0,1,1,0,0,0,1,0,1,1,1,0,1,0,1,1,1,0,1,1,1,1,0,1,1,0,0,1,0,0,0,0,1,0,0,0,1,1,0,1,1,1,0,0,1,1,1,0,0,0,0,0,1,0,0,0,0,0,0,1,1,0,0,0,1,1,1,0,1,1,0,0,1,0,1,1,1,1,0,1,0,1,1,0,0,0,1,0,0,0,1,0,1,0,0,0,0,0,0,1,1,0,0,1,1,1,0,1,0,0,0,1,0,0,0,0,1,0,1,1,1,0,0,1,0,1,0,0,1,1,1,0,0,0,1,0,0,1,1,0,0,1,1,0,1,0,1,0,1,0,0,0,0,1,1,1,1,0,0,1,0,1,1,0,0,1,0,1,0,0,0,0,0,1,1,0,1,0,1,0,0,1,1,0,0,1,1,1,0,1,1,1,1,0,1,0,0,0,0,1,1,0,0,1,1,0,0,1,1,0,0,0,1,1,0,1,1,1,0,1,0,0,0,1,1,0,0,0,0,0,0,1,0,1,1,1,0,1,1,0,1,1,1,0,1,1,0,0,0,0,1,1,0,1,1,0,1,1,0,1,1,1,0,1,0,1,1,0,0,1,1,0,0,0,0,0,0,1,0,0,1,0,0,0,1,1,0,0,1,1,0,0,0,0,1,1,1,0,0,1,1,0,0,0,0,0,0,0,0,1,1,1,1,0,0,1,1,1,1,0,1,1,];
var gg_b = "1763172002/";

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
