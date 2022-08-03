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
case 1008:
case 520:
case 1201:
case 1908:
case 3854:
case 1606:
case 1781:
case 1954:
case 3039:
case 1173:
case 249:
case 1701:
case 1886:
case 1725:
case 1860:
case 501:
case 3021:
case 2011:
case 3087:
case 3098:
case 157:
case 3727:
case 2185:
case 419:
case 1570:
case 1526:
case 3683:
case 2581:
case 2517:
case 3607:
case 22:
case 200:
case 3132:
case 1774:
case 1871:
case 894:
case 1450:
case 3322:
case 1200:
case 3442:
case 3421:
case 4018:
case 453:
case 3643:
case 3543:
case 1359:
case 581:
case 2098:
case 1758:
case 2596:
case 632:
case 1135:
case 3313:
case 2060:
case 1913:
case 797:
case 314:
case 2262:
case 1280:
case 3967:
case 2923:
case 1881:
case 3788:
case 356:
case 3880:
case 2653:
case 3252:
case 3550:
case 2928:
case 3362:
case 3726:
case 2134:
case 1197:
case 2853:
case 2749:
case 3684:
case 3279:
case 884:
case 665:
case 576:
case 1623:
case 2323:
case 1820:
case 1554:
case 397:
case 64:
case 2725:
case 316:
case 803:
case 1247:
case 1600:
case 486:
case 2404:
case 2202:
case 557:
case 3336:
case 3189:
case 2338:
case 431:
case 3460:
case 3509:
case 780:
case 2311:
case 3790:
case 96:
case 1436:
case 598:
case 97:
case 2695:
case 1250:
case 3600:
case 2578:
case 2941:
case 709:
case 2663:
case 3225:
case 3975:
case 3020:
case 2271:
case 3601:
case 3756:
case 1785:
case 2001:
case 983:
case 2131:
case 3097:
case 2580:
case 1996:
case 3471:
case 3435:
case 1656:
case 2429:
case 1220:
case 53:
case 723:
case 231:
case 2526:
case 393:
case 3062:
case 2452:
case 635:
case 233:
case 2447:
case 636:
case 3624:
case 1823:
case 3789:
case 1966:
case 542:
case 4048:
case 3799:
case 3759:
case 808:
case 2243:
case 946:
case 3227:
case 2115:
case 574:
case 3127:
case 1777:
case 43:
case 2551:
case 1136:
case 207:
case 1308:
case 1454:
case 72:
case 1805:
case 866:
case 3913:
case 555:
case 2546:
case 974:
case 628:
case 2406:
case 3233:
case 3353:
case 2051:
case 1209:
case 3104:
case 3831:
case 2039:
case 457:
case 313:
case 732:
case 689:
case 3071:
case 2325:
case 2388:
case 372:
case 3751:
case 1400:
case 3387:
case 2306:
case 2441:
case 1362:
case 2367:
case 3534:
case 2278:
case 2997:
case 855:
case 3149:
case 3849:
case 3351:
case 2332:
case 882:
case 2770:
case 2052:
case 2865:
case 707:
case 378:
case 3518:
case 505:
case 1485:
case 472:
case 4017:
case 1110:
case 1960:
case 373:
case 3469:
case 1156:
case 634:
case 26:
case 3791:
case 2527:
case 489:
case 1940:
case 2828:
case 1695:
case 3496:
case 1828:
case 1925:
case 1375:
case 3301:
case 3281:
case 2085:
case 1312:
case 286:
case 3514:
case 760:
case 254:
case 413:
case 311:
case 2795:
case 1487:
case 2448:
case 185:
case 3921:
case 3682:
case 1063:
case 741:
case 2892:
case 328:
case 802:
case 1047:
case 3254:
case 3908:
case 852:
case 2623:
case 439:
case 3396:
case 2315:
case 1350:
case 1032:
case 2451:
case 3374:
case 1407:
case 1900:
case 3197:
case 845:
case 3668:
case 2976:
case 1708:
case 2474:
case 1728:
case 3872:
case 2264:
case 3658:
case 1261:
case 786:
case 2303:
case 532:
case 2396:
case 724:
case 773:
case 1945:
case 3479:
case 1076:
case 2783:
case 613:
case 2102:
case 1969:
case 20:
case 188:
case 3439:
case 3905:
case 2260:
case 3654:
case 2989:
case 2265:
case 179:
case 2839:
case 85:
case 2000:
case 2187:
case 3708:
case 1535:
case 370:
case 1391:
case 3900:
case 1985:
case 447:
case 754:
case 101:
case 1555:
case 1336:
case 170:
case 1272:
case 3666:
case 3414:
case 3380:
case 1463:
case 691:
case 3198:
case 3420:
case 2961:
case 545:
case 3878:
case 541:
case 1195:
case 3933:
case 3337:
case 229:
case 3641:
case 2935:
case 3226:
case 1546:
case 3978:
case 987:
case 3979:
case 3426:
case 2110:
case 2212:
case 661:
case 2101:
case 622:
case 1344:
case 2514:
case 77:
case 1187:
case 1790:
case 563:
case 2809:
case 2868:
case 705:
case 503:
case 2309:
case 1762:
case 4047:
case 970:
case 2240:
case 239:
case 3018:
case 1770:
case 1055:
case 1810:
case 174:
case 3761:
case 2435:
case 836:
case 2443:
case 2739:
case 2316:
case 2909:
case 1414:
case 3103:
case 1585:
case 3151:
case 2554:
case 3695:
case 1257:
case 3896:
case 527:
case 278:
case 3737:
case 1516:
case 3437:
case 3134:
case 1331:
case 673:
case 2814:
case 1378:
case 3118:
case 3094:
case 798:
case 1022:
case 2220:
case 575:
case 1717:
case 1390:
case 2835:
case 800:
case 197:
case 2608:
case 3216:
case 1432:
case 3962:
case 1102:
case 1979:
case 2666:
case 3046:
case 3558:
case 2932:
case 2899:
case 1883:
case 1992:
case 3354:
case 1771:
case 1975:
case 1957:
case 2612:
case 862:
case 2568:
case 161:
case 2586:
case 3910:
case 3549:
case 976:
case 152:
case 3707:
case 2203:
case 3792:
case 243:
case 2473:
case 2812:
case 2715:
case 1724:
case 3989:
case 3733:
case 2702:
case 1978:
case 2515:
case 1542:
case 1544:
case 3406:
case 2244:
case 2407:
case 2430:
case 3162:
case 3394:
case 2563:
case 2625:
case 3180:
case 2706:
case 274:
case 767:
case 1841:
case 3956:
case 3847:
case 1769:
case 2362:
case 906:
case 3110:
case 1646:
case 484:
case 3522:
case 3648:
case 3264:
case 2015:
case 2241:
case 2747:
case 3099:
case 226:
case 4067:
case 468:
case 295:
case 192:
case 3494:
case 2668:
case 3580:
case 3429:
case 3172:
case 4053:
case 2766:
case 1970:
case 3410:
case 2984:
case 893:
case 90:
case 828:
case 1930:
case 2741:
case 3504:
case 2657:
case 833:
case 32:
case 1787:
case 607:
case 1778:
case 3188:
case 1568:
case 1424:
case 1214:
case 3006:
case 492:
case 540:
case 1263:
case 3638:
case 544:
case 65:
case 734:
case 1799:
case 4006:
case 2750:
case 996:
case 464:
case 1285:
case 1948:
case 1537:
case 706:
case 3941:
case 2610:
case 2048:
case 1982:
case 1313:
case 2534:
case 1133:
case 2351:
case 2087:
case 1520:
case 3563:
case 3031:
case 252:
case 2175:
case 2959:
case 3247:
case 3948:
case 2647:
case 2369:
case 514:
case 624:
case 414:
case 1001:
case 1372:
case 1851:
case 2887:
case 1380:
case 3161:
case 1835:
case 3210:
case 3390:
case 3049:
case 3022:
case 3249:
case 3523:
case 1482:
case 1727:
case 766:
case 3687:
case 1649:
case 2986:
case 710:
case 3462:
case 3775:
case 1471:
case 280:
case 230:
case 298:
case 3731:
case 434:
case 2002:
case 1309:
case 2210:
case 2734:
case 151:
case 4023:
case 3650:
case 587:
case 1800:
case 771:
case 279:
case 2838:
case 1949:
case 104:
case 2789:
case 933:
case 321:
case 2991:
case 3589:
case 3596:
case 2277:
case 3936:
case 2829:
case 619:
case 1059:
case 3302:
case 834:
case 3777:
case 215:
case 1500:
case 3544:
case 282:
case 1019:
case 807:
case 610:
case 2402:
case 1641:
case 617:
case 3065:
case 1226:
case 2252:
case 3698:
case 3133:
case 3717:
case 3709:
case 2414:
case 4032:
case 2242:
case 3184:
case 1734:
case 2038:
case 2007:
case 642:
case 1088:
case 2471:
case 3314:
case 525:
case 1906:
case 3121:
case 2356:
case 2197:
case 3592:
case 2024:
case 3861:
case 762:
case 939:
case 2476:
case 2954:
case 1765:
case 1376:
case 1408:
case 3825:
case 1981:
case 578:
case 1796:
case 1474:
case 3840:
case 3403:
case 3882:
case 3597:
case 1477:
case 2019:
case 872:
case 2852:
case 775:
case 1947:
case 992:
case 4028:
case 2360:
case 3190:
case 846:
case 256:
case 1731:
case 2206:
case 3112:
case 3231:
case 2800:
case 517:
case 964:
case 796:
case 643:
case 1850:
case 748:
case 353:
case 2078:
case 306:
case 3458:
case 465:
case 3857:
case 791:
case 822:
case 1578:
case 3914:
case 1369:
case 2114:
case 3466:
case 3055:
case 2454:
case 1097:
case 1239:
case 1070:
case 3073:
case 1694:
case 3331:
case 2329:
case 3444:
case 2579:
case 3125:
case 606:
case 784:
case 74:
case 1025:
case 2518:
case 3238:
case 3269:
case 1696:
case 1355:
case 1891:
case 1194:
case 1994:
case 3447:
case 1803:
case 3652:
case 297:
case 874:
case 2317:
case 2462:
case 3891:
case 1397:
case 2531:
case 1678:
case 1502:
case 25:
case 3047:
case 4052:
case 1952:
case 3333:
case 2218:
case 2650:
case 3275:
case 2364:
case 1045:
case 2823:
case 3093:
case 5:
case 918:
case 2758:
case 154:
case 2196:
case 2153:
case 3123:
case 2603:
case 867:
case 1788:
case 1776:
case 3860:
case 2832:
case 524:
case 3922:
case 1242:
case 3516:
case 1461:
case 3289:
case 3082:
case 1351:
case 2234:
case 3152:
case 220:
case 3182:
case 2232:
case 2549:
case 790:
case 331:
case 3662:
case 3402:
case 3715:
case 3581:
case 1146:
case 504:
case 309:
case 3107:
case 3061:
case 2132:
case 1363:
case 3386:
case 110:
case 2467:
case 2583:
case 2350:
case 2053:
case 2952:
case 1324:
case 1017:
case 1206:
case 731:
case 435:
case 1508:
case 2227:
case 2133:
case 2851:
case 3033:
case 3873:
case 2876:
case 1598:
case 1294:
case 3481:
case 2521:
case 3809:
case 317:
case 1072:
case 1260:
case 1189:
case 1152:
case 259:
case 2660:
case 2189:
case 173:
case 2972:
case 2485:
case 1686:
case 27:
case 3200:
case 805:
case 3937:
case 3192:
case 907:
case 889:
case 2363:
case 2978:
case 3586:
case 1437:
case 2215:
case 2154:
case 745:
case 396:
case 3495:
case 1484:
case 2963:
case 1707:
case 3258:
case 1409:
case 3620:
case 721:
case 2722:
case 350:
case 1266:
case 82:
case 45:
case 1984:
case 2445:
case 1627:
case 2676:
case 3144:
case 1967:
case 3365:
case 2866:
case 703:
case 3694:
case 28:
case 1492:
case 2113:
case 1806:
case 648:
case 3835:
case 1951:
case 3137:
case 774:
case 1377:
case 3562:
case 2320:
case 3239:
case 963:
case 704:
case 417:
case 921:
case 2157:
case 3594:
case 1866:
case 383:
case 671:
case 3070:
case 3649:
case 3701:
case 1531:
case 3085:
case 3075:
case 1284:
case 1395:
case 1232:
case 2111:
case 3838:
case 3969:
case 4085:
case 931:
case 2550:
case 2784:
case 1026:
case 1401:
case 2328:
case 3796:
case 747:
case 568:
case 3608:
case 2746:
case 3629:
case 3928:
case 975:
case 3373:
case 1013:
case 1677:
case 3576:
case 1760:
case 2400:
case 2674:
case 1961:
case 630:
case 1446:
case 2555:
case 3888:
case 1442:
case 2501:
case 172:
case 1144:
case 2669:
case 2732:
case 1141:
case 3637:
case 3963:
case 781:
case 2444:
case 1443:
case 1449:
case 1829:
case 539:
case 1877:
case 1680:
case 55:
case 513:
case 1861:
case 1847:
case 2761:
case 1472:
case 3868:
case 2630:
case 2346:
case 2943:
case 2552:
case 3156:
case 1142:
case 2889:
case 1772:
case 2922:
case 1320:
case 2779:
case 923:
case 2559:
case 1000:
case 450:
case 2030:
case 3627:
case 1205:
case 1767:
case 2801:
case 3013:
case 1892:
case 3521:
case 794:
case 1999:
case 1501:
case 3139:
case 1211:
case 3248:
case 2031:
case 3985:
case 2166:
case 682:
case 1453:
case 234:
case 1766:
case 1972:
case 2837:
case 1597:
case 3330:
case 2815:
case 3027:
case 2645:
case 3243:
case 3993:
case 3187:
case 1898:
case 966:
case 1340:
case 590:
case 2673:
case 722:
case 3004:
case 926:
case 3787:
case 814:
case 2751:
case 301:
case 2810:
case 3942:
case 1456:
case 2472:
case 8:
case 3944:
case 1552:
case 2693:
case 3766:
case 2840:
case 959:
case 3780:
case 3217:
case 2193:
case 3565:
case 3798:
case 2352:
case 3452:
case 1532:
case 1753:
case 4073:
case 1248:
case 1560:
case 498:
case 2282:
case 1434:
case 626:
case 1193:
case 3764:
case 1863:
case 719:
case 3045:
case 3091:
case 1057:
case 1046:
case 284:
case 3812:
case 2685:
case 770:
case 1237:
case 1548:
case 3237:
case 428:
case 2573:
case 35:
case 73:
case 506:
case 1323:
case 1093:
case 2926:
case 83:
case 4063:
case 2027:
case 2032:
case 3826:
case 1968:
case 880:
case 898:
case 2964:
case 4:
case 3805:
case 169:
case 1090:
case 2486:
case 1638:
case 1616:
case 1505:
case 2488:
case 199:
case 4036:
case 2683:
case 603:
case 1382:
case 2106:
case 3408:
case 2845:
case 2251:
case 3377:
case 196:
case 293:
case 640:
case 3175:
case 1479:
case 2182:
case 3858:
case 2026:
case 3056:
case 2904:
case 4054:
case 4044:
case 2677:
case 2873:
case 2086:
case 1230:
case 3881:
case 739:
case 2331:
case 3306:
case 2916:
case 2177:
case 2804:
case 3427:
case 187:
case 885:
case 3325:
case 1469:
case 3583:
case 1341:
case 552:
case 2333:
case 1249:
case 1853:
case 2980:
case 271:
case 113:
case 909:
case 1723:
case 837:
case 2713:
case 242:
case 1744:
case 3803:
case 2288:
case 1684:
case 3712:
case 3885:
case 3483:
case 1365:
case 2686:
case 1130:
case 3542:
case 1405:
case 189:
case 2207:
case 2340:
case 3430:
case 358:
case 1997:
case 3416:
case 1293:
case 3428:
case 3335:
case 2137:
case 989:
case 1061:
case 3311:
case 1617:
case 582:
case 2678:
case 985:
case 1262:
case 2897:
case 2365:
case 3767:
case 2793:
case 1732:
case 2297:
case 3746:
case 3232:
case 2648:
case 2655:
case 67:
case 3160:
case 1676:
case 2771:
case 3783:
case 994:
case 621:
case 1460:
case 1711:
case 2099:
case 3748:
case 1468:
case 3461:
case 3174:
case 1180:
case 3449:
case 2135:
case 1825:
case 2041:
case 102:
case 2159:
case 3605:
case 2097:
case 1335:
case 3251:
case 3599:
case 3570:
case 685:
case 1864:
case 876:
case 375:
case 1517:
case 3348:
case 2200:
case 1162:
case 2717:
case 223:
case 3664:
case 1783:
case 1576:
case 3296:
case 2982:
case 2513:
case 3285:
case 2016:
case 3418:
case 1466:
case 908:
case 627:
case 1748:
case 3665:
case 1292:
case 2698:
case 2757:
case 2942:
case 1455:
case 1310:
case 3875:
case 3804:
case 3874:
case 292:
case 3971:
case 1634:
case 2973:
case 2418:
case 3173:
case 3324:
case 221:
case 3679:
case 878:
case 2072:
case 750:
case 47:
case 3295:
case 2808:
case 1435:
case 146:
case 2607:
case 1037:
case 2602:
case 3044:
case 1006:
case 2042:
case 571:
case 937:
case 496:
case 3205:
case 201:
case 2009:
case 1668:
case 1476:
case 3832:
case 2136:
case 458:
case 2127:
case 2822:
case 605:
case 1687:
case 2600:
case 531:
case 3498:
case 948:
case 589:
case 1713:
case 1274:
case 2290:
case 3270:
case 1163:
case 1035:
case 3636:
case 1396:
case 871:
case 2664:
case 3931:
case 3552:
case 2273:
case 1590:
case 3714:
case 3433:
case 3032:
case 191:
case 1181:
case 1843:
case 2495:
case 1512:
case 2571:
case 1826:
case 3356:
case 3064:
case 1556:
case 3512:
case 1793:
case 2879:
case 1632:
case 3998:
case 3106:
case 3078:
case 251:
case 175:
case 3043:
case 1572:
case 3016:
case 2149:
case 2238:
case 3621:
case 1112:
case 3834:
case 3448:
case 1005:
case 2786:
case 826:
case 667:
case 549:
case 526:
case 2947:
case 3493:
case 1404:
case 3705:
case 2805:
case 1763:
case 1016:
case 3274:
case 1756:
case 2130:
case 398:
case 664:
case 2286:
case 2818:
case 2520:
case 955:
case 1406:
case 1897:
case 1314:
case 1330:
case 3772:
case 34:
case 3842:
case 13:
case 3278:
case 2847:
case 4086:
case 3346:
case 3546:
case 4092:
case 1664:
case 1691:
case 193:
case 2359:
case 3553:
case 2213:
case 452:
case 123:
case 2760:
case 1002:
case 253:
case 3547:
case 100:
case 4026:
case 3947:
case 3856:
case 30:
case 2719:
case 3571:
case 2659:
case 608:
case 3404:
case 494:
case 3613:
case 111:
case 669:
case 4066:
case 2433:
case 3691:
case 2756:
case 3465:
case 3990:
case 1273:
case 2519:
case 2620:
case 493:
case 629:
case 1132:
case 3595:
case 3619:
case 2975:
case 3602:
case 2424:
case 2884:
case 2247:
case 2353:
case 1834:
case 2161:
case 1612:
case 266:
case 260:
case 1223:
case 1036:
case 182:
case 3622:
case 2081:
case 277:
case 2324:
case 3147:
case 2836:
case 2337:
case 3256:
case 2524:
case 303:
case 764:
case 2191:
case 1582:
case 427:
case 1703:
case 1358:
case 1794:
case 2344:
case 323:
case 2529:
case 2228:
case 2304:
case 3026:
case 3413:
case 3524:
case 3785:
case 56:
case 647:
case 46:
case 281:
case 1318:
case 2736:
case 2582:
case 2618:
case 3561:
case 127:
case 2276:
case 3815:
case 3968:
case 806:
case 778:
case 1054:
case 600:
case 708:
case 2256:
case 3744:
case 1337:
case 270:
case 1507:
case 3696:
case 3906:
case 310:
case 3036:
case 3168:
case 1410:
case 332:
case 3476:
case 858:
case 3186:
case 2147:
case 1910:
case 1080:
case 3378:
case 2797:
case 875:
case 2867:
case 2466:
case 1166:
case 3185:
case 75:
case 1842:
case 4019:
case 4091:
case 3866:
case 897:
case 3568:
case 1233:
case 2096:
case 19:
case 318:
case 3305:
case 3945:
case 1202:
case 4009:
case 3603:
case 2633:
case 2611:
case 1465:
case 2670:
case 3824:
case 1574:
case 3124:
case 3730:
case 565:
case 2219:
case 265:
case 655:
case 1595:
case 1094:
case 1403:
case 3916:
case 3389:
case 2813:
case 4065:
case 3680:
case 3072:
case 3539:
case 2075:
case 2709:
case 3076:
case 1830:
case 3932:
case 1857:
case 3758:
case 3209:
case 1114:
case 1150:
case 3940:
case 2440:
case 1014:
case 2326:
case 3294:
case 3898:
case 3943:
case 2891:
case 1161:
case 3207:
case 3887:
case 58:
case 2417:
case 1109:
case 841:
case 4064:
case 1893:
case 3089:
case 639:
case 512:
case 4082:
case 272:
case 1171:
case 2055:
case 1038:
case 1573:
case 3485:
case 1040:
case 1919:
case 1645:
case 3548:
case 3228:
case 3507:
case 1113:
case 3865:
case 406:
case 1106:
case 1845:
case 594:
case 3930:
case 1186:
case 3918:
case 288:
case 3327:
case 3359:
case 954:
case 3080:
case 2458:
case 1108:
case 257:
case 1004:
case 2950:
case 1890:
case 1759:
case 981:
case 1389:
case 2188:
case 3342:
case 2748:
case 2045:
case 831:
case 160:
case 737:
case 990:
case 650:
case 2700:
case 2020:
case 511:
case 569:
case 181:
case 3811:
case 1349:
case 1673:
case 410:
case 4000:
case 3220:
case 70:
case 1998:
case 2589:
case 2574:
case 3974:
case 1587:
case 712:
case 2436:
case 3584:
case 2070:
case 4031:
case 4077:
case 3344:
case 2025:
case 3779:
case 3431:
case 3769:
case 135:
case 3349:
case 3833:
case 900:
case 2013:
case 2768:
case 4088:
case 3692:
case 1822:
case 3970:
case 1334:
case 3588:
case 3794:
case 3267:
case 1174:
case 2036:
case 3850:
case 2037:
case 3939:
case 446:
case 1246:
case 3625:
case 3995:
case 3491:
case 3008:
case 3304:
case 1007:
case 23:
case 1486:
case 1475:
case 1636:
case 2858:
case 1630:
case 3450:
case 2990:
case 1547:
case 3382:
case 3923:
case 262:
case 2059:
case 186:
case 3870:
case 2392:
case 1031:
case 1644:
case 480:
case 1305:
case 357:
case 89:
case 2680:
case 873:
case 3116:
case 3300:
case 968:
case 2622:
case 839:
case 367:
case 2769:
case 2322:
case 2548:
case 3208:
case 1379:
case 433:
case 4030:
case 3574:
case 1062:
case 1741:
case 407:
case 3972:
case 838:
case 1199:
case 3959:
case 2378:
case 1655:
case 2088:
case 515:
case 2216:
case 573:
case 2255:
case 3105:
case 678:
case 109:
case 2222:
case 3263:
case 163:
case 1804:
case 3048:
case 1451:
case 756:
case 601:
case 1084:
case 3610:
case 3290:
case 859:
case 2538:
case 2862:
case 972:
case 993:
case 919:
case 2347:
case 2431:
case 2587:
case 2463:
case 2348:
case 3284:
case 3381:
case 62:
case 2502:
case 2831:
case 700:
case 651:
case 3951:
case 2604:
case 757:
case 3655:
case 3894:
case 377:
case 663:
case 2539:
case 2637:
case 1493:
case 1527:
case 3631:
case 3224:
case 1447:
case 551:
case 1976:
case 2173:
case 4024:
case 1931:
case 1613:
case 564:
case 2361:
case 3446:
case 3618:
case 1143:
case 2925:
case 2652:
case 76:
case 2334:
case 3952:
case 2275:
case 122:
case 3912:
case 3196:
case 2609:
case 2977:
case 2268:
case 1183:
case 1929:
case 1056:
case 4012:
case 3961:
case 2662:
case 3883:
case 3368:
case 2794:
case 725:
case 1971:
case 3725:
case 3230:
case 2848:
case 1722:
case 1231:
case 618:
case 2661:
case 2740:
case 204:
case 2483:
case 1698:
case 2888:
case 2535:
case 3671:
case 1286:
case 3554:
case 371:
case 3490:
case 363:
case 687:
case 374:
case 3240:
case 1490:
case 394:
case 3661:
case 3532:
case 850:
case 3492:
case 2145:
case 2482:
case 341:
case 2716:
case 342:
case 956:
case 54:
case 795:
case 1422:
case 2696:
case 656:
case 2107:
case 445:
case 3843:
case 2205:
case 3323:
case 1775:
case 847:
case 2634:
case 1066:
case 1398:
case 1924:
case 585:
case 420:
case 2999:
case 3810:
case 1858:
case 3647:
case 2379:
case 1255:
case 1965:
case 4016:
case 1352:
case 329:
case 1737:
case 344:
case 3890:
case 3722:
case 2824:
case 534:
case 1675:
case 3800:
case 2856:
case 733:
case 1780:
case 2782:
case 2708:
case 3363:
case 360:
case 3194:
case 3392:
case 2881:
case 2727:
case 2492:
case 18:
case 2386:
case 2742:
case 1091:
case 142:
case 3069:
case 167:
case 3892:
case 1579:
case 2671:
case 654:
case 2631:
case 3981:
case 2643:
case 1185:
case 2139:
case 3741:
case 3973:
case 1058:
case 2171:
case 3745:
case 973:
case 3424:
case 2644:
case 2180:
case 2994:
case 3057:
case 289:
case 2885:
case 2508:
case 2122:
case 3457:
case 2833:
case 3598:
case 150:
case 2863:
case 1417:
case 159:
case 2345:
case 914:
case 3855:
case 1073:
case 4087:
case 49:
case 4034:
case 2753:
case 165:
case 529:
case 1605:
case 137:
case 2434:
case 1525:
case 1869:
case 949:
case 2230:
case 3920:
case 3199:
case 3:
case 572:
case 1504:
case 1661:
case 2689:
case 3400:
case 276:
case 2541:
case 387:
case 1875:
case 535:
case 327:
case 765:
case 3255:
case 3508:
case 1121:
case 2841:
case 1203:
case 1692:
case 1317:
case 429:
case 1868:
case 3635:
case 670:
case 16:
case 2248:
case 3321:
case 1581:
case 1559:
case 3984:
case 437:
case 3497:
case 1943:
case 2907:
case 3851:
case 2707:
case 2391:
case 3674:
case 3079:
case 3029:
case 1813:
case 399:
case 2924:
case 2281:
case 68:
case 203:
case 2572:
case 1138:
case 1033:
case 792:
case 801:
case 2284:
case 3732:
case 1139:
case 3143:
case 1915:
case 2035:
case 1445:
case 783:
case 1688:
case 3676:
case 827:
case 1885:
case 3706:
case 2358:
case 477:
case 1551:
case 3749:
case 2223:
case 2214:
case 809:
case 1418:
case 3138:
case 237:
case 591:
case 3459:
case 869:
case 2726:
case 3241:
case 4070:
case 2394:
case 1264:
case 3372:
case 2944:
case 3060:
case 2636:
case 3640:
case 738:
case 1499:
case 3219:
case 1887:
case 95:
case 3371:
case 119:
case 2374:
case 2772:
case 1374:
case 3273:
case 2312:
case 1946:
case 3616:
case 2389:
case 2310:
case 2542:
case 258:
case 340:
case 3982:
case 3577:
case 3277:
case 1483:
case 1569:
case 238:
case 2455:
case 729:
case 2395:
case 2560:
case 381:
case 899:
case 463:
case 3320:
case 24:
case 2627:
case 389:
case 1553:
case 3520:
case 960:
case 1716:
case 3502:
case 1738:
case 701:
case 3211:
case 2403:
case 1536:
case 1666:
case 904:
case 2465:
case 1640:
case 562:
case 208:
case 1611:
case 1259:
case 1224:
case 3771:
case 528:
case 1399:
case 2239:
case 2875:
case 1303:
case 4069:
case 3253:
case 1235:
case 2993:
case 1704:
case 3101:
case 2606:
case 1425:
case 2592:
case 3925:
case 1140:
case 495:
case 3958:
case 2398:
case 2313:
case 3893:
case 206:
case 69:
case 677:
case 2895:
case 580:
case 1956:
case 1306:
case 2859:
case 3784:
case 2860:
case 3142:
case 3816:
case 2050:
case 1615:
case 3391:
case 1240:
case 1433:
case 2411:
case 149:
case 2767:
case 2079:
case 3590:
case 560:
case 2376:
case 2877:
case 2705:
case 3111:
case 3357:
case 902:
case 1467:
case 1874:
case 2752:
case 466:
case 3644:
case 1514:
case 2780:
case 2090:
case 597:
case 3531:
case 2874:
case 2646:
case 475:
case 2021:
case 509:
case 476:
case 1048:
case 1087:
case 2759:
case 2040:
case 1117:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1659520801/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,1,1,0,0,0,1,1,0,1,1,1,1,0,1,1,0,1,0,0,0,1,0,0,0,0,0,0,0,1,0,1,0,1,0,0,1,1,1,1,1,1,1,0,1,0,0,0,1,0,1,1,1,0,0,0,0,1,0,1,1,1,0,1,0,0,1,0,0,0,0,1,0,0,0,0,0,0,1,1,1,1,0,0,1,0,1,1,1,0,0,1,1,1,1,0,0,0,1,1,0,0,0,1,0,1,1,1,1,0,0,0,1,0,1,1,1,1,1,0,1,1,0,0,1,1,1,0,1,1,1,1,1,1,1,0,1,0,1,1,1,1,0,1,1,1,0,1,1,0,0,0,0,1,0,1,1,0,1,0,0,0,1,0,1,0,1,0,1,0,0,1,0,0,0,0,1,1,1,0,1,0,0,1,1,0,0,0,0,0,1,0,0,0,1,1,0,0,1,0,0,0,1,0,0,1,0,0,0,1,1,1,1,1,1,0,1,1,1,1,0,0,1,0,1,1,0,1,1,0,0,0,1,0,0,1,1,0,0,0,1,1,0,0,1,1,1,1,1,0,1,0,0,0,0,1,0,0,0,0,0,1,0,1,1,0,0,1,1,1,0,0,0,1,0,1,0,0,0,0,0,0,0,1,0,1,0,1,0,0,1,1,0,0,1,0,1,0,0,1,1,0,1,0,1,1,0,1,1,0,0,0,1,0,0,1,0,0,0,1,1,0,1,0,1,1,1,0,0,0,1,0,0,1,1,1,1,1,1,1,0,0,0,1,0,1,1,1,1,1,0,1,1,0,1,1,0,0,0,1,0,1,1,0,1,1,1,0,1,1,0,0,0,0,0,0,1,0,0,1,1,0,1,0,1,1,1,0,1,0,1,1,1,0,0,1,0,0,0,0,1,1,1,1,1,1,0,0,1,1,0,1,1,0,0,1,1,0,1,0,0,1,1,1,1,1,1,0,0,0,1,0,1,0,0,0,1,0,1,0,1,1,1,1,1,0,0,0,1,1,0,1,0,0,1,1,1,0,0,1,1,1,1,0,0,0,0,1,0,1,1,1,0,1,1,0,0,0,1,1,0,1,1,1,0,1,0,1,1,0,1,1,0,0,0,0,0,1,0,1,1,0,1,0,0,0,0,1,1,0,1,0,0,0,0,0,1,0,1,1,0,1,1,1,0,0,0,0,0,0,1,0,0,1,0,0,1,1,1,0,0,0,0,1,0,0,1,1,1,0,1,0,0,1,1,0,1,0,1,1,0,1,0,0,0,0,1,1,0,0,1,0,0,0,0,0,0,1,0,1,0,0,0,1,1,0,1,0,1,0,0,0,1,1,0,1,1,0,0,1,0,0,1,0,1,0,0,0,0,1,0,1,1,0,1,1,1,0,0,0,1,0,0,1,0,1,0,0,0,0,0,1,0,1,0,0,0,1,1,0,0,1,0,0,1,1,1,0,0,1,0,0,1,1,0,0,0,1,1,1,1,0,1,0,0,0,1,0,1,0,0,0,1,0,1,1,1,0,0,1,1,1,0,1,1,0,1,0,1,0,1,0,1,1,1,1,1,1,1,1,0,0,1,0,0,0,0,0,0,0,0,1,0,1,1,1,1,1,1,0,1,0,0,0,0,0,1,1,1,0,1,0,0,0,0,1,1,0,0,0,1,0,1,1,1,0,1,0,0,1,0,1,1,1,0,1,0,0,1,1,0,1,0,1,0,0,0,0,1,1,0,0,1,0,0,0,1,1,0,1,0,0,1,0,0,1,0,1,1,1,0,0,0,1,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,1,1,1,1,0,1,1,1,1,1,1,1,0,1,1,1,0,0,0,1,1,0,1,0,0,1,0,0,0,0,1,0,1,1,1,0,0,0,1,1,0,1,0,1,1,0,1,1,0,0,1,1,0,1,1,1,0,0,1,0,1,0,0,0,0,0,0,1,0,1,0,1,0,1,0,0,1,1,1,0,1,1,1,0,0,1,1,0,0,0,0,1,0,1,0,1,0,0,0,0,1,1,1,1,0,1,1,1,0,0,1,0,1,0,1,1,0,1,1,1,1,0,1,0,1,1,1,0,1,0,1,1,1,1,1,1,0,1,0,0,1,1,1,1,0,0,0,1,1,0,0,1,1,0,0,1,0,1,0,1,0,1,0,0,0,0,0,1,1,1,1,0,1,0,1,0,1,0,1,0,0,1,0,0,0,1,0,1,1,1,0,0,0,1,0,0,0,0,0,1,1,1,1,0,0,1,0,0,1,0,1,1,0,1,1,0,0,1,1,1,1,0,0,0,1,0,0,0,0,1,0,1,1,1,1,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,1,0,0,0,1,1,0,1,1,1,0,1,0,0,1,1,0,1,1,1,0,1,1,1,0,1,1,0,0,1,0,0,1,0,0,1,1,0,1,1,1,1,0,1,1,1,0,1,0,0,0,1,0,0,0,1,1,0,1,1,1,0,1,1,1,1,1,1,1,1,0,1,0,0,1,0,0,1,0,0,0,0,0,0,0,1,0,1,1,1,0,1,0,1,1,1,0,1,1,1,1,0,0,0,1,1,0,1,1,1,1,0,1,0,0,1,1,1,1,1,0,0,1,0,1,0,0,0,1,0,1,1,1,0,0,0,1,0,1,0,0,0,0,0,1,0,0,1,1,0,1,0,1,1,0,1,1,1,1,1,0,1,1,0,0,1,0,1,1,1,0,0,0,0,1,0,1,0,1,0,0,1,0,1,1,1,0,0,0,0,0,1,1,1,1,0,1,0,1,0,0,0,0,0,0,1,0,1,1,1,1,1,0,0,0,1,1,1,1,1,0,1,1,1,0,0,0,1,1,1,1,1,0,0,0,1,1,1,1,1,1,1,1,0,1,0,0,1,0,0,0,1,0,0,0,1,1,0,0,1,0,1,1,0,0,1,1,1,1,1,0,0,1,1,0,0,0,0,1,1,0,0,1,1,0,1,1,1,1,0,0,0,0,1,1,0,1,1,0,0,1,1,0,0,1,0,1,1,1,0,1,1,0,1,0,0,0,0,0,0,0,1,0,1,1,1,1,1,1,0,0,0,1,1,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,1,1,0,1,1,0,0,1,1,1,0,1,0,0,1,1,1,1,1,1,0,0,0,0,0,0,1,1,1,1,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,1,1,1,0,0,1,0,1,0,0,0,0,0,1,0,0,1,0,0,0,0,1,0,1,1,0,0,0,0,0,0,1,1,0,1,0,0,1,1,1,1,1,0,0,0,0,1,0,0,1,0,0,1,1,1,0,1,0,1,0,0,1,1,0,1,1,1,1,0,0,0,1,1,1,0,0,1,1,0,0,0,1,1,1,1,0,1,0,1,0,0,0,1,1,0,0,0,0,0,0,1,1,0,0,1,1,1,1,1,1,1,0,0,0,1,0,0,0,1,0,1,0,0,1,0,0,1,1,0,1,0,1,1,0,1,1,1,1,0,1,0,0,1,0,1,1,1,1,0,0,1,1,1,1,0,0,0,1,0,0,0,1,1,1,1,1,0,1,1,1,0,1,1,0,1,0,1,0,1,0,1,0,1,0,0,1,1,0,0,0,1,1,0,1,1,1,1,1,0,0,1,1,1,1,0,1,1,0,1,0,1,0,1,1,1,1,0,1,0,0,0,0,1,0,1,1,1,0,1,0,0,0,1,1,0,0,1,0,0,0,1,0,1,1,0,1,0,0,1,1,0,0,1,1,0,1,0,1,1,0,0,1,1,1,1,0,0,0,0,1,0,0,1,1,0,0,1,0,1,1,0,0,1,1,0,1,1,0,1,1,1,0,1,1,1,1,0,1,1,0,1,0,0,0,1,0,0,1,0,0,0,1,0,0,0,0,1,0,0,0,0,0,1,0,0,1,0,1,0,1,0,0,1,0,1,1,0,0,1,0,1,1,0,0,1,1,0,0,0,0,1,1,1,0,1,1,0,1,1,1,1,1,1,0,1,0,0,1,0,0,1,0,0,0,1,1,1,0,0,1,1,1,1,1,0,0,0,1,0,1,0,1,1,0,0,1,0,1,1,1,0,0,1,0,0,1,0,0,1,0,1,0,0,1,0,1,1,0,0,1,0,1,1,1,0,1,0,1,0,0,0,1,1,0,0,0,0,1,1,1,0,0,1,0,1,1,1,1,1,0,1,0,1,0,1,1,0,1,0,1,1,1,0,1,1,1,1,0,0,1,1,1,0,0,0,1,1,1,1,1,1,1,1,0,1,1,0,1,0,0,0,0,0,1,0,0,1,0,1,0,0,1,1,0,0,1,1,1,0,0,0,0,0,0,0,0,1,1,0,0,1,0,0,1,0,0,1,0,0,1,1,1,1,1,1,0,1,0,1,0,0,0,0,0,0,0,1,1,1,1,0,1,0,1,0,1,0,1,0,0,1,1,0,0,0,1,1,0,0,0,0,1,1,0,0,0,1,1,0,0,0,0,0,0,0,0,1,1,0,1,1,0,1,0,0,0,0,1,0,1,1,1,0,0,1,1,1,1,1,1,1,1,1,0,1,0,1,1,0,1,1,0,0,1,0,1,1,1,0,0,0,0,1,0,1,1,1,1,1,0,0,0,0,1,0,0,1,1,1,0,0,1,1,0,0,1,0,0,0,1,1,1,1,1,1,0,1,1,1,1,0,1,1,0,0,0,0,0,0,0,0,1,0,1,1,1,1,1,0,1,0,1,0,1,1,1,0,0,1,1,0,1,0,1,0,1,1,1,1,0,1,1,1,1,0,1,0,1,0,1,0,1,1,0,1,0,1,1,0,1,0,0,0,1,0,1,0,1,1,0,0,1,1,0,1,0,0,1,0,0,0,1,1,0,1,0,0,0,0,0,1,0,0,0,1,0,0,1,1,1,0,0,1,0,1,0,1,0,1,1,1,0,0,0,0,0,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,1,0,1,0,1,0,0,1,1,0,1,1,0,1,0,1,0,0,0,0,1,1,0,0,1,0,1,0,1,0,1,0,1,1,1,1,1,1,0,1,1,1,1,1,0,0,1,0,1,1,0,0,0,0,0,1,0,0,0,1,1,0,1,0,0,0,0,0,1,0,0,1,0,0,0,0,1,1,0,0,1,0,1,1,1,0,0,0,0,0,1,0,0,0,0,1,1,0,1,0,0,0,0,0,0,0,0,1,0,1,0,1,1,1,1,0,1,0,1,0,0,1,1,1,1,1,1,0,1,0,0,1,0,0,1,0,0,0,1,0,1,0,1,0,0,0,1,0,0,1,1,1,0,1,1,0,1,1,0,0,1,1,1,1,1,0,1,1,1,1,0,0,0,1,0,0,0,0,1,1,1,0,0,1,0,0,0,1,0,0,1,1,0,0,1,0,0,1,1,0,1,1,1,0,0,1,0,0,0,1,1,1,0,0,0,0,1,0,1,1,1,1,1,0,0,1,0,0,1,0,1,1,1,0,1,1,0,1,1,1,1,1,0,0,1,1,1,1,1,0,1,1,1,1,0,0,0,1,0,0,0,0,0,1,1,0,1,0,0,1,0,1,0,1,1,0,0,1,1,0,0,1,0,0,1,1,1,0,1,0,0,0,0,0,1,0,0,1,1,1,0,0,1,1,0,1,1,1,1,0,1,1,0,0,0,0,1,1,1,0,0,0,0,0,0,1,1,0,0,1,0,1,1,0,1,1,1,0,1,1,1,0,1,0,0,0,1,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,0,1,0,1,0,1,1,0,0,1,0,0,1,0,0,1,1,1,1,1,0,0,0,0,0,0,1,0,1,0,0,1,0,1,0,1,0,0,0,0,0,0,1,0,1,0,0,0,0,1,0,0,1,0,0,0,1,0,1,1,0,1,0,0,1,1,0,1,1,1,0,1,0,0,1,0,1,0,1,0,1,1,0,0,0,0,0,1,1,1,0,1,0,0,0,1,0,1,1,0,1,1,0,0,0,1,1,1,1,0,1,0,1,0,1,1,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,1,1,1,1,1,1,0,0,1,0,0,0,1,0,1,1,0,1,1,1,0,0,0,1,0,1,1,0,0,1,1,0,0,1,1,0,0,0,1,0,0,0,0,1,1,0,1,1,1,0,0,0,1,1,1,0,0,1,0,0,0,1,0,0,0,0,0,0,0,1,1,1,0,1,0,0,1,1,0,0,0,1,1,0,1,0,0,0,1,0,0,1,0,0,0,0,1,1,1,1,0,0,0,0,0,1,0,1,0,1,1,0,0,1,0,0,0,1,0,0,1,1,0,1,0,1,0,1,1,1,1,0,1,1,0,1,0,1,1,1,1,1,1,0,1,1,1,1,1,0,0,0,0,0,1,0,1,1,1,0,1,1,0,1,1,1,1,1,0,0,0,0,1,1,0,1,1,0,1,0,1,0,1,1,1,1,0,1,0,1,0,0,1,1,1,1,1,1,1,0,0,1,0,0,0,0,1,0,1,0,1,0,1,0,1,1,0,0,0,1,0,0,1,1,0,1,0,1,1,1,1,0,1,0,1,0,1,1,1,1,0,1,1,0,1,0,1,0,0,0,1,1,1,0,0,1,0,1,0,0,0,1,1,0,1,1,0,1,1,1,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,1,1,0,0,0,1,0,0,1,1,1,0,0,0,0,0,1,0,0,1,0,0,0,1,0,1,1,0,1,0,1,0,1,0,1,0,0,1,1,0,0,0,1,0,1,0,0,0,0,0,1,1,0,0,0,1,1,1,0,1,0,1,1,0,1,0,0,0,1,0,1,1,1,1,0,0,0,1,1,0,0,0,1,1,0,0,0,1,1,0,1,0,1,0,0,1,1,1,0,1,1,1,0,0,0,1,1,1,1,1,0,1,1,1,0,0,0,0,1,1,1,1,0,1,0,1,0,0,0,0,0,0,0,1,0,1,0,1,0,0,0,0,0,1,1,1,1,0,1,0,0,0,0,0,1,1,1,1,0,0,1,0,0,1,1,1,0,0,0,0,0,1,0,0,0,0,1,1,1,0,0,0,0,0,1,0,1,1,1,0,0,0,1,0,0,0,0,0,0,1,0,1,1,1,1,0,0,1,1,0,1,0,0,1,1,0,0,0,1,0,0,0,1,0,1,1,0,0,1,1,1,0,0,1,1,1,0,0,0,1,1,1,0,0,0,1,0,0,0,1,1,1,1,0,1,0,0,1,1,1,1,1,0,0,0,0,0,0,1,0,1,1,0,0,1,0,1,0,0,0,1,1,1,1,0,1,0,1,0,1,0,0,1,0,1,0,0,1,0,0,1,0,1,1,0,0,1,0,1,1,0,1,1,0,0,0,0,1,1,0,0,1,0,0,0,1,1,1,0,0,1,0,0,0,0,1,0,1,0,1,1,1,0,1,0,0,0,1,0,1,0,1,0,1,1,0,0,1,0,1,0,1,0,0,1,1,0,1,0,0,0,0,0,0,1,0,1,0,1,0,1,0,1,1,0,1,0,1,0,0,0,0,0,1,0,1,1,1,1,0,0,0,0,0,0,1,1,0,0,1,1,0,1,0,1,1,1,1,0,1,1,0,1,0,1,0,1,0,1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,0,1,0,1,1,0,0,0,1,1,0,1,0,1,0,1,0,1,0,0,0,0,0,1,1,1,1,1,1,0,0,1,0,1,1,1,1,0,1,1,0,0,0,1,0,0,0,0,0,1,0,0,0,1,1,1,0,1,1,0,0,0,1,0,1,1,0,1,0,0,1,1,0,1,0,0,1,1,0,0,1,0,0,1,0,1,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,1,0,1,1,0,1,1,0,1,0,0,0,0,0,1,0,0,1,0,1,0,1,0,1,1,1,0,0,0,0,1,0,0,1,0,0,1,1,0,0,0,0,1,0,1,0,0,1,1,0,1,1,0,0,1,0,0,0,1,0,1,1,0,1,1,0,1,0,1,1,0,0,1,0,0,0,1,1,0,1,1,1,0,0,1,0,0,0,1,0,1,1,0,1,1,1,0,0,0,0,0,1,1,0,1,0,0,1,0,1,1,1,1,0,1,1,0,0,0,1,1,0,0,0,0,1,1,1,0,1,1,1,0,1,1,0,0,0,1,0,0,1,0,1,1,1,1,0,1,0,0,1,0,1,1,0,1,0,0,1,0,1,0,0,1,1,0,1,0,1,0,0,1,1,0,0,0,1,0,0,0,0,0,0,1,0,1,0,1,0,0,0,1,1,0,0,0,1,1,1,0,0,0,0,1,1,0,0,1,1,1,1,1,1,1,0,0,0,1,1,1,1,0,0,0,0,0,1,1,0,1,0,1,0,0,1,1,1,0,1,0,0,0,1,1,0,0,0,0,0,1,0,0,1,1,1,0,0,1,0,1,0,1,0,0,0,0,1,1,0,1,0,0,0,0,1,0,1,0,0,1,0,0,0,0,0,1,0,1,0,1,0,1,1,1,1,0,0,1,0,1,0,1,0,0,0,1,0,1,0,1,0,0,0,0,1,0,1,1,0,1,0,0,0,0,1,1,0,0,1,0,0,0,0,0,0,0,1,0,0,1,1,0,0,1,1,1,0,1,0,0,1,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,1,1,0,0,1,0,0,1,0,0,1,1,1,0,0,1,1,0,1,0,1,1,0,1,0,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,0,0,0,0,1,1,1,0,0,1,0,1,0,1,0,0,0,1,0,1,0,1,1,1,1,1,1,1,0,1,1,0,0,1,1,1,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0,1,0,0,1,1,0,1,1,1,0,1,1,1,1,0,1,1,0,0,0,0,1,1,0,0,1,1,1,];
var gg_b = "1659520801/";

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
