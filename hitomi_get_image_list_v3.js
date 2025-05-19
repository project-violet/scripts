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
case 1104:
case 502:
case 3375:
case 760:
case 3761:
case 2324:
case 2970:
case 1249:
case 2251:
case 215:
case 444:
case 3671:
case 3873:
case 3040:
case 3794:
case 394:
case 2500:
case 3595:
case 3143:
case 2525:
case 4046:
case 3775:
case 2206:
case 2476:
case 2672:
case 2724:
case 2762:
case 1241:
case 114:
case 2380:
case 1327:
case 3394:
case 3665:
case 2107:
case 2920:
case 3823:
case 3692:
case 3510:
case 202:
case 1917:
case 2137:
case 1190:
case 182:
case 3325:
case 2699:
case 2236:
case 3866:
case 3934:
case 2374:
case 3300:
case 2664:
case 2395:
case 669:
case 1093:
case 1377:
case 2530:
case 3187:
case 3216:
case 2569:
case 309:
case 2914:
case 2575:
case 763:
case 1:
case 2905:
case 2426:
case 2622:
case 2774:
case 2984:
case 1384:
case 2646:
case 2003:
case 1305:
case 928:
case 3543:
case 2125:
case 380:
case 588:
case 2717:
case 2507:
case 2787:
case 581:
case 3449:
case 154:
case 1995:
case 1803:
case 2628:
case 3857:
case 1784:
case 1974:
case 1515:
case 1705:
case 1656:
case 476:
case 1585:
case 1504:
case 2317:
case 3195:
case 2100:
case 856:
case 3737:
case 1320:
case 1609:
case 4064:
case 3587:
case 3162:
case 1910:
case 1855:
case 1770:
case 3258:
case 1980:
case 101:
case 1639:
case 1660:
case 281:
case 2743:
case 2055:
case 2169:
case 4091:
case 4022:
case 288:
case 3013:
case 1534:
case 616:
case 2194:
case 2537:
case 3180:
case 375:
case 462:
case 3110:
case 2845:
case 1631:
case 1833:
case 3997:
case 1682:
case 555:
case 1753:
case 2343:
case 1590:
case 2161:
case 226:
case 2431:
case 2966:
case 2834:
case 749:
case 1357:
case 2747:
case 2229:
case 151:
case 584:
case 1193:
case 170:
case 2555:
case 2754:
case 643:
case 2482:
case 2923:
case 3291:
case 3703:
case 3884:
case 3481:
case 2347:
case 2890:
case 212:
case 89:
case 3411:
case 2533:
case 505:
case 1744:
case 517:
case 1837:
case 3299:
case 3432:
case 2460:
case 3636:
case 3554:
case 2713:
case 2456:
case 2783:
case 3333:
case 3870:
case 2409:
case 2007:
case 1238:
case 1940:
case 3547:
case 24:
case 185:
case 2313:
case 512:
case 1446:
case 627:
case 3355:
case 2804:
case 3651:
case 3853:
case 2950:
case 2271:
case 2815:
case 173:
case 806:
case 398:
case 377:
case 441:
case 448:
case 1648:
case 2740:
case 391:
case 1289:
case 252:
case 1861:
case 557:
case 1626:
case 840:
case 1145:
case 2133:
case 366:
case 111:
case 579:
case 2030:
case 3062:
case 2658:
case 1875:
case 118:
case 2340:
case 1281:
case 3278:
case 2075:
case 3945:
case 960:
case 2467:
case 2069:
case 4016:
case 1097:
case 3024:
case 3183:
case 1472:
case 1723:
case 2298:
case 552:
case 1954:
case 3877:
case 1202:
case 239:
case 290:
case 3095:
case 465:
case 1766:
case 257:
case 3246:
case 1323:
case 2944:
case 3074:
case 4052:
case 279:
case 2103:
case 1825:
case 2488:
case 1922:
case 1605:
case 1991:
case 3798:
case 2036:
case 857:
case 1413:
case 1614:
case 890:
case 540:
case 612:
case 718:
case 839:
case 2192:
case 4080:
case 1589:
case 222:
case 3637:
case 341:
case 1519:
case 477:
case 1709:
case 2746:
case 1356:
case 3122:
case 4024:
case 459:
case 17:
case 3016:
case 914:
case 879:
case 4062:
case 3578:
case 3164:
case 1511:
case 1293:
case 2728:
case 1309:
case 240:
case 227:
case 2171:
case 64:
case 1049:
case 1447:
case 982:
case 2378:
case 3938:
case 1782:
case 1972:
case 1851:
case 1653:
case 605:
case 1502:
case 1138:
case 2918:
case 9:
case 1041:
case 2059:
case 1806:
case 684:
case 2457:
case 2988:
case 1739:
case 2778:
case 3052:
case 1382:
case 1635:
case 2643:
case 2006:
case 1859:
case 1312:
case 893:
case 2912:
case 1132:
case 419:
case 3283:
case 730:
case 3675:
case 2896:
case 2255:
case 2772:
case 2624:
case 2662:
case 4017:
case 799:
case 1388:
case 1111:
case 121:
case 2466:
case 3779:
case 2931:
case 3919:
case 4087:
case 805:
case 652:
case 149:
case 758:
case 3599:
case 206:
case 2233:
case 3848:
case 3932:
case 2960:
case 2372:
case 3826:
case 3981:
case 1978:
case 1119:
case 3365:
case 1718:
case 3321:
case 3729:
case 1440:
case 3392:
case 3247:
case 2565:
case 4043:
case 2203:
case 2956:
case 1367:
case 908:
case 2473:
case 2364:
case 3876:
case 1928:
case 2695:
case 639:
case 2450:
case 1677:
case 2571:
case 29:
case 2198:
case 657:
case 1102:
case 1946:
case 704:
case 1767:
case 812:
case 4047:
case 1141:
case 124:
case 569:
case 3949:
case 2758:
case 2207:
case 1495:
case 1363:
case 2065:
case 3243:
case 1326:
case 3268:
case 951:
case 2942:
case 4054:
case 3152:
case 958:
case 336:
case 826:
case 3941:
case 76:
case 2358:
case 999:
case 1763:
case 1871:
case 1673:
case 1726:
case 1204:
case 376:
case 754:
case 933:
case 3116:
case 1376:
case 4013:
case 3022:
case 1234:
case 3186:
case 269:
case 3558:
case 2029:
case 435:
case 3099:
case 708:
case 3497:
case 602:
case 855:
case 1986:
case 973:
case 483:
case 2136:
case 525:
case 362:
case 3867:
case 1008:
case 475:
case 1666:
case 2092:
case 2802:
case 2470:
case 1657:
case 3856:
case 4040:
case 1549:
case 714:
case 2316:
case 1644:
case 1002:
case 3809:
case 1468:
case 3736:
case 2647:
case 787:
case 3028:
case 1541:
case 2559:
case 38:
case 2716:
case 2453:
case 2654:
case 3485:
case 3603:
case 2786:
case 911:
case 3336:
case 807:
case 2536:
case 2261:
case 2352:
case 3831:
case 2294:
case 2420:
case 3359:
case 3996:
case 2752:
case 409:
case 1032:
case 1297:
case 2484:
case 2275:
case 2926:
case 3706:
case 2832:
case 782:
case 3078:
case 688:
case 1011:
case 681:
case 3158:
case 3435:
case 3098:
case 1277:
case 3200:
case 1407:
case 3551:
case 244:
case 415:
case 3716:
case 3453:
case 1828:
case 2801:
case 2046:
case 2603:
case 3786:
case 3976:
case 680:
case 2028:
case 1846:
case 3294:
case 2882:
case 1227:
case 3420:
case 402:
case 746:
case 2751:
case 1749:
case 683:
case 2210:
case 1148:
case 894:
case 1012:
case 3536:
case 1126:
case 544:
case 316:
case 3352:
case 3889:
case 789:
case 2434:
case 2831:
case 2306:
case 675:
case 3963:
case 1349:
case 3948:
case 2351:
case 2759:
case 2262:
case 1741:
case 1437:
case 1039:
case 2586:
case 196:
case 910:
case 2490:
case 2516:
case 2224:
case 3683:
case 1878:
case 3484:
case 2839:
case 3926:
case 1235:
case 3838:
case 2243:
case 2072:
case 3106:
case 835:
case 2152:
case 3159:
case 1796:
case 2949:
case 3065:
case 2888:
case 875:
case 276:
case 562:
case 953:
case 455:
case 1018:
case 267:
case 325:
case 3071:
case 536:
case 880:
case 2217:
case 1220:
case 2064:
case 1891:
case 1693:
case 609:
case 2287:
case 1822:
case 1461:
case 1936:
case 2116:
case 488:
case 369:
case 4055:
case 481:
case 262:
case 1563:
case 1548:
case 2867:
case 3021:
case 3237:
case 1430:
case 2099:
case 3808:
case 2497:
case 426:
case 356:
case 938:
case 774:
case 1067:
case 3136:
case 1214:
case 567:
case 1526:
case 4033:
case 2371:
case 3931:
case 2765:
case 2178:
case 659:
case 2522:
case 2213:
case 1160:
case 2591:
case 3423:
case 3982:
case 1048:
case 2826:
case 2981:
case 2771:
case 2493:
case 1063:
case 666:
case 1131:
case 3592:
case 2911:
case 3521:
case 1567:
case 306:
case 698:
case 3960:
case 2146:
case 1998:
case 3791:
case 3956:
case 2625:
case 11:
case 2254:
case 2902:
case 3722:
case 3674:
case 1308:
case 3909:
case 2392:
case 819:
case 2247:
case 120:
case 1101:
case 2128:
case 3579:
case 39:
case 750:
case 934:
case 3799:
case 903:
case 1076:
case 2876:
case 2600:
case 2329:
case 3901:
case 3450:
case 1518:
case 1257:
case 1109:
case 1588:
case 3192:
case 248:
case 3121:
case 4094:
case 452:
case 241:
case 1266:
case 3328:
case 1929:
case 1455:
case 1223:
case 3346:
case 3036:
case 1690:
case 2199:
case 1539:
case 343:
case 3129:
case 2164:
case 493:
case 1921:
case 2908:
case 1433:
case 1634:
case 995:
case 3967:
case 2122:
case 832:
case 713:
case 229:
case 1042:
case 1403:
case 1685:
case 3849:
case 898:
case 877:
case 4000:
case 1311:
case 3171:
case 327:
case 1719:
case 1979:
case 2240:
case 1381:
case 2938:
case 2052:
case 1732:
case 3643:
case 3006:
case 3444:
case 3841:
case 4025:
case 3165:
case 1501:
case 3918:
case 2607:
case 3059:
case 859:
case 3778:
case 946:
case 1880:
case 1282:
case 1810:
case 3133:
case 1212:
case 266:
case 298:
case 1566:
case 277:
case 3740:
case 113:
case 1231:
case 3094:
case 1429:
case 352:
case 422:
case 2945:
case 3069:
case 259:
case 3155:
case 2183:
case 532:
case 393:
case 443:
case 3658:
case 1492:
case 1239:
case 2408:
case 3897:
case 1421:
case 566:
case 1157:
case 2540:
case 4051:
case 440:
case 1393:
case 2438:
case 1479:
case 1903:
case 1895:
case 3298:
case 841:
case 2877:
case 848:
case 1573:
case 1144:
case 829:
case 1550:
case 4059:
case 559:
case 110:
case 1793:
case 2228:
case 3488:
case 1874:
case 2246:
case 968:
case 12:
case 961:
case 3103:
case 537:
case 3555:
case 2513:
case 2222:
case 1887:
case 3923:
case 2703:
case 2291:
case 219:
case 3431:
case 2087:
case 3747:
case 2264:
case 2017:
case 2419:
case 3533:
case 1123:
case 406:
case 2303:
case 2299:
case 1005:
case 3460:
case 3292:
case 2884:
case 3890:
case 3221:
case 312:
case 150:
case 3409:
case 3007:
case 519:
case 1868:
case 2659:
case 171:
case 178:
case 2554:
case 384:
case 3713:
case 3456:
case 2272:
case 3783:
case 2402:
case 1345:
case 1288:
case 317:
case 3271:
case 138:
case 2140:
case 305:
case 1557:
case 34:
case 1544:
case 1173:
case 3313:
case 49:
case 747:
case 720:
case 2355:
case 1745:
case 4065:
case 2337:
case 2449:
case 3003:
case 3442:
case 1390:
case 1535:
case 535:
case 2543:
case 2568:
case 280:
case 583:
case 4071:
case 1177:
case 2195:
case 3100:
case 425:
case 2737:
case 1057:
case 1459:
case 1406:
case 1044:
case 1334:
case 1602:
case 1925:
case 2698:
case 923:
case 575:
case 1553:
case 469:
case 3768:
case 1961:
case 1385:
case 2083:
case 1315:
case 2013:
case 580:
case 836:
case 2587:
case 2162:
case 174:
case 3927:
case 2258:
case 3678:
case 3368:
case 2997:
case 3033:
case 1514:
case 1975:
case 1785:
case 1226:
case 1505:
case 3161:
case 326:
case 867:
case 3537:
case 103:
case 134:
case 275:
case 2307:
case 1263:
case 3845:
case 2110:
case 3780:
case 70:
case 2873:
case 2794:
case 1907:
case 676:
case 307:
case 1577:
case 2595:
case 2375:
case 667:
case 1073:
case 1840:
case 3935:
case 2761:
case 1242:
case 745:
case 1397:
case 3259:
case 3762:
case 1050:
case 2679:
case 2394:
case 195:
case 3107:
case 2143:
case 2574:
case 2915:
case 3525:
case 2985:
case 2775:
case 2850:
case 3206:
case 2252:
case 3476:
case 2769:
case 1797:
case 3561:
case 1184:
case 594:
case 2325:
case 662:
case 1023:
case 3699:
case 3236:
case 2934:
case 3920:
case 1608:
case 3795:
case 2621:
case 2823:
case 2692:
case 2496:
case 2510:
case 796:
case 302:
case 1527:
case 2580:
case 3137:
case 2524:
case 3914:
case 88:
case 3575:
case 964:
case 3905:
case 2990:
case 3426:
case 3622:
case 3774:
case 3984:
case 2300:
case 1937:
case 2117:
case 3448:
case 189:
case 1120:
case 2187:
case 1780:
case 1251:
case 2688:
case 2727:
case 1710:
case 4009:
case 3153:
case 2968:
case 214:
case 1762:
case 3638:
case 3050:
case 395:
case 1310:
case 4001:
case 1525:
case 1206:
case 1672:
case 1724:
case 1561:
case 3105:
case 1699:
case 1236:
case 3114:
case 1374:
case 1920:
case 3608:
case 1795:
case 2987:
case 3066:
case 2458:
case 102:
case 3527:
case 1137:
case 1569:
case 4060:
case 2597:
case 1914:
case 2134:
case 1575:
case 1905:
case 2:
case 1426:
case 1622:
case 1774:
case 1664:
case 2377:
case 468:
case 4039:
case 1530:
case 3570:
case 1507:
case 254:
case 3451:
case 3854:
case 3900:
case 2803:
case 1628:
case 501:
case 2384:
case 1003:
case 1646:
case 660:
case 1442:
case 3390:
case 2314:
case 1125:
case 4088:
case 1317:
case 1100:
case 4018:
case 2609:
case 3406:
case 2656:
case 3925:
case 2452:
case 3553:
case 1768:
case 3961:
case 3436:
case 3304:
case 2735:
case 181:
case 1743:
case 1055:
case 2353:
case 2197:
case 824:
case 3315:
case 3520:
case 3813:
case 1130:
case 1927:
case 3994:
case 2296:
case 2770:
case 201:
case 2639:
case 1678:
case 3681:
case 1368:
case 3704:
case 1033:
case 3514:
case 2335:
case 2045:
case 2753:
case 4067:
case 2612:
case 2416:
case 2590:
case 126:
case 3127:
case 1537:
case 3263:
case 2962:
case 1845:
case 3248:
case 2370:
case 769:
case 504:
case 533:
case 1616:
case 1412:
case 1754:
case 1482:
case 1966:
case 1834:
case 706:
case 67:
case 1229:
case 392:
case 1533:
case 2545:
case 3123:
case 2744:
case 3084:
case 925:
case 3005:
case 2090:
case 1439:
case 353:
case 1347:
case 63:
case 1890:
case 2208:
case 112:
case 3166:
case 585:
case 230:
case 1409:
case 1265:
case 447:
case 3070:
case 3843:
case 79:
case 3641:
case 2238:
case 1279:
case 371:
case 3150:
case 204:
case 1503:
case 570:
case 828:
case 184:
case 1456:
case 1973:
case 3035:
case 1804:
case 1815:
case 105:
case 849:
case 3557:
case 530:
case 285:
case 1313:
case 2085:
case 3053:
case 3745:
case 2422:
case 2626:
case 1061:
case 3282:
case 2894:
case 2491:
case 3810:
case 1133:
case 2219:
case 3231:
case 1094:
case 2464:
case 628:
case 1075:
case 722:
case 3862:
case 2830:
case 2232:
case 621:
case 193:
case 2211:
case 1030:
case 1658:
case 3492:
case 1340:
case 218:
case 3421:
case 3824:
case 2869:
case 190:
case 83:
case 3209:
case 3393:
case 3077:
case 3479:
case 2766:
case 2947:
case 3903:
case 2472:
case 3895:
case 2723:
case 2954:
case 2202:
case 139:
case 3573:
case 1418:
case 2825:
case 3793:
case 310:
case 1488:
case 3471:
case 1957:
case 1025:
case 1944:
case 179:
case 1103:
case 511:
case 413:
case 2589:
case 1121:
case 4027:
case 2519:
case 3266:
case 3929:
case 2709:
case 2684:
case 2483:
case 3512:
case 2605:
case 630:
case 1036:
case 2413:
case 3167:
case 23:
case 915:
case 1617:
case 1129:
case 1687:
case 2511:
case 2620:
case 3886:
case 2701:
case 3921:
case 1728:
case 2309:
case 651:
case 3433:
case 658:
case 3560:
case 3042:
case 3685:
case 2851:
case 2454:
case 2653:
case 1598:
case 53:
case 3509:
case 140:
case 3311:
case 1171:
case 3188:
case 3719:
case 3965:
case 1051:
case 2447:
case 1378:
case 3381:
case 3789:
case 3118:
case 2339:
case 35:
case 2760:
case 42:
case 3732:
case 2635:
case 1444:
case 2859:
case 1165:
case 57:
case 2138:
case 2041:
case 2806:
case 2670:
case 1457:
case 2739:
case 2331:
case 2096:
case 221:
case 1931:
case 492:
case 2318:
case 3139:
case 228:
case 2181:
case 342:
case 1529:
case 3160:
case 1912:
case 2132:
case 833:
case 611:
case 3858:
case 1255:
case 1896:
case 1982:
case 3697:
case 3048:
case 3338:
case 2119:
case 2627:
case 3063:
case 1592:
case 1610:
case 286:
case 1521:
case 4084:
case 955:
case 249:
case 4005:
case 3567:
case 1233:
case 3026:
case 2245:
case 1372:
case 717:
case 870:
case 521:
case 1674:
case 1764:
case 988:
case 3308:
case 1909:
case 2440:
case 497:
case 1565:
case 450:
case 2538:
case 347:
case 2102:
case 2946:
case 1799:
case 3244:
case 1322:
case 1450:
case 926:
case 2677:
case 438:
case 3257:
case 3235:
case 1838:
case 2326:
case 2865:
case 1942:
case 1106:
case 755:
case 1159:
case 3796:
case 2348:
case 2650:
case 1207:
case 2363:
case 400:
case 1065:
case 2673:
case 3253:
case 2952:
case 2215:
case 3142:
case 3018:
case 4057:
case 1151:
case 3959:
case 2748:
case 1640:
case 3088:
case 1071:
case 687:
case 2763:
case 2596:
case 2410:
case 3220:
case 3494:
case 3891:
case 1029:
case 3693:
case 984:
case 1427:
case 3822:
case 2480:
case 854:
case 3864:
case 2234:
case 169:
case 781:
case 3548:
case 788:
case 1237:
case 1092:
case 403:
case 2821:
case 2424:
case 2623:
case 2290:
case 2776:
case 156:
case 3469:
case 3067:
case 3284:
case 917:
case 2916:
case 3214:
case 3526:
case 2644:
case 2443:
case 1435:
case 2468:
case 1386:
case 3277:
case 1470:
case 2657:
case 1200:
case 3407:
case 3009:
case 2549:
case 1716:
case 715:
case 1654:
case 707:
case 993:
case 495:
case 1647:
case 66:
case 3846:
case 1559:
case 345:
case 2541:
case 1294:
case 3227:
case 3749:
case 939:
case 2487:
case 887:
case 263:
case 2417:
case 3148:
case 3012:
case 116:
case 1261:
case 3082:
case 1889:
case 3645:
case 3349:
case 1948:
case 1230:
case 3741:
case 3437:
case 3039:
case 361:
case 2011:
case 368:
case 396:
case 1414:
case 601:
case 1269:
case 2342:
case 3060:
case 1484:
case 1881:
case 702:
case 608:
case 1926:
case 2277:
case 3657:
case 3898:
case 2009:
case 1856:
case 2176:
case 3644:
case 487:
case 2056:
case 3468:
case 977:
case 998:
case 2846:
case 3541:
case 846:
case 596:
case 1415:
case 568:
case 20:
case 1274:
case 1485:
case 600:
case 1603:
case 2012:
case 2126:
case 3742:
case 1633:
case 1306:
case 972:
case 2227:
case 1359:
case 2749:
case 1996:
case 2031:
case 3019:
case 3417:
case 1210:
case 2148:
case 895:
case 4:
case 296:
case 1490:
case 3342:
case 3032:
case 2878:
case 1839:
case 674:
case 1860:
case 2349:
case 1262:
case 3081:
case 2039:
case 261:
case 3011:
case 3196:
case 3141:
case 324:
case 2270:
case 2872:
case 3495:
case 2400:
case 3879:
case 2235:
case 1243:
case 695:
case 3326:
case 3865:
case 1072:
case 136:
case 167:
case 2959:
case 2088:
case 3726:
case 3952:
case 3204:
case 2425:
case 2576:
case 803:
case 3829:
case 689:
case 2936:
case 2461:
case 2864:
case 1116:
case 3376:
case 1022:
case 1186:
case 800:
case 3596:
case 401:
case 1558:
case 1217:
case 1064:
case 2891:
case 783:
case 2205:
case 3290:
case 3776:
case 3892:
case 2214:
case 4045:
case 2526:
case 162:
case 1867:
case 2899:
case 2430:
case 3462:
case 4034:
case 897:
case 878:
case 1283:
case 2858:
case 850:
case 1669:
case 2697:
case 451:
case 980:
case 3096:
case 3388:
case 3111:
case 321:
case 1779:
case 470:
case 1919:
case 2139:
case 1178:
case 458:
case 1564:
case 242:
case 4090:
case 838:
case 3245:
case 2026:
case 1932:
case 2112:
case 2048:
case 1981:
case 1379:
case 1771:
case 3788:
case 1694:
case 1365:
case 223:
case 2131:
case 3189:
case 3718:
case 386:
case 3508:
case 62:
case 1321:
case 2308:
case 1729:
case 1392:
case 1247:
case 2101:
case 3538:
case 1146:
case 610:
case 935:
case 1876:
case 1600:
case 3928:
case 1792:
case 2518:
case 3677:
case 2257:
case 473:
case 2109:
case 3102:
case 4085:
case 975:
case 853:
case 3767:
case 2076:
case 2244:
case 3684:
case 3483:
case 2702:
case 2512:
case 3991:
case 3756:
case 994:
case 2690:
case 3614:
case 33:
case 759:
case 148:
case 3589:
case 3519:
case 2266:
case 3964:
case 3836:
case 3301:
case 1445:
case 2302:
case 2433:
case 2634:
case 798:
case 3999:
case 1398:
case 777:
case 692:
case 1086:
case 37:
case 3532:
case 3581:
case 1578:
case 411:
case 766:
case 3620:
case 3701:
case 2311:
case 2188:
case 2965:
case 1842:
case 3447:
case 3731:
case 2381:
case 1240:
case 3339:
case 2403:
case 3972:
case 2604:
case 3851:
case 3454:
case 2556:
case 3712:
case 3502:
case 631:
case 1528:
case 264:
case 1607:
case 2852:
case 3806:
case 3670:
case 2389:
case 2781:
case 678:
case 772:
case 3859:
case 3289:
case 2027:
case 3663:
case 3464:
case 3861:
case 623:
case 3983:
case 2955:
case 1827:
case 43:
case 2282:
case 3491:
case 3894:
case 2810:
case 3145:
case 3913:
case 2212:
case 166:
case 137:
case 3211:
case 52:
case 1062:
case 2696:
case 2492:
case 3875:
case 3281:
case 1408:
case 2421:
case 3869:
case 1113:
case 3830:
case 3499:
case 159:
case 3232:
case 2260:
case 864:
case 741:
case 2256:
case 2895:
case 2903:
case 3800:
case 3676:
case 3954:
case 513:
case 1877:
case 3202:
case 1540:
case 2465:
case 2209:
case 1095:
case 3766:
case 2479:
case 765:
case 1154:
case 132:
case 1147:
case 210:
case 2201:
case 1228:
case 2874:
case 2471:
case 81:
case 428:
case 2020:
case 292:
case 1583:
case 820:
case 578:
case 597:
case 847:
case 571:
case 3034:
case 1291:
case 1703:
case 550:
case 976:
case 1481:
case 1884:
case 3478:
case 3757:
case 3208:
case 1993:
case 1411:
case 2014:
case 3545:
case 538:
case 2123:
case 531:
case 1299:
case 2005:
case 449:
case 967:
case 1636:
case 592:
case 842:
case 1272:
case 3807:
case 2035:
case 2345:
case 2843:
case 1659:
case 1835:
case 3940:
case 271:
case 65:
case 297:
case 823:
case 2544:
case 3015:
case 2173:
case 3004:
case 3085:
case 1355:
case 962:
case 2745:
case 1651:
case 2649:
case 1853:
case 3384:
case 767:
case 2390:
case 1174:
case 1568:
case 180:
case 4038:
case 200:
case 424:
case 1337:
case 776:
case 2451:
case 60:
case 2900:
case 3601:
case 3995:
case 3803:
case 1857:
case 2406:
case 2044:
case 3784:
case 3974:
case 3705:
case 3656:
case 3452:
case 2276:
case 3714:
case 2553:
case 1195:
case 2057:
case 2459:
case 1441:
case 736:
case 308:
case 135:
case 3910:
case 1162:
case 274:
case 1707:
case 696:
case 3855:
case 3296:
case 2883:
case 2436:
case 3660:
case 2632:
case 3735:
case 2385:
case 1083:
case 1124:
case 3197:
case 500:
case 661:
case 1013:
case 3534:
case 2619:
case 1180:
case 234:
case 1110:
case 2248:
case 2689:
case 3486:
case 3682:
case 1997:
case 2704:
case 3335:
case 3045:
case 3590:
case 2584:
case 2715:
case 183:
case 2153:
case 387:
case 941:
case 1375:
case 2073:
case 3115:
case 78:
case 1761:
case 2242:
case 3968:
case 1040:
case 1794:
case 2907:
case 3618:
case 1595:
case 2135:
case 1168:
case 868:
case 1775:
case 1850:
case 1252:
case 744:
case 861:
case 1361:
case 1904:
case 2797:
case 314:
case 3241:
case 2638:
case 2050:
case 1394:
case 1665:
case 295:
case 546:
case 1823:
case 2066:
case 3987:
case 1692:
case 1510:
case 463:
case 2527:
case 1580:
case 4089:
case 3917:
case 2105:
case 2184:
case 2023:
case 1934:
case 2114:
case 3093:
case 3377:
case 4011:
case 1562:
case 1187:
case 1524:
case 845:
case 595:
case 1725:
case 1990:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1747663202/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,1,1,0,1,0,0,0,0,1,0,1,1,0,0,0,0,1,0,0,1,0,0,1,1,0,0,0,0,1,0,0,0,1,1,1,0,1,1,1,0,0,1,1,0,0,0,0,0,1,0,0,1,1,0,0,0,1,0,0,1,0,1,1,1,1,1,1,0,0,1,0,0,0,0,0,1,0,1,1,0,1,0,1,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,1,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,1,0,0,1,0,1,0,0,0,0,0,1,0,1,1,1,1,1,1,1,0,0,0,0,0,0,0,1,1,1,1,0,0,1,0,1,0,0,1,0,0,1,0,0,0,1,1,0,1,1,1,0,1,1,0,0,0,1,1,1,1,1,1,1,1,0,0,0,1,1,0,0,1,0,1,1,0,0,0,1,1,1,0,1,0,1,0,0,0,1,0,1,0,1,1,0,0,1,1,0,1,1,1,0,0,1,1,1,1,1,0,0,0,1,0,0,0,0,1,1,1,1,0,1,0,0,0,1,1,0,0,1,0,1,0,0,1,0,1,0,1,1,1,1,0,1,1,0,1,0,1,0,0,1,1,1,1,0,1,1,1,0,0,0,1,1,0,1,0,1,0,1,0,0,1,1,1,1,0,0,0,1,0,0,1,1,1,1,1,1,0,1,0,1,0,1,1,0,0,0,1,0,0,1,1,1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,1,1,1,0,1,0,1,0,0,0,0,1,1,0,0,1,0,0,0,0,1,1,0,0,0,1,0,1,1,0,1,0,0,0,1,1,1,0,0,1,0,0,0,1,0,1,1,0,0,0,1,1,1,1,1,1,0,1,0,1,1,1,1,0,0,1,0,0,1,0,1,0,1,0,1,0,0,0,1,0,0,1,0,1,1,1,0,1,0,0,0,0,0,0,1,0,0,1,0,1,1,0,1,1,0,0,1,1,1,1,1,1,0,0,1,0,0,1,1,0,0,1,1,0,1,0,0,1,1,1,0,0,1,0,1,1,1,0,0,0,1,0,1,0,0,0,1,1,0,0,0,1,1,0,1,0,1,0,0,1,1,1,0,1,1,0,0,0,0,0,1,1,1,0,0,0,1,0,1,0,1,0,0,0,1,0,0,0,0,1,1,1,1,0,1,1,1,1,0,1,0,0,0,1,0,1,0,0,0,1,0,1,0,0,1,0,1,0,1,0,0,1,0,0,0,1,1,1,1,1,1,0,0,0,1,0,0,1,1,1,1,0,1,1,1,0,0,1,0,0,0,1,0,1,1,1,1,0,0,1,1,1,0,0,1,0,0,1,1,1,1,1,0,0,0,1,0,0,0,0,1,0,1,0,0,0,1,1,0,1,1,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,1,1,0,0,0,0,1,1,1,1,1,1,0,0,0,1,1,0,1,0,0,0,0,1,1,1,0,1,0,1,1,0,1,1,0,0,1,1,1,0,0,1,0,0,1,1,0,1,0,0,0,1,0,1,0,1,1,1,0,0,0,0,1,1,1,0,1,1,0,1,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,1,0,0,1,1,1,1,0,1,1,0,0,0,1,1,0,0,1,1,1,0,0,1,0,1,1,1,0,1,0,0,1,0,1,0,1,1,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,0,0,0,1,0,1,1,1,0,0,1,0,1,1,1,0,0,0,0,1,0,0,0,0,0,0,1,1,0,0,1,1,0,1,0,1,1,0,0,1,1,0,1,1,0,1,1,1,1,1,0,0,1,1,1,1,1,1,0,0,1,1,1,1,1,0,1,0,1,0,0,1,0,0,1,1,0,1,0,0,0,0,1,0,1,1,1,1,0,0,0,0,0,0,1,0,0,1,0,0,1,1,1,0,1,1,0,0,0,0,1,0,0,0,0,1,0,1,1,0,0,1,1,0,1,0,0,0,0,0,1,0,1,1,0,1,0,0,0,0,1,1,1,0,0,1,1,0,1,0,0,0,0,1,0,0,0,0,1,0,1,0,1,0,0,1,0,1,1,1,0,1,0,0,1,1,0,0,0,1,1,0,1,1,1,0,0,1,0,1,0,1,0,0,0,1,0,0,0,0,1,1,1,0,0,1,1,0,0,1,1,0,1,0,0,1,0,0,1,1,1,0,0,0,0,1,0,0,0,1,1,0,1,0,0,0,1,1,0,1,1,0,0,1,0,0,1,1,1,1,0,1,0,0,0,1,1,1,1,0,0,0,1,0,1,0,0,0,1,1,1,1,1,0,1,0,0,0,1,1,1,0,1,1,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,1,1,1,1,0,1,0,0,1,1,1,1,1,0,1,0,0,1,1,1,0,1,0,0,1,0,0,1,1,1,0,1,1,1,1,0,0,1,1,1,1,1,0,0,0,1,1,0,0,1,0,0,1,1,1,1,1,0,0,1,0,0,1,0,0,1,0,1,1,0,1,0,0,1,0,0,1,0,0,1,0,1,1,0,0,1,1,0,1,0,0,0,1,0,1,1,0,0,1,0,0,1,0,1,0,0,0,0,1,0,1,0,1,0,1,1,0,0,1,0,1,0,1,0,0,1,0,0,1,0,0,1,0,0,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,0,0,0,1,0,1,0,1,1,0,0,1,0,1,0,0,0,1,1,1,0,1,1,0,0,1,0,0,1,0,1,0,0,1,0,1,0,1,1,1,0,0,0,0,1,1,0,1,0,1,1,0,0,1,0,1,0,0,0,0,0,1,1,0,1,1,1,1,1,1,0,1,0,1,0,0,1,1,1,1,0,0,1,1,0,0,0,0,0,0,1,0,0,1,0,0,1,0,0,0,0,1,0,1,0,1,0,0,0,0,0,1,1,1,0,1,0,1,0,1,0,1,0,1,1,0,0,0,1,0,1,1,1,1,1,1,0,1,1,0,1,1,1,0,1,0,1,0,1,1,1,0,0,1,1,0,0,0,0,1,0,0,1,1,1,1,0,1,1,1,1,1,0,0,1,0,0,1,0,0,0,0,1,1,0,1,1,0,0,1,0,1,0,1,0,1,1,1,1,0,1,1,1,1,0,0,1,0,0,0,0,1,1,1,0,1,0,1,0,0,0,0,0,0,1,0,1,0,1,0,0,0,0,0,0,1,0,1,1,0,1,1,0,0,1,0,1,0,1,0,0,1,0,0,0,0,0,1,1,1,1,1,0,1,0,0,1,1,0,0,1,1,0,0,1,1,0,1,0,0,1,1,1,1,1,1,1,0,0,1,1,1,0,1,0,1,1,1,0,0,1,0,0,0,1,1,1,0,0,1,0,0,0,1,1,1,0,1,1,1,1,1,1,1,1,1,0,0,0,1,0,1,0,1,1,0,1,0,0,1,0,1,0,0,1,1,1,0,1,0,0,1,0,0,1,0,1,0,1,1,0,1,0,1,1,1,1,0,0,0,1,0,1,1,0,0,0,0,1,0,0,0,1,0,1,0,0,1,0,1,1,1,1,0,0,1,1,0,0,0,1,0,1,1,1,0,0,1,0,1,1,0,1,1,1,1,1,0,0,0,1,1,1,0,0,1,0,0,1,1,1,0,0,1,1,0,0,0,1,0,0,1,0,1,0,0,1,0,1,1,1,0,0,0,0,1,0,0,0,1,0,1,0,1,0,1,1,0,0,0,0,0,1,0,1,1,0,0,0,1,1,1,1,0,1,1,0,0,1,0,0,0,0,0,0,1,0,1,0,1,1,1,0,0,0,1,0,0,0,1,1,0,0,0,0,0,0,1,1,1,1,0,1,1,1,0,1,1,0,0,1,1,0,0,0,1,1,0,1,0,1,1,0,0,0,0,0,0,1,1,1,1,1,1,0,1,0,0,0,1,1,0,1,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,1,1,0,1,0,1,1,0,0,0,0,1,1,1,0,1,1,1,1,0,1,0,0,1,1,0,0,0,1,1,0,1,0,1,1,1,0,1,1,1,0,0,0,0,0,1,1,0,0,1,0,0,1,1,1,1,1,0,1,1,0,0,1,0,0,1,0,1,1,1,0,0,0,1,1,0,0,0,0,0,0,1,1,1,0,1,0,1,1,0,1,0,1,0,0,1,0,1,1,1,1,0,0,1,1,1,1,1,0,1,1,0,1,0,1,1,0,0,1,0,1,0,1,0,1,0,1,0,0,0,0,0,1,0,0,1,0,0,0,1,0,0,0,0,1,0,0,0,0,0,1,1,1,1,0,0,1,1,1,1,1,0,0,0,1,0,0,0,1,1,0,1,0,1,1,1,1,0,0,0,0,1,0,1,1,1,0,1,0,1,1,1,1,0,0,1,0,0,1,0,0,1,0,0,1,1,1,1,1,1,0,0,0,1,1,0,0,1,0,1,0,0,1,1,1,0,1,0,1,0,1,0,0,1,1,1,0,1,0,0,0,0,1,1,1,0,0,1,0,0,1,1,0,1,1,0,0,0,0,0,0,1,0,1,0,1,1,0,1,0,1,0,0,0,1,0,0,1,1,1,1,1,0,1,0,1,0,1,1,0,1,0,1,0,1,1,0,1,0,0,1,1,0,1,1,0,1,0,0,1,1,1,1,1,1,1,1,1,1,0,0,1,0,0,1,0,1,0,0,0,1,1,0,0,0,0,0,0,0,1,1,0,1,0,0,0,0,1,0,1,0,1,0,0,1,0,1,0,0,1,0,1,1,0,0,1,1,0,0,0,1,0,1,1,0,1,1,1,0,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,0,1,0,1,0,0,1,0,1,0,0,1,1,1,0,0,1,1,1,1,1,0,1,0,1,0,1,1,1,1,1,1,1,0,0,1,1,0,1,1,1,1,1,0,1,1,1,0,1,0,1,0,0,0,1,1,1,0,0,1,1,1,0,0,0,0,1,0,0,0,0,1,0,0,1,1,0,0,1,0,1,0,1,1,1,0,1,1,0,0,1,1,1,1,0,1,0,1,1,0,1,1,1,0,0,0,0,0,1,1,1,0,0,1,0,1,0,0,0,1,0,1,0,1,1,0,1,1,0,1,0,1,1,1,0,1,1,1,0,1,0,0,1,0,0,0,0,1,1,0,0,0,0,0,1,1,1,0,1,1,0,1,1,0,1,1,0,0,1,1,0,0,0,1,1,0,1,0,1,1,0,0,0,0,1,0,1,1,0,0,1,0,1,1,1,0,0,1,0,0,1,1,0,1,1,1,1,0,1,1,1,0,0,0,1,1,0,1,1,0,1,0,1,0,1,0,0,1,0,0,0,1,0,1,1,1,1,1,1,0,1,1,1,1,1,1,0,0,1,1,1,1,1,0,1,1,1,1,0,0,1,0,0,1,1,0,1,1,1,0,0,1,1,0,1,1,1,1,0,0,1,1,0,0,1,0,0,0,0,0,0,1,0,0,1,1,1,1,0,0,1,0,1,1,0,0,1,0,1,1,1,1,0,0,1,0,0,1,0,0,1,1,1,0,1,1,0,1,1,1,0,0,0,1,0,0,0,1,1,1,1,0,0,1,0,0,0,0,0,1,0,0,1,1,0,1,0,0,1,1,1,0,0,0,1,0,0,0,1,0,1,1,0,1,1,1,0,0,0,1,1,1,0,0,1,0,0,1,1,1,0,1,0,1,0,0,1,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,1,0,1,1,0,0,1,1,0,0,0,1,1,0,1,1,0,1,1,0,0,1,1,0,1,1,1,1,0,0,1,0,1,0,0,0,0,0,1,0,1,1,0,0,0,1,0,1,0,0,0,0,1,0,0,0,1,1,1,0,1,0,0,1,1,1,1,1,0,1,1,1,1,0,0,0,0,1,0,0,0,1,0,1,1,1,0,0,0,0,0,1,1,0,0,1,1,0,0,0,0,0,0,1,0,1,0,1,1,0,0,1,1,1,1,1,1,1,0,1,1,1,1,0,0,0,1,1,1,1,1,1,0,1,1,0,0,1,1,1,1,0,1,1,1,0,1,0,0,1,0,1,0,0,1,1,0,0,0,0,0,0,1,0,0,1,0,0,0,1,1,1,1,0,1,0,0,0,1,0,0,0,0,1,0,0,0,0,0,1,0,1,0,1,1,0,0,0,1,1,1,0,1,0,0,0,0,1,0,0,0,1,0,1,1,0,0,0,1,1,1,0,0,0,0,0,1,1,0,0,0,0,1,1,0,1,0,1,0,0,1,1,1,0,1,1,1,0,0,0,1,1,1,0,0,0,1,0,1,1,0,0,1,1,1,0,0,1,1,0,1,1,0,1,0,1,1,0,0,1,1,0,1,1,1,0,1,0,1,0,0,1,0,0,1,0,0,0,0,1,0,0,1,0,1,0,1,0,0,0,1,0,1,1,1,1,0,1,1,0,1,0,1,1,1,0,0,1,1,0,1,0,0,1,1,0,1,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,1,1,0,1,1,0,1,0,0,0,0,0,0,1,0,0,0,0,0,1,1,1,1,1,0,1,0,1,1,1,0,1,1,0,1,1,0,1,1,0,1,0,1,0,1,0,0,0,1,1,1,1,1,0,0,1,1,0,1,0,0,1,0,0,1,0,1,0,1,1,0,0,0,0,0,1,1,0,1,1,0,1,1,1,0,1,1,1,0,0,1,0,0,1,1,0,0,1,1,0,1,1,0,0,1,0,0,0,0,1,1,1,1,0,1,1,1,0,1,1,0,1,1,1,0,0,1,1,0,0,1,1,1,0,1,0,0,1,1,1,0,0,0,1,0,1,0,0,0,1,0,0,1,1,0,1,0,1,1,1,0,1,0,0,1,0,1,0,1,1,0,1,0,0,1,1,1,1,1,0,1,1,1,1,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,1,0,0,1,1,1,1,0,0,1,0,0,1,1,1,0,0,1,0,1,0,1,0,1,0,1,1,0,1,0,0,1,0,1,0,0,0,1,1,0,0,0,0,0,1,0,0,0,1,1,0,0,1,1,1,0,0,0,1,0,1,1,1,1,1,1,0,0,0,0,1,0,0,0,1,1,1,0,0,0,1,0,0,1,0,1,0,0,1,0,0,0,0,0,1,1,0,0,1,1,1,1,0,0,0,0,1,1,1,1,0,1,0,1,0,1,1,1,1,0,0,1,0,0,0,1,0,0,1,0,1,0,1,0,0,0,0,0,1,0,0,0,1,1,0,1,0,0,0,0,1,0,1,1,0,1,1,0,0,1,0,0,0,1,0,0,1,0,0,1,0,0,1,0,0,0,1,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,1,1,1,0,0,0,1,0,0,1,0,0,0,1,0,1,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,0,1,0,1,0,0,0,0,0,1,0,0,1,1,0,1,0,0,1,0,0,0,0,1,1,1,0,1,1,1,0,0,0,0,1,0,1,0,0,1,1,1,1,1,1,1,1,0,1,0,0,0,1,0,1,0,1,0,0,0,1,1,0,1,0,0,0,0,1,0,1,1,0,1,0,1,1,1,1,0,1,0,0,1,1,0,1,1,0,1,0,1,0,0,1,0,0,0,0,0,1,1,1,0,1,0,1,0,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,0,1,1,1,0,1,1,1,0,0,1,0,1,0,1,0,1,1,0,0,1,0,1,1,1,0,1,1,0,1,1,0,0,0,0,0,1,0,0,1,0,0,1,0,1,0,0,1,1,0,1,0,0,0,0,0,1,0,1,1,0,1,0,0,1,1,0,0,1,0,1,0,1,0,0,0,0,1,0,0,0,0,0,1,0,0,0,1,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,1,0,1,1,1,0,0,0,0,0,1,0,0,0,0,1,1,1,0,1,0,0,1,0,1,0,0,0,0,1,1,0,0,1,1,1,1,1,0,0,1,1,1,1,1,0,0,0,0,0,0,1,1,0,0,0,1,0,1,0,1,0,1,1,1,1,0,0,0,0,0,1,1,1,0,1,0,1,1,0,0,1,0,0,0,1,0,0,1,0,1,1,0,0,1,1,1,0,0,1,1,1,0,0,1,0,1,0,1,0,0,0,0,0,0,1,1,0,0,0,1,1,0,0,0,1,1,1,0,0,0,0,0,1,1,1,0,1,1,1,0,0,1,1,0,1,0,1,1,0,1,0,1,1,1,1,0,1,1,1,0,0,1,0,0,1,1,1,1,1,0,0,1,0,0,0,0,0,0,0,0,1,1,1,0,1,0,0,1,1,1,0,0,0,0,1,0,1,0,0,1,0,1,0,1,1,0,1,1,0,1,0,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,0,1,1,0,0,1,0,1,1,1,0,1,0,0,0,0,1,0,1,0,0,1,1,1,1,0,1,1,0,1,1,0,1,1,0,1,0,1,0,0,0,1,1,0,0,1,1,0,0,1,1,1,1,1,0,1,0,1,1,1,1,1,0,1,1,0,1,1,0,0,1,0,1,1,0,0,0,1,0,0,1,1,0,0,1,0,1,0,1,0,0,1,1,1,0,1,1,1,0,1,1,0,0,0,1,0,1,0,1,0,0,0,0,1,1,1,1,0,0,1,0,0,0,1,0,0,1,1,1,1,0,1,1,1,0,0,0,1,0,0,0,1,0,1,0,1,0,0,1,1,1,0,0,0,1,0,1,1,0,1,0,0,0,0,0,1,1,0,0,0,1,1,1,0,0,1,0,1,1,1,0,0,0,1,1,0,1,1,0,1,0,1,1,0,1,0,1,1,0,1,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,1,1,0,1,1,1,1,1,0,0,1,0,];
var gg_b = "1747663202/";

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
