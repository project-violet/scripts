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
case 1873:
case 2903:
case 2902:
case 1310:
case 1089:
case 1881:
case 3211:
case 3326:
case 1344:
case 772:
case 4036:
case 3790:
case 896:
case 3163:
case 2588:
case 3162:
case 3439:
case 3829:
case 2911:
case 3416:
case 412:
case 1591:
case 2701:
case 2540:
case 307:
case 2250:
case 1243:
case 1552:
case 2712:
case 1261:
case 2798:
case 1007:
case 2370:
case 2425:
case 2835:
case 884:
case 3625:
case 2813:
case 3580:
case 1854:
case 1971:
case 1198:
case 1982:
case 1499:
case 1983:
case 1255:
case 3531:
case 2172:
case 1574:
case 3047:
case 2315:
case 3258:
case 743:
case 782:
case 1676:
case 2332:
case 1772:
case 265:
case 192:
case 525:
case 1665:
case 1618:
case 1949:
case 3247:
case 3557:
case 1896:
case 3670:
case 288:
case 781:
case 2470:
case 505:
case 3117:
case 2325:
case 226:
case 3736:
case 498:
case 566:
case 690:
case 1167:
case 2034:
case 396:
case 3633:
case 1055:
case 2823:
case 3632:
case 3668:
case 2468:
case 733:
case 633:
case 2722:
case 75:
case 1444:
case 2678:
case 3179:
case 297:
case 455:
case 950:
case 424:
case 2723:
case 1061:
case 327:
case 2626:
case 3426:
case 1043:
case 547:
case 3987:
case 1651:
case 2604:
case 3404:
case 3011:
case 3819:
case 2921:
case 2660:
case 278:
case 3460:
case 681:
case 384:
case 2506:
case 2287:
case 3002:
case 3316:
case 3221:
case 487:
case 1475:
case 2196:
case 118:
case 1693:
case 1015:
case 997:
case 3655:
case 1033:
case 2455:
case 32:
case 3084:
case 1567:
case 2299:
case 54:
case 1068:
case 3483:
case 1186:
case 1225:
case 2683:
case 423:
case 4000:
case 634:
case 3999:
case 1824:
case 2682:
case 1434:
case 675:
case 1070:
case 1806:
case 978:
case 3228:
case 3157:
case 522:
case 3065:
case 3276:
case 342:
case 383:
case 3092:
case 80:
case 2937:
case 2075:
case 2266:
case 3093:
case 1603:
case 3859:
case 3494:
case 1939:
case 1706:
case 734:
case 1450:
case 3920:
case 415:
case 2443:
case 3643:
case 910:
case 2124:
case 1522:
case 2886:
case 2220:
case 2753:
case 1740:
case 2210:
case 906:
case 2114:
case 1191:
case 2752:
case 1512:
case 3944:
case 2140:
case 883:
case 1153:
case 3785:
case 2020:
case 1501:
case 2554:
case 1714:
case 2791:
case 1960:
case 2066:
case 3293:
case 3764:
case 1487:
case 1788:
case 1904:
case 82:
case 3975:
case 3689:
case 3251:
case 2343:
case 2992:
case 2489:
case 3538:
case 3527:
case 3131:
case 2572:
case 2649:
case 3449:
case 3382:
case 1270:
case 1334:
case 521:
case 341:
case 3371:
case 644:
case 768:
case 2573:
case 3218:
case 2774:
case 2355:
case 3864:
case 1888:
case 53:
case 502:
case 3265:
case 332:
case 3284:
case 1268:
case 1409:
case 2099:
case 1215:
case 2745:
case 3180:
case 3885:
case 2984:
case 2852:
case 2853:
case 403:
case 2907:
case 2484:
case 1632:
case 2376:
case 1633:
case 370:
case 3586:
case 1615:
case 2082:
case 135:
case 1909:
case 3207:
case 2879:
case 2328:
case 2083:
case 676:
case 2559:
case 4054:
case 937:
case 221:
case 561:
case 3949:
case 1247:
case 1557:
case 2465:
case 694:
case 214:
case 3399:
case 3475:
case 2493:
case 794:
case 739:
case 1316:
case 86:
case 2989:
case 3320:
case 184:
case 954:
case 420:
case 925:
case 416:
case 1460:
case 628:
case 2094:
case 1819:
case 1404:
case 1011:
case 3410:
case 2610:
case 686:
case 3123:
case 892:
case 1836:
case 2779:
case 3061:
case 3869:
case 3042:
case 2256:
case 4073:
case 4072:
case 2644:
case 1777:
case 4081:
case 3552:
case 2351:
case 107:
case 3112:
case 3375:
case 3591:
case 2056:
case 2943:
case 3830:
case 3420:
case 749:
case 3113:
case 891:
case 1416:
case 1829:
case 1021:
case 1439:
case 1138:
case 2564:
case 4069:
case 1790:
case 2666:
case 2500:
case 2437:
case 2294:
case 3872:
case 2762:
case 2738:
case 3881:
case 3089:
case 905:
case 400:
case 608:
case 2190:
case 2895:
case 1505:
case 708:
case 392:
case 145:
case 2727:
case 2862:
case 2838:
case 222:
case 2384:
case 2476:
case 1047:
case 1127:
case 1531:
case 2318:
case 550:
case 3545:
case 3730:
case 818:
case 3983:
case 1934:
case 2699:
case 3499:
case 3982:
case 3854:
case 36:
case 3971:
case 1580:
case 2955:
case 1625:
case 2283:
case 3007:
case 59:
case 2282:
case 3508:
case 3350:
case 1037:
case 1538:
case 1251:
case 1689:
case 1541:
case 578:
case 8:
case 409:
case 1975:
case 1563:
case 2805:
case 2260:
case 2100:
case 3788:
case 2831:
case 3621:
case 3960:
case 922:
case 879:
case 2278:
case 94:
case 2303:
case 1456:
case 895:
case 3153:
case 2302:
case 3926:
case 740:
case 2226:
case 367:
case 2880:
case 2933:
case 510:
case 3145:
case 266:
case 2968:
case 3598:
case 3097:
case 2932:
case 3233:
case 448:
case 2358:
case 4006:
case 3409:
case 3814:
case 3108:
case 1284:
case 10:
case 132:
case 1800:
case 1265:
case 889:
case 2731:
case 3647:
case 2447:
case 4024:
case 2748:
case 2529:
case 1218:
case 588:
case 1382:
case 205:
case 3270:
case 3174:
case 2458:
case 3658:
case 2159:
case 630:
case 2757:
case 1065:
case 1276:
case 142:
case 336:
case 1228:
case 867:
case 254:
case 3070:
case 3824:
case 131:
case 1471:
case 1483:
case 3225:
case 3:
case 3068:
case 1084:
case 12:
case 3032:
case 2347:
case 3387:
case 1746:
case 3523:
case 2078:
case 1920:
case 2026:
case 3724:
case 1642:
case 1966:
case 358:
case 846:
case 213:
case 2060:
case 3611:
case 1494:
case 237:
case 2004:
case 1237:
case 1051:
case 1093:
case 456:
case 2403:
case 2239:
case 1711:
case 2551:
case 3353:
case 2794:
case 2241:
case 46:
case 1560:
case 2103:
case 2263:
case 1606:
case 3096:
case 3941:
case 4007:
case 2592:
case 1194:
case 282:
case 363:
case 820:
case 3575:
case 1913:
case 492:
case 3646:
case 1935:
case 2446:
case 2882:
case 2871:
case 2079:
case 706:
case 1526:
case 3743:
case 3510:
case 3843:
case 1036:
case 606:
case 2783:
case 2782:
case 169:
case 2686:
case 300:
case 3230:
case 1348:
case 3486:
case 1183:
case 1331:
case 3134:
case 1998:
case 1182:
case 272:
case 2565:
case 3995:
case 1229:
case 3927:
case 530:
case 3345:
case 2518:
case 1457:
case 968:
case 104:
case 2295:
case 1811:
case 1380:
case 2459:
case 3281:
case 2217:
case 1149:
case 3474:
case 4043:
case 111:
case 2749:
case 2027:
case 155:
case 271:
case 2095:
case 688:
case 1405:
case 3707:
case 2608:
case 3109:
case 2359:
case 290:
case 187:
case 1236:
case 3030:
case 316:
case 540:
case 3445:
case 2645:
case 659:
case 2756:
case 759:
case 3685:
case 1516:
case 3520:
case 1614:
case 2691:
case 1277:
case 1640:
case 491:
case 1923:
case 2653:
case 1156:
case 3453:
case 934:
case 3807:
case 91:
case 2279:
case 1922:
case 470:
case 788:
case 3296:
case 678:
case 2849:
case 3187:
case 2041:
case 2121:
case 2400:
case 2996:
case 3566:
case 198:
case 1847:
case 2346:
case 2464:
case 933:
case 17:
case 458:
case 1317:
case 549:
case 2816:
case 21:
case 3797:
case 3199:
case 234:
case 3498:
case 299:
case 2319:
case 3725:
case 1672:
case 1427:
case 1837:
case 1549:
case 3957:
case 1259:
case 489:
case 1673:
case 151:
case 2005:
case 981:
case 2128:
case 3629:
case 2839:
case 2031:
case 2257:
case 2048:
case 115:
case 662:
case 3367:
case 3322:
case 1000:
case 123:
case 809:
case 4:
case 2906:
case 479:
case 4015:
case 1463:
case 4068:
case 1462:
case 4032:
case 3413:
case 3040:
case 1116:
case 864:
case 3897:
case 338:
case 79:
case 2612:
case 3412:
case 750:
case 1246:
case 2601:
case 3401:
case 2914:
case 1991:
case 1479:
case 3240:
case 586:
case 2726:
case 1952:
case 3677:
case 3832:
case 2390:
case 1884:
case 2622:
case 3423:
case 2940:
case 1126:
case 3110:
case 2151:
case 1104:
case 1264:
case 1160:
case 1865:
case 972:
case 446:
case 2503:
case 829:
case 2704:
case 2511:
case 1594:
case 3312:
case 761:
case 3006:
case 3870:
case 1696:
case 348:
case 3175:
case 856:
case 661:
case 3398:
case 244:
case 2205:
case 3931:
case 2419:
case 2118:
case 1851:
case 1059:
case 1974:
case 1893:
case 594:
case 1417:
case 539:
case 2057:
case 2248:
case 1718:
case 1892:
case 160:
case 2878:
case 3732:
case 3467:
case 1908:
case 2280:
case 1327:
case 1945:
case 1571:
case 3534:
case 1582:
case 3357:
case 116:
case 120:
case 2107:
case 4011:
case 2680:
case 3480:
case 1269:
case 1109:
case 1707:
case 621:
case 355:
case 1889:
case 1081:
case 1072:
case 3219:
case 311:
case 753:
case 2648:
case 1386:
case 3747:
case 3431:
case 3539:
case 930:
case 3847:
case 2189:
case 3721:
case 73:
case 1566:
case 702:
case 869:
case 714:
case 3090:
case 1789:
case 1296:
case 2324:
case 496:
case 3922:
case 1452:
case 4058:
case 1807:
case 286:
case 377:
case 1453:
case 3277:
case 2222:
case 1491:
case 2809:
case 2414:
case 2001:
case 474:
case 2223:
case 1685:
case 855:
case 2235:
case 1510:
case 824:
case 2213:
case 3526:
case 1743:
case 1761:
case 1742:
case 3901:
case 2424:
case 3624:
case 3935:
case 940:
case 2388:
case 2143:
case 445:
case 1855:
case 3913:
case 811:
case 1150:
case 2022:
case 3912:
case 1544:
case 2142:
case 1391:
case 722:
case 163:
case 3194:
case 1938:
case 3858:
case 1941:
case 2406:
case 1352:
case 208:
case 1096:
case 3504:
case 1659:
case 1281:
case 2929:
case 3811:
case 3019:
case 3380:
case 1272:
case 312:
case 2570:
case 575:
case 304:
case 3229:
case 3758:
case 1995:
case 3803:
case 622:
case 2067:
case 3331:
case 369:
case 100:
case 1755:
case 3183:
case 249:
case 3348:
case 1486:
case 1861:
case 2734:
case 1843:
case 1006:
case 3696:
case 581:
case 2496:
case 40:
case 2964:
case 1313:
case 1301:
case 303:
case 3160:
case 3793:
case 3865:
case 2354:
case 2775:
case 3104:
case 815:
case 3953:
case 3046:
case 3126:
case 1423:
case 441:
case 4028:
case 1422:
case 1677:
case 533:
case 3952:
case 1868:
case 2291:
case 3362:
case 4076:
case 766:
case 2710:
case 2985:
case 3178:
case 3479:
case 1024:
case 3363:
case 3991:
case 3669:
case 3582:
case 2469:
case 2373:
case 2133:
case 1636:
case 3327:
case 2115:
case 2381:
case 2810:
case 1732:
case 3784:
case 3908:
case 1768:
case 4037:
case 2555:
case 2245:
case 2086:
case 2330:
case 3718:
case 3892:
case 2617:
case 88:
case 1948:
case 3974:
case 1619:
case 1770:
case 572:
case 315:
case 230:
case 2074:
case 2473:
case 2695:
case 928:
case 2369:
case 3549:
case 2481:
case 737:
case 1957:
case 3259:
case 3681:
case 2627:
case 2472:
case 3837:
case 3427:
case 473:
case 3986:
case 156:
case 4093:
case 2008:
case 1199:
case 1797:
case 3317:
case 2045:
case 2286:
case 129:
case 2430:
case 2799:
case 38:
case 2454:
case 2899:
case 2091:
case 1401:
case 3246:
case 3556:
case 3085:
case 1412:
case 1120:
case 1435:
case 442:
case 976:
case 483:
case 4065:
case 1413:
case 3828:
case 2638:
case 42:
case 3139:
case 4084:
case 3462:
case 3441:
case 2589:
case 2662:
case 3463:
case 2663:
case 431:
case 1587:
case 543:
case 994:
case 3000:
case 1322:
case 323:
case 881:
case 3783:
case 3930:
case 2843:
case 1298:
case 2861:
case 2069:
case 3771:
case 1734:
case 3782:
case 1515:
case 2134:
case 1067:
case 3565:
case 515:
case 817:
case 3981:
case 2345:
case 833:
case 3518:
case 3972:
case 2273:
case 3295:
case 1570:
case 2308:
case 4056:
case 948:
case 2659:
case 1340:
case 3238:
case 3551:
case 890:
case 3263:
case 2352:
case 108:
case 2096:
case 3385:
case 2938:
case 3592:
case 343:
case 3300:
case 2544:
case 1161:
case 2646:
case 1388:
case 2855:
case 3364:
case 2150:
case 2742:
case 1424:
case 1235:
case 1750:
case 3883:
case 2510:
case 2520:
case 3485:
case 317:
case 3756:
case 1223:
case 333:
case 1222:
case 2491:
case 3653:
case 186:
case 627:
case 2453:
case 43:
case 1013:
case 3279:
case 3652:
case 3063:
case 2296:
case 2789:
case 3849:
case 3062:
case 2187:
case 2566:
case 4083:
case 2600:
case 1787:
case 3464:
case 4071:
case 4082:
case 1488:
case 2386:
case 1919:
case 3217:
case 3576:
case 552:
case 194:
case 2889:
case 2072:
case 3749:
case 3027:
case 2073:
case 3095:
case 371:
case 2408:
case 2269:
case 2109:
case 938:
case 2707:
case 635:
case 176:
case 1680:
case 453:
case 390:
case 1525:
case 1267:
case 3969:
case 2599:
case 1107:
case 35:
case 3645:
case 882:
case 1936:
case 216:
case 220:
case 3856:
case 3906:
case 2322:
case 1766:
case 3490:
case 3377:
case 3521:
case 2587:
case 2088:
case 1663:
case 2206:
case 1638:
case 1589:
case 1662:
case 844:
case 1946:
case 2435:
case 2413:
case 2412:
case 238:
case 1052:
case 731:
case 425:
case 1091:
case 3924:
case 2401:
case 2014:
case 72:
case 1197:
case 2509:
case 4004:
case 1045:
case 4060:
case 3816:
case 1820:
case 1286:
case 1430:
case 3698:
case 334:
case 2797:
case 2725:
case 868:
case 1481:
case 3336:
case 3176:
case 504:
case 512:
case 1369:
case 3547:
case 3257:
case 2629:
case 3128:
case 3429:
case 4026:
case 683:
case 2367:
case 524:
case 3205:
case 3860:
case 3165:
case 2398:
case 344:
case 2948:
case 3419:
case 447:
case 963:
case 1170:
case 1875:
case 3057:
case 1617:
case 1555:
case 2715:
case 1245:
case 3329:
case 1086:
case 60:
case 3667:
case 2732:
case 2768:
case 1844:
case 1372:
case 3436:
case 1381:
case 1469:
case 1208:
case 1132:
case 1373:
case 1679:
case 2144:
case 3914:
case 1252:
case 2024:
case 1561:
case 1253:
case 3726:
case 577:
case 2240:
case 2550:
case 1985:
case 1710:
case 2422:
case 3390:
case 3477:
case 1744:
case 2815:
case 3940:
case 2833:
case 2288:
case 3151:
case 1354:
case 3511:
case 81:
case 834:
case 3988:
case 3192:
case 3760:
case 368:
case 2870:
case 248:
case 3193:
case 2847:
case 3189:
case 1346:
case 3488:
case 2721:
case 2539:
case 618:
case 2090:
case 849:
case 298:
case 410:
case 426:
case 1062:
case 1849:
case 1038:
case 1121:
case 548:
case 181:
case 951:
case 328:
case 3306:
case 1279:
case 3012:
case 2922:
case 3440:
case 3013:
case 277:
case 2156:
case 3035:
case 97:
case 3809:
case 3414:
case 1691:
case 1485:
case 2516:
case 2357:
case 1856:
case 1645:
case 478:
case 15:
case 3267:
case 1969:
case 190:
case 3680:
case 376:
case 3597:
case 1608:
case 3098:
case 224:
case 1749:
case 1027:
case 2219:
case 1147:
case 394:
case 691:
case 1576:
case 211:
case 4050:
case 923:
case 718:
case 3631:
case 2747:
case 1217:
case 2821:
case 2431:
case 2029:
case 3648:
case 3887:
case 3929:
case 2811:
case 2019:
case 1894:
case 2380:
case 1459:
case 692:
case 212:
case 1295:
case 1972:
case 2803:
case 3532:
case 2171:
case 66:
case 269:
case 3515:
case 1686:
case 2348:
case 529:
case 3533:
case 2331:
case 1782:
case 2305:
case 3298:
case 4087:
case 1930:
case 828:
case 556:
case 3850:
case 3213:
case 2526:
case 3235:
case 3834:
case 2901:
case 3424:
case 2624:
case 1882:
case 1871:
case 3023:
case 1364:
case 2935:
case 1446:
case 3388:
case 839:
case 3201:
case 3161:
case 3022:
case 1300:
case 2077:
case 143:
case 2290:
case 182:
case 952:
case 406:
case 3314:
case 1592:
case 2858:
case 2560:
case 876:
case 1103:
case 792:
case 2606:
case 1263:
case 1102:
case 2711:
case 1262:
case 2504:
case 1238:
case 3340:
case 2395:
case 3132:
case 1184:
case 3168:
case 2582:
case 3469:
case 3810:
case 1436:
case 3372:
case 646:
case 1280:
case 3133:
case 1826:
case 2945:
case 2327:
case 3844:
case 1667:
case 340:
case 3555:
case 516:
case 520:
case 1231:
case 2417:
case 3330:
case 2718:
case 2892:
case 2893:
case 252:
case 1118:
case 2059:
case 2851:
case 4020:
case 1860:
case 1165:
case 912:
case 1760:
case 1193:
case 1704:
case 1988:
case 2751:
case 1511:
case 2594:
case 203:
case 3354:
case 2865:
case 3775:
case 2792:
case 2264:
case 1940:
case 2285:
case 2046:
case 2952:
case 3291:
case 1390:
case 2338:
case 3710:
case 3253:
case 2363:
case 3252:
case 3542:
case 3679:
case 2479:
case 3899:
case 1601:
case 28:
case 2085:
case 689:
case 2556:
case 3052:
case 3396:
case 7:
case 462:
case 3946:
case 3053:
case 2462:
case 3641:
case 3662:
case 736:
case 3638:
case 658:
case 393:
case 185:
case 1739:
case 2064:
case 1137:
case 1521:
case 911:
case 563:
case 1906:
case 998:
case 695:
case 1031:
case 330:
case 3959:
case 3369:
case 3473:
case 1176:
case 2495:
case 3695:
case 251:
case 1005:
case 2673:
case 758:
case 3472:
case 1336:
case 3627:
case 3481:
case 2259:
case 199:
case 1319:
case 3008:
case 3286:
case 3820:
case 679:
case 500:
case 2317:
case 3799:
case 3197:
case 2697:
case 3497:
case 1282:
case 3812:
case 2580:
case 1955:
case 3835:
case 3130:
case 1283:
case 2625:
case 3009:
case 3801:
case 1365:
case 1318:
case 600:
case 408:
case 579:
case 2729:
case 2258:
case 2127:
case 897:
case 1476:
case 1727:
case 1841:
case 1862:
case 1049:
case 1129:
case 4022:
case 536:
case 1428:
case 101:
case 4023:
case 365:
case 3903:
case 449:
case 826:
case 941:
case 558:
case 1895:
case 3902:
case 663:
case 1666:
case 2163:
case 2378:
case 2439:
case 3639:
case 3588:
case 3087:
case 2141:
case 1943:
case 2416:
case 589:
case 700:
case 3616:
case 2950:
case 1585:
case 932:
case 90:
case 1393:
case 3514:
case 1961:
case 3735:
case 207:
case 2304:
case 3250:
case 3154:
case 2360:
case 3898:
case 3712:
case 3678:
case 2478:
case 3722:
case 1546:
case 3723:
case 720:
case 2339:
case 1177:
case 931:
case 494:
case 3050:
case 227:
case 3626:
case 1337:
case 2836:
case 3604:
case 2011:
case 2819:
case 3921:
case 2987:
case 284:
case 806:
case 3506:
case 2316:
case 2221:
case 1492:
case 1989:
case 2002:
case 2003:
case 153:
case 102:
case 973:
case 2247:
case 2058:
case 2557:
case 1717:
case 4012:
case 1119:
case 274:
case 2670:
case 388:
case 3397:
case 3470:
case 3325:
case 1249:
case 2719:
case 1083:
case 2736:
case 310:
case 1082:
case 235:
case 1879:
case 620:
case 1136:
case 2615:
case 359:
case 428:
case 3169:
case 1907:
case 2632:
case 2877:
case 2092:
case 2356:
case 3694:
case 2051:
case 2966:
case 974:
case 1060:
case 2579:
case 3461:
case 3442:
case 2642:
case 4074:
case 430:
case 2661:
case 1146:
case 3010:
case 3443:
case 1026:
case 756:
case 3044:
case 1078:
case 1321:
case 729:
case 1216:
case 2655:
case 493:
case 3786:
case 629:
case 2846:
case 350:
case 1347:
case 1997:
case 2084:
case 1536:
case 2483:
case 2482:
case 1634:
case 3569:
case 2471:
case 231:
case 39:
case 3671:
case 154:
case 984:
case 125:
case 2157:
case 2228:
case 2759:
case 2276:
case 2065:
case 362:
case 1159:
case 2517:
case 2383:
case 3649:
case 3581:
case 2028:
case 3918:
case 2371:
case 748:
case 2595:
case 361:
case 2382:
case 1731:
case 1447:
case 1529:
case 1748:
case 3355:
case 2105:
case 2265:
case 3099:
case 1609:
case 3891:
case 20:
case 609:
case 1358:
case 3530:
case 3745:
case 3407:
case 3852:
case 2607:
case 1932:
case 3984:
case 1933:
case 166:
case 1915:
case 3853:
case 1880:
case 1311:
case 1185:
case 3752:
case 2944:
case 3114:
case 3808:
case 2910:
case 3656:
case 1302:
case 2785:
case 3020:
case 709:
case 1016:
case 862:
case 0:
case 3554:
case 1278:
case 3244:
case 3066:
case 3275:
case 2700:
case 2293:
case 518:
case 1421:
case 3951:
case 2764:
case 3874:
case 4086:
case 3342:
case 819:
case 440:
case 648:
case 2037:
case 1204:
case 1164:
case 2538:
case 3188:
case 2689:
case 2251:
case 3489:
case 2541:
case 353:
case 1196:
case 2475:
case 3493:
case 3675:
case 995:
case 1287:
case 3989:
case 2320:
case 84:
case 178:
case 1660:
case 1506:
case 2651:
case 936:
case 3451:
case 1604:
case 3094:
case 1921:
case 801:
case 9:
case 3610:
case 1524:
case 3177:
case 2122:
case 822:
case 471:
case 3546:
case 280:
case 3256:
case 2366:
case 3644:
case 1767:
case 2684:
case 1432:
case 1822:
case 4038:
case 50:
case 1209:
case 3907:
case 4041:
case 2586:
case 1415:
case 1823:
case 2055:
case 2769:
case 3071:
case 3879:
case 3082:
case 2207:
case 126:
case 3328:
case 433:
case 1947:
case 1325:
case 958:
case 2896:
case 1470:
case 2618:
case 2949:
case 611:
case 314:
case 2399:
case 33:
case 291:
case 2665:
case 3795:
case 165:
case 292:
case 2781:
case 3727:
case 3049:
case 3862:
case 1958:
case 3841:
case 583:
case 542:
case 1332:
case 4079:
case 2574:
case 1315:
case 2983:
case 3318:
case 853:
case 2255:
case 2545:
case 2730:
case 3365:
case 2854:
case 34:
case 2971:
case 2198:
case 1835:
case 1425:
case 3283:
case 1130:
case 967:
case 3955:
case 443:
case 1812:
case 3282:
case 2508:
case 1898:
case 2101:
case 2552:
case 2242:
case 1154:
case 4017:
case 1735:
case 2553:
case 2243:
case 946:
case 1514:
case 2754:
case 3942:
case 1701:
case 3585:
case 769:
case 3620:
case 3392:
case 3056:
case 2420:
case 1588:
case 1087:
case 1911:
case 2994:
case 3564:
case 3500:
case 573:
case 2310:
case 2881:
case 3738:
case 2089:
case 3294:
case 3741:
case 2872:
case 2637:
case 3762:
case 2873:
case 712:
case 2025:
case 3915:
case 366:
case 1984:
case 1708:
case 3968:
case 2233:
case 2268:
case 1891:
case 2108:
case 703:
case 3529:
case 1774:
case 3705:
case 305:
case 574:
case 2270:
case 161:
case 1965:
case 1918:
case 1572:
case 1992:
case 2350:
case 3204:
case 584:
case 992:
case 3100:
case 1342:
case 1361:
case 3848:
case 1874:
case 3421:
case 3039:
case 3831:
case 2788:
case 2904:
case 2621:
case 2501:
case 2714:
case 1554:
case 1791:
case 2926:
case 760:
case 2153:
case 1020:
case 1114:
case 2978:
case 1753:
case 347:
case 3311:
case 3185:
case 2535:
case 2740:
case 854:
case 970:
case 1886:
case 1124:
case 1044:
case 3078:
case 3026:
case 2916:
case 3146:
case 1389:
case 4048:
case 4031:
case 2724:
case 313:
case 258:
case 751:
case 866:
case 2611:
case 337:
case 715:
case 4080:
case 2603:
case 1075:
case 3403:
case 2602:
case 3402:
case 41:
case 1937:
case 1928:
case 3757:
case 3458:
case 2309:
case 918:
case 295:
case 615:
case 3519:
case 354:
case 1976:
case 545:
case 1671:
case 1682:
case 2824:
case 1683:
case 2225:
case 1299:
case 78:
case 485:
case 3347:
case 980:
case 1786:
case 1455:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1754920801/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,0,0,1,1,0,0,1,1,1,1,0,1,0,0,1,0,1,0,0,1,1,0,0,0,0,0,0,1,0,0,0,1,1,1,1,1,0,1,1,1,1,1,1,0,0,1,0,0,0,1,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,1,0,0,0,0,0,1,1,0,1,0,0,1,1,1,1,1,0,1,0,1,0,1,0,1,1,0,0,1,0,0,1,0,0,1,1,1,0,1,0,0,1,1,0,0,1,0,0,0,1,1,0,1,0,1,0,0,1,0,1,1,0,0,1,0,1,1,0,0,1,0,0,0,0,0,0,1,1,0,1,0,0,0,0,0,1,0,1,1,1,1,0,0,0,1,1,0,1,0,1,1,0,0,1,0,0,0,0,0,0,1,0,1,0,0,1,1,0,1,1,1,1,0,0,1,0,1,0,1,0,0,0,1,1,0,0,0,1,0,1,0,1,1,0,0,1,1,1,1,0,1,0,0,0,1,1,1,0,1,0,1,1,0,0,1,1,0,0,1,1,0,1,1,0,0,0,0,0,1,0,0,0,1,1,0,1,1,0,1,0,0,0,1,0,0,0,0,0,0,1,1,0,0,1,0,1,1,0,1,0,0,1,1,0,1,0,1,0,1,0,1,0,1,0,1,1,1,0,0,1,0,1,1,1,1,0,0,1,1,1,0,1,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0,1,0,0,0,1,1,0,1,0,1,1,1,0,1,1,1,0,1,1,1,1,1,0,0,1,1,0,1,0,0,1,1,1,0,0,1,1,0,1,1,1,0,1,1,1,1,1,1,1,0,0,0,0,1,1,0,0,0,0,0,1,1,0,0,0,1,0,1,0,1,1,1,0,1,0,0,0,1,0,0,1,0,0,1,0,1,1,1,0,1,0,0,1,1,0,0,0,1,0,0,1,1,1,1,0,1,0,1,1,0,1,0,0,0,0,0,0,1,1,1,1,0,1,1,1,1,1,0,0,0,1,0,1,1,0,1,0,0,0,1,0,0,0,0,0,0,0,1,1,0,1,1,0,0,0,1,1,0,0,0,1,0,1,0,1,0,1,0,1,1,1,1,0,1,0,1,0,1,0,1,0,1,1,0,0,0,0,1,0,1,0,0,1,1,0,1,0,1,1,1,0,1,1,0,0,0,1,1,0,0,1,0,0,1,0,0,1,1,0,1,1,0,1,0,1,1,1,1,0,1,0,0,0,1,0,1,0,0,1,0,1,0,0,1,0,0,0,0,0,1,1,1,1,0,1,1,1,0,1,0,1,1,0,1,0,1,1,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,1,1,0,1,0,0,0,1,0,0,1,0,1,1,1,0,0,0,0,1,1,1,1,0,0,1,1,1,0,0,0,0,0,0,0,0,1,0,1,0,1,0,0,0,0,0,0,0,0,0,1,1,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,0,1,1,0,1,0,1,0,0,1,0,1,1,1,1,1,0,1,1,0,0,0,0,1,0,1,1,0,0,1,0,1,1,0,0,1,0,1,1,0,0,1,0,1,0,1,0,0,0,0,0,0,1,0,1,0,1,1,0,1,1,0,1,1,0,0,1,0,0,0,0,1,1,1,1,0,1,0,0,1,0,1,1,1,1,0,0,0,0,1,0,1,1,0,0,1,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,0,0,0,1,0,0,0,0,1,0,0,1,0,1,0,0,0,1,0,1,1,1,1,0,1,0,1,0,1,0,1,1,0,0,0,1,1,0,0,0,0,1,0,0,0,0,1,0,1,0,0,1,0,0,0,1,1,1,1,0,0,0,0,0,1,0,1,0,1,1,1,1,0,0,0,0,0,0,1,0,0,1,0,1,1,1,1,0,0,0,0,1,1,1,1,0,0,1,1,1,0,0,0,0,0,0,0,1,1,0,0,0,1,1,1,0,0,0,0,0,1,0,0,0,1,1,0,1,0,0,1,0,1,1,1,1,1,0,1,1,1,0,1,1,0,0,0,0,1,0,1,0,1,1,1,0,1,0,0,0,1,0,0,0,0,1,0,0,0,1,1,0,1,0,1,1,1,0,1,0,1,0,1,1,0,0,1,0,0,0,0,0,0,0,1,0,1,1,0,1,1,0,1,0,0,0,0,1,1,1,0,0,0,1,0,1,0,1,1,0,0,0,1,1,0,0,1,0,1,1,0,0,0,1,0,1,0,0,1,1,1,0,0,0,0,1,1,1,0,1,0,1,0,1,1,0,0,1,0,0,0,1,1,1,1,0,0,1,0,1,1,0,1,0,1,0,0,1,0,0,1,0,0,1,1,1,1,0,1,1,0,1,0,1,0,1,0,0,1,0,0,0,0,0,1,1,1,0,0,1,0,1,0,0,0,0,1,0,1,0,1,1,1,1,0,0,1,0,1,1,0,1,1,0,1,0,0,0,1,1,1,0,0,0,0,0,0,0,1,1,0,1,1,0,0,1,1,0,1,0,0,1,1,1,0,0,1,1,0,1,0,0,1,0,0,0,0,0,1,1,0,0,0,0,1,1,1,1,1,0,0,0,0,1,0,1,1,0,1,1,1,1,0,0,0,0,1,0,0,0,1,1,0,0,0,0,0,1,1,1,1,0,0,0,1,1,0,1,0,0,1,1,0,1,0,0,0,1,1,1,1,0,0,0,0,1,0,1,1,1,0,1,0,1,1,1,0,1,0,0,0,1,0,1,1,1,1,1,0,1,1,1,1,0,1,0,0,0,1,1,1,1,1,1,1,1,1,0,1,1,0,0,0,0,0,0,0,1,1,0,1,1,1,1,1,0,0,0,0,0,0,0,1,1,0,1,0,1,1,1,1,1,0,1,1,0,0,1,0,1,0,0,0,1,1,0,1,0,1,1,0,0,1,0,1,0,1,0,1,1,1,0,0,0,1,0,1,0,0,0,1,0,0,1,0,0,1,1,0,0,0,1,0,0,1,1,0,0,0,0,0,0,1,1,1,0,0,0,1,0,1,1,1,1,0,1,0,0,0,0,0,0,0,1,0,0,1,1,0,0,0,1,0,0,1,1,0,1,1,1,0,0,0,1,1,1,1,1,0,1,1,0,1,0,1,0,1,1,1,0,0,1,0,0,0,0,1,0,1,1,0,0,1,0,1,1,0,1,1,1,0,1,1,0,1,1,0,0,0,0,0,1,1,1,0,0,0,1,1,0,0,1,0,1,0,1,0,1,1,1,1,0,0,1,1,0,1,0,0,0,0,1,0,1,0,0,0,1,1,0,0,0,1,1,1,0,1,1,1,0,0,0,0,1,1,0,1,1,1,0,0,1,0,1,0,0,0,0,1,0,1,0,0,1,0,0,1,0,1,0,0,1,0,0,1,0,1,1,0,1,0,0,1,1,0,1,0,0,1,1,0,0,1,1,1,0,1,0,1,0,0,0,1,0,1,0,0,1,0,1,1,1,0,1,1,0,1,0,0,0,0,0,0,1,0,1,1,0,1,0,1,1,0,0,0,0,1,1,0,1,1,1,0,0,0,0,0,1,0,0,0,0,0,0,1,1,1,0,1,0,1,0,1,0,1,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,1,1,0,1,1,0,1,1,1,0,0,0,1,1,1,0,0,1,1,0,1,1,0,1,1,0,1,1,0,0,1,0,1,0,1,0,0,1,0,0,0,0,1,0,0,1,0,1,1,1,0,1,1,0,0,1,0,0,1,1,0,0,0,0,0,0,0,0,1,0,0,0,1,1,0,1,1,0,0,0,1,1,0,1,1,1,0,1,0,1,1,1,0,0,1,0,1,0,0,0,0,1,1,0,0,0,0,1,1,1,0,1,0,1,0,1,0,0,1,0,0,0,0,1,0,0,0,1,1,1,1,1,1,0,0,0,0,0,1,0,0,1,0,0,0,0,0,1,1,0,0,0,1,1,0,0,0,0,0,0,1,1,0,1,1,1,0,1,0,0,1,0,0,0,0,0,1,1,1,0,0,0,1,0,1,1,0,0,1,0,1,0,1,0,0,1,1,1,0,0,0,1,1,1,0,0,1,0,0,1,0,0,1,0,1,1,1,0,0,0,1,1,1,1,0,1,0,1,0,1,1,0,1,1,1,1,1,1,0,1,0,0,0,0,0,1,0,1,1,1,1,0,1,0,1,0,1,0,0,1,1,1,1,1,1,0,0,0,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,0,1,0,1,1,1,1,1,0,0,1,0,0,1,0,1,1,0,1,1,0,0,0,1,1,0,0,1,0,1,1,0,1,1,1,0,0,0,0,0,1,1,1,1,0,0,1,1,0,1,1,0,0,1,0,1,1,0,0,1,1,1,1,1,0,0,1,0,0,1,0,0,1,0,0,0,0,1,1,0,1,0,1,1,1,1,1,1,0,1,0,0,1,0,0,1,0,0,0,1,0,0,0,1,1,0,1,0,0,1,0,0,0,1,1,1,1,1,1,0,0,0,1,1,1,1,0,1,0,0,1,1,1,1,0,1,1,1,0,0,1,1,1,1,1,0,1,1,1,1,1,0,1,1,1,0,0,1,1,1,0,1,0,1,0,1,1,1,0,0,0,0,1,1,0,0,1,0,0,1,1,0,1,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,1,1,0,1,0,0,1,1,0,1,0,0,0,1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,1,0,0,0,0,0,1,0,1,0,0,0,0,0,0,1,1,1,0,0,1,0,0,1,0,0,0,1,0,1,1,1,1,1,0,1,1,0,1,0,0,0,0,1,0,1,0,0,0,1,1,1,1,1,0,1,0,1,1,0,1,1,0,0,0,1,1,1,1,1,1,0,0,1,1,1,1,0,1,1,1,0,0,1,0,0,1,0,1,1,1,0,1,1,0,1,1,1,1,0,1,1,0,1,1,1,1,0,0,1,0,0,1,1,1,1,0,0,1,1,1,0,0,0,0,1,1,1,1,1,1,0,1,0,1,1,0,1,1,0,1,1,1,0,0,0,0,0,1,1,0,0,0,1,0,1,1,1,1,0,1,1,1,0,1,1,1,1,1,1,1,0,0,1,0,0,1,1,0,1,1,1,0,1,0,0,1,0,1,0,1,1,1,1,1,0,1,0,1,0,1,0,0,0,0,1,0,0,1,1,1,1,0,1,0,0,1,0,1,0,0,0,1,1,1,0,1,1,0,1,1,0,1,0,1,1,0,0,0,0,1,1,0,0,0,1,0,1,0,1,0,0,0,1,0,0,1,1,0,0,0,0,0,1,1,1,0,0,1,1,0,0,1,0,1,1,0,0,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,1,0,0,0,0,1,0,1,0,1,0,1,1,0,0,0,1,1,0,1,1,0,1,0,1,1,1,1,0,0,0,0,1,1,1,0,1,0,0,0,0,0,1,0,0,1,0,0,0,0,0,1,0,0,1,1,1,1,0,0,1,1,0,0,0,0,1,1,1,1,1,1,1,1,0,1,1,0,0,0,1,1,1,0,0,0,1,0,1,1,1,0,0,0,0,1,1,0,1,0,0,0,1,1,1,1,0,0,1,0,1,1,0,0,0,1,1,1,1,1,1,0,1,1,1,0,1,1,1,0,0,1,0,1,1,0,0,1,1,0,1,1,1,1,0,1,0,0,1,0,0,0,0,1,1,0,0,0,1,0,1,1,1,0,1,1,0,1,0,1,0,1,0,0,0,1,1,1,1,1,0,1,1,0,0,0,1,0,0,1,0,0,0,0,1,0,1,0,1,1,1,0,1,0,0,1,0,1,0,0,0,1,0,1,0,1,1,1,0,0,1,0,0,1,0,0,1,1,1,0,1,1,0,0,1,1,0,1,1,1,1,1,1,1,0,1,1,1,1,0,1,0,1,0,1,0,1,0,1,0,0,1,0,1,1,1,0,1,1,1,1,0,1,1,0,1,0,0,1,0,1,0,0,0,1,1,0,0,0,0,1,1,0,0,0,1,0,1,1,1,0,1,0,0,1,1,0,1,1,0,1,0,0,1,1,1,0,0,0,1,0,1,0,0,0,1,1,1,0,1,0,1,1,0,0,1,0,1,0,1,1,0,0,0,0,0,0,1,0,1,0,1,1,0,1,1,0,0,0,1,0,0,1,1,0,1,0,1,1,1,1,1,0,0,1,0,0,1,1,0,0,1,0,0,0,0,1,1,1,1,0,0,0,1,1,1,1,1,1,0,0,0,1,0,0,1,0,0,1,1,0,1,1,0,0,1,0,1,1,1,1,0,1,1,0,0,1,1,0,0,1,0,1,0,0,0,0,1,1,0,0,0,1,0,0,1,0,0,1,1,0,1,0,1,1,0,1,0,0,1,1,1,0,0,1,1,1,0,1,0,0,1,0,0,0,0,0,0,0,0,1,0,1,0,1,0,0,1,0,0,0,0,0,0,1,0,0,0,0,1,1,1,0,1,0,1,0,0,1,0,1,0,1,0,0,0,1,0,1,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0,1,1,0,1,1,0,0,1,1,0,0,1,0,1,0,0,1,0,0,0,1,1,0,1,0,1,0,1,1,0,1,1,0,1,1,0,0,1,1,0,0,0,1,1,1,0,1,1,0,1,0,1,1,0,0,0,0,0,0,1,0,0,0,1,0,1,1,0,1,0,1,1,0,1,1,1,1,1,1,1,1,1,0,0,0,1,0,0,0,1,1,1,0,1,1,1,0,0,1,0,0,0,0,0,1,0,0,1,0,1,0,1,1,1,1,1,0,0,0,0,1,0,0,0,0,0,1,1,0,0,0,0,1,0,1,1,0,0,1,0,0,1,1,1,1,0,1,0,0,1,1,0,0,0,0,1,1,1,1,1,1,1,0,0,1,0,1,0,1,1,1,0,0,1,1,1,0,0,1,0,1,0,1,0,0,1,1,0,1,0,0,0,1,0,1,0,0,0,1,1,1,0,1,0,0,0,1,0,0,1,1,1,0,0,1,0,1,0,0,1,0,1,0,0,0,1,0,1,1,0,0,1,1,1,1,0,0,1,1,1,1,0,0,0,1,0,1,0,1,0,0,1,0,0,0,0,1,1,1,0,1,0,1,1,1,1,0,1,0,0,0,0,1,0,1,1,1,1,0,1,0,1,0,0,0,0,0,1,0,0,0,0,1,1,0,1,0,1,1,1,0,1,0,1,0,0,1,1,1,1,1,1,1,0,0,0,0,1,0,0,0,1,0,1,0,0,1,0,1,1,0,1,0,0,1,1,1,0,1,0,0,0,0,1,1,1,1,0,1,0,1,0,1,1,0,0,1,0,1,0,0,1,0,1,0,0,1,0,1,1,0,1,0,1,0,0,0,1,1,1,1,0,1,1,1,1,0,0,1,0,1,1,0,1,1,1,0,1,0,0,1,1,1,0,1,1,0,1,1,0,1,0,1,0,0,0,0,1,0,0,1,1,1,1,1,0,1,0,0,0,1,0,1,0,1,0,0,0,0,1,0,1,1,1,1,1,0,0,1,0,1,1,0,1,1,1,1,0,1,0,1,1,1,0,1,0,1,1,0,1,1,1,0,0,1,1,0,0,1,1,1,1,0,0,0,1,0,1,0,1,0,1,1,0,0,1,1,0,0,1,1,1,1,0,1,0,0,1,1,0,1,1,1,1,1,1,0,0,0,1,1,0,0,1,0,0,1,1,1,0,1,0,1,1,0,1,1,1,1,0,0,0,0,0,0,1,1,1,0,0,1,0,0,0,0,0,1,1,0,0,0,1,1,1,0,0,1,1,0,1,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,1,0,0,0,0,0,1,1,0,0,0,0,1,0,0,0,1,1,0,0,1,1,1,1,0,1,0,1,1,1,0,0,0,0,1,1,0,1,0,1,1,1,1,1,1,1,0,0,1,1,0,1,1,0,1,0,0,0,1,0,0,0,0,1,1,1,1,1,0,0,0,1,0,1,1,1,1,1,0,0,0,1,0,0,0,1,0,0,0,0,1,1,1,0,1,0,0,0,0,0,0,1,0,1,0,0,1,0,1,0,0,0,0,0,1,0,0,1,1,1,1,1,1,1,0,0,1,0,1,0,0,1,1,0,1,0,0,1,0,1,0,1,0,1,0,1,0,0,1,0,0,0,1,1,1,0,1,0,1,0,1,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,0,1,0,1,0,1,0,1,0,1,0,1,0,0,0,1,1,1,1,1,1,0,1,0,1,0,0,1,1,0,0,0,1,0,0,0,1,1,1,1,1,0,1,1,0,1,0,0,0,1,0,1,1,0,0,1,1,1,1,0,1,1,1,0,1,0,1,1,1,0,1,0,1,1,0,0,0,1,1,0,1,0,1,0,0,0,0,1,0,1,0,1,0,1,0,1,0,0,0,1,1,0,0,0,0,1,1,1,0,1,1,1,0,0,1,1,1,0,0,0,1,1,1,1,0,0,1,0,1,1,1,0,1,0,1,1,0,1,1,1,0,0,0,1,0,0,0,0,1,1,1,0,1,0,1,0,0,1,0,1,1,1,0,1,0,1,0,1,1,0,0,0,0,0,0,0,1,1,0,1,1,0,1,1,0,0,0,0,0,1,1,1,1,0,1,1,1,1,0,1,0,0,0,1,0,0,0,1,1,0,0,0,1,0,1,1,0,0,0,1,1,0,0,1,0,1,0,0,1,0,1,1,1,0,1,0,1,0,0,1,1,0,0,0,1,1,1,0,0,1,0,1,0,0,0,0,1,0,1,0,0,0,1,0,1,0,1,0,1,0,0,0,0,1,0,0,1,1,0,1,1,1,1,0,1,0,0,1,1,1,1,1,1,0,1,1,0,0,0,0,0,1,0,0,];
var gg_b = "1754920801/";

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
