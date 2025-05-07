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
case 1823:
case 3362:
case 201:
case 52:
case 3077:
case 2175:
case 3424:
case 3985:
case 3956:
case 2202:
case 1606:
case 159:
case 1567:
case 2529:
case 3181:
case 95:
case 2080:
case 2284:
case 1593:
case 1549:
case 449:
case 1801:
case 636:
case 2378:
case 1437:
case 3719:
case 13:
case 1882:
case 1804:
case 766:
case 2032:
case 3825:
case 375:
case 1880:
case 595:
case 1998:
case 3131:
case 1786:
case 496:
case 755:
case 701:
case 3815:
case 2663:
case 3134:
case 181:
case 2958:
case 3729:
case 2023:
case 2940:
case 2200:
case 1487:
case 3414:
case 1813:
case 2082:
case 2351:
case 2697:
case 980:
case 1394:
case 1043:
case 202:
case 3100:
case 2059:
case 2519:
case 3360:
case 1933:
case 1391:
case 1657:
case 2354:
case 3269:
case 3907:
case 774:
case 3715:
case 4011:
case 497:
case 171:
case 4014:
case 354:
case 385:
case 1855:
case 850:
case 3370:
case 3989:
case 3853:
case 2491:
case 3106:
case 3366:
case 2387:
case 1732:
case 1926:
case 1409:
case 1451:
case 831:
case 2179:
case 2206:
case 2494:
case 3952:
case 267:
case 970:
case 1577:
case 4003:
case 2515:
case 3157:
case 2964:
case 3265:
case 832:
case 88:
case 1095:
case 1723:
case 274:
case 2257:
case 3067:
case 3627:
case 1916:
case 1478:
case 2368:
case 1634:
case 3049:
case 767:
case 2799:
case 3093:
case 3208:
case 3939:
case 1631:
case 1759:
case 536:
case 510:
case 501:
case 3535:
case 555:
case 1796:
case 1988:
case 584:
case 1278:
case 1890:
case 22:
case 2785:
case 3774:
case 2756:
case 2540:
case 3408:
case 2848:
case 2373:
case 2018:
case 2850:
case 3317:
case 1384:
case 2839:
case 2687:
case 3742:
case 1520:
case 1302:
case 443:
case 2919:
case 1052:
case 1381:
case 1254:
case 1050:
case 2291:
case 2571:
case 862:
case 2735:
case 2605:
case 3327:
case 3846:
case 2406:
case 2294:
case 1176:
case 2090:
case 3556:
case 3585:
case 158:
case 72:
case 99:
case 1300:
case 4047:
case 2929:
case 3995:
case 1522:
case 1160:
case 1331:
case 1993:
case 502:
case 2852:
case 3641:
case 1949:
case 566:
case 2637:
case 2668:
case 667:
case 1892:
case 2707:
case 737:
case 1306:
case 2915:
case 1166:
case 1977:
case 1287:
case 2400:
case 3214:
case 2111:
case 3858:
case 3010:
case 3550:
case 914:
case 3469:
case 807:
case 1085:
case 2114:
case 602:
case 2434:
case 666:
case 2789:
case 969:
case 3447:
case 1792:
case 3539:
case 4079:
case 567:
case 2752:
case 457:
case 2546:
case 2885:
case 3764:
case 2103:
case 1473:
case 574:
case 4065:
case 3871:
case 394:
case 1790:
case 3203:
case 1945:
case 1268:
case 1237:
case 54:
case 3660:
case 3589:
case 890:
case 3020:
case 2481:
case 1205:
case 320:
case 2925:
case 1357:
case 1691:
case 4008:
case 2654:
case 2124:
case 3475:
case 2484:
case 3221:
case 3552:
case 147:
case 2397:
case 1728:
case 3842:
case 2402:
case 1694:
case 840:
case 2803:
case 1319:
case 37:
case 1844:
case 2271:
case 3692:
case 2425:
case 3499:
case 3174:
case 1014:
case 471:
case 2626:
case 1222:
case 2066:
case 75:
case 2984:
case 128:
case 3975:
case 3171:
case 2070:
case 3285:
case 2274:
case 1841:
case 2902:
case 1011:
case 1646:
case 1283:
case 538:
case 3618:
case 902:
case 739:
case 344:
case 1445:
case 1298:
case 3158:
case 2934:
case 123:
case 1578:
case 1870:
case 3791:
case 4095:
case 1776:
case 525:
case 3235:
case 2931:
case 2814:
case 2240:
case 2044:
case 1003:
case 3628:
case 3068:
case 2349:
case 3037:
case 984:
case 2367:
case 2415:
case 2107:
case 3005:
case 2900:
case 2072:
case 135:
case 1233:
case 1021:
case 1212:
case 3386:
case 1493:
case 3332:
case 459:
case 3313:
case 427:
case 3894:
case 2453:
case 885:
case 1770:
case 3503:
case 2711:
case 1766:
case 3146:
case 2610:
case 245:
case 350:
case 3380:
case 1671:
case 3524:
case 43:
case 482:
case 149:
case 1315:
case 1674:
case 1192:
case 770:
case 763:
case 3521:
case 2062:
case 2429:
case 3514:
case 3965:
case 3250:
case 1190:
case 3248:
case 69:
case 514:
case 3301:
case 3161:
case 1741:
case 38:
case 3382:
case 493:
case 3304:
case 1325:
case 1744:
case 3164:
case 809:
case 2957:
case 2261:
case 638:
case 270:
case 967:
case 1488:
case 3323:
case 1128:
case 1862:
case 2139:
case 2698:
case 768:
case 2724:
case 3330:
case 569:
case 745:
case 3239:
case 1640:
case 2721:
case 1136:
case 3781:
case 3857:
case 1288:
case 3632:
case 1717:
case 3439:
case 3784:
case 2865:
case 1342:
case 2383:
case 725:
case 2677:
case 1615:
case 361:
case 2808:
case 670:
case 3569:
case 1371:
case 2461:
case 2581:
case 3734:
case 2195:
case 3129:
case 306:
case 3097:
case 3682:
case 1065:
case 225:
case 3731:
case 92:
case 3575:
case 2229:
case 1155:
case 1426:
case 2502:
case 2320:
case 157:
case 3601:
case 3806:
case 1249:
case 447:
case 4007:
case 3153:
case 1358:
case 1293:
case 645:
case 1340:
case 1008:
case 2769:
case 937:
case 668:
case 233:
case 1727:
case 738:
case 3831:
case 2326:
case 2215:
case 1597:
case 1277:
case 1420:
case 65:
case 1180:
case 1619:
case 453:
case 111:
case 3834:
case 2557:
case 3392:
case 1075:
case 2688:
case 769:
case 2779:
case 1113:
case 3435:
case 4052:
case 1827:
case 1132:
case 446:
case 3706:
case 1346:
case 1563:
case 3636:
case 1047:
case 3884:
case 458:
case 1817:
case 2649:
case 214:
case 1483:
case 894:
case 3903:
case 1245:
case 1937:
case 4048:
case 1130:
case 2225:
case 1159:
case 4039:
case 165:
case 1361:
case 570:
case 3579:
case 3655:
case 563:
case 3485:
case 2474:
case 3125:
case 2027:
case 2506:
case 1364:
case 1422:
case 0:
case 680:
case 2143:
case 3921:
case 148:
case 444:
case 3454:
case 1366:
case 1599:
case 252:
case 1543:
case 2849:
case 2501:
case 2559:
case 2019:
case 2675:
case 2314:
case 2893:
case 1617:
case 3732:
case 1829:
case 371:
case 716:
case 2530:
case 730:
case 2867:
case 583:
case 3855:
case 47:
case 3886:
case 705:
case 3545:
case 154:
case 185:
case 4087:
case 1725:
case 1344:
case 592:
case 3634:
case 2053:
case 4005:
case 2513:
case 1939:
case 1208:
case 205:
case 896:
case 1265:
case 2321:
case 1948:
case 4037:
case 3577:
case 326:
case 1157:
case 109:
case 1038:
case 2990:
case 2324:
case 678:
case 90:
case 2888:
case 2197:
case 216:
case 692:
case 2441:
case 3273:
case 3593:
case 1825:
case 3804:
case 2444:
case 1403:
case 3468:
case 1719:
case 2586:
case 3117:
case 2555:
case 1424:
case 1184:
case 2845:
case 1077:
case 1362:
case 2472:
case 2679:
case 2788:
case 2217:
case 3736:
case 578:
case 398:
case 1421:
case 1985:
case 359:
case 3538:
case 3813:
case 2749:
case 3920:
case 3487:
case 3127:
case 2793:
case 2025:
case 3099:
case 2665:
case 3391:
case 3657:
case 2227:
case 2470:
case 1360:
case 3998:
case 432:
case 3755:
case 4051:
case 3786:
case 175:
case 1935:
case 942:
case 1134:
case 381:
case 2608:
case 304:
case 4054:
case 2738:
case 2877:
case 683:
case 1815:
case 717:
case 3792:
case 36:
case 2042:
case 2528:
case 2820:
case 2913:
case 792:
case 1539:
case 1548:
case 3287:
case 2071:
case 3170:
case 1550:
case 1858:
case 1010:
case 856:
case 589:
case 3306:
case 2074:
case 2270:
case 2187:
case 3056:
case 2590:
case 679:
case 976:
case 3718:
case 1662:
case 120:
case 3691:
case 1589:
case 2982:
case 3205:
case 292:
case 1224:
case 1552:
case 347:
case 812:
case 3694:
case 1842:
case 3728:
case 3526:
case 1221:
case 1475:
case 288:
case 3473:
case 783:
case 2822:
case 2168:
case 505:
case 103:
case 2930:
case 3144:
case 1874:
case 2241:
case 791:
case 3945:
case 1203:
case 2716:
case 3268:
case 462:
case 516:
case 2058:
case 1871:
case 2040:
case 3141:
case 530:
case 3520:
case 3162:
case 2783:
case 964:
case 3089:
case 3497:
case 1317:
case 1507:
case 2611:
case 1670:
case 3052:
case 3512:
case 2816:
case 353:
case 407:
case 1771:
case 3796:
case 1535:
case 651:
case 605:
case 3988:
case 2722:
case 1408:
case 773:
case 1774:
case 919:
case 3949:
case 2720:
case 3331:
case 3039:
case 490:
case 3334:
case 2712:
case 2624:
case 778:
case 2798:
case 689:
case 273:
case 2260:
case 2276:
case 2109:
case 3050:
case 3254:
case 1194:
case 2369:
case 986:
case 857:
case 1758:
case 2621:
case 2061:
case 1995:
case 829:
case 3938:
case 3251:
case 3967:
case 2154:
case 579:
case 1016:
case 1289:
case 1979:
case 2572:
case 2292:
case 1696:
case 3671:
case 1521:
case 664:
case 1495:
case 3226:
case 3438:
case 1252:
case 2656:
case 1078:
case 871:
case 1894:
case 3642:
case 20:
case 1313:
case 521:
case 2544:
case 2854:
case 1146:
case 1891:
case 2218:
case 3537:
case 4077:
case 905:
case 951:
case 522:
case 2705:
case 2635:
case 234:
case 3772:
case 1323:
case 3128:
case 3488:
case 3640:
case 2436:
case 1239:
case 3658:
case 3963:
case 1330:
case 2228:
case 1359:
case 1301:
case 587:
case 4045:
case 396:
case 3997:
case 1965:
case 1054:
case 826:
case 1248:
case 3587:
case 3325:
case 2399:
case 70:
case 2566:
case 1304:
case 1164:
case 1009:
case 1382:
case 18:
case 1051:
case 2094:
case 2343:
case 132:
case 2878:
case 3216:
case 622:
case 3646:
case 3283:
case 741:
case 3445:
case 3762:
case 83:
case 2423:
case 2183:
case 1174:
case 1499:
case 1087:
case 2296:
case 454:
case 2868:
case 2122:
case 2778:
case 2689:
case 676:
case 17:
case 713:
case 1443:
case 242:
case 218:
case 1285:
case 2401:
case 3841:
case 2459:
case 1171:
case 3196:
case 2110:
case 586:
case 328:
case 1975:
case 2112:
case 300:
case 2395:
case 2650:
case 2133:
case 3477:
case 3220:
case 2927:
case 2120:
case 2754:
case 1947:
case 1791:
case 1235:
case 3760:
case 1794:
case 1628:
case 1037:
case 2413:
case 917:
case 213:
case 3498:
case 3132:
case 4026:
case 641:
case 1435:
case 722:
case 3563:
case 1636:
case 2232:
case 3346:
case 3597:
case 356:
case 2081:
case 3180:
case 41:
case 221:
case 787:
case 1115:
case 776:
case 1407:
case 2177:
case 107:
case 988:
case 311:
case 2389:
case 1655:
case 1924:
case 3905:
case 190:
case 2000:
case 3101:
case 534:
case 2972:
case 3361:
case 3410:
case 3629:
case 2695:
case 3422:
case 3182:
case 2350:
case 2873:
case 2763:
case 3069:
case 3104:
case 1456:
case 1485:
case 2201:
case 2259:
case 2230:
case 1802:
case 618:
case 642:
case 3483:
case 3123:
case 287:
case 1328:
case 2797:
case 276:
case 1884:
case 983:
case 3047:
case 3817:
case 2031:
case 3130:
case 2223:
case 1757:
case 2944:
case 3653:
case 3937:
case 846:
case 161:
case 2863:
case 1448:
case 2356:
case 2385:
case 3615:
case 4083:
case 2490:
case 3416:
case 3371:
case 1680:
case 2962:
case 853:
case 4022:
case 1547:
case 542:
case 3978:
case 3136:
case 2897:
case 2188:
case 1702:
case 1439:
case 4010:
case 3717:
case 1784:
case 973:
case 541:
case 3358:
case 4033:
case 3727:
case 2418:
case 420:
case 219:
case 3065:
case 2138:
case 2699:
case 3625:
case 2307:
case 2492:
case 1604:
case 2643:
case 1734:
case 162:
case 60:
case 1097:
case 1682:
case 2286:
case 1129:
case 2255:
case 329:
case 115:
case 3909:
case 403:
case 1659:
case 1601:
case 1452:
case 2517:
case 513:
case 1295:
case 2682:
case 1286:
case 895:
case 3312:
case 262:
case 3581:
case 4058:
case 1492:
case 1699:
case 3333:
case 119:
case 1167:
case 2295:
case 2575:
case 3320:
case 2601:
case 3994:
case 215:
case 2630:
case 2700:
case 3879:
case 1335:
case 1418:
case 2623:
case 3645:
case 333:
case 3398:
case 1193:
case 39:
case 483:
case 2547:
case 82:
case 2784:
case 4071:
case 1236:
case 2632:
case 491:
case 706:
case 1188:
case 2702:
case 68:
case 2613:
case 186:
case 1897:
case 177:
case 3464:
case 1356:
case 837:
case 2119:
case 2448:
case 3808:
case 3500:
case 1863:
case 261:
case 3461:
case 3310:
case 2569:
case 2396:
case 2680:
case 3219:
case 1527:
case 2884:
case 3875:
case 4061:
case 176:
case 1034:
case 67:
case 532:
case 1944:
case 1223:
case 460:
case 1031:
case 1972:
case 2299:
case 3225:
case 1496:
case 1204:
case 2243:
case 2924:
case 3316:
case 2655:
case 3199:
case 2125:
case 1259:
case 3474:
case 2921:
case 1695:
case 2565:
case 121:
case 2914:
case 1081:
case 3215:
case 724:
case 994:
case 2834:
case 207:
case 4046:
case 1177:
case 1280:
case 2407:
case 1966:
case 903:
case 2115:
case 3017:
case 3557:
case 2435:
case 3779:
case 550:
case 3869:
case 1213:
case 2636:
case 3440:
case 1232:
case 3458:
case 531:
case 2140:
case 562:
case 2158:
case 3811:
case 3934:
case 430:
case 4029:
case 1754:
case 2947:
case 1432:
case 1639:
case 3044:
case 1198:
case 3393:
case 3814:
case 607:
case 1413:
case 515:
case 2068:
case 1751:
case 2628:
case 3107:
case 2005:
case 4053:
case 3367:
case 339:
case 3415:
case 141:
case 1395:
case 1648:
case 802:
case 3900:
case 1112:
case 2207:
case 1120:
case 1480:
case 1562:
case 2690:
case 2355:
case 1927:
case 3616:
case 142:
case 884:
case 3981:
case 3803:
case 1560:
case 1482:
case 1122:
case 1576:
case 3156:
case 1296:
case 3271:
case 1404:
case 2174:
case 3185:
case 3984:
case 3066:
case 1917:
case 975:
case 1110:
case 1652:
case 2171:
case 2256:
case 3274:
case 1459:
case 561:
case 1423:
case 3388:
case 244:
case 2618:
case 1805:
case 3824:
case 2248:
case 1091:
case 954:
case 2161:
case 2359:
case 2301:
case 1737:
case 3419:
case 3148:
case 874:
case 3150:
case 2009:
case 3703:
case 2164:
case 3261:
case 1566:
case 2304:
case 1399:
case 134:
case 370:
case 1705:
case 363:
case 3698:
case 731:
case 3345:
case 1228:
case 2330:
case 750:
case 4025:
case 2908:
case 1436:
case 3714:
case 909:
case 732:
case 1787:
case 662:
case 2078:
case 606:
case 2503:
case 3711:
case 507:
case 3453:
case 2891:
case 2146:
case 1544:
case 1292:
case 2380:
case 3610:
case 2289:
case 1455:
case 2524:
case 2495:
case 3571:
case 1596:
case 4031:
case 3735:
case 160:
case 575:
case 2479:
case 2672:
case 1109:
case 1064:
case 1986:
case 1260:
case 71:
case 1798:
case 4034:
case 2016:
case 2585:
case 3294:
case 487:
case 3090:
case 1061:
case 685:
case 2641:
case 961:
case 1603:
case 1712:
case 3668:
case 3707:
case 1733:
case 1347:
case 540:
case 2861:
case 4084:
case 32:
case 1816:
case 609:
case 3785:
case 4081:
case 2864:
case 3018:
case 1936:
case 421:
case 3373:
case 1375:
case 2317:
case 1614:
case 2465:
case 838:
case 2670:
case 2507:
case 1262:
case 2874:
case 3885:
case 2764:
case 708:
case 2098:
case 3546:
case 203:
case 3363:
case 3748:
case 1168:
case 1822:
case 907:
case 640:
case 1137:
case 3750:
case 188:
case 2761:
case 1040:
case 419:
case 2871:
case 1244:
case 509:
case 2224:
case 1982:
case 2589:
case 3654:
case 1417:
case 3739:
case 3609:
case 336:
case 3397:
case 2842:
case 477:
case 2214:
case 2550:
case 1071:
case 2840:
case 3400:
case 208:
case 1266:
case 1980:
case 2469:
case 1379:
case 2022:
case 3561:
case 3114:
case 183:
case 1898:
case 1270:
case 3678:
case 3789:
case 4006:
case 3434:
case 2447:
case 3807:
case 1932:
case 2539:
case 1726:
case 3431:
case 720:
case 1820:
case 275:
case 3940:
case 3023:
case 2729:
case 3795:
case 3663:
case 608:
case 97:
case 3958:
case 1665:
case 3200:
case 1025:
case 3004:
case 3169:
case 366:
case 3351:
case 3082:
case 2753:
case 3059:
case 3001:
case 2100:
case 1227:
case 1466:
case 2907:
case 2376:
case 434:
case 301:
case 2362:
case 3971:
case 384:
case 3281:
case 2077:
case 2424:
case 603:
case 2184:
case 1555:
case 1586:
case 775:
case 2275:
case 2595:
case 1217:
case 694:
case 620:
case 3942:
case 2719:
case 3553:
case 1173:
case 1444:
case 2825:
case 3032:
case 3515:
case 754:
case 503:
case 3055:
case 2157:
case 785:
case 105:
case 151:
case 2372:
case 374:
case 1888:
case 130:
case 3305:
case 1324:
case 1745:
case 1990:
case 2067:
case 209:
case 3337:
case 3368:
case 1303:
case 2819:
case 2344:
case 520:
case 1647:
case 2725:
case 2939:
case 2208:
case 2341:
case 1928:
case 950:
case 3946:
case 1867:
case 189:
case 1838:
case 1777:
case 709:
case 932:
case 2829:
case 1918:
case 3036:
case 254:
case 1523:
case 508:
case 418:
case 442:
case 1311:
case 1582:
case 2989:
case 2543:
case 152:
case 1504:
case 2366:
case 1476:
case 2279:
case 2106:
case 1893:
case 1314:
case 3387:
case 2952:
case 1501:
case 1019:
case 367:
case 3494:
case 3206:
case 1316:
case 322:
case 2905:
case 3282:
case 1471:
case 892:
case 3204:
case 1225:
case 2159:
case 2101:
case 3000:
case 2069:
case 3763:
case 3348:
case 2629:
case 2422:
case 1708:
case 1506:
case 169:
case 2104:
case 1474:
case 3259:
case 3941:
case 2483:
case 3797:
case 114:
case 376:
case 596:
case 3230:
case 2817:
case 3339:
case 1875:
case 3223:
case 495:
case 2130:
case 2937:
case 712:
case 243:
case 600:
case 1869:
case 1688:
case 1779:
case 1440:
case 1458:
case 437:
case 765:
case 2420:
case 2277:
case 256:
case 1215:
case 1326:
case 2987:
case 3966:
case 1847:
case 3084:
case 3280:
case 1017:
case 2433:
case 3002:
case 2619:
case 3970:
case 42:
case 500:
case 2340:
case 2573:
case 2293:
case 9:
case 2249:
case 1446:
case 436:
case 1645:
case 1253:
case 133:
case 2727:
case 3149:
case 3335:
case 1879:
case 2625:
case 873:
case 319:
case 2065:
case 1333:
case 3286:
case 3960:
case 3643:
case 1312:
case 257:
case 3057:
case 2155:
case 138:
case 3773:
case 1322:
case 2615:
case 1464:
case 3356:
case 3385:
case 2416:
case 1219:
case 3006:
case 3490:
case 1310:
case 1461:
case 2371:
case 729:
case 757:
case 1534:
case 1383:
case 597:
case 3897:
case 386:
case 1865:
case 1775:
case 528:
case 2717:
case 1724:
case 4059:
case 4001:
case 1139:
case 1345:
case 2772:
case 334:
case 2488:
case 2862:
case 2128:
case 749:
case 4004:
case 2963:
case 1721:
case 2640:
case 3436:
case 548:
case 512:
case 466:
case 4082:
case 402:
case 2741:
case 1060:
case 805:
case 1264:
case 1620:
case 2587:
case 4023:
case 3091:
case 1261:
case 1957:
case 3399:
case 2325:
case 3343:
case 4030:
case 1419:
case 1148:
case 3768:
case 1612:
case 830:
case 1703:
case 3094:
case 816:
case 543:
case 3486:
case 2505:
case 1152:
case 3292:
case 852:
case 4032:
case 1610:
case 145:
case 3572:
case 1622:
case 1062:
case 972:
case 2192:
case 3685:
case 2315:
case 2438:
case 2467:
case 1906:
case 2642:
case 1246:
case 2118:
case 30:
case 556:
case 1683:
case 1714:
case 3787:
case 2493:
case 484:
case 401:
case 455:
case 2770:
case 657:
case 511:
case 3395:
case 1072:
case 3650:
case 3112:
case 1900:
case 2220:
case 2024:
case 1415:
case 1338:
case 1367:
case 44:
case 2212:
case 3480:
case 2021:
case 2233:
case 2661:
case 927:
case 2866:
case 2776:
case 656:
case 1041:
case 2760:
case 1934:
case 998:
case 15:
case 2298:
case 728:
case 2353:
case 1811:
case 1349:
case 4086:
case 611:
case 2003:
case 3709:
case 879:
case 3887:
case 1258:
case 3198:
case 665:
case 735:
case 1824:
case 3805:
case 648:
case 612:
case 3576:
case 4036:
case 2014:
case 1185:
case 3404:
case 1271:
case 1981:
case 318:
case 3122:
case 3482:
case 3689:
case 2551:
case 1274:
case 297:
case 3652:
case 723:
case 993:
case 228:
case 1984:
case 1626:
case 3917:
case 3904:
case 822:
case 2205:
case 1481:
case 572:
case 3982:
case 1402:
case 1609:
case 136:
case 2172:
case 63:
case 3883:
case 2007:
case 1124:
case 943:
case 1739:
case 3417:
case 2526:
case 3137:
case 1363:
case 3822:
case 2473:
case 1750:
case 1103:
case 887:
case 1885:
case 526:
case 3716:
case 2237:
case 2268:
case 2896:
case 425:
case 956:
case 698:
case 3518:
case 747:
case 3833:
case 2792:
case 1807:
case 1789:
case 1678:
case 1434:
case 948:
case 3042:
case 3820:
case 965:
case 3528:
case 3726:
case 1431:
case 1111:
case 571:
case 1400:
case 2287:
case 2166:
case 1915:
case 1564:
case 821:
case 3590:
case 383:
case 49:
case 2056:
case 3266:
case 1835:
case 604:
case 4027:
case 3720:
case 2949:
case 469:
case 1852:
case 3826:
case 7:
case 2993:
case 1707:
case 3347:
case 3733:
case 2892:
case 864:
case 2334:
case 1668:
case 1889:
case 1637:
case 1953:
case 3712:
case 593:
case 3986:
case 819:
case 3064:
case 1605:
case 360:
case 3369:
case 1735:
case 1571:
case 2818:
case 3151:
case 671:
case 195:
case 2522:
case 2160:
case 258:
case 1090:
case 1294:
case 2967:
case 1406:
case 299:
case 2302:
case 3783:
case 2520:
case 672:
case 1092:
case 2384:
case 3262:
case 2512:
case 1919:
case 582:
case 2:
case 2052:
case 253:
case 2890:
case 2598:
case 626:
case 4017:
case 929:
case 3710:
case 799:
case 957:
case 2463:
case 3178:
case 1373:
case 598:
case 3722:
case 1368:
case 14:
case 1337:
case 272:
case 2782:
case 646:
case 834:
case 3928:
case 547:
case 2701:
case 3513:
case 6:
case 3053:
case 2263:
case 4072:
case 2600:
case 351:
case 1964:
case 1055:
case 1515:
case 653:
case 2577:
case 3324:
case 45:
case 3990:
case 771:
case 4041:
case 3197:
case 1257:
case 330:
case 3462:
case 3580:
case 3504:
case 3992:
case 2454:
case 480:
case 3476:
case 3582:
case 56:
case 352:
case 2681:
case 167:
case 3019:
case 2602:
case 1494:
case 1206:
case 2732:
case 1387:
case 772:
case 3675:
case 1895:
case 80:
case 4066:
case 3530:
case 3838:
case 389:
case 658:
case 3523:
case 726:
case 1036:
case 102:
case 3749:
case 1351:
case 1082:
case 3665:
case 782:
case 1004:
case 2099:
case 2832:
case 1200:
case 3466:
case 470:
case 1354:
case 2933:
case 3470:
case 3227:
case 1059:
case 1519:
case 2998:
case 1030:
case 1234:
case 293:
case 759:
case 1795:
case 1940:
case 558:
case 1023:
case 3536:
case 204:
case 1958:
case 281:
case 813:
case 4060:
case 3767:
case 1147:
case 2801:
case 3441:
case 2983:
case 935:
case 546:
case 4062:
case 1899:
case 1553:
case 2468:
case 2882:
case 23:
case 900:
case 2437:
case 5:
case 2405:
case 3845:
case 1281:
case 3586:
case 704:
case 3555:
case 155:
case 3472:
case 2910:
case 3679:
case 842:
case 1971:
case 818:
case 1284:
case 3217:
case 1529:
case 2567:
case 1202:
case 2606:
case 2830:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1746619202/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,0,1,0,0,1,1,1,0,1,0,0,0,1,1,1,0,1,1,0,1,0,1,1,0,0,0,0,0,0,1,0,1,0,0,0,1,1,1,1,0,1,1,1,1,1,0,1,0,1,0,0,1,0,1,0,1,0,0,0,1,0,0,1,0,1,0,1,1,1,1,1,1,0,0,1,0,0,0,0,1,0,1,1,0,0,0,0,1,0,1,0,1,0,0,1,0,1,0,1,0,0,1,1,0,1,0,1,0,1,0,1,0,0,1,1,0,0,0,1,1,1,0,1,0,0,0,0,1,0,1,0,1,1,1,1,1,0,1,0,0,1,1,0,0,1,0,1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,0,0,1,0,1,0,1,0,1,0,0,0,1,1,1,0,0,0,1,0,1,0,1,1,0,1,1,1,0,0,0,0,1,0,0,0,0,0,1,1,1,1,1,0,1,1,1,0,0,0,1,1,1,1,0,1,1,0,1,0,0,0,1,0,0,1,0,0,0,0,1,1,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,1,1,1,0,1,1,1,0,0,1,1,0,0,0,0,1,0,0,1,0,1,1,1,1,1,0,0,0,0,1,0,0,0,0,0,1,1,0,0,0,1,1,0,0,0,1,0,1,1,1,0,0,1,0,1,0,0,0,0,1,0,0,0,0,0,0,1,1,1,0,1,0,0,0,1,0,1,1,1,0,0,1,1,0,1,0,0,1,0,0,0,0,1,0,0,1,0,0,1,1,1,1,1,0,1,0,0,1,1,1,0,1,0,0,1,1,0,0,1,1,0,0,1,1,1,0,0,0,0,1,0,1,1,1,1,0,0,1,0,0,0,0,1,0,1,0,1,0,0,1,1,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,1,0,1,0,0,1,0,1,0,1,0,1,1,0,0,0,0,1,1,1,0,1,1,0,1,0,0,0,1,1,1,0,1,1,1,1,0,1,0,0,0,1,0,0,1,1,1,0,0,0,0,0,1,0,0,1,0,1,1,1,0,0,1,0,0,1,1,0,1,0,1,1,1,0,0,1,1,1,1,0,1,0,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,0,0,1,1,0,1,0,1,1,1,0,1,0,1,0,1,0,1,1,1,1,0,0,1,1,1,0,1,0,0,0,0,1,1,0,1,0,0,1,1,1,0,0,1,1,0,1,1,1,1,0,1,1,0,0,1,1,0,0,1,1,1,0,1,1,0,1,0,0,1,1,0,1,1,1,1,0,1,0,1,1,1,1,1,1,1,1,0,1,1,0,0,0,0,0,1,0,1,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,1,0,1,1,1,0,0,1,1,0,1,0,0,1,0,1,0,0,1,1,1,0,0,0,1,0,1,1,1,1,1,0,1,1,1,0,0,0,1,0,1,1,1,0,0,1,0,1,0,0,0,1,0,0,1,0,1,0,0,0,1,0,0,1,0,0,1,1,1,0,1,1,0,0,1,1,0,0,1,1,0,0,1,0,1,1,1,1,1,0,1,1,1,1,1,0,0,1,0,1,1,1,0,1,0,0,0,1,0,1,0,1,1,0,0,0,1,1,0,1,0,1,0,0,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,0,1,0,0,0,1,1,0,1,0,1,0,0,0,1,1,0,0,0,0,0,0,1,0,0,1,0,0,1,0,1,0,1,0,0,1,1,0,0,1,0,1,1,0,1,1,0,0,0,1,0,0,1,1,1,1,0,1,0,0,1,1,0,1,0,1,0,0,0,1,0,0,0,1,0,1,1,0,0,1,1,0,0,0,0,1,0,1,0,0,0,0,0,0,1,0,1,1,0,0,0,0,1,0,0,0,0,1,1,0,1,0,0,1,0,1,0,1,1,1,0,0,0,1,0,1,1,0,1,0,1,0,1,0,0,0,0,1,0,0,1,0,1,0,0,0,0,0,0,0,1,0,1,0,0,1,0,0,1,0,1,0,0,0,0,1,1,0,0,0,0,1,0,1,1,0,0,1,0,1,1,0,0,0,1,0,0,1,1,0,1,0,1,1,0,1,1,0,1,1,0,0,0,1,0,0,1,1,0,1,0,1,0,0,0,0,1,1,0,0,0,1,0,0,0,0,1,1,0,0,0,1,1,1,1,0,0,1,0,1,1,0,1,0,1,0,1,0,1,0,0,0,0,1,1,0,0,1,0,1,1,1,0,1,1,0,1,0,0,0,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1,0,1,1,0,0,0,0,0,1,1,0,0,1,0,1,1,0,0,1,1,0,0,1,0,1,0,0,1,1,1,0,0,1,0,1,0,0,0,0,0,1,0,0,0,0,0,1,1,1,1,1,0,1,0,0,0,0,1,0,1,0,1,0,0,0,1,1,1,0,1,0,1,0,1,1,0,1,0,0,0,0,0,0,1,1,1,0,0,0,1,0,0,1,0,1,0,1,1,0,0,0,1,0,1,1,1,0,0,1,0,1,1,0,1,1,0,0,1,0,0,0,1,1,0,0,1,0,1,0,1,1,1,0,0,0,1,0,1,0,1,1,1,1,1,0,1,0,0,0,1,1,0,1,0,1,0,1,0,1,1,1,1,1,0,1,1,0,0,0,1,1,1,1,1,1,0,1,0,0,0,0,1,1,1,0,1,1,0,0,1,1,1,0,0,1,1,1,1,1,1,0,1,1,1,0,1,0,1,1,0,0,1,0,0,1,1,0,1,1,0,1,1,1,1,1,1,1,0,0,1,1,1,1,1,0,1,0,1,1,1,1,1,0,1,0,0,0,1,1,1,1,1,1,1,1,0,1,0,0,1,1,1,1,1,0,1,0,1,1,0,1,0,1,0,1,1,0,1,0,1,0,1,1,1,1,0,1,0,1,0,0,1,0,1,1,1,1,1,1,1,1,1,0,1,1,1,0,0,1,0,1,0,1,0,0,0,1,0,1,1,1,1,0,0,1,0,0,0,1,0,0,1,1,0,0,0,1,1,0,1,1,1,0,1,1,1,1,0,0,0,1,0,1,0,1,1,1,1,1,1,1,1,0,1,0,0,0,0,1,1,0,1,1,1,1,0,1,1,0,0,1,1,1,1,0,1,0,0,1,1,0,0,1,1,0,1,1,0,1,0,0,1,0,1,0,0,0,0,1,0,1,1,1,1,0,1,0,1,1,1,1,0,1,0,1,1,0,0,0,1,1,1,1,1,0,0,1,0,1,0,0,1,0,1,1,0,0,0,0,0,0,0,1,0,0,0,1,1,1,1,1,0,0,0,1,0,1,0,0,0,0,1,1,0,0,0,1,0,0,0,1,1,0,0,1,1,1,1,0,1,1,0,1,0,0,0,0,1,0,1,1,1,0,1,1,0,0,0,1,0,0,0,0,1,1,1,0,0,0,1,0,0,0,1,0,0,1,0,0,0,1,0,0,1,1,0,1,0,1,0,1,1,1,1,0,0,1,1,0,1,0,1,1,0,1,0,1,1,0,1,0,0,0,1,0,1,0,0,1,0,0,1,0,1,1,0,1,1,0,0,0,0,1,1,1,1,0,0,0,1,0,0,1,0,1,0,1,0,0,1,0,0,1,0,0,1,0,1,1,0,0,1,0,0,0,1,0,1,0,1,1,0,0,0,0,1,0,0,1,0,0,1,1,1,0,0,1,0,0,1,1,0,1,0,1,1,0,0,0,1,0,1,0,0,1,0,1,0,1,0,1,1,1,1,1,1,0,0,0,1,1,1,1,0,1,0,1,0,1,0,0,1,1,0,0,0,0,1,1,0,0,1,0,0,1,1,1,0,0,0,0,0,0,1,0,0,0,1,1,0,0,1,1,1,1,0,1,0,0,0,0,1,0,1,1,0,1,1,1,1,0,1,1,1,0,1,0,0,1,1,0,1,1,0,1,0,0,0,1,0,1,0,1,1,1,0,0,1,0,1,1,1,1,0,1,0,1,0,0,0,0,0,1,0,0,1,0,0,1,1,0,1,0,0,1,0,0,0,0,1,0,0,1,0,0,1,0,0,0,1,1,0,1,0,1,0,1,1,1,0,0,1,1,0,0,0,1,1,0,1,0,1,1,0,0,1,1,1,1,1,1,1,1,0,1,1,1,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,1,0,1,1,1,0,0,0,1,1,1,1,1,1,0,1,1,0,0,0,1,1,0,1,1,1,0,0,0,1,0,0,0,1,1,0,0,0,0,0,1,1,1,0,0,0,0,1,1,0,0,1,0,1,0,1,1,1,1,0,1,1,1,0,1,0,1,0,0,1,0,1,0,0,1,0,1,0,0,1,0,1,0,1,0,1,0,0,0,0,1,0,1,0,1,1,0,1,1,1,1,1,0,1,0,0,0,1,1,0,0,0,0,0,0,0,1,0,1,0,1,0,0,0,0,0,0,0,1,1,0,0,1,0,1,1,0,1,1,0,0,1,1,1,1,1,1,1,1,0,1,0,0,1,1,0,1,1,1,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,1,1,1,1,0,1,1,0,1,1,0,1,1,1,1,0,1,1,0,0,1,1,1,0,1,0,1,1,0,0,1,0,1,0,0,1,0,0,0,0,1,1,1,0,0,1,0,0,1,0,0,0,0,0,0,0,1,1,0,1,1,1,1,1,0,0,1,0,1,0,1,0,0,1,1,0,1,1,0,1,0,1,0,0,0,1,1,0,0,1,1,0,0,0,1,0,0,1,0,1,0,0,1,1,1,0,0,1,1,1,1,0,0,0,1,0,1,1,0,1,1,0,1,0,0,1,1,1,0,1,1,1,1,0,1,1,0,0,0,1,0,0,1,1,0,1,0,0,0,0,1,1,0,0,0,0,0,1,1,1,0,1,1,1,0,1,0,0,0,0,1,0,1,1,0,0,1,1,1,1,0,1,0,0,0,0,1,0,1,1,0,1,0,1,1,1,1,1,1,0,1,1,0,1,1,0,1,0,0,1,0,0,0,0,0,0,1,1,0,1,0,0,1,1,0,0,1,1,1,0,0,0,1,0,0,0,1,0,0,0,0,0,1,1,0,1,1,0,0,0,0,1,1,1,0,1,1,1,1,0,0,1,0,0,1,0,0,0,1,1,1,1,0,1,1,1,0,0,1,0,1,0,1,0,0,1,1,1,0,1,0,1,0,0,0,0,0,1,1,1,0,1,1,1,1,0,0,1,1,1,0,0,0,0,0,1,0,1,1,0,1,0,1,0,1,1,1,1,0,0,0,1,0,0,0,1,1,1,1,1,1,0,0,1,0,0,1,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,0,1,0,1,0,1,0,1,1,1,1,0,1,1,1,0,0,0,0,1,0,1,0,1,1,0,0,0,1,0,1,1,1,1,1,1,0,0,0,0,0,1,1,1,0,1,1,1,0,0,0,0,1,1,0,1,0,1,0,1,1,0,1,0,1,0,1,0,1,1,1,0,0,0,0,0,0,0,0,1,1,0,0,1,1,0,1,1,0,0,1,1,0,0,0,1,0,1,0,1,0,0,0,0,0,1,1,1,0,1,0,1,1,1,0,1,0,1,0,0,0,1,0,0,0,1,1,1,0,1,1,0,0,0,0,1,0,0,1,0,1,1,1,0,0,1,1,0,1,0,1,1,0,1,0,1,0,0,1,1,0,1,0,1,1,1,1,0,1,1,1,0,1,0,0,1,1,1,0,0,1,1,1,1,0,0,0,0,0,1,1,0,0,0,1,1,1,0,0,0,0,1,0,1,0,1,0,0,1,0,1,0,1,0,0,1,0,1,0,1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,0,1,0,1,1,1,1,1,1,0,0,1,0,1,0,0,0,1,1,0,0,0,1,1,0,1,1,1,1,0,1,1,0,1,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,0,0,0,0,0,1,0,0,1,1,1,0,1,0,0,0,1,1,0,1,1,0,0,0,0,1,1,0,1,0,0,0,1,0,1,1,0,0,1,1,1,1,0,0,1,1,0,0,1,1,0,0,0,1,1,1,0,1,0,1,0,0,0,0,1,0,0,0,0,0,1,0,1,1,1,1,1,0,1,0,0,1,0,0,0,1,1,0,1,0,1,0,0,0,0,1,1,0,1,0,0,1,0,0,1,1,1,0,1,0,1,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,0,1,0,1,1,0,0,1,1,0,0,0,1,0,1,1,0,0,1,0,1,1,1,1,0,0,1,1,0,0,1,0,1,0,0,1,0,1,1,0,1,0,0,1,1,1,0,0,0,1,0,1,0,0,1,1,0,1,0,1,1,1,0,1,1,0,0,1,0,1,1,0,0,0,1,0,0,1,0,1,0,0,1,0,0,0,0,1,1,0,0,0,1,1,1,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,1,1,0,0,1,0,1,1,0,0,1,0,0,0,0,1,0,1,1,1,0,1,1,1,0,0,0,1,0,0,0,0,0,0,1,1,1,1,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,1,1,0,1,0,0,1,0,1,0,0,1,0,1,1,0,1,1,0,1,1,1,0,1,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,1,0,0,0,0,1,0,1,0,0,0,0,1,1,1,0,1,1,0,0,1,0,1,1,1,0,0,1,0,1,1,0,0,0,0,1,0,1,0,0,1,0,0,0,0,1,1,0,1,0,1,1,1,1,1,1,0,1,0,1,1,0,0,0,1,0,0,1,0,1,0,1,1,1,1,0,1,0,0,1,1,1,0,0,1,1,0,1,0,0,0,0,1,1,1,0,0,1,0,0,0,1,0,1,1,1,0,0,1,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,1,1,1,1,0,1,0,0,0,0,0,1,1,1,1,0,1,1,1,0,1,0,1,1,1,0,0,1,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,1,0,1,1,0,0,1,0,0,0,0,1,0,1,1,0,0,1,1,0,1,1,0,1,0,1,1,0,0,0,0,0,1,1,1,1,0,1,1,1,0,0,0,0,1,0,1,0,0,0,0,0,0,1,0,0,1,1,1,0,0,0,1,0,1,1,0,0,1,1,0,0,1,0,0,1,1,1,0,1,0,0,1,1,1,1,1,1,0,1,0,1,0,0,0,1,0,1,1,1,1,0,0,1,0,0,0,0,1,0,1,0,1,1,1,1,0,0,1,1,1,1,1,1,0,1,0,0,0,0,0,0,1,0,1,0,0,1,1,1,1,0,0,1,1,1,0,1,0,1,1,1,1,0,0,0,1,0,0,0,1,0,1,0,0,0,1,1,1,1,0,1,0,0,1,0,1,0,0,0,0,0,0,1,0,0,1,1,1,0,1,1,1,1,0,0,0,1,0,1,0,0,0,0,0,1,1,0,0,0,1,0,0,1,1,0,1,0,1,0,1,1,1,0,1,1,1,1,1,1,0,0,1,0,1,1,0,1,1,1,1,0,1,0,0,0,1,0,0,1,1,1,1,0,0,1,1,0,0,0,0,0,0,0,1,1,1,1,0,0,1,0,1,1,0,1,1,0,1,0,1,0,1,0,0,0,0,1,1,1,1,1,0,0,0,0,0,1,1,0,0,0,1,0,1,1,0,1,1,1,0,0,0,1,0,1,0,0,0,0,0,1,0,1,1,0,0,1,1,1,0,1,1,1,1,0,0,1,1,1,0,1,1,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,1,0,0,0,0,0,0,1,0,1,1,1,0,0,1,0,1,0,1,0,0,0,1,1,1,1,0,1,1,0,0,0,1,0,1,1,1,1,0,1,1,0,1,0,0,1,0,1,0,0,1,0,0,1,0,0,0,1,0,0,1,1,0,0,1,0,0,1,0,0,0,1,0,1,1,0,1,0,0,0,1,0,0,0,0,1,0,0,1,1,0,1,1,1,1,0,1,1,1,1,1,1,1,0,1,0,0,0,1,1,1,1,0,1,1,1,1,1,1,0,0,1,0,0,1,0,0,0,0,0,1,1,1,0,0,0,0,1,0,0,0,0,1,0,1,1,1,0,0,1,1,0,0,0,1,1,1,0,0,0,0,1,0,1,0,1,1,1,1,1,0,1,0,1,1,0,0,1,1,1,0,0,0,0,0,1,1,1,1,1,1,0,0,1,0,1,1,1,0,1,0,0,1,0,1,0,1,1,1,0,0,0,0,1,0,1,1,0,0,0,1,0,0,1,1,0,0,1,1,0,0,0,0,0,0,1,0,1,0,1,1,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,1,0,0,0,1,0,0,0,1,1,1,1,1,0,0,0,0,0,0,1,0,0,1,0,0,1,0,0,1,1,1,0,1,0,1,0,0,0,0,0,0,0,1,0,0,1,1,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,1,1,1,1,1,1,0,0,1,1,0,0,1,0,0,1,0,0,0,1,0,1,0,1,0,0,1,0,1,1,1,0,0,1,1,0,0,0,1,0,0,1,0,0,1,1,0,1,1,1,0,1,1,1,0,1,0,1,1,0,1,1,0,0,1,0,1,1,1,1,1,1,0,1,1,0,0,1,0,0,1,0,0,0,0,1,1,0,1,1,1,0,1,1,1,1,1,1,0,1,1,0,1,0,1,0,0,0,1,1,1,1,0,0,1,1,1,1,0,0,0,1,1,1,1,1,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,0,1,0,1,1,1,1,0,1,1,0,0,0,0,0,0,0,1,];
var gg_b = "1746619202/";

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
