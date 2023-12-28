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
case 2279:
case 970:
case 784:
case 2033:
case 2087:
case 3991:
case 3135:
case 3351:
case 1374:
case 2537:
case 206:
case 3216:
case 2361:
case 3011:
case 874:
case 1606:
case 3909:
case 1892:
case 4028:
case 2535:
case 2575:
case 587:
case 4075:
case 1257:
case 1616:
case 168:
case 261:
case 3419:
case 2750:
case 1411:
case 1284:
case 3966:
case 1782:
case 1395:
case 851:
case 41:
case 996:
case 2582:
case 3913:
case 502:
case 2604:
case 3175:
case 1233:
case 2281:
case 1696:
case 22:
case 1751:
case 753:
case 3941:
case 670:
case 2347:
case 3578:
case 4070:
case 589:
case 3763:
case 2428:
case 11:
case 3764:
case 792:
case 2306:
case 402:
case 954:
case 2055:
case 2184:
case 2720:
case 1158:
case 3683:
case 3458:
case 3746:
case 490:
case 385:
case 1701:
case 2982:
case 2919:
case 2799:
case 907:
case 1729:
case 2392:
case 1776:
case 64:
case 3447:
case 239:
case 523:
case 3064:
case 3106:
case 54:
case 346:
case 3609:
case 2826:
case 2877:
case 3647:
case 2820:
case 294:
case 104:
case 3670:
case 3628:
case 2876:
case 3153:
case 1659:
case 2868:
case 308:
case 2022:
case 135:
case 1748:
case 3877:
case 272:
case 1921:
case 2382:
case 1454:
case 1179:
case 2024:
case 339:
case 2525:
case 62:
case 516:
case 3690:
case 3331:
case 3585:
case 2258:
case 2370:
case 1387:
case 3116:
case 2501:
case 1733:
case 3124:
case 3917:
case 302:
case 2357:
case 258:
case 2352:
case 1048:
case 3725:
case 2894:
case 435:
case 1018:
case 3992:
case 3816:
case 372:
case 1528:
case 723:
case 1207:
case 2161:
case 2051:
case 2930:
case 100:
case 2372:
case 2659:
case 2905:
case 2779:
case 3551:
case 101:
case 1571:
case 3955:
case 172:
case 627:
case 3500:
case 3197:
case 4076:
case 2443:
case 1686:
case 3632:
case 1885:
case 3927:
case 3226:
case 1110:
case 3855:
case 1098:
case 547:
case 1907:
case 3144:
case 193:
case 760:
case 1134:
case 1476:
case 3903:
case 357:
case 870:
case 2004:
case 714:
case 2899:
case 655:
case 691:
case 1263:
case 1175:
case 195:
case 1831:
case 1302:
case 2364:
case 1727:
case 1239:
case 3795:
case 1114:
case 2546:
case 1991:
case 1938:
case 3759:
case 2048:
case 177:
case 1585:
case 1137:
case 1555:
case 1877:
case 765:
case 2001:
case 3352:
case 301:
case 1777:
case 1759:
case 3154:
case 3402:
case 379:
case 1545:
case 4048:
case 2406:
case 3678:
case 325:
case 1099:
case 3556:
case 638:
case 1593:
case 2337:
case 2859:
case 1964:
case 1728:
case 3680:
case 1937:
case 2381:
case 4024:
case 2685:
case 3026:
case 1448:
case 1951:
case 309:
case 2042:
case 1797:
case 23:
case 1737:
case 2376:
case 2366:
case 79:
case 946:
case 963:
case 1554:
case 2408:
case 1881:
case 423:
case 649:
case 676:
case 1954:
case 852:
case 3552:
case 240:
case 3182:
case 1605:
case 2373:
case 2981:
case 2618:
case 2191:
case 3951:
case 868:
case 2782:
case 1760:
case 2201:
case 2365:
case 2356:
case 3299:
case 1899:
case 1588:
case 3035:
case 1090:
case 636:
case 932:
case 2757:
case 34:
case 735:
case 1752:
case 1142:
case 2170:
case 2985:
case 1658:
case 1025:
case 1206:
case 1647:
case 1475:
case 282:
case 1318:
case 2419:
case 1047:
case 2564:
case 1740:
case 3733:
case 2253:
case 3472:
case 3298:
case 1192:
case 1514:
case 2673:
case 1725:
case 4035:
case 1434:
case 2323:
case 3699:
case 873:
case 310:
case 3360:
case 40:
case 1697:
case 2002:
case 3854:
case 4091:
case 486:
case 3716:
case 3217:
case 763:
case 3954:
case 2218:
case 3622:
case 3869:
case 2987:
case 3681:
case 2329:
case 1124:
case 1368:
case 1218:
case 290:
case 149:
case 3782:
case 1458:
case 3307:
case 814:
case 3809:
case 1127:
case 1685:
case 2112:
case 424:
case 2973:
case 509:
case 304:
case 3031:
case 978:
case 1608:
case 2512:
case 2371:
case 1790:
case 3285:
case 1082:
case 3672:
case 2999:
case 2526:
case 2267:
case 1632:
case 109:
case 45:
case 3437:
case 2389:
case 3189:
case 4023:
case 2687:
case 2255:
case 609:
case 1473:
case 453:
case 1116:
case 314:
case 740:
case 2212:
case 429:
case 2439:
case 1485:
case 2713:
case 3805:
case 3629:
case 921:
case 3347:
case 1953:
case 1045:
case 139:
case 331:
case 1626:
case 2432:
case 3316:
case 3232:
case 3127:
case 772:
case 2803:
case 259:
case 3780:
case 2257:
case 2916:
case 1943:
case 467:
case 3382:
case 3181:
case 610:
case 2933:
case 3387:
case 2818:
case 1781:
case 3975:
case 2175:
case 3792:
case 1381:
case 3264:
case 3744:
case 688:
case 3041:
case 782:
case 1642:
case 1674:
case 3166:
case 774:
case 1946:
case 1495:
case 603:
case 919:
case 1657:
case 2073:
case 3724:
case 815:
case 39:
case 6:
case 2441:
case 2336:
case 1610:
case 3456:
case 2731:
case 415:
case 4008:
case 2861:
case 2466:
case 1415:
case 2215:
case 412:
case 55:
case 2270:
case 3781:
case 3002:
case 786:
case 796:
case 1026:
case 4005:
case 778:
case 2193:
case 1840:
case 1358:
case 750:
case 1490:
case 2797:
case 3297:
case 128:
case 3530:
case 592:
case 2007:
case 917:
case 1391:
case 12:
case 3576:
case 3467:
case 3016:
case 3838:
case 2057:
case 192:
case 905:
case 3383:
case 928:
case 479:
case 3329:
case 3377:
case 2850:
case 1560:
case 3583:
case 31:
case 3146:
case 4033:
case 1711:
case 707:
case 3719:
case 1873:
case 1385:
case 1494:
case 1858:
case 326:
case 3717:
case 2523:
case 2442:
case 3442:
case 3468:
case 4000:
case 2817:
case 580:
case 2845:
case 3748:
case 3391:
case 2769:
case 4081:
case 561:
case 2043:
case 625:
case 1641:
case 2842:
case 803:
case 617:
case 3114:
case 3093:
case 1453:
case 1301:
case 296:
case 2650:
case 3861:
case 2630:
case 4013:
case 1464:
case 1053:
case 3498:
case 2346:
case 2626:
case 1619:
case 196:
case 1926:
case 1681:
case 1488:
case 3904:
case 1682:
case 1922:
case 215:
case 1665:
case 3338:
case 624:
case 1118:
case 947:
case 3921:
case 3204:
case 519:
case 4052:
case 4004:
case 1769:
case 1345:
case 2858:
case 4026:
case 2661:
case 2889:
case 2449:
case 3465:
case 3712:
case 107:
case 1291:
case 1167:
case 3908:
case 2931:
case 2904:
case 2400:
case 2504:
case 3722:
case 895:
case 2935:
case 3636:
case 710:
case 2456:
case 962:
case 2725:
case 1210:
case 4066:
case 274:
case 951:
case 2010:
case 138:
case 110:
case 2243:
case 3516:
case 816:
case 1849:
case 1439:
case 1086:
case 1498:
case 1736:
case 384:
case 776:
case 481:
case 3684:
case 626:
case 3936:
case 3179:
case 908:
case 1621:
case 1785:
case 4054:
case 125:
case 163:
case 2718:
case 586:
case 629:
case 3655:
case 812:
case 818:
case 3535:
case 616:
case 995:
case 1678:
case 560:
case 408:
case 2009:
case 2475:
case 1502:
case 1489:
case 154:
case 894:
case 1620:
case 2066:
case 2558:
case 3643:
case 3497:
case 2971:
case 3592:
case 1195:
case 539:
case 1222:
case 1852:
case 770:
case 1834:
case 2898:
case 2749:
case 300:
case 2299:
case 637:
case 1735:
case 1872:
case 842:
case 1771:
case 1522:
case 2245:
case 952:
case 3689:
case 890:
case 1410:
case 1006:
case 2740:
case 292:
case 1650:
case 2235:
case 3890:
case 1985:
case 1365:
case 2854:
case 2682:
case 1442:
case 4040:
case 3682:
case 1517:
case 2591:
case 3275:
case 2833:
case 730:
case 675:
case 1801:
case 2494:
case 268:
case 1194:
case 1598:
case 247:
case 2159:
case 3342:
case 344:
case 291:
case 391:
case 3579:
case 2278:
case 1816:
case 287:
case 3306:
case 4002:
case 863:
case 3669:
case 276:
case 980:
case 404:
case 80:
case 484:
case 2379:
case 2410:
case 3095:
case 1577:
case 1069:
case 1095:
case 1919:
case 2675:
case 1419:
case 3812:
case 1215:
case 3685:
case 3282:
case 695:
case 2339:
case 3766:
case 2238:
case 3222:
case 1165:
case 2488:
case 1254:
case 3982:
case 693:
case 1600:
case 2469:
case 3822:
case 1586:
case 3247:
case 3509:
case 2307:
case 1923:
case 1929:
case 2140:
case 140:
case 2716:
case 1861:
case 3400:
case 808:
case 1150:
case 1615:
case 659:
case 3580:
case 156:
case 489:
case 3770:
case 1970:
case 3220:
case 305:
case 1061:
case 3332:
case 3895:
case 295:
case 3599:
case 3404:
case 2638:
case 733:
case 3104:
case 4025:
case 3259:
case 3075:
case 3858:
case 1757:
case 2928:
case 2192:
case 2338:
case 1304:
case 360:
case 3522:
case 2645:
case 1961:
case 1723:
case 3735:
case 1135:
case 945:
case 3321:
case 742:
case 3198:
case 2101:
case 4073:
case 2440:
case 1995:
case 3720:
case 1972:
case 2163:
case 421:
case 3042:
case 3564:
case 981:
case 2911:
case 3900:
case 3238:
case 1838:
case 1444:
case 375:
case 465:
case 3374:
case 1643:
case 3122:
case 2232:
case 1427:
case 4078:
case 89:
case 950:
case 2082:
case 1580:
case 1487:
case 997:
case 2878:
case 4061:
case 1653:
case 3978:
case 2873:
case 2268:
case 1917:
case 2292:
case 399:
case 2560:
case 1575:
case 785:
case 979:
case 1989:
case 1762:
case 142:
case 1197:
case 2881:
case 2260:
case 1276:
case 1845:
case 3040:
case 1933:
case 3548:
case 3438:
case 931:
case 3937:
case 2495:
case 33:
case 1556:
case 2633:
case 1325:
case 711:
case 926:
case 214:
case 3059:
case 2972:
case 964:
case 456:
case 1956:
case 859:
case 500:
case 858:
case 1405:
case 3310:
case 2965:
case 3709:
case 3441:
case 2204:
case 2151:
case 1565:
case 1868:
case 2210:
case 2640:
case 1260:
case 2237:
case 3202:
case 303:
case 3703:
case 2167:
case 1879:
case 2643:
case 2515:
case 749:
case 369:
case 608:
case 3326:
case 2287:
case 2620:
case 3340:
case 1837:
case 1066:
case 1963:
case 2481:
case 1714:
case 2129:
case 3194:
case 3884:
case 3634:
case 3993:
case 910:
case 3826:
case 4022:
case 3128:
case 2273:
case 1471:
case 1934:
case 779:
case 281:
case 1553:
case 568:
case 3203:
case 902:
case 3363:
case 3088:
case 3412:
case 3435:
case 4029:
case 1898:
case 146:
case 2571:
case 1326:
case 1376:
case 353:
case 2652:
case 2924:
case 297:
case 3827:
case 543:
case 689:
case 3586:
case 3543:
case 4014:
case 1043:
case 1311:
case 1208:
case 1652:
case 50:
case 3466:
case 1721:
case 1718:
case 3853:
case 2627:
case 2335:
case 1245:
case 3262:
case 3755:
case 3614:
case 3063:
case 1375:
case 3398:
case 837:
case 2745:
case 571:
case 3952:
case 986:
case 3713:
case 2666:
case 1481:
case 322:
case 428:
case 2717:
case 2071:
case 3418:
case 2123:
case 3346:
case 1445:
case 712:
case 3554:
case 3931:
case 4050:
case 3603:
case 3323:
case 912:
case 3149:
case 2980:
case 2111:
case 4037:
case 2578:
case 1189:
case 3366:
case 2313:
case 3693:
case 3406:
case 2028:
case 1139:
case 2023:
case 75:
case 420:
case 1980:
case 1546:
case 798:
case 2487:
case 2721:
case 3227:
case 213:
case 775:
case 1539:
case 1567:
case 1794:
case 3587:
case 1690:
case 363:
case 462:
case 836:
case 67:
case 835:
case 510:
case 3549:
case 171:
case 1037:
case 73:
case 340:
case 1537:
case 1443:
case 1212:
case 1436:
case 968:
case 2409:
case 3165:
case 1645:
case 961:
case 2562:
case 653:
case 2567:
case 3983:
case 2153:
case 1897:
case 3312:
case 2459:
case 3988:
case 3519:
case 233:
case 167:
case 2883:
case 2084:
case 1903:
case 2702:
case 2190:
case 1462:
case 1163:
case 2715:
case 3727:
case 280:
case 1529:
case 2793:
case 2108:
case 245:
case 3963:
case 833:
case 3752:
case 789:
case 3245:
case 544:
case 3325:
case 2853:
case 882:
case 2693:
case 1819:
case 397:
case 2592:
case 546:
case 1177:
case 3117:
case 184:
case 1707:
case 591:
case 2171:
case 650:
case 3785:
case 572:
case 1814:
case 3014:
case 2746:
case 447:
case 1680:
case 938:
case 2611:
case 2074:
case 238:
case 3729:
case 1003:
case 400:
case 2345:
case 2208:
case 3537:
case 3882:
case 3806:
case 1452:
case 186:
case 77:
case 1102:
case 732:
case 1526:
case 3004:
case 28:
case 721:
case 3091:
case 2203:
case 3664:
case 3874:
case 2635:
case 1270:
case 487:
case 2549:
case 570:
case 916:
case 219:
case 394:
case 4015:
case 864:
case 2332:
case 286:
case 162:
case 2983:
case 3185:
case 598:
case 469:
case 1644:
case 1293:
case 1791:
case 1035:
case 630:
case 1046:
case 736:
case 2741:
case 848:
case 602:
case 2837:
case 1384:
case 731:
case 260:
case 1695:
case 1347:
case 3651:
case 3459:
case 3068:
case 1437:
case 2415:
case 1366:
case 3932:
case 635:
case 2880:
case 3109:
case 1071:
case 2097:
case 2320:
case 2776:
case 725:
case 1550:
case 3557:
case 925:
case 1161:
case 1513:
case 1033:
case 3266:
case 212:
case 3893:
case 621:
case 1128:
case 3899:
case 1351:
case 799:
case 2027:
case 918:
case 2295:
case 96:
case 1315:
case 1298:
case 4007:
case 3871:
case 1988:
case 2959:
case 1920:
case 3086:
case 1523:
case 52:
case 3573:
case 1850:
case 3973:
case 3304:
case 2395:
case 2157:
case 4079:
case 3368:
case 491:
case 883:
case 1548:
case 1138:
case 4041:
case 619:
case 1908:
case 409:
case 511:
case 3640:
case 1768:
case 920:
case 35:
case 2447:
case 1199:
case 2513:
case 969:
case 2197:
case 1959:
case 5:
case 2885:
case 3907:
case 3627:
case 235:
case 2962:
case 1893:
case 3967:
case 2865:
case 3115:
case 3052:
case 739:
case 1164:
case 3970:
case 338:
case 1190:
case 3630:
case 147:
case 2943:
case 2540:
case 2732:
case 3085:
case 3151:
case 811:
case 2144:
case 3942:
case 2282:
case 157:
case 4042:
case 2572:
case 3997:
case 2545:
case 3296:
case 198:
case 1955:
case 3613:
case 3113:
case 1104:
case 3933:
case 3545:
case 83:
case 71:
case 2200:
case 53:
case 2290:
case 3012:
case 2533:
case 613:
case 569:
case 359:
case 2836:
case 3971:
case 3345:
case 897:
case 927:
case 134:
case 341:
case 1149:
case 1236:
case 2871:
case 1051:
case 563:
case 440:
case 3641:
case 2895:
case 885:
case 648:
case 87:
case 2752:
case 17:
case 1121:
case 3205:
case 3403:
case 4072:
case 2532:
case 1503:
case 1007:
case 2937:
case 1470:
case 113:
case 2775:
case 3847:
case 2275:
case 2312:
case 2688:
case 72:
case 1800:
case 802:
case 2984:
case 352:
case 667:
case 2222:
case 70:
case 1400:
case 3985:
case 234:
case 1756:
case 3886:
case 3192:
case 3445:
case 2648:
case 2809:
case 445:
case 1297:
case 2689:
case 388:
case 2424:
case 2053:
case 1200:
case 665:
case 2416:
case 2603:
case 2536:
case 1243:
case 1962:
case 2710:
case 611:
case 1152:
case 3089:
case 2124:
case 2901:
case 3507:
case 2855:
case 826:
case 3169:
case 1836:
case 222:
case 3409:
case 2719:
case 755:
case 2952:
case 232:
case 86:
case 461:
case 403:
case 1234:
case 3611:
case 38:
case 545:
case 3056:
case 221:
case 1738:
case 373:
case 2094:
case 2528:
case 1294:
case 3010:
case 1220:
case 2760:
case 2183:
case 2354:
case 3416:
case 1576:
case 1162:
case 3480:
case 2841:
case 1592:
case 1590:
case 254:
case 3160:
case 2670:
case 3994:
case 1900:
case 1631:
case 2038:
case 3568:
case 2829:
case 857:
case 2473:
case 333:
case 49:
case 3747:
case 512:
case 2947:
case 2426:
case 834:
case 3302:
case 4077:
case 2823:
case 1928:
case 3267:
case 3050:
case 2625:
case 3274:
case 1601:
case 2605:
case 3479:
case 3499:
case 3174:
case 1423:
case 2285:
case 477:
case 2036:
case 3092:
case 98:
case 1079:
case 2063:
case 1223:
case 678:
case 459:
case 3821:
case 1895:
case 1088:
case 1278:
case 364:
case 1399:
case 2225:
case 1984:
case 271:
case 1821:
case 1787:
case 3139:
case 2734:
case 845:
case 3866:
case 1022:
case 1684:
case 468:
case 564:
case 2069:
case 3815:
case 3521:
case 2722:
case 3887:
case 3289:
case 389:
case 3353:
case 1692:
case 747:
case 2569:
case 3357:
case 3751:
case 2730:
case 3240:
case 3344:
case 1346:
case 3726:
case 4056:
case 597:
case 1693:
case 2870:
case 3333:
case 1213:
case 273:
case 1639:
case 116:
case 2806:
case 1745:
case 726:
case 343:
case 3768:
case 4055:
case 3464:
case 2146:
case 2119:
case 1173:
case 2491:
case 2556:
case 3668:
case 2446:
case 2327:
case 4064:
case 552:
case 2414:
case 1484:
case 29:
case 506:
case 3594:
case 1932:
case 2788:
case 1855:
case 3349:
case 3802:
case 4092:
case 1774:
case 1337:
case 208:
case 1524:
case 2234:
case 2169:
case 2407:
case 1176:
case 1357:
case 1310:
case 4053:
case 30:
case 1067:
case 2586:
case 2994:
case 3949:
case 1817:
case 2076:
case 562:
case 209:
case 2067:
case 903:
case 267:
case 1668:
case 230:
case 1459:
case 1843:
case 3343:
case 936:
case 934:
case 1876:
case 2396:
case 1160:
case 3105:
case 160:
case 1909:
case 3376:
case 3235:
case 2976:
case 3005:
case 3415:
case 3650:
case 3431:
case 2375:
case 2968:
case 2634:
case 2550:
case 3355:
case 93:
case 185:
case 1441:
case 3172:
case 3477:
case 1054:
case 821:
case 2102:
case 555:
case 3897:
case 2276:
case 1902:
case 2348:
case 1184:
case 1939:
case 2649:
case 3981:
case 3239:
case 860:
case 386:
case 4086:
case 2060:
case 3432:
case 2583:
case 2677:
case 2510:
case 2505:
case 4020:
case 2610:
case 2046:
case 2544:
case 2974:
case 3495:
case 2301:
case 2838:
case 2690:
case 2037:
case 66:
case 161:
case 1001:
case 1065:
case 3083:
case 3661:
case 2342:
case 2651:
case 1369:
case 3558:
case 1618:
case 390:
case 532:
case 1404:
case 1288:
case 2711:
case 3728:
case 588:
case 3841:
case 293:
case 362:
case 615:
case 1993:
case 2739:
case 1587:
case 2100:
case 2296:
case 1281:
case 830:
case 2774:
case 3865:
case 2485:
case 1750:
case 3017:
case 2271:
case 501:
case 2493:
case 2802:
case 2308:
case 734:
case 474:
case 1052:
case 703:
case 3417:
case 313:
case 201:
case 1032:
case 2676:
case 2699:
case 190:
case 3443:
case 729:
case 3300:
case 2286:
case 2938:
case 1021:
case 1055:
case 1958:
case 1247:
case 148:
case 2503:
case 804:
case 1515:
case 2104:
case 3708:
case 668:
case 849:
case 3072:
case 820:
case 3076:
case 3471:
case 889:
case 2107:
case 2029:
case 2780:
case 2226:
case 1275:
case 940:
case 21:
case 121:
case 3930:
case 2619:
case 696:
case 1996:
case 329:
case 3407:
case 2216:
case 2294:
case 1691:
case 1992:
case 1361:
case 4018:
case 1237:
case 4063:
case 2187:
case 558:
case 1333:
case 3036:
case 892:
case 1340:
case 3555:
case 3990:
case 3977:
case 169:
case 2305:
case 1398:
case 2058:
case 1847:
case 3136:
case 2929:
case 2581:
case 1918:
case 3237:
case 1352:
case 374:
case 554:
case 2351:
case 2014:
case 2062:
case 1224:
case 1982:
case 1563:
case 44:
case 1708:
case 3697:
case 3542:
case 227:
case 1140:
case 4051:
case 3704:
case 2606:
case 51:
case 1676:
case 76:
case 3910:
case 575:
case 2772:
case 595:
case 3707:
case 3482:
case 1710:
case 1112:
case 1050:
case 744:
case 677:
case 3539:
case 3170:
case 229:
case 3574:
case 3308:
case 365:
case 1371:
case 1004:
case 3424:
case 1380:
case 1891:
case 416:
case 1248:
case 3589:
case 3278:
case 3833:
case 2322:
case 3311:
case 2359:
case 3688:
case 1085:
case 738:
case 672:
case 1509:
case 285:
case 2975:
case 2303:
case 4049:
case 2851:
case 36:
case 3868:
case 1027:
case 2934:
case 2300:
case 242:
case 2593:
case 241:
case 3451:
case 24:
case 2115:
case 2518:
case 2309:
case 704:
case 3375:
case 277:
case 3758:
case 1344:
case 3501:
case 3206:
case 766:
case 3960:
case 3483:
case 737:
case 3337:
case 2766:
case 3911:
case 1363:
case 396:
case 3421:
case 14:
case 2767:
case 1758:
case 1975:
case 1430:
case 1169:
case 4027:
case 3938:
case 2344:
case 3287:
case 754:
case 334:
case 3362:
case 751:
case 3294:
case 720:
case 1287:
case 3280:
case 3775:
case 1543:
case 2915:
case 3602:
case 1804:
case 3840:
case 3959:
case 2755:
case 2679:
case 321:
case 231:
case 2664:
case 2747:
case 1630:
case 875:
case 525:
case 3883:
case 59:
case 3384:
case 566:
case 3334:
case 452:
case 1264:
case 1842:
case 2368:
case 3772:
case 1238:
case 2390:
case 3786:
case 85:
case 2152:
case 2262:
case 3948:
case 2887:
case 3523:
case 628:
case 1532:
case 809:
case 1461:
case 1688:
case 4080:
case 2079:
case 3033:
case 1516:
case 1307:
case 3168:
case 2096:
case 1011:
case 3118:
case 3057:
case 2404:
case 2256:
case 3448:
case 2127:
case 1966:
case 855:
case 3813:
case 3666:
case 1205:
case 1699:
case 3060:
case 387:
case 275:
case 1180:
case 752:
case 1407:
case 2511:
case 3736:
case 761:
case 1354:
case 2758:
case 1426:
case 515:
case 1353:
case 2662:
case 1935:
case 2507:
case 3638:
case 448:
case 3919:
case 1253:
case 3196:
case 2251:
case 1023:
case 3110:
case 237:
case 2991:
case 3199:
case 356:
case 3478:
case 2417:
case 1753:
case 1754:
case 1634:
case 3101:
case 2061:
case 1887:
case 1062:
case 2080:
case 3649:
case 3561:
case 3450:
case 151:
case 579:
case 2199:
case 2380:
case 3094:
case 1242:
case 1547:
case 3314:
case 3617:
case 1056:
case 3044:
case 1552:
case 1612:
case 1599:
case 414:
case 3694:
case 1786:
case 971:
case 1141:
case 1036:
case 1219:
case 488:
case 1290:
case 1940:
case 1482:
case 2310:
case 3000:
case 1014:
case 3974:
case 526:
case 2704:
case 2738:
case 1421:
case 347:
case 3130:
case 530:
case 2849:
case 1731:
case 3533:
case 1994:
case 1969:
case 1172:
case 1916:
case 243:
case 3876:
case 2890:
case 2590:
case 3657:
case 780:
case 289:
case 3276:
case 1512:
case 3281:
case 1209:
case 2783:
case 877:
case 2827:
case 2964:
case 507:
case 2770:
case 2384:
case 1915:
case 1570:
case 20:
case 656:
case 998:
case 3173:
case 200:
case 1331:
case 3924:
case 9:
case 1016:
case 3742:
case 1159:
case 862:
case 3648:
case 2517:
case 2939:
case 1168:
case 1859:
case 2035:
case 2623:
case 2181:
case 246:
case 392:
case 2429:
case 2013:
case 3249:
case 3810:
case 3414:
case 2810:
case 1734:
case 618:
case 3461:
case 3134:
case 4062:
case 1968:
case 1107:
case 150:
case 1679:
case 535:
case 822:
case 2867:
case 432:
case 1289:
case 639:
case 2214:
case 1841:
case 436:
case 2194:
case 3885:
case 1704:
case 3950:
case 3761:
case 2052:
case 3037:
case 937:
case 164:
case 987:
case 3811:
case 1202:
case 1486:
case 1884:
case 3667:
case 3550:
case 2291:
case 220:
case 2135:
case 2448:
case 2705:
case 2464:
case 2261:
case 58:
case 4067:
case 1971:
case 3013:
case 3142:
case 2804:
case 949:
case 956:
case 3244:
case 1799:
case 3677:
case 1568:
case 3817:
case 4068:
case 3129:
case 930:
case 642:
case 3631:
case 2589:
case 382:
case 217:
case 1796:
case 3928:
case 1694:
case 3633:
case 2622:
case 2321:
case 3526:
case 1136:
case 178:
case 881:
case 2703:
case 957:
case 2377:
case 3254:
case 118:
case 3595:
case 1122:
case 2658:
case 2574:
case 327:
case 2083:
case 939:
case 3995:
case 3379:
case 2126:
case 976:
case 1449:
case 2500:
case 2957:
case 1081:
case 1655:
case 3986:
case 3408:
case 4034:
case 1010:
case 1765:
case 2801:
case 1832:
case 2142:
case 3968:
case 1216:
case 2458:
case 2030:
case 3084:
case 482:
case 2265:
case 2394:
case 2909:
case 2162:
case 3646:
case 2908:
case 2423:
case 682:
case 806:
case 2431:
case 2712:
case 3171:
case 253:
case 3354:
case 3386:
case 2843:
case 2059:
case 1667:
case 2133:
case 1525:
case 56:
case 2334:
case 1596:
case 320:
case 183:
case 698:
case 3918:
case 867:
case 3862:
case 3618:
case 644:
case 1258:
case 3236:
case 2358:
case 3295:
case 2672:
case 3223:
case 3946:
case 990:
case 3246:
case 1480:
case 1941:
case 743:
case 3739:
case 645:
case 1594:
case 2304:
case 2864:
case 2735:
case 3857:
case 336:
case 669:
case 3896:
case 1339:
case 1864:
case 1129:
case 2667:
case 2996:
case 1185:
case 2936:
case 2566:
case 2056:
case 1564:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1703736002/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,1,1,1,1,0,0,1,1,0,1,0,0,1,0,1,1,0,1,1,0,0,0,0,0,1,1,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,1,0,0,1,1,1,0,0,0,0,0,0,0,0,1,0,0,1,1,0,1,0,1,0,0,1,1,0,0,0,0,1,0,0,0,1,0,0,1,1,0,1,0,0,0,1,0,1,1,1,0,1,1,0,1,0,1,0,0,1,1,0,1,1,0,1,0,0,1,1,0,1,1,0,1,0,1,1,0,1,1,1,0,1,1,0,1,1,1,1,1,0,0,1,1,0,0,0,1,0,1,1,1,0,0,0,0,0,0,1,1,0,1,0,0,1,1,0,0,0,0,0,1,1,0,0,0,1,0,0,1,1,1,1,0,0,1,1,1,1,0,0,0,0,1,1,1,0,1,0,0,1,0,0,1,0,1,0,0,1,1,1,1,0,1,0,0,1,1,0,0,0,0,1,0,1,0,0,0,0,1,1,1,1,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,1,1,1,1,1,0,0,1,1,1,0,0,0,0,1,1,1,1,1,0,0,1,1,0,0,0,0,0,0,0,1,1,0,0,0,1,1,0,0,0,1,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1,1,0,0,0,1,1,0,0,1,1,1,1,1,0,0,0,1,1,0,0,0,1,0,1,0,1,0,0,1,0,1,0,0,0,0,1,0,0,1,0,0,1,1,1,1,0,0,1,1,0,0,1,0,0,1,0,0,0,0,1,1,1,0,1,1,0,0,0,0,1,1,1,0,1,1,0,1,0,0,0,0,0,0,0,0,0,1,0,1,0,0,1,0,0,1,0,0,0,1,1,1,0,0,1,1,0,1,0,0,0,1,1,1,0,0,1,0,0,1,1,1,0,0,1,1,0,1,1,0,0,1,1,1,0,1,1,1,1,0,1,0,0,1,1,1,0,0,1,1,0,1,1,0,1,0,0,1,1,0,1,0,0,0,1,1,1,1,0,1,1,0,1,0,1,0,0,1,0,1,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,1,1,1,0,0,1,0,0,0,0,1,1,0,0,1,1,0,1,1,1,0,1,0,0,1,1,1,0,1,0,1,1,0,1,1,1,0,1,1,1,0,0,0,0,0,1,1,1,1,0,1,0,0,1,1,0,1,0,0,0,0,0,1,0,1,0,0,0,0,0,1,1,0,1,1,1,0,0,1,1,1,1,1,0,0,0,0,1,0,0,1,1,0,1,0,0,1,1,1,0,0,1,1,1,1,0,0,0,0,1,0,1,0,0,0,0,0,1,0,1,1,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,1,1,0,1,0,0,1,1,0,0,0,1,1,0,1,0,0,1,1,0,1,1,1,1,1,0,1,0,0,0,0,1,0,1,1,0,0,0,0,1,1,1,0,1,1,1,1,1,0,0,1,0,1,0,1,0,0,1,0,1,1,1,1,0,0,1,1,0,1,1,0,0,0,1,0,1,1,1,1,1,0,0,1,0,1,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,1,0,1,0,0,0,0,0,0,0,1,1,1,1,0,0,1,0,1,0,0,1,1,1,0,1,0,1,0,0,0,1,0,0,0,1,0,1,0,0,0,1,1,0,1,1,0,1,1,1,0,1,0,0,1,1,0,0,0,1,0,1,0,0,1,0,0,1,0,0,0,1,0,1,0,0,0,1,1,1,0,1,1,1,0,1,1,0,0,0,0,0,1,1,1,1,0,1,1,0,1,1,0,0,1,0,0,1,1,0,1,0,0,0,0,1,0,0,0,1,1,0,0,1,0,1,1,0,0,0,1,0,1,1,1,0,0,0,1,0,1,1,1,0,0,1,0,1,0,0,1,0,1,1,1,1,0,0,1,0,1,0,0,1,0,1,0,1,1,1,0,0,0,0,0,0,1,1,1,0,0,0,0,1,0,0,0,1,0,1,0,0,0,0,0,1,1,1,1,0,0,0,1,0,0,0,0,1,0,1,0,0,1,1,1,0,0,0,0,1,1,1,0,0,0,0,1,1,1,1,0,1,0,0,0,0,1,1,1,1,0,0,1,1,0,1,1,1,1,0,0,0,0,1,1,0,1,0,0,1,0,0,1,1,0,0,1,1,0,1,0,1,0,1,1,0,0,0,1,0,0,0,1,1,1,1,0,0,1,0,0,0,1,1,1,1,1,0,1,0,0,0,0,1,0,0,0,0,0,0,0,1,1,1,1,0,0,1,1,0,0,0,1,0,1,0,1,1,1,1,1,1,1,0,1,0,0,1,1,0,0,1,0,1,0,1,1,1,1,0,1,1,0,0,1,1,0,1,0,1,1,0,1,1,0,1,0,1,0,1,0,1,0,1,1,0,0,1,0,1,1,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,0,0,1,0,1,1,1,1,1,0,0,0,0,0,0,0,0,1,0,0,0,1,1,0,0,1,0,0,0,1,0,0,1,1,1,0,0,1,1,1,0,0,1,0,1,0,0,1,0,1,0,0,1,0,1,1,0,0,0,0,0,0,1,0,0,1,0,0,1,0,0,0,1,0,0,0,1,1,1,1,1,1,1,1,0,0,1,0,0,0,0,1,1,0,0,1,0,1,0,0,1,1,1,1,0,0,1,1,0,0,1,0,1,1,0,0,1,1,1,1,1,0,1,1,1,1,0,0,1,0,1,1,0,1,1,0,1,1,0,0,0,0,0,1,0,0,1,1,0,0,1,1,0,0,1,0,1,1,0,1,1,0,0,1,1,1,0,1,1,0,1,1,1,1,1,1,0,0,1,1,1,1,0,1,0,1,1,1,0,1,0,0,1,1,1,0,0,0,0,1,1,1,0,0,0,0,1,1,0,0,1,1,0,1,0,1,0,0,1,0,0,1,0,1,1,0,0,0,1,1,1,0,0,1,1,0,0,1,0,1,1,1,0,1,1,1,0,1,1,0,0,0,1,1,1,0,0,1,0,1,1,0,0,1,1,1,0,1,1,1,0,1,0,1,0,1,1,0,0,1,1,0,1,1,1,0,1,0,0,1,0,1,0,0,0,0,0,1,1,0,0,1,1,0,0,0,1,1,1,0,0,1,0,0,1,0,1,1,1,1,1,0,0,1,0,1,0,0,1,1,1,0,0,0,1,0,0,0,0,0,0,0,1,1,1,0,0,1,1,0,1,1,1,0,0,1,1,1,1,1,0,1,1,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,1,0,0,1,1,0,1,1,1,1,0,1,0,1,1,1,0,1,0,0,0,0,1,0,1,0,0,0,0,0,1,1,1,0,1,1,0,0,0,1,0,0,1,0,0,1,1,1,0,0,0,1,1,0,1,1,1,1,0,0,0,0,1,0,1,0,0,0,1,0,1,0,0,0,0,1,1,1,0,0,1,0,1,0,1,0,1,1,0,0,1,0,0,0,0,1,1,1,1,0,1,1,1,0,0,0,1,0,1,1,1,1,0,1,0,0,0,0,0,1,0,1,1,0,1,0,0,1,0,1,0,0,0,1,1,1,1,1,0,1,0,0,1,1,1,1,1,0,1,0,1,0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,0,0,0,0,0,1,0,1,0,1,1,0,1,1,0,0,1,0,0,1,1,0,1,1,1,0,1,1,0,1,0,1,0,1,0,0,0,1,0,1,0,0,0,0,0,0,1,0,1,1,1,1,0,1,1,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,1,1,0,1,1,0,0,1,0,1,1,0,1,0,0,1,1,1,0,0,1,1,0,0,0,1,1,0,0,1,1,0,1,0,0,1,0,0,0,1,1,0,1,1,1,1,1,1,1,1,1,0,1,0,0,1,0,1,0,1,1,1,1,1,1,1,1,1,0,0,1,0,1,0,0,0,1,0,0,0,0,1,0,1,0,1,0,0,1,0,1,1,0,1,1,0,0,1,0,1,1,0,1,1,1,0,1,1,1,0,0,1,1,0,0,1,0,1,0,1,1,0,0,1,0,1,1,1,0,0,0,1,0,1,0,0,0,0,1,0,0,1,1,1,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,0,1,0,0,1,1,0,0,0,0,1,0,0,0,0,0,1,0,1,1,0,1,1,1,1,0,1,0,0,0,0,1,0,0,1,0,0,0,0,1,0,1,0,0,0,0,0,1,1,0,1,1,1,1,0,1,0,1,0,0,1,1,0,0,1,0,0,0,0,0,0,1,1,1,1,0,0,1,0,1,1,0,1,0,0,1,1,0,0,1,1,1,1,1,1,1,0,0,0,1,1,0,0,0,0,1,1,0,1,0,0,0,0,1,1,1,0,0,1,1,0,1,0,1,1,0,0,0,1,0,0,0,0,0,0,0,0,0,1,1,0,0,1,0,1,0,1,0,0,1,0,1,1,0,0,1,0,0,0,1,1,0,1,1,1,1,1,1,0,1,0,0,1,1,0,0,0,1,0,1,1,0,0,1,1,0,0,1,1,0,1,1,1,0,1,1,1,0,0,1,0,0,1,0,1,1,1,0,1,0,1,1,1,1,0,1,0,1,0,1,0,1,1,1,1,0,0,0,1,1,1,0,1,0,1,0,0,0,1,1,1,0,1,0,0,0,1,1,1,0,1,1,1,1,1,0,1,0,0,1,1,0,1,1,0,0,0,0,0,1,1,0,1,0,0,0,1,0,0,1,1,1,0,1,0,1,0,1,0,0,0,1,0,1,1,1,0,1,1,0,0,1,1,1,1,1,0,1,0,0,1,0,0,1,1,1,1,0,1,0,1,1,1,1,1,0,1,0,1,0,0,0,0,1,0,0,0,1,1,0,1,0,0,1,0,0,1,0,1,0,0,1,0,0,1,0,0,1,1,0,0,0,1,1,0,0,0,1,0,0,0,1,1,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,1,1,1,1,1,1,0,0,0,0,1,1,1,0,1,0,1,1,0,1,0,0,0,0,0,0,1,1,0,1,0,0,0,0,0,1,1,0,0,1,0,1,0,0,0,0,1,0,1,1,0,0,0,1,0,1,0,0,0,0,1,0,0,0,1,0,0,0,0,1,0,1,1,1,1,0,0,1,0,1,0,0,0,1,1,1,0,1,1,1,0,1,0,0,0,0,0,1,1,1,0,0,0,0,1,0,1,1,1,0,0,1,0,1,0,0,1,0,0,1,1,1,1,1,1,0,0,0,0,0,1,1,0,0,0,0,1,1,1,1,1,1,0,1,0,0,1,1,1,1,0,1,0,1,1,0,1,1,1,0,1,0,1,1,1,1,1,0,1,1,1,0,1,0,0,1,1,0,1,0,0,0,1,1,1,1,0,0,1,0,0,0,1,0,1,1,0,0,0,0,1,0,1,0,0,1,1,1,1,0,1,0,0,1,0,1,1,1,0,0,1,0,0,0,1,1,0,1,1,1,0,0,0,1,1,0,0,1,1,1,1,1,0,1,0,1,0,1,0,1,0,1,0,0,1,0,1,0,0,1,0,0,1,1,0,1,1,0,0,0,1,1,0,1,1,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,1,1,1,0,0,1,1,1,1,1,1,0,0,0,1,0,0,1,0,0,0,1,1,0,1,1,0,0,0,1,1,0,1,0,1,1,0,1,0,1,1,0,0,0,0,0,1,1,1,1,1,0,0,1,0,0,1,0,1,0,0,1,1,0,1,0,0,1,0,0,0,1,0,1,1,0,1,1,0,1,0,0,0,0,1,1,0,1,1,1,1,1,0,1,1,0,0,0,0,1,1,1,1,0,0,0,0,1,0,0,0,0,0,0,0,0,1,1,0,1,1,1,1,0,0,0,1,0,0,1,1,0,0,0,0,1,1,1,0,0,0,1,0,0,1,0,1,1,0,1,0,0,1,0,1,1,1,1,1,0,0,1,0,0,1,0,1,0,0,0,1,1,0,0,1,0,0,1,1,1,1,0,1,1,1,1,0,1,1,1,0,1,0,1,0,0,0,0,1,0,1,1,0,0,1,1,1,1,1,1,0,0,1,0,1,1,0,1,1,0,0,1,0,1,1,1,0,1,1,0,0,0,1,1,0,0,0,1,0,1,1,1,0,0,0,1,0,0,0,1,1,0,0,1,0,1,1,0,0,1,0,0,1,0,0,1,0,1,1,0,0,0,1,0,0,1,0,1,0,1,0,1,0,0,1,1,1,0,0,1,1,0,0,1,0,1,1,0,0,1,1,0,0,1,0,1,1,1,0,0,1,1,0,1,1,1,1,0,1,1,1,0,0,0,0,1,0,0,0,0,0,0,0,1,1,1,0,1,1,1,0,1,1,1,1,0,1,1,1,1,0,1,0,1,1,0,1,0,0,1,1,0,1,1,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,1,0,1,1,1,0,1,1,0,1,0,1,1,0,0,1,0,1,0,0,1,1,1,1,0,0,0,0,0,1,0,0,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,0,1,0,0,0,1,1,0,0,0,1,0,1,1,1,1,1,0,1,0,1,1,1,0,0,1,0,0,1,1,0,0,1,1,1,0,1,1,1,0,1,1,0,0,1,1,1,1,1,1,0,0,0,0,1,0,0,1,0,0,0,0,0,1,1,1,1,1,0,1,1,0,0,0,1,1,0,0,1,1,0,0,0,0,0,0,1,1,1,0,1,0,1,1,0,0,0,0,1,1,1,0,0,0,1,1,0,1,1,0,1,0,1,0,1,1,0,1,0,1,0,0,1,1,1,1,1,0,1,1,1,1,0,0,1,0,0,0,0,0,0,0,0,1,1,1,0,1,0,0,1,1,0,1,1,1,0,1,1,0,1,0,1,0,0,0,0,1,1,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,1,1,0,1,0,0,1,1,0,0,1,1,1,1,0,1,1,0,0,0,0,0,0,1,1,1,0,0,0,0,1,0,1,1,1,1,0,1,1,1,1,0,1,1,0,1,0,1,0,0,1,1,1,1,1,1,0,0,0,1,0,1,0,0,0,1,1,0,1,0,1,0,1,1,1,1,0,0,0,0,0,0,0,1,0,1,0,1,0,0,0,1,0,0,0,1,0,1,0,1,1,1,1,0,1,0,1,0,0,1,1,0,1,0,0,0,0,1,1,0,0,1,0,1,0,0,0,0,0,0,1,0,1,0,0,0,0,0,1,0,1,1,0,1,0,0,1,1,0,1,0,1,1,1,1,1,0,0,0,0,1,0,1,1,0,0,0,1,0,0,1,1,1,0,1,1,1,1,1,1,0,1,0,1,0,0,0,1,0,0,0,0,1,1,0,1,0,0,0,0,0,0,1,0,1,1,0,1,1,1,1,1,1,0,0,1,1,0,1,0,0,1,1,0,0,0,1,0,1,0,0,1,0,0,1,1,1,1,0,1,0,0,1,0,1,1,0,0,0,0,0,1,1,0,0,1,1,1,1,0,0,0,0,1,0,0,1,1,1,1,1,1,1,1,1,1,1,0,1,0,0,0,0,0,1,1,1,1,1,0,1,0,1,1,1,1,1,1,0,1,1,0,1,0,0,0,1,1,0,1,1,1,0,1,1,0,1,0,1,0,1,0,1,1,0,0,1,0,1,1,0,0,0,0,0,1,0,0,0,0,0,1,1,0,1,1,0,1,1,1,0,1,1,1,1,0,0,1,0,1,0,0,0,1,1,0,1,0,0,0,1,0,1,1,0,1,0,0,1,1,1,0,1,1,0,0,1,1,1,1,1,0,1,0,1,0,0,1,1,0,0,1,1,1,0,1,1,1,1,0,0,0,0,0,0,0,0,1,0,1,0,1,0,0,1,0,1,1,0,0,0,0,0,0,1,1,1,0,1,0,1,1,1,0,1,1,0,1,0,0,0,0,0,1,0,1,1,1,1,0,0,1,0,0,0,0,0,0,1,1,0,0,0,1,1,0,0,1,1,0,1,0,1,1,1,0,0,1,1,0,0,0,1,1,0,0,1,1,0,0,1,0,0,1,0,1,0,0,0,0,0,0,1,1,1,0,1,0,0,1,1,0,1,1,0,1,0,1,0,0,0,1,1,0,0,1,1,0,1,1,0,0,1,0,1,0,0,1,0,1,0,1,0,1,0,1,1,0,1,1,1,1,0,0,0,1,1,0,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,0,1,1,0,0,1,1,0,0,0,0,0,1,0,0,0,1,1,1,0,0,1,1,1,0,0,1,1,1,1,1,0,1,1,1,1,0,1,0,0,1,1,1,1,1,0,1,1,1,1,1,0,0,0,1,0,0,1,1,0,0,1,1,0,0,1,0,0,1,0,1,1,0,1,0,0,1,1,1,1,0,0,0,0,0,0,1,1,0,1,1,0,1,0,0,0,1,0,0,1,1,0,0,1,1,0,0,0,0,0,1,0,1,1,1,0,0,0,1,0,1,1,0,1,1,0,0,1,0,0,0,0,1,1,0,0,0,1,1,0,0,1,1,1,0,1,0,0,0,0,0,1,0,0,1,1,1,0,0,1,1,0,1,1,0,0,0,1,0,0,1,0,0,0,1,0,0,1,1,0,0,0,1,0,0,1,0,1,0,0,0,0,0,0,1,0,1,1,0,1,0,1,0,0,1,0,0,1,1,1,1,0,0,0,1,1,0,1,0,1,0,0,0,0,0,0,0,0,1,1,1,0,0,0,1,0,1,1,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,1,0,0,0,1,0,1,0,0,1,0,0,0,0,0,0,0,1,1,1,1,0,1,1,1,1,0,0,1,1,1,];
var gg_b = "1703736002/";

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
      subdomainx = String.fromCharCode(97 + gg_m[x]);
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
