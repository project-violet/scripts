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
case 2489:
case 1517:
case 2717:
case 3151:
case 2756:
case 1556:
case 757:
case 2135:
case 1193:
case 3293:
case 392:
case 3081:
case 1710:
case 816:
case 206:
case 3236:
case 1282:
case 2214:
case 1755:
case 3182:
case 1818:
case 3531:
case 1259:
case 3089:
case 2194:
case 2076:
case 3224:
case 460:
case 3159:
case 3520:
case 3790:
case 4063:
case 3772:
case 1604:
case 2452:
case 291:
case 1213:
case 3113:
case 616:
case 412:
case 4004:
case 3727:
case 3597:
case 1819:
case 1075:
case 2302:
case 3129:
case 3254:
case 1835:
case 1084:
case 1823:
case 2893:
case 1470:
case 453:
case 680:
case 1229:
case 3716:
case 904:
case 3757:
case 168:
case 2477:
case 2734:
case 415:
case 2422:
case 408:
case 63:
case 3130:
case 2291:
case 3128:
case 2962:
case 880:
case 2824:
case 788:
case 2153:
case 3121:
case 1796:
case 3608:
case 1733:
case 3077:
case 489:
case 2119:
case 3601:
case 2351:
case 400:
case 3323:
case 2914:
case 3689:
case 55:
case 3936:
case 1951:
case 688:
case 322:
case 1314:
case 809:
case 4075:
case 1958:
case 3681:
case 221:
case 609:
case 3862:
case 3924:
case 888:
case 2003:
case 1959:
case 716:
case 3102:
case 1461:
case 933:
case 1468:
case 1337:
case 2683:
case 857:
case 3311:
case 1929:
case 2999:
case 3001:
case 3954:
case 2409:
case 282:
case 3677:
case 2328:
case 1398:
case 4084:
case 3353:
case 2321:
case 2998:
case 1928:
case 2401:
case 4047:
case 657:
case 2408:
case 3009:
case 325:
case 1647:
case 2832:
case 1015:
case 3848:
case 3584:
case 3740:
case 3841:
case 1050:
case 363:
case 633:
case 1273:
case 297:
case 2187:
case 45:
case 3547:
case 1425:
case 2306:
case 3034:
case 1433:
case 137:
case 2057:
case 2016:
case 3026:
case 1878:
case 1770:
case 1871:
case 2570:
case 3243:
case 2365:
case 2592:
case 334:
case 957:
case 664:
case 2880:
case 2241:
case 2179:
case 2248:
case 2546:
case 1746:
case 3056:
case 1286:
case 3427:
case 2745:
case 2285:
case 3472:
case 1038:
case 376:
case 3874:
case 2843:
case 3967:
case 3776:
case 350:
case 1589:
case 2789:
case 704:
case 2456:
case 1097:
case 909:
case 1442:
case 2072:
case 3344:
case 1769:
case 243:
case 3626:
case 1807:
case 3980:
case 227:
case 3695:
case 1206:
case 2701:
case 93:
case 1768:
case 1650:
case 2561:
case 1860:
case 4050:
case 2974:
case 3634:
case 3943:
case 1509:
case 15:
case 2867:
case 560:
case 1265:
case 3563:
case 515:
case 3805:
case 2386:
case 1348:
case 1341:
case 1620:
case 508:
case 3504:
case 1639:
case 3932:
case 2948:
case 1697:
case 2941:
case 4039:
case 387:
case 3656:
case 1349:
case 3617:
case 3371:
case 851:
case 589:
case 1638:
case 2949:
case 3267:
case 1631:
case 1167:
case 4038:
case 184:
case 2167:
case 3971:
case 3655:
case 2638:
case 1949:
case 3978:
case 582:
case 3260:
case 2349:
case 793:
case 2385:
case 1941:
case 2697:
case 962:
case 573:
case 2986:
case 4027:
case 1672:
case 2620:
case 2341:
case 1107:
case 1985:
case 910:
case 4090:
case 3763:
case 1386:
case 671:
case 4016:
case 965:
case 1709:
case 1616:
case 1657:
case 2860:
case 2615:
case 497:
case 2374:
case 1266:
case 2650:
case 1568:
case 317:
case 2508:
case 2206:
case 99:
case 1205:
case 3987:
case 2769:
case 143:
case 3367:
case 2410:
case 3438:
case 2097:
case 1027:
case 3278:
case 370:
case 1789:
case 747:
case 1417:
case 1090:
case 1843:
case 1752:
case 3300:
case 356:
case 3439:
case 3497:
case 1745:
case 2545:
case 2887:
case 1285:
case 3279:
case 2286:
case 2844:
case 1781:
case 2581:
case 1880:
case 3420:
case 1179:
case 3148:
case 1241:
case 1434:
case 1777:
case 1365:
case 2792:
case 1592:
case 893:
case 3583:
case 2871:
case 1274:
case 394:
case 2878:
case 506:
case 443:
case 2425:
case 2433:
case 693:
case 237:
case 2906:
case 3244:
case 2273:
case 197:
case 3886:
case 2180:
case 591:
case 1426:
case 2496:
case 1832:
case 2879:
case 1408:
case 3953:
case 82:
case 1991:
case 710:
case 215:
case 3068:
case 173:
case 2684:
case 3919:
case 1321:
case 1328:
case 2398:
case 4012:
case 3061:
case 993:
case 1330:
case 605:
case 2929:
case 618:
case 3692:
case 3069:
case 3670:
case 2337:
case 2399:
case 1329:
case 2461:
case 166:
case 1003:
case 543:
case 406:
case 602:
case 1064:
case 311:
case 3324:
case 1382:
case 212:
case 802:
case 2004:
case 514:
case 2982:
case 57:
case 1358:
case 2063:
case 1351:
case 4076:
case 686:
case 3092:
case 1119:
case 44:
case 3447:
case 1795:
case 665:
case 1153:
case 2526:
case 3859:
case 1298:
case 2228:
case 3191:
case 3669:
case 2221:
case 3198:
case 3253:
case 1422:
case 1118:
case 1836:
case 1111:
case 2902:
case 886:
case 268:
case 2534:
case 702:
case 2154:
case 473:
case 3137:
case 3661:
case 2229:
case 69:
case 3858:
case 1299:
case 1237:
case 1302:
case 3851:
case 2470:
case 923:
case 419:
case 1445:
case 2075:
case 1452:
case 2213:
case 2604:
case 3294:
case 718:
case 3821:
case 3590:
case 1488:
case 200:
case 810:
case 3828:
case 705:
case 1194:
case 2663:
case 332:
case 2755:
case 3114:
case 662:
case 3731:
case 1510:
case 3738:
case 106:
case 421:
case 1854:
case 610:
case 3223:
case 2251:
case 1489:
case 1717:
case 1664:
case 2225:
case 2233:
case 3719:
case 3606:
case 3487:
case 94:
case 233:
case 3753:
case 1890:
case 3126:
case 2473:
case 1798:
case 2598:
case 2728:
case 1528:
case 1226:
case 2087:
case 3718:
case 2730:
case 2831:
case 1530:
case 3842:
case 2157:
case 3810:
case 447:
case 3134:
case 3554:
case 562:
case 1115:
case 1737:
case 1474:
case 3250:
case 1529:
case 1799:
case 423:
case 3215:
case 2713:
case 919:
case 2127:
case 3239:
case 2172:
case 3833:
case 586:
case 3479:
case 2759:
case 77:
case 3524:
case 1441:
case 1667:
case 59:
case 1857:
case 3231:
case 2255:
case 985:
case 2815:
case 3478:
case 2660:
case 2751:
case 2850:
case 3735:
case 3593:
case 3723:
case 3471:
case 3065:
case 147:
case 1762:
case 2562:
case 2687:
case 2406:
case 355:
case 1325:
case 313:
case 2326:
case 1405:
case 4080:
case 643:
case 502:
case 3673:
case 2933:
case 1680:
case 493:
case 827:
case 67:
case 2465:
case 3316:
case 3357:
case 3950:
case 3006:
case 843:
case 1643:
case 1466:
case 3920:
case 906:
case 577:
case 3997:
case 2679:
case 171:
case 3686:
case 2060:
case 1355:
case 797:
case 1342:
case 1000:
case 2955:
case 2671:
case 505:
case 3931:
case 52:
case 2910:
case 2317:
case 3938:
case 2007:
case 891:
case 162:
case 1175:
case 402:
case 773:
case 2482:
case 1414:
case 3435:
case 1883:
case 2176:
case 3423:
case 3771:
case 3189:
case 2451:
case 320:
case 3059:
case 2458:
case 2549:
case 3778:
case 1785:
case 1036:
case 3963:
case 3082:
case 1252:
case 3494:
case 74:
case 2023:
case 1093:
case 1741:
case 3188:
case 593:
case 1288:
case 1586:
case 3904:
case 2459:
case 2548:
case 2246:
case 3779:
case 3177:
case 2961:
case 23:
case 477:
case 927:
case 2019:
case 1277:
case 2968:
case 1361:
case 785:
case 1876:
case 280:
case 2429:
case 1499:
case 3021:
case 2574:
case 1909:
case 3602:
case 2053:
case 2270:
case 97:
case 2011:
case 3787:
case 2969:
case 2140:
case 3029:
case 1498:
case 3580:
case 2773:
case 3453:
case 1054:
case 885:
case 3682:
case 619:
case 2103:
case 288:
case 3760:
case 3376:
case 4093:
case 2164:
case 2635:
case 3500:
case 462:
case 3204:
case 685:
case 1346:
case 3707:
case 3263:
case 410:
case 2388:
case 621:
case 1945:
case 1624:
case 2694:
case 3869:
case 3630:
case 105:
case 1209:
case 2970:
case 2377:
case 486:
case 374:
case 64:
case 2765:
case 1565:
case 118:
case 2322:
case 1392:
case 791:
case 1766:
case 1977:
case 997:
case 1654:
case 2261:
case 3629:
case 1506:
case 1208:
case 3101:
case 2619:
case 1462:
case 571:
case 1201:
case 3108:
case 49:
case 3621:
case 2653:
case 3002:
case 706:
case 1863:
case 3698:
case 3169:
case 1653:
case 653:
case 480:
case 615:
case 551:
case 1804:
case 4019:
case 2201:
case 2208:
case 1706:
case 3940:
case 3347:
case 43:
case 3912:
case 608:
case 2864:
case 853:
case 3168:
case 2766:
case 2977:
case 1268:
case 2654:
case 2803:
case 1765:
case 808:
case 1322:
case 2392:
case 1611:
case 2209:
case 205:
case 731:
case 1970:
case 689:
case 3062:
case 354:
case 2945:
case 1694:
case 1381:
case 2346:
case 2952:
case 4094:
case 3507:
case 396:
case 768:
case 1388:
case 2981:
case 1345:
case 2104:
case 202:
case 812:
case 109:
case 3700:
case 469:
case 1623:
case 2693:
case 4023:
case 3560:
case 301:
case 1389:
case 3264:
case 330:
case 38:
case 3976:
case 3203:
case 416:
case 2989:
case 3881:
case 3780:
case 1773:
case 2491:
case 1421:
case 712:
case 3240:
case 2184:
case 2498:
case 265:
case 1308:
case 3852:
case 95:
case 1301:
case 868:
case 1011:
case 3091:
case 3743:
case 3454:
case 3283:
case 1270:
case 29:
case 2361:
case 2876:
case 2499:
case 3192:
case 1968:
case 2277:
case 668:
case 338:
case 1292:
case 1961:
case 2288:
case 631:
case 600:
case 2748:
case 1023:
case 2093:
case 3424:
case 1035:
case 1884:
case 2281:
case 3304:
case 488:
case 3014:
case 1847:
case 2785:
case 1585:
case 116:
case 2245:
case 984:
case 3903:
case 1549:
case 3276:
case 2749:
case 2883:
case 2024:
case 3571:
case 3493:
case 715:
case 564:
case 1451:
case 3964:
case 409:
case 753:
case 737:
case 3649:
case 1910:
case 1317:
case 1942:
case 1955:
case 4078:
case 1671:
case 3338:
case 2342:
case 2917:
case 2310:
case 2355:
case 372:
case 3:
case 3972:
case 1679:
case 271:
case 151:
case 1060:
case 4079:
case 3641:
case 3927:
case 3320:
case 3339:
case 884:
case 3400:
case 3685:
case 3916:
case 588:
case 2466:
case 2643:
case 2934:
case 433:
case 3005:
case 1334:
case 65:
case 1465:
case 509:
case 2995:
case 1925:
case 1644:
case 1933:
case 3066:
case 1326:
case 104:
case 2762:
case 968:
case 1687:
case 2325:
case 1395:
case 85:
case 464:
case 2926:
case 1996:
case 451:
case 3048:
case 1079:
case 1758:
case 53:
case 2857:
case 3110:
case 1255:
case 3834:
case 3085:
case 1242:
case 3290:
case 75:
case 1071:
case 3724:
case 2441:
case 3432:
case 1078:
case 2448:
case 3826:
case 1190:
case 2120:
case 2559:
case 1759:
case 1172:
case 2513:
case 912:
case 3272:
case 3856:
case 1729:
case 3817:
case 2799:
case 569:
case 2115:
case 2737:
case 3443:
case 1157:
case 3511:
case 404:
case 2234:
case 164:
case 908:
case 3518:
case 3257:
case 1087:
case 3216:
case 1730:
case 2226:
case 1296:
case 784:
case 2528:
case 2043:
case 3196:
case 1473:
case 3074:
case 2791:
case 1721:
case 1820:
case 1839:
case 3125:
case 3133:
case 989:
case 293:
case 637:
case 3519:
case 1897:
case 2827:
case 2484:
case 2253:
case 1440:
case 195:
case 2669:
case 2198:
case 2191:
case 2859:
case 576:
case 742:
case 235:
case 2447:
case 4001:
case 907:
case 3362:
case 2219:
case 2813:
case 838:
case 4008:
case 3084:
case 3835:
case 481:
case 1483:
case 2668:
case 2750:
case 2851:
case 1129:
case 2137:
case 2858:
case 3229:
case 3154:
case 2715:
case 40:
case 796:
case 638:
case 2516:
case 3230:
case 1609:
case 2211:
case 16:
case 2882:
case 425:
case 3446:
case 3663:
case 331:
case 300:
case 1089:
case 1898:
case 3259:
case 754:
case 2590:
case 1790:
case 1520:
case 2821:
case 2720:
case 1159:
case 1224:
case 2294:
case 3604:
case 626:
case 2572:
case 1772:
case 3819:
case 2527:
case 3075:
case 9:
case 972:
case 2046:
case 745:
case 3556:
case 2829:
case 1899:
case 1837:
case 861:
case 1158:
case 3251:
case 534:
case 2235:
case 3710:
case 3811:
case 2738:
case 1236:
case 3818:
case 2475:
case 1531:
case 2731:
case 1045:
case 3755:
case 232:
case 2114:
case 181:
case 2061:
case 3398:
case 3684:
case 1353:
case 2068:
case 587:
case 854:
case 3928:
case 2162:
case 1319:
case 2953:
case 125:
case 1009:
case 3461:
case 3399:
case 1102:
case 2918:
case 3930:
case 3337:
case 2354:
case 845:
case 1001:
case 1622:
case 1318:
case 654:
case 248:
case 1954:
case 389:
case 4022:
case 211:
case 1681:
case 1394:
case 4088:
case 4081:
case 3913:
case 1688:
case 492:
case 738:
case 696:
case 88:
case 4052:
case 1645:
case 1862:
case 2404:
case 4045:
case 2393:
case 1323:
case 558:
case 4089:
case 2802:
case 601:
case 3063:
case 630:
case 1689:
case 122:
case 2923:
case 1993:
case 446:
case 503:
case 3951:
case 3004:
case 2336:
case 68:
case 3314:
case 2271:
case 3020:
case 1874:
case 150:
case 56:
case 2278:
case 1360:
case 2576:
case 775:
case 2775:
case 2431:
case 3097:
case 3442:
case 3410:
case 2367:
case 2960:
case 3132:
case 3844:
case 2873:
case 1056:
case 3588:
case 930:
case 1307:
case 2279:
case 2141:
case 2055:
case 3545:
case 2497:
case 1427:
case 3031:
case 3887:
case 176:
case 1472:
case 2439:
case 2042:
case 2185:
case 1849:
case 2174:
case 1026:
case 2096:
case 2450:
case 1243:
case 3366:
case 3770:
case 3792:
case 1457:
case 134:
case 592:
case 1095:
case 3015:
case 3879:
case 759:
case 1173:
case 163:
case 2244:
case 3273:
case 3906:
case 2512:
case 2540:
case 2784:
case 1841:
case 458:
case 3425:
case 1547:
case 3433:
case 1378:
case 961:
case 1764:
case 2564:
case 4056:
case 1371:
case 3638:
case 1267:
case 2610:
case 476:
case 3167:
case 2971:
case 2763:
case 1805:
case 450:
case 1200:
case 1932:
case 872:
case 859:
case 3639:
case 581:
case 187:
case 3100:
case 3650:
case 2343:
case 3374:
case 3615:
case 3860:
case 278:
case 607:
case 224:
case 1943:
case 1165:
case 35:
case 875:
case 2987:
case 2696:
case 938:
case 675:
case 1387:
case 1695:
case 2625:
case 217:
case 807:
case 3501:
case 4095:
case 117:
case 4033:
case 2106:
case 3701:
case 3708:
case 2980:
case 655:
case 2695:
case 613:
case 3205:
case 998:
case 3569:
case 343:
case 1987:
case 1380:
case 37:
case 3867:
case 178:
case 258:
case 3657:
case 3616:
case 3974:
case 2634:
case 124:
case 2165:
case 1166:
case 3568:
case 203:
case 3266:
case 1343:
case 1806:
case 3941:
case 879:
case 1979:
case 3948:
case 470:
case 3985:
case 2379:
case 1207:
case 1332:
case 2563:
case 3386:
case 652:
case 456:
case 679:
case 4010:
case 1655:
case 1971:
case 1610:
case 1978:
case 4055:
case 3949:
case 2703:
case 2866:
case 2656:
case 2617:
case 2764:
case 1287:
case 974:
case 3495:
case 2034:
case 3187:
case 1244:
case 397:
case 2841:
case 2584:
case 2740:
case 1540:
case 2848:
case 779:
case 1886:
case 2173:
case 2416:
case 234:
case 417:
case 2243:
case 194:
case 1583:
case 3570:
case 2026:
case 1174:
case 2472:
case 990:
case 276:
case 1042:
case 3752:
case 1907:
case 1300:
case 949:
case 3745:
case 1497:
case 2427:
case 2056:
case 3788:
case 2017:
case 2232:
case 2307:
case 3248:
case 1141:
case 1279:
case 535:
case 3781:
case 1420:
case 3072:
case 1367:
case 1775:
case 3249:
case 1576:
case 3171:
case 3178:
case 2874:
case 3382:
case 319:
case 690:
case 222:
case 1923:
case 2993:
case 836:
case 3358:
case 3676:
case 2464:
case 3914:
case 524:
case 578:
case 1802:
case 3003:
case 636:
case 3313:
case 2645:
case 385:
case 890:
case 1646:
case 1463:
case 3064:
case 499:
case 2688:
case 517:
case 2681:
case 3937:
case 3330:
case 2677:
case 2318:
case 3409:
case 674:
case 148:
case 2954:
case 4092:
case 34:
case 2622:
case 1069:
case 720:
case 3262:
case 3991:
case 1953:
case 3401:
case 874:
case 3612:
case 373:
case 1068:
case 281:
case 1061:
case 3328:
case 1475:
case 2045:
case 2531:
case 239:
case 3555:
case 594:
case 1114:
case 2052:
case 3603:
case 3214:
case 3542:
case 3510:
case 306:
case 2837:
case 2158:
case 3854:
case 3135:
case 411:
case 3123:
case 3489:
case 1829:
case 2151:
case 3717:
case 3756:
case 2597:
case 3445:
case 2113:
case 391:
case 3452:
case 2772:
case 1572:
case 3481:
case 2891:
case 1590:
case 1821:
case 2159:
case 820:
case 2224:
case 1294:
case 71:
case 3488:
case 774:
case 2898:
case 1828:
case 3836:
case 2130:
case 3422:
case 570:
case 1882:
case 2814:
case 3477:
case 3734:
case 1516:
case 2757:
case 1218:
case 2609:
case 1137:
case 3299:
case 1715:
case 2515:
case 913:
case 4068:
case 3012:
case 3893:
case 3302:
case 2129:
case 1851:
case 2601:
case 1092:
case 2022:
case 135:
case 3795:
case 2077:
case 1219:
case 2608:
case 944:
case 1191:
case 3298:
case 2121:
case 556:
case 3153:
case 898:
case 1253:
case 1484:
case 3962:
case 2128:
case 1238:
case 1536:
case 2155:
case 3714:
case 2142:
case 3857:
case 3816:
case 3138:
case 1231:
case 856:
case 1086:
case 3558:
case 3217:
case 2048:
case 670:
case 3449:
case 2041:
case 911:
case 1735:
case 1471:
case 2793:
case 1117:
case 2272:
case 3600:
case 656:
case 2895:
case 1825:
case 1297:
case 2227:
case 2826:
case 1896:
case 3559:
case 3120:
case 1479:
case 2724:
case 1794:
case 2594:
case 3441:
case 2290:
case 1220:
case 1718:
case 3234:
case 520:
case 1665:
case 455:
case 1711:
case 1842:
case 694:
case 1554:
case 2754:
case 413:
case 3115:
case 1215:
case 2817:
case 3150:
case 3827:
case 2519:
case 1487:
case 948:
case 267:
case 3872:
case 3043:
case 1126:
case 3791:
case 1753:
case 3226:
case 3528:
case 2331:
case 272:
case 152:
case 179:
case 259:
case 2338:
case 1460:
case 2649:
case 1938:
case 2990:
case 1327:
case 1920:
case 932:
case 2339:
case 2641:
case 1997:
case 2320:
case 2927:
case 4086:
case 371:
case 1407:
case 940:
case 3632:
case 624:
case 935:
case 1006:
case 1357:
case 678:
case 2315:
case 2916:
case 2957:
case 2350:
case 3502:
case 549:
case 3926:
case 275:
case 3325:
case 3762:
case 347:
case 113:
case 2066:
case 3147:
case 2852:
case 428:
case 978:
case 2662:
case 2845:
case 2587:
case 635:
case 924:
case 3498:
case 1846:
case 3184:
case 729:
case 3908:
case 1284:
case 2544:
case 1744:
case 3573:
case 2037:
case 1411:
case 3222:
case 711:
case 2192:
case 238:
case 1418:
case 1028:
case 2889:
case 3499:
case 3361:
case 1602:
case 3909:
case 2283:
case 198:
case 3774:
case 2091:
case 1021:
case 1543:
case 490:
case 1082:
case 832:
case 226:
case 1145:
case 3036:
case 3093:
case 2424:
case 3741:
case 3840:
case 3812:
case 1532:
case 2732:
case 1779:
case 3586:
case 1058:
case 2363:
case 1904:
case 362:
case 632:
case 436:
case 2877:
case 1892:
case 2822:
case 3414:
case 3175:
case 699:
case 3883:
case 1435:
case 1771:
case 2493:
case 640:
case 3749:
case 3289:
case 120:
case 2903:
case 3462:
case 1101:
case 3506:
case 2347:
case 2912:
case 245:
case 1984:
case 2940:
case 1108:
case 799:
case 848:
case 994:
case 1621:
case 1340:
case 1947:
case 1312:
case 2698:
case 1628:
case 732:
case 2062:
case 254:
case 174:
case 3209:
case 318:
case 1109:
case 3803:
case 4030:
case 3565:
case 4029:
case 3370:
case 3766:
case 3977:
case 2161:
case 2168:
case 3864:
case 3988:
case 136:
case 2700:
case 1500:
case 829:
case 2808:
case 4013:
case 3981:
case 970:
case 296:
case 3346:
case 1659:
case 3952:
case 1869:
case 420:
case 3163:
case 3989:
case 190:
case 2203:
case 1682:
case 28:
case 3636:
case 1567:
case 2976:
case 4082:
case 242:
case 629:
case 4051:
case 2264:
case 1658:
case 1376:
case 2560:
case 1861:
case 201:
case 1651:
case 1868:
case 4058:
case 3693:
case 1975:
case 2868:
case 507:
case 2975:
case 3164:
case 461:
case 1264:
case 2861:
case 1560:
case 2658:
case 4014:
case 388:
case 142:
case 249:
case 426:
case 622:
case 1375:
case 1767:
case 2869:
case 575:
case 76:
case 3694:
case 950:
case 2263:
case 3388:
case 2500:
case 3946:
case 1168:
case 2629:
case 1699:
case 4037:
case 3402:
case 3268:
case 1161:
case 3566:
case 2383:
case 1637:
case 3611:
case 3322:
case 3765:
case 1062:
case 154:
case 1983:
case 3377:
case 3970:
case 739:
case 2628:
case 3653:
case 2002:
case 1384:
case 3269:
case 2621:
case 2108:
case 60:
case 3804:
case 934:
case 583:
case 2101:
case 145:
case 1940:
case 2984:
case 1276:
case 2778:
case 220:
case 1903:
case 2059:
case 692:
case 3451:
case 3176:
case 2423:
case 1571:
case 1822:
case 2275:
case 1877:
case 781:
case 1732:
case 892:
case 2779:
case 3786:
case 2058:
case 567:
case 2494:
case 3884:
case 3541:
case 1146:
case 3035:
case 2082:
case 442:
case 646:
case 1304:
case 126:
case 48:
case 3585:
case 1454:
case 3053:
case 1091:
case 2021:
case 2543:
case 380:
case 1098:
case 3183:
case 895:
case 1170:
case 3968:
case 2122:
case 138:
case 3309:
case 3875:
case 2418:
case 3019:
case 3430:
case 2411:
case 2177:
case 66:
case 3292:
case 33:
case 1240:
case 2284:
case 2453:
case 2744:
case 1780:
case 1888:
case 2029:
case 1099:
case 722:
case 3112:
case 1662:
case 958:
case 3969:
case 3308:
case 2030:
case 2419:
case 1587:
case 3011:
case 454:
case 1852:
case 1066:
case 3933:
case 3644:
case 803:
case 3395:
case 175:
case 304:
case 3996:
case 858:
case 776:
case 3702:
case 3334:
case 2316:
case 2950:
case 658:
case 501:
case 2915:
case 351:
case 4041:
case 2407:
case 2686:
case 3060:
case 3679:
case 734:
case 1648:
case 2939:
case 1320:
case 2390:
case 1641:
case 4048:
case 992:
case 1400:
case 1339:
case 1990:
case 687:
case 2460:
case 3317:
case 3910:
case 3671:
case 3955:
case 4049:
case 554:
case 1467:
case 763:
case 887:
case 946:
case 1331:
case 252:
case 172:
case 3296:
case 3820:
case 3473:
case 333:
case 1553:
case 663:
case 2195:
case 1125:
case 561:
case 1133:
case 834:
case 2719:
case 2487:
case 981:
case 863:
case 3599:
case 1666:
case 2250:
case 1754:
case 2134:
case 90:
case 3116:
case 1511:
case 2810:
case 3157:
case 3838:
case 3087:
case 1216:
case 1518:
case 2718:
case 1257:
case 925:
case 2524:
case 1724:
case 1290:
case 2220:
case 850:
case 3607:
case 3759:
case 3078:
case 1895:
case 2833:
case 3172:
case 2297:
case 1272:
case 2239:
case 703:
case 676:
case 459:
case 1535:
case 1523:
case 2593:
case 2471:
case 538:
case 2117:
case 2156:
case 3758:
case 3660:
case 483:
case 650:
case 2478:
case 1085:
case 1834:
case 3255:
case 1142:
case 1736:
case 3514:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1758232801/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,1,0,0,0,0,0,0,1,0,0,0,0,1,1,0,0,0,1,1,1,0,1,1,0,1,0,0,1,1,1,0,0,1,1,0,0,1,1,0,1,1,1,0,1,1,0,0,1,1,1,1,1,1,1,0,1,0,0,1,1,1,1,0,0,0,0,1,0,0,1,0,0,1,0,1,0,0,1,1,1,0,1,0,1,0,0,0,0,1,1,1,0,0,1,0,0,0,1,0,0,1,1,1,0,1,0,1,0,1,1,1,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,1,1,0,1,0,1,1,0,1,1,1,0,1,0,0,0,0,0,0,0,1,1,1,0,1,0,1,0,0,1,1,1,1,1,1,0,1,1,0,1,0,0,1,0,0,1,0,0,1,0,0,0,1,1,0,1,1,0,1,1,1,1,0,1,1,0,0,0,0,1,1,0,0,1,0,1,0,0,1,1,1,0,1,0,1,1,0,0,0,0,1,1,1,1,0,1,1,1,0,0,1,1,0,1,0,0,1,1,0,0,1,0,1,0,0,0,1,1,0,0,0,0,0,1,0,1,1,0,0,1,1,0,0,1,1,0,1,0,1,1,1,0,0,0,0,0,1,0,0,1,0,1,0,0,1,1,0,0,1,1,0,0,1,0,1,0,0,0,0,1,0,1,0,0,0,1,1,1,1,0,1,0,0,1,0,0,0,0,1,1,1,1,1,0,0,0,1,0,0,0,0,1,0,0,0,1,0,0,1,1,0,0,1,1,1,0,0,0,0,0,1,1,0,0,0,0,0,0,1,1,1,1,1,0,1,0,0,0,1,0,0,0,0,1,0,1,1,1,0,1,1,0,1,0,1,1,0,0,1,0,1,0,1,0,1,0,1,1,1,1,1,1,0,1,1,1,0,1,1,1,0,1,0,1,1,0,1,0,0,0,0,1,0,0,1,0,0,0,0,0,1,1,0,0,1,1,0,0,1,1,0,1,1,1,1,0,1,1,1,1,1,0,1,0,0,0,0,1,1,0,0,1,0,0,1,1,0,0,1,1,0,1,0,0,1,0,1,1,1,0,1,1,0,0,0,1,0,1,0,1,1,1,0,1,1,1,1,1,0,0,0,0,1,1,0,1,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,1,1,0,0,1,0,0,0,0,1,0,0,0,0,0,1,0,1,0,0,1,0,1,0,1,0,1,1,1,0,1,0,0,1,0,1,1,1,0,1,0,1,1,1,1,0,0,1,1,1,0,0,1,1,1,1,0,1,1,1,1,0,0,0,0,0,1,1,1,0,0,1,0,1,1,1,1,0,0,1,0,1,1,0,1,1,0,1,1,0,1,0,1,0,0,1,1,1,1,1,0,1,1,1,1,0,1,0,0,1,0,0,1,0,0,0,1,0,1,1,1,1,1,1,1,0,0,0,1,1,1,1,0,0,1,0,1,1,0,0,1,1,1,0,1,1,1,0,0,0,0,1,1,1,1,1,1,0,1,1,1,0,1,0,0,1,0,0,1,1,1,1,1,0,0,0,1,1,1,0,0,1,1,0,1,0,1,0,1,0,0,0,0,0,0,1,0,1,1,0,1,0,0,1,1,1,0,0,1,0,0,1,0,1,0,0,0,0,0,1,1,0,0,1,0,1,0,0,0,1,0,0,0,0,1,0,0,0,0,1,1,1,1,0,0,1,0,1,0,0,1,1,0,0,1,0,0,1,0,1,0,0,1,1,0,1,0,0,1,1,0,0,0,1,1,1,1,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,1,0,1,0,0,1,0,1,0,1,0,1,0,0,0,0,1,0,1,0,0,1,0,1,1,0,1,1,0,1,1,1,1,0,1,0,1,0,0,0,0,1,0,0,0,1,0,1,1,0,0,0,1,1,0,0,0,1,1,1,1,1,0,1,1,1,1,0,1,0,0,1,0,0,0,0,0,1,0,1,1,1,1,1,1,1,1,0,0,0,0,0,1,0,0,0,1,1,1,0,1,0,0,1,0,1,1,1,1,0,0,1,0,1,0,0,0,1,0,1,0,1,1,1,0,0,0,0,0,0,1,1,0,0,1,1,0,0,1,0,0,1,0,1,0,1,0,1,0,0,0,1,0,0,1,0,0,1,1,0,0,0,1,1,0,1,1,1,0,0,1,1,0,1,1,0,1,0,0,1,0,0,1,0,1,0,0,0,1,0,0,0,0,0,1,0,1,0,0,1,1,1,0,0,0,0,0,0,1,1,0,1,0,0,0,1,0,0,1,0,0,0,0,1,0,0,0,1,0,1,0,1,0,1,1,1,0,1,0,1,0,1,1,0,1,0,0,0,1,0,0,1,1,0,0,1,0,1,1,1,1,0,1,1,1,1,1,0,1,0,1,1,1,0,1,1,0,0,0,0,1,1,1,0,1,0,0,1,1,0,1,1,1,0,0,0,0,0,1,1,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,1,0,0,1,1,0,0,0,0,0,0,1,0,0,0,1,1,1,0,1,0,0,0,1,1,1,1,0,1,0,1,1,1,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,1,0,1,1,0,0,0,0,0,1,1,0,0,0,1,1,1,1,1,0,0,0,1,0,1,1,0,1,1,1,0,0,0,1,0,1,0,0,1,0,1,0,0,0,0,1,1,1,0,1,1,1,1,1,0,0,0,0,0,0,0,1,1,0,1,0,1,0,1,0,0,0,0,1,1,1,1,1,0,1,0,1,1,1,0,1,1,0,1,0,0,1,0,1,1,1,1,1,0,1,0,1,0,1,0,1,1,1,1,1,1,1,0,1,0,0,1,1,0,0,0,1,0,1,0,0,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,0,1,0,0,1,0,1,1,1,1,1,0,1,1,0,1,1,0,1,0,1,0,1,0,1,1,0,1,1,0,0,0,1,0,1,0,0,0,1,0,0,0,1,1,0,1,0,1,1,1,0,1,0,1,1,1,1,0,0,1,0,1,1,0,0,1,0,1,0,0,0,0,1,0,1,1,0,0,1,0,0,1,0,0,1,1,0,1,1,1,0,0,1,1,1,0,0,0,0,0,1,1,1,0,0,0,0,1,1,1,0,0,1,0,0,0,0,0,1,1,0,1,0,0,1,0,0,1,1,1,1,0,1,1,1,1,0,1,1,1,1,1,1,0,0,0,1,0,0,0,1,1,0,0,1,1,1,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,1,0,0,1,1,1,0,0,0,0,1,1,1,0,1,0,0,1,0,0,0,0,1,1,1,1,1,0,0,1,1,0,0,0,1,0,0,1,0,0,0,1,0,1,0,0,0,1,1,0,1,0,0,0,1,0,0,0,0,1,0,1,1,0,0,1,1,0,0,0,1,0,0,0,0,0,0,1,0,1,1,1,0,1,1,0,1,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,1,1,1,0,0,0,0,1,0,0,0,1,1,1,1,1,0,0,0,1,0,0,1,0,0,0,0,0,1,1,1,0,1,0,1,1,1,1,1,1,0,1,1,0,1,1,1,0,1,1,1,0,0,1,0,1,1,1,1,0,0,0,1,1,0,0,0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,0,0,0,0,1,1,0,1,0,1,0,0,0,0,0,0,1,0,0,1,1,1,0,0,0,1,0,1,1,0,0,1,0,0,1,0,0,0,0,1,1,0,1,1,0,1,1,1,0,0,0,1,0,0,1,1,1,0,0,0,0,0,1,1,1,1,0,0,1,1,0,0,1,0,1,1,1,1,1,1,1,1,1,1,0,1,0,1,0,1,1,1,0,0,0,1,0,0,0,1,1,0,0,0,1,1,1,0,1,1,0,0,1,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,0,1,0,0,1,1,0,0,1,0,1,1,1,1,0,1,0,1,1,1,0,0,1,1,0,1,0,1,1,0,1,0,0,1,0,0,1,1,1,1,0,0,0,0,1,1,0,1,0,0,1,0,1,1,1,0,1,0,1,1,1,0,1,0,1,0,1,0,1,0,0,1,1,1,1,1,0,0,0,1,1,0,0,1,0,1,1,0,0,0,0,0,0,0,0,0,1,0,0,1,0,1,0,0,1,1,0,0,1,1,0,0,0,0,1,0,1,1,1,1,0,1,0,1,0,1,0,1,0,1,1,1,0,0,1,1,0,1,0,0,0,0,0,0,1,0,1,1,0,0,0,1,0,1,1,1,0,0,0,1,1,1,0,1,0,0,1,1,0,1,0,0,1,1,0,0,0,0,1,1,1,0,0,1,0,0,0,1,0,0,0,0,1,1,0,1,0,1,1,1,1,0,1,0,0,1,1,0,0,0,1,0,0,1,0,0,0,1,1,1,0,1,1,0,1,0,0,0,1,1,0,1,1,1,1,1,1,1,1,1,0,0,1,0,1,0,0,0,1,0,0,1,1,1,0,0,0,0,1,0,0,0,0,1,0,0,0,1,0,1,0,0,1,1,0,0,0,1,0,1,1,0,1,0,1,0,0,0,0,1,1,1,0,1,0,1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,1,1,0,1,0,0,1,1,1,0,0,0,0,0,0,0,0,1,0,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,0,0,0,1,1,1,0,1,1,0,1,1,0,0,0,1,1,0,1,0,0,0,1,1,0,1,1,0,0,1,0,0,1,0,1,0,0,1,0,1,1,0,1,0,1,1,0,0,0,0,1,1,1,0,0,1,1,1,1,1,1,0,0,1,1,1,1,0,0,0,1,0,1,0,1,1,1,1,0,1,0,1,1,0,1,0,1,0,0,0,0,0,1,0,1,1,0,0,0,0,0,1,1,1,1,0,1,0,1,1,1,0,1,0,1,1,1,1,0,1,0,1,1,0,0,1,0,0,1,0,0,0,0,1,0,0,0,1,1,0,0,1,0,0,0,0,1,1,1,1,0,1,1,1,0,0,1,1,0,1,0,0,1,0,0,0,0,1,1,1,1,0,1,1,1,0,0,1,1,0,1,1,1,0,0,1,1,0,0,0,0,0,1,0,1,0,1,0,1,0,0,0,0,0,0,1,0,0,1,0,1,0,0,0,1,0,1,1,0,1,0,1,0,1,1,0,0,0,0,1,1,0,1,0,0,1,0,1,1,1,1,1,1,0,0,0,0,1,0,1,1,0,0,1,1,1,1,0,1,0,1,0,1,0,1,0,0,0,0,0,1,0,1,0,0,0,0,0,1,1,0,1,1,1,1,0,0,1,0,1,1,1,1,0,0,1,1,1,0,0,0,1,1,1,1,0,1,0,1,1,0,0,0,1,0,1,0,0,1,0,1,0,1,0,1,1,0,1,1,1,1,1,0,0,0,0,0,0,0,1,0,0,0,1,1,0,1,1,0,0,1,0,0,0,0,1,0,1,1,1,0,0,1,0,0,1,0,0,0,0,0,1,0,0,1,1,1,1,0,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,1,0,1,0,1,0,1,0,0,0,0,1,0,0,1,0,0,1,0,0,1,0,1,1,1,0,0,1,1,0,0,1,0,0,1,0,0,0,1,1,1,0,0,0,0,1,0,1,0,1,1,1,1,0,0,1,0,0,1,1,0,0,0,0,1,1,0,0,1,0,0,1,0,1,0,1,0,0,0,1,1,0,0,1,1,0,1,0,1,0,1,0,1,1,0,0,0,0,1,1,0,1,0,0,0,0,0,1,0,1,0,1,0,1,1,0,1,1,1,0,0,0,0,1,1,1,1,1,1,0,1,1,0,1,0,0,0,0,0,0,0,0,0,1,0,1,0,1,1,1,1,0,0,0,1,0,0,0,1,0,1,1,1,0,1,0,0,1,1,0,1,0,0,0,1,1,0,0,1,1,1,1,0,0,1,1,1,1,0,1,0,0,1,1,1,1,1,0,0,1,0,0,1,1,0,1,0,0,1,1,0,0,0,0,1,1,0,0,0,1,0,1,1,1,0,0,0,0,0,1,0,0,1,1,0,0,0,0,1,0,1,0,0,1,1,1,0,1,0,0,0,1,1,0,1,0,1,1,0,1,0,1,1,1,0,0,0,1,0,0,0,1,0,1,1,1,0,0,1,0,1,1,1,0,0,0,0,1,1,1,1,1,0,0,1,0,1,1,1,1,0,1,0,1,1,0,1,1,1,1,1,0,1,1,0,0,0,1,0,1,0,1,0,1,0,1,0,0,1,0,0,0,1,1,0,0,1,0,0,0,1,0,1,0,1,1,1,1,1,0,0,0,0,1,0,0,1,1,0,1,0,0,0,1,1,0,0,0,0,1,1,1,0,0,0,1,0,0,1,1,1,0,1,1,1,1,0,1,0,0,1,1,1,0,0,0,0,0,1,1,1,1,0,0,1,1,1,1,0,0,1,1,1,0,1,0,1,1,0,1,1,0,0,1,0,1,0,0,1,1,0,1,1,1,1,1,1,0,0,1,0,1,1,0,1,1,0,0,0,1,1,1,0,0,0,0,1,0,0,1,0,1,0,0,1,1,1,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,1,0,0,1,1,1,1,1,1,1,1,0,1,1,0,0,1,0,1,1,0,1,1,0,0,1,1,0,1,1,0,1,0,1,0,1,1,1,0,0,0,1,0,0,1,1,1,0,0,0,0,0,1,0,1,0,1,1,1,1,1,0,0,0,1,1,0,1,0,1,1,0,1,1,1,0,1,1,1,1,0,1,1,0,0,0,0,0,0,0,0,1,1,0,1,1,0,1,1,0,0,1,0,1,0,0,0,1,1,0,0,1,1,1,0,1,1,0,0,1,1,1,1,0,0,0,1,1,1,0,0,1,1,1,0,1,1,0,0,0,1,0,1,0,0,0,0,1,1,1,0,0,0,1,0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,0,1,0,0,1,1,1,0,0,1,0,1,0,0,1,1,0,0,1,1,0,0,0,1,1,1,1,0,1,1,1,0,1,0,1,1,0,1,1,1,0,1,1,1,1,0,0,1,1,0,0,1,0,1,1,0,0,0,1,0,0,0,0,0,1,1,0,1,1,1,0,1,0,1,1,1,0,1,0,1,0,0,0,1,1,0,1,0,1,1,0,1,1,0,0,1,0,1,1,1,1,0,0,1,0,1,0,0,0,1,0,0,1,1,1,0,0,0,0,1,0,1,1,0,0,0,0,0,1,0,0,0,1,1,0,0,1,1,0,0,0,1,1,0,0,1,1,0,0,1,0,1,1,0,0,0,0,1,0,0,0,1,0,1,0,0,0,0,0,0,1,0,0,1,1,1,1,1,0,0,0,0,0,0,1,1,0,0,0,1,0,0,0,0,0,1,0,1,1,1,1,0,1,0,0,1,0,1,1,0,1,0,0,1,1,0,1,1,1,0,1,1,1,0,1,0,1,1,1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,1,1,1,0,0,0,1,1,1,0,1,0,0,0,0,0,1,1,1,0,0,0,1,1,1,0,1,1,1,1,1,1,0,1,0,1,1,0,0,1,1,0,0,1,0,0,0,1,1,1,0,0,0,1,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,1,1,0,0,1,0,1,0,0,0,0,0,0,1,1,1,0,1,1,1,0,0,1,0,1,1,0,1,1,1,1,0,1,0,0,0,0,0,0,1,0,0,1,1,1,1,0,1,0,1,0,0,1,0,0,0,1,0,1,1,1,1,1,1,0,1,1,1,0,0,1,1,0,0,1,1,1,0,0,0,1,0,0,0,0,1,0,0,1,1,0,1,0,1,0,1,0,1,1,0,1,0,0,1,0,0,0,0,1,1,0,0,1,0,1,1,1,0,0,1,1,0,1,0,0,0,0,0,1,1,1,0,1,0,0,1,1,0,1,0,1,1,0,1,1,1,0,0,1,0,0,1,1,1,1,0,0,1,0,1,1,1,0,0,0,0,1,1,0,1,0,0,0,1,0,1,1,1,1,0,0,0,1,1,0,0,1,0,0,0,1,0,0,1,1,0,0,1,0,1,1,0,1,0,1,0,0,0,1,0,0,1,1,0,1,1,1,1,1,1,0,1,1,0,1,1,0,0,0,1,1,1,0,1,0,1,0,1,1,1,1,0,0,0,0,1,1,1,0,1,1,1,0,0,1,0,0,0,0,0,0,0,1,1,1,0,0,0,0,1,1,1,0,0,0,1,1,1,1,1,1,0,0,0,0,1,1,1,0,0,0,0,1,1,1,1,0,1,0,1,1,1,0,1,0,0,0,1,0,0,1,1,0,1,0,1,1,1,1,1,0,1,0,1,0,0,1,0,1,0,0,1,0,1,1,0,0,0,1,0,1,0,1,1,0,1,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,1,0,1,0,1,1,1,0,1,1,1,0,1,0,0,1,1,0,0,0,1,0,1,1,1,0,1,1,1,1,0,0,1,1,1,0,1,1,0,1,0,0,1,0,1,1,1,1,1,1,1,1,0,0,0,0,0,0,1,1,1,0,0,1,1,1,1,1,1,0,1,0,1,1,1,0,1,1,0,0,0,1,0,1,1,1,0,1,0,0,0,0,1,1,0,0,0,1,0,0,1,0,0,0,1,0,1,0,1,1,1,0,1,0,0,1,0,0,1,1,0,0,0,1,0,1,1,0,0,1,0,0,0,1,1,1,0,1,0,0,0,1,0,1,1,1,1,1,1,0,0,1,1,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,1,1,0,1,1,1,1,1,0,1,0,1,0,1,1,1,0,1,1,1,1,];
var gg_b = "1758232801/";

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
