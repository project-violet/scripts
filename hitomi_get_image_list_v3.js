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
case 2211:
case 1886:
case 3824:
case 262:
case 80:
case 2412:
case 538:
case 307:
case 3905:
case 899:
case 3339:
case 1912:
case 2909:
case 3186:
case 2453:
case 1590:
case 820:
case 3295:
case 1672:
case 3632:
case 389:
case 2200:
case 2327:
case 1509:
case 4064:
case 1606:
case 119:
case 1405:
case 2942:
case 3731:
case 1428:
case 584:
case 1375:
case 275:
case 207:
case 1442:
case 511:
case 3990:
case 1661:
case 3412:
case 362:
case 2824:
case 1542:
case 2796:
case 1048:
case 992:
case 3299:
case 3223:
case 485:
case 3018:
case 771:
case 3327:
case 723:
case 1583:
case 1704:
case 289:
case 2295:
case 418:
case 4002:
case 1960:
case 1475:
case 3435:
case 2852:
case 3416:
case 1328:
case 3979:
case 1939:
case 1305:
case 1383:
case 3527:
case 595:
case 463:
case 1287:
case 1017:
case 200:
case 2460:
case 3257:
case 1342:
case 846:
case 4006:
case 3740:
case 2615:
case 2636:
case 1710:
case 1026:
case 1664:
case 494:
case 3084:
case 2539:
case 2821:
case 22:
case 3516:
case 1774:
case 3427:
case 1546:
case 3619:
case 1269:
case 4072:
case 3946:
case 1479:
case 548:
case 2047:
case 2312:
case 1916:
case 1309:
case 2257:
case 3460:
case 300:
case 2353:
case 1113:
case 749:
case 2527:
case 1882:
case 1390:
case 613:
case 3143:
case 2416:
case 3852:
case 69:
case 1602:
case 1121:
case 827:
case 2734:
case 2270:
case 2535:
case 2516:
case 32:
case 441:
case 558:
case 3539:
case 874:
case 2084:
case 1927:
case 3560:
case 1265:
case 2740:
case 1676:
case 3689:
case 299:
case 1321:
case 336:
case 3698:
case 3586:
case 3070:
case 1725:
case 1030:
case 862:
case 982:
case 149:
case 3284:
case 1254:
case 3014:
case 4033:
case 2685:
case 2883:
case 3890:
case 2924:
case 2112:
case 1352:
case 1087:
case 2842:
case 3777:
case 786:
case 1313:
case 1424:
case 3809:
case 594:
case 3343:
case 3486:
case 1190:
case 875:
case 3603:
case 1729:
case 2284:
case 4068:
case 2014:
case 448:
case 2586:
case 629:
case 807:
case 3620:
case 2809:
case 458:
case 1183:
case 3842:
case 1105:
case 1128:
case 3153:
case 3956:
case 690:
case 2247:
case 1142:
case 3805:
case 3883:
case 3673:
case 196:
case 2582:
case 2000:
case 68:
case 246:
case 2738:
case 438:
case 800:
case 3095:
case 4059:
case 374:
case 2879:
case 171:
case 3135:
case 3116:
case 1175:
case 3846:
case 1835:
case 3875:
case 2281:
case 921:
case 1943:
case 579:
case 2095:
case 703:
case 1421:
case 1513:
case 3088:
case 1668:
case 778:
case 3218:
case 4055:
case 2673:
case 2921:
case 3281:
case 3482:
case 3011:
case 3160:
case 518:
case 227:
case 1041:
case 1860:
case 2135:
case 2116:
case 1356:
case 2952:
case 356:
case 274:
case 1839:
case 3879:
case 2440:
case 3974:
case 423:
case 1838:
case 1687:
case 3067:
case 3657:
case 2966:
case 2434:
case 471:
case 1940:
case 785:
case 2727:
case 1466:
case 3291:
case 1178:
case 3138:
case 1059:
case 3107:
case 335:
case 2020:
case 2716:
case 2534:
case 3670:
case 1630:
case 779:
case 1566:
case 2331:
case 3592:
case 3098:
case 3901:
case 3614:
case 281:
case 1807:
case 2540:
case 3760:
case 1264:
case 2003:
case 496:
case 2236:
case 3727:
case 2138:
case 2291:
case 1474:
case 3434:
case 2878:
case 2657:
case 1992:
case 731:
case 2974:
case 2739:
case 3085:
case 184:
case 439:
case 1665:
case 1510:
case 1055:
case 1276:
case 381:
case 2901:
case 2760:
case 1245:
case 36:
case 913:
case 2592:
case 1371:
case 1202:
case 1574:
case 3716:
case 3735:
case 867:
case 2107:
case 111:
case 3893:
case 3334:
case 3829:
case 2825:
case 741:
case 2808:
case 2611:
case 459:
case 1310:
case 222:
case 3712:
case 980:
case 1033:
case 2623:
case 2837:
case 2596:
case 601:
case 2971:
case 245:
case 1301:
case 2294:
case 1504:
case 1705:
case 860:
case 1783:
case 2177:
case 1471:
case 3753:
case 3232:
case 1728:
case 3904:
case 322:
case 1261:
case 794:
case 2962:
case 3392:
case 2829:
case 3880:
case 2531:
case 1366:
case 2893:
case 1108:
case 2334:
case 1125:
case 586:
case 355:
case 2431:
case 3177:
case 2753:
case 345:
case 1790:
case 763:
case 3623:
case 3688:
case 3596:
case 1877:
case 1562:
case 298:
case 3699:
case 1072:
case 1713:
case 1578:
case 3377:
case 3743:
case 673:
case 997:
case 2801:
case 1233:
case 1006:
case 3350:
case 2978:
case 202:
case 2681:
case 86:
case 1892:
case 1963:
case 2140:
case 4017:
case 748:
case 367:
case 1166:
case 1721:
case 376:
case 1478:
case 3438:
case 2810:
case 881:
case 2134:
case 1325:
case 2463:
case 98:
case 1308:
case 2273:
case 291:
case 3801:
case 1648:
case 3563:
case 3094:
case 2743:
case 141:
case 2538:
case 2032:
case 2377:
case 344:
case 943:
case 1174:
case 276:
case 2192:
case 1297:
case 2438:
case 3874:
case 1834:
case 267:
case 3681:
case 302:
case 1938:
case 1110:
case 1329:
case 2203:
case 1529:
case 2285:
case 288:
case 3684:
case 1593:
case 1064:
case 1654:
case 855:
case 3131:
case 334:
case 2477:
case 933:
case 3298:
case 1049:
case 215:
case 3289:
case 2786:
case 3019:
case 2338:
case 2577:
case 2993:
case 596:
case 2450:
case 3647:
case 682:
case 711:
case 3908:
case 3220:
case 2289:
case 3307:
case 1002:
case 2298:
case 2131:
case 4022:
case 1045:
case 2684:
case 388:
case 990:
case 3036:
case 3015:
case 738:
case 2925:
case 2908:
case 4051:
case 2804:
case 360:
case 179:
case 3196:
case 3450:
case 898:
case 539:
case 1425:
case 929:
case 3338:
case 3862:
case 3577:
case 2980:
case 1744:
case 1080:
case 3897:
case 1210:
case 3536:
case 3515:
case 1502:
case 3234:
case 1730:
case 1025:
case 497:
case 1769:
case 2491:
case 1197:
case 2616:
case 4028:
case 4083:
case 2833:
case 1037:
case 3077:
case 3868:
case 2976:
case 2591:
case 3332:
case 461:
case 1445:
case 1306:
case 3757:
case 3949:
case 638:
case 1168:
case 3616:
case 3491:
case 1266:
case 3292:
case 2770:
case 2234:
case 1029:
case 2536:
case 332:
case 2240:
case 1093:
case 1564:
case 453:
case 2436:
case 2415:
case 611:
case 3902:
case 1133:
case 2868:
case 2077:
case 3591:
case 1449:
case 1936:
case 1873:
case 2964:
case 3627:
case 3419:
case 1628:
case 3063:
case 1605:
case 1683:
case 2700:
case 2961:
case 2038:
case 2532:
case 1461:
case 2799:
case 342:
case 3612:
case 433:
case 4079:
case 978:
case 2711:
case 3185:
case 1932:
case 2315:
case 1561:
case 128:
case 3319:
case 3120:
case 101:
case 2432:
case 1349:
case 2198:
case 1803:
case 1885:
case 3167:
case 2296:
case 721:
case 3788:
case 1758:
case 3723:
case 708:
case 3700:
case 1690:
case 1204:
case 59:
case 3532:
case 1572:
case 1867:
case 2391:
case 1078:
case 3038:
case 2063:
case 2795:
case 2855:
case 1472:
case 3231:
case 3198:
case 2319:
case 1302:
case 3007:
case 3189:
case 2103:
case 3336:
case 648:
case 1741:
case 252:
case 2972:
case 1889:
case 1406:
case 3711:
case 1815:
case 3876:
case 1836:
case 2320:
case 694:
case 121:
case 305:
case 3933:
case 533:
case 3845:
case 1102:
case 2864:
case 366:
case 2119:
case 173:
case 377:
case 3115:
case 2385:
case 2303:
case 971:
case 2781:
case 2473:
case 3367:
case 1652:
case 2718:
case 2238:
case 996:
case 3643:
case 663:
case 3263:
case 1164:
case 1819:
case 1751:
case 3781:
case 49:
case 2115:
case 1355:
case 2136:
case 3849:
case 277:
case 409:
case 641:
case 3385:
case 2933:
case 3207:
case 2389:
case 3320:
case 2845:
case 3968:
case 224:
case 2398:
case 2876:
case 1722:
case 487:
case 3238:
case 939:
case 2643:
case 3573:
case 1748:
case 2096:
case 651:
case 3997:
case 3403:
case 3373:
case 1333:
case 1989:
case 1717:
case 959:
case 2955:
case 2132:
case 468:
case 4021:
case 1237:
case 2498:
case 3420:
case 2686:
case 58:
case 3861:
case 4013:
case 949:
case 1010:
case 1726:
case 2467:
case 1161:
case 3250:
case 3503:
case 4052:
case 543:
case 3806:
case 1459:
case 2194:
case 3489:
case 2420:
case 1172:
case 842:
case 3955:
case 3498:
case 1985:
case 2277:
case 1903:
case 370:
case 169:
case 1106:
case 2959:
case 2485:
case 2403:
case 2747:
case 3567:
case 618:
case 825:
case 2250:
case 212:
case 2503:
case 2784:
case 3589:
case 2034:
case 1066:
case 3092:
case 3686:
case 3598:
case 1624:
case 1656:
case 1387:
case 3523:
case 1558:
case 3696:
case 3588:
case 1662:
case 3357:
case 1242:
case 678:
case 3599:
case 2147:
case 2794:
case 180:
case 2817:
case 3043:
case 4074:
case 482:
case 1228:
case 2941:
case 1013:
case 1205:
case 3500:
case 3370:
case 619:
case 1330:
case 4001:
case 2631:
case 306:
case 743:
case 168:
case 2826:
case 1369:
case 365:
case 1344:
case 1995:
case 3423:
case 272:
case 3499:
case 1847:
case 2500:
case 4066:
case 1911:
case 1290:
case 3817:
case 3595:
case 761:
case 2599:
case 1209:
case 2212:
case 2523:
case 2082:
case 1117:
case 2696:
case 1761:
case 2314:
case 797:
case 1900:
case 469:
case 958:
case 1884:
case 2400:
case 265:
case 33:
case 3958:
case 3495:
case 1988:
case 1671:
case 3631:
case 1881:
case 2570:
case 2235:
case 35:
case 3987:
case 729:
case 1674:
case 3634:
case 1749:
case 283:
case 1764:
case 2457:
case 1610:
case 3181:
case 528:
case 217:
case 2514:
case 2715:
case 4062:
case 3640:
case 1279:
case 2323:
case 790:
case 3118:
case 3930:
case 2388:
case 3822:
case 2414:
case 3969:
case 473:
case 3395:
case 830:
case 2965:
case 1818:
case 34:
case 1601:
case 2227:
case 3848:
case 1776:
case 3514:
case 113:
case 826:
case 2640:
case 864:
case 911:
case 3311:
case 2260:
case 1246:
case 4004:
case 2634:
case 187:
case 984:
case 1569:
case 2987:
case 1024:
case 1275:
case 3235:
case 3570:
case 2851:
case 3086:
case 1702:
case 1469:
case 2791:
case 733:
case 2848:
case 3227:
case 3470:
case 686:
case 24:
case 2969:
case 3399:
case 1358:
case 19:
case 3100:
case 3926:
case 3858:
case 401:
case 3199:
case 3767:
case 2484:
case 787:
case 3123:
case 1158:
case 1079:
case 2584:
case 521:
case 133:
case 1141:
case 3650:
case 2381:
case 3111:
case 1947:
case 872:
case 3841:
case 3917:
case 573:
case 1759:
case 1811:
case 2720:
case 2016:
case 2035:
case 659:
case 250:
case 1517:
case 3318:
case 3547:
case 2199:
case 1322:
case 979:
case 985:
case 190:
case 1224:
case 3720:
case 3035:
case 2841:
case 4078:
case 492:
case 2798:
case 3381:
case 918:
case 1629:
case 1417:
case 240:
case 1351:
case 806:
case 3785:
case 1554:
case 1755:
case 1526:
case 257:
case 2922:
case 883:
case 1326:
case 2114:
case 1354:
case 3418:
case 3581:
case 1551:
case 1165:
case 582:
case 2607:
case 161:
case 817:
case 326:
case 2844:
case 963:
case 31:
case 696:
case 1522:
case 197:
case 393:
case 3053:
case 247:
case 671:
case 1548:
case 1451:
case 1317:
case 1252:
case 3012:
case 3518:
case 2865:
case 3170:
case 639:
case 21:
case 1918:
case 1169:
case 3607:
case 1797:
case 3948:
case 85:
case 2581:
case 2418:
case 951:
case 2384:
case 3114:
case 153:
case 357:
case 3157:
case 4093:
case 2012:
case 2481:
case 1187:
case 84:
case 2773:
case 347:
case 768:
case 3887:
case 1981:
case 3951:
case 1090:
case 1857:
case 2004:
case 667:
case 550:
case 3497:
case 2722:
case 1263:
case 1367:
case 3062:
case 2748:
case 1096:
case 2533:
case 676:
case 3176:
case 373:
case 177:
case 2819:
case 2751:
case 1876:
case 3815:
case 3597:
case 2071:
case 691:
case 3359:
case 308:
case 1845:
case 3102:
case 537:
case 3621:
case 1573:
case 3891:
case 946:
case 2652:
case 1997:
case 4086:
case 602:
case 752:
case 0:
case 483:
case 3278:
case 2497:
case 1119:
case 1207:
case 2597:
case 2815:
case 2836:
case 3071:
case 1031:
case 742:
case 3433:
case 3819:
case 3164:
case 1385:
case 1849:
case 956:
case 3355:
case 1503:
case 1585:
case 1250:
case 3754:
case 936:
case 564:
case 526:
case 1040:
case 410:
case 2624:
case 1861:
case 2066:
case 2559:
case 1520:
case 406:
case 2172:
case 1420:
case 1194:
case 2832:
case 892:
case 1485:
case 3998:
case 269:
case 593:
case 3717:
case 77:
case 1959:
case 3333:
case 2208:
case 3559:
case 2074:
case 1589:
case 3624:
case 282:
case 1686:
case 1598:
case 3293:
case 828:
case 3229:
case 2010:
case 2717:
case 3920:
case 2989:
case 3832:
case 615:
case 2001:
case 43:
case 920:
case 3459:
case 1806:
case 3903:
case 1955:
case 1132:
case 3172:
case 530:
case 688:
case 2133:
case 2464:
case 3919:
case 3306:
case 1949:
case 3476:
case 1415:
case 3402:
case 1964:
case 3372:
case 2449:
case 1868:
case 426:
case 770:
case 1234:
case 1770:
case 3730:
case 2646:
case 2675:
case 2549:
case 3769:
case 4053:
case 3545:
case 3679:
case 2093:
case 2765:
case 565:
case 1050:
case 2361:
case 3210:
case 1714:
case 2029:
case 3080:
case 3936:
case 1976:
case 3449:
case 1591:
case 1419:
case 1394:
case 1627:
case 2201:
case 1833:
case 457:
case 1173:
case 2306:
case 2919:
case 1902:
case 447:
case 132:
case 3361:
case 3564:
case 92:
case 3093:
case 3765:
case 2679:
case 1491:
case 3675:
case 1635:
case 2025:
case 17:
case 2008:
case 3646:
case 1906:
case 1494:
case 104:
case 3885:
case 3803:
case 907:
case 3349:
case 2406:
case 975:
case 3820:
case 2889:
case 3155:
case 3932:
case 1185:
case 4060:
case 2506:
case 3262:
case 54:
case 1296:
case 1795:
case 1063:
case 3605:
case 1653:
case 2572:
case 2867:
case 292:
case 1391:
case 2690:
case 2932:
case 882:
case 1336:
case 2155:
case 645:
case 2364:
case 1859:
case 583:
case 3994:
case 3345:
case 2820:
case 2803:
case 1189:
case 201:
case 228:
case 962:
case 3078:
case 1038:
case 1532:
case 3572:
case 3867:
case 777:
case 1700:
case 3204:
case 3690:
case 2605:
case 4035:
case 2628:
case 2461:
case 1167:
case 1799:
case 3609:
case 1723:
case 3758:
case 766:
case 3506:
case 1798:
case 3608:
case 3625:
case 2224:
case 2256:
case 4063:
case 1917:
case 290:
case 2554:
case 566:
case 2755:
case 442:
case 3141:
case 137:
case 333:
case 2693:
case 3079:
case 1039:
case 3680:
case 2629:
case 2417:
case 524:
case 783:
case 3800:
case 452:
case 1767:
case 3158:
case 1123:
case 1188:
case 3899:
case 2322:
case 1926:
case 1954:
case 717:
case 1858:
case 3629:
case 2680:
case 1381:
case 233:
case 3755:
case 2079:
case 1785:
case 868:
case 1584:
case 1703:
case 1016:
case 988:
case 390:
case 2608:
case 620:
case 2637:
case 2823:
case 3322:
case 2899:
case 1027:
case 1318:
case 2158:
case 75:
case 880:
case 3517:
case 2800:
case 1484:
case 3454:
case 1347:
case 243:
case 5:
case 4050:
case 674:
case 2187:
case 1012:
case 3733:
case 3317:
case 1282:
case 73:
case 397:
case 193:
case 3213:
case 3522:
case 3005:
case 772:
case 1243:
case 991:
case 2678:
case 2981:
case 3422:
case 2797:
case 2918:
case 967:
case 3326:
case 976:
case 887:
case 1384:
case 3448:
case 2144:
case 3551:
case 38:
case 1418:
case 3857:
case 3090:
case 1951:
case 1887:
case 1638:
case 2028:
case 2213:
case 570:
case 2005:
case 656:
case 3009:
case 2451:
case 1157:
case 2317:
case 343:
case 2551:
case 1830:
case 3870:
case 28:
case 353:
case 157:
case 1922:
case 954:
case 3918:
case 902:
case 3814:
case 1607:
case 3797:
case 2422:
case 1423:
case 1488:
case 890:
case 3995:
case 3344:
case 2761:
case 1314:
case 2154:
case 3541:
case 4:
case 2923:
case 1370:
case 165:
case 3369:
case 3021:
case 3205:
case 829:
case 3772:
case 1732:
case 1411:
case 2117:
case 3662:
case 1588:
case 3558:
case 1523:
case 3052:
case 675:
case 3242:
case 2369:
case 1826:
case 1854:
case 833:
case 922:
case 3884:
case 532:
case 1631:
case 3988:
case 2330:
case 13:
case 1958:
case 1184:
case 3900:
case 793:
case 2541:
case 172:
case 3761:
case 3126:
case 470:
case 955:
case 1147:
case 2706:
case 2558:
case 2283:
case 2205:
case 662:
case 1941:
case 2772:
case 3604:
case 3911:
case 2430:
case 14:
case 3818:
case 405:
case 1944:
case 1395:
case 1848:
case 424:
case 2469:
case 1791:
case 3914:
case 843:
case 2444:
case 1930:
case 29:
case 2358:
case 1969:
case 1822:
case 3148:
case 209:
case 2487:
case 1181:
case 504:
case 935:
case 3764:
case 525:
case 1640:
case 1239:
case 2776:
case 2341:
case 552:
case 2702:
case 2275:
case 15:
case 2024:
case 853:
case 3749:
case 287:
case 3674:
case 2569:
case 1414:
case 62:
case 309:
case 1388:
case 2465:
case 3587:
case 1323:
case 737:
case 1300:
case 3430:
case 1470:
case 1965:
case 183:
case 2749:
case 2674:
case 600:
case 3246:
case 3702:
case 981:
case 2957:
case 88:
case 3530:
case 3024:
case 3275:
case 1235:
case 117:
case 2610:
case 3487:
case 2764:
case 2565:
case 1311:
case 3544:
case 640:
case 2128:
case 1777:
case 1486:
case 1809:
case 2142:
case 359:
case 716:
case 1247:
case 3087:
case 3352:
case 1014:
case 3780:
case 2729:
case 3044:
case 576:
case 2655:
case 136:
case 912:
case 3321:
case 3069:
case 650:
case 1689:
case 1070:
case 1698:
case 3708:
case 2109:
case 2352:
case 2087:
case 1112:
case 2217:
case 1883:
case 259:
case 1828:
case 3853:
case 2190:
case 455:
case 1153:
case 2313:
case 3105:
case 1842:
case 819:
case 3183:
case 445:
case 2556:
case 2725:
case 199:
case 2321:
case 2069:
case 878:
case 1685:
case 3793:
case 554:
case 2254:
case 2226:
case 1913:
case 2179:
case 693:
case 3816:
case 3146:
case 886:
case 977:
case 2839:
case 2521:
case 2413:
case 2356:
case 1135:
case 2697:
case 1127:
case 1763:
case 762:
case 435:
case 61:
case 3827:
case 2248:
case 664:
case 2552:
case 626:
case 2668:
case 3697:
case 3324:
case 2982:
case 1879:
case 156:
case 3413:
case 1482:
case 1011:
case 2943:
case 2816:
case 2835:
case 223:
case 515:
case 3179:
case 1139:
case 1023:
case 3552:
case 775:
case 1088:
case 4085:
case 4003:
case 1543:
case 657:
case 4020:
case 707:
case 3421:
case 414:
case 665:
case 606:
case 2542:
case 3606:
case 2048:
case 3672:
case 1632:
case 4019:
case 2583:
case 434:
case 2505:
case 2704:
case 2528:
case 3490:
case 4091:
case 610:
case 2428:
case 2346:
case 2483:
case 2661:
case 1856:
case 2051:
case 2442:
case 2241:
case 746:
case 904:
case 3704:
case 1694:
case 1200:
case 3505:
case 859:
case 1327:
case 1553:
case 1299:
case 4036:
case 4015:
case 3048:
case 219:
case 3258:
case 1223:
case 1512:
case 460:
case 2379:
case 3241:
case 162:
case 1081:
case 1211:
case 3051:
case 2886:
case 3428:
case 1453:
case 3771:
case 3483:
case 849:
case 3346:
case 3405:
case 2490:
case 2912:
case 2156:
case 1335:
case 3230:
case 1270:
case 1734:
case 3649:
case 1535:
case 1516:
case 3575:
case 2766:
case 2121:
case 1427:
case 2676:
case 3244:
case 2645:
case 1084:
case 286:
case 64:
case 1214:
case 3710:
case 3017:
case 2935:
case 2916:
case 799:
case 1047:
case 65:
case 3701:
case 1691:
case 3475:
case 1416:
case 3960:
case 1527:
case 839:
case 3446:
case 476:
case 1979:
case 3939:
case 3328:
case 1353:
case 386:
case 2664:
case 3579:
case 2054:
case 3676:
case 1636:
case 871:
case 3265:
case 97:
case 1560:
case 2546:
case 4094:
case 522:
case 12:
case 2649:
case 2230:
case 2939:
case 2305:
case 454:
case 896:
case 3113:
case 2328:
case 1852:
case 1143:
case 2960:
case 617:
case 3390:
case 3882:
case 736:
case 1813:
case 1439:
case 1946:
case 1460:
case 1182:
case 2017:
case 683:
case 3843:
case 3935:
case 2297:
case 1438:
case 176:
case 1192:
case 3308:
case 3325:
case 1507:
case 251:
case 3892:
case 4047:
case 2938:
case 2061:
case 536:
case 964:
case 363:
case 666:
case 394:
case 993:
case 605:
case 1782:
case 3752:
case 3233:
case 722:
case 3337:
case 3578:
case 3713:
case 1032:
case 2622:
case 1407:
case 2101:
case 241:
case 677:
case 1874:
case 263:
case 2963:
case 1140:
case 838:
case 400:
case 2380:
case 3329:
case 3938:
case 1681:
case 3840:
case 351:
case 2325:
case 154:
case 2166:
case 957:
case 42:
case 3101:
case 3622:
case 416:
case 2337:
case 2072:
case 520:
case 2713:
case 2578:
case 3648:
case 1801:
case 2752:
case 1618:
case 294:
case 1267:
case 714:
case 1804:
case 3429:
case 1908:
case 3493:
case 1647:
case 1925:
case 3104:
case 3950:
case 2378:
case 475:
case 950:
case 2425:
case 612:
case 3049:
case 1298:
case 134:
case 218:
case 2002:
case 3259:
case 2525:
case 2724:
case 940:
case 331:
case 6:
case 2076:
case 574:
case 3064:
case 2045:
case 1862:
case 1577:
case 3378:
case 1338:
case 2493:
case 546:
case 4081:
case 462:
case 1196:
case 3162:
case 3480:
case 2429:
case 2617:
case 379:
case 2626:
case 188:
case 2529:
case 2831:
case 1285:
case 1550:
case 1015:
case 3508:
case 318:
case 1307:
case 3756:
case 3525:
case 2049:
case 3437:
case 1901:
case 2510:
case 3644:
case 284:
case 2665:
case 2574:
case 2775:
case 1089:
case 3669:
case 135:
case 211:
case 507:
case 338:
case 1219:
case 4095:
case 1098:
case 2746:
case 3566:
case 3630:
case 3940:
case 2474:
case 1910:
case 3466:
case 474:
case 841:
case 589:
case 3934:
case 1974:
case 2863:
case 94:
case 2992:
case 1396:
case 2410:
case 3687:
case 562:
case 2566:
case 114:
case 917:
case 4000:
case 311:
case 3401:
case 1735:
case 863:
case 2059:
case 238:
case 3202:
case 1215:
case 3510:
case 1003:
case 983:
case 1085:
case 1540:
case 2264:
case 4023:
case 734:
case 2934:
case 2178:
case 3304:
case 456:
case 2940:
case 632:
case 3474:
case 1434:
case 3501:
case 652:
case 248:
case 3728:
case 3272:
case 1431:
case 2137:
case 3783:
case 1695:
case 436:
case 395:
case 3033:
case 604:
case 2068:
case 2877:
case 2562:
case 2658:
case 4014:
case 754:
case 1340:
case 2641:
case 906:
case 965:
case 2180:
case 1334:
case 885:
case 642:
case 3996:
case 1829:
case 2097:
case 2850:
case 1837:
case 3877:
case 3562:
case 1688:
case 1971:
case 3931:
case 1623:
case 1699:
case 3709:
case 2033:
case 295:
case 500:
case 499:
case 2471:
case 767:
case 348:
case 1294:
case 40:
case 145:
case 2301:
case 2571:
case 3366:
case 972:
case 3850:
case 3097:
case 155:
case 358:
case 791:
case 2310:
case 122:
case 1611:
case 3180:
case 1904:
case 3462:
case 1808:
case 831:
case 516:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1749124801/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,0,0,0,1,1,1,0,0,0,0,0,1,1,1,1,0,1,0,1,0,1,1,0,1,0,0,0,1,1,0,1,1,1,1,1,1,0,1,0,1,0,1,1,0,0,0,0,0,1,0,0,0,0,1,0,0,0,1,1,0,1,1,0,1,1,0,0,1,1,0,0,0,1,0,1,0,1,0,0,1,0,0,0,1,1,1,0,1,0,0,0,1,0,1,0,0,1,1,0,0,1,0,0,1,0,0,0,0,0,0,1,0,1,1,0,0,1,0,1,0,1,1,0,0,0,0,0,1,0,0,0,1,1,1,1,1,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,1,1,1,1,0,0,0,1,1,0,0,1,0,0,1,1,0,1,1,1,0,0,1,1,0,1,1,0,0,1,1,0,0,1,1,0,1,0,0,1,0,0,1,1,0,1,1,1,1,0,0,0,0,1,0,1,0,1,1,0,0,1,0,1,1,1,0,0,1,1,1,0,0,1,1,0,0,0,0,1,0,0,0,0,1,0,1,1,0,1,0,1,1,1,1,0,1,1,1,0,0,0,0,1,0,1,0,0,1,1,0,1,0,1,0,1,0,0,1,0,1,1,1,1,0,0,0,1,1,1,1,0,1,1,1,1,1,1,1,0,1,1,0,0,1,1,1,0,1,0,0,1,1,1,1,1,0,1,0,0,0,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,1,1,1,1,1,1,0,1,0,0,0,1,1,1,1,0,1,1,0,0,1,0,1,0,1,1,1,1,1,1,0,1,1,0,1,1,1,0,0,1,0,0,1,1,0,1,1,0,1,0,1,0,0,0,0,1,0,1,1,1,0,0,1,1,1,0,1,0,0,1,1,0,0,0,1,1,0,0,1,1,0,0,0,1,0,1,0,1,0,0,0,0,1,1,0,1,0,0,0,0,0,0,1,1,1,1,0,1,1,0,1,1,0,0,1,0,1,1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,1,1,1,1,0,1,1,1,1,0,0,0,0,0,1,1,0,1,0,1,0,0,0,0,1,0,1,0,1,1,0,1,1,0,0,0,1,0,0,1,0,0,0,1,0,0,0,1,1,0,1,0,1,1,1,0,1,1,1,0,1,0,1,0,1,1,0,0,1,1,1,1,0,0,0,1,0,0,1,0,1,0,1,0,1,0,1,0,0,0,1,0,0,0,1,0,1,1,1,0,0,0,1,0,0,1,1,0,1,0,0,1,0,0,1,1,1,0,1,0,0,1,0,0,0,1,1,1,1,0,0,0,1,1,1,0,1,1,1,0,0,0,1,1,1,1,0,1,0,1,1,1,1,0,0,0,0,0,1,0,0,1,0,0,1,0,0,0,0,0,1,1,1,1,1,0,0,1,0,0,1,0,1,1,1,0,0,0,1,1,0,1,0,0,1,1,1,1,1,1,0,0,0,1,0,1,1,1,1,1,1,0,0,0,1,1,0,0,1,0,1,0,1,1,0,1,1,0,1,0,0,0,0,0,0,1,0,0,0,1,1,0,0,1,0,0,1,0,1,1,0,0,0,1,1,1,0,0,0,0,0,1,0,1,0,1,1,0,1,1,1,0,0,1,1,1,0,0,1,0,1,1,0,0,1,0,1,0,0,0,0,0,0,1,1,1,0,0,1,1,1,0,1,1,1,0,0,1,0,1,1,1,0,0,0,1,0,1,1,1,0,0,1,1,0,1,1,0,0,1,0,1,1,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,1,0,1,1,0,0,0,0,1,1,1,1,1,1,1,0,1,0,0,0,0,1,1,0,1,1,1,0,0,1,0,0,1,0,0,0,1,0,1,0,0,0,1,1,0,1,1,1,0,0,1,1,0,0,1,1,0,1,1,0,0,1,0,1,1,1,1,0,1,1,1,0,0,1,0,1,0,0,0,1,0,1,1,0,0,1,0,1,0,1,1,0,0,0,1,1,1,0,0,0,1,1,0,1,1,1,0,0,0,0,0,0,1,0,0,0,1,0,1,1,0,0,1,1,0,0,1,0,0,1,0,0,1,1,1,0,0,1,1,1,1,1,1,0,0,1,1,1,1,0,1,0,0,0,1,1,0,0,1,1,1,1,1,1,1,1,1,1,1,0,0,1,0,1,1,1,1,0,0,1,1,0,0,0,0,1,1,0,0,1,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0,1,1,1,1,1,0,1,1,1,1,1,0,0,0,1,1,1,1,1,0,0,0,1,0,1,1,1,1,0,0,0,0,1,0,0,0,1,0,0,0,1,1,0,1,0,0,0,1,0,1,0,0,0,0,0,1,1,1,1,0,0,1,1,0,1,1,1,1,0,0,1,0,0,1,0,1,0,0,0,1,0,0,1,1,0,1,0,1,0,1,1,0,0,0,1,0,1,0,1,0,1,0,1,0,1,1,0,0,0,1,1,0,1,0,0,0,1,1,1,1,1,0,0,0,1,0,0,0,0,0,1,0,0,0,1,1,0,0,1,0,0,1,1,1,1,1,1,0,0,1,1,1,1,0,0,1,0,0,1,1,1,1,1,0,1,1,1,1,0,1,0,1,0,1,1,0,0,1,0,1,0,1,1,0,1,0,1,1,1,0,0,1,1,0,0,0,1,0,0,0,1,1,0,0,0,1,0,0,0,0,1,1,1,0,1,0,1,0,0,1,1,0,1,1,1,0,0,1,0,1,0,1,0,0,0,0,0,0,1,0,1,1,1,1,1,0,1,1,0,0,0,0,1,1,0,0,1,0,0,1,0,0,1,0,1,0,0,1,0,0,0,1,0,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,0,1,1,0,0,1,1,0,0,1,1,1,0,1,1,1,1,1,1,0,0,1,1,1,1,0,1,0,1,0,1,0,1,0,0,1,0,1,0,1,1,1,1,1,1,0,1,0,0,0,0,0,0,0,1,1,0,1,1,1,0,0,0,1,0,0,0,0,0,1,0,1,1,1,0,1,1,0,1,1,0,0,1,1,1,0,0,0,0,0,0,0,0,1,1,1,0,0,0,1,0,0,1,1,1,1,1,1,1,1,0,1,1,1,0,1,1,0,0,1,0,0,1,0,0,0,1,1,0,0,1,0,0,1,0,0,0,1,0,1,0,1,0,0,0,0,0,1,1,1,0,0,0,0,1,0,0,1,1,1,1,0,1,1,0,0,1,1,0,0,1,0,1,1,1,0,1,0,0,1,0,0,1,0,0,0,0,0,0,0,1,1,1,0,0,1,0,1,1,0,1,1,0,0,1,1,0,0,1,0,1,1,0,0,1,1,0,1,0,0,1,0,0,1,0,0,0,0,1,0,1,1,0,0,1,0,1,0,1,1,0,1,1,0,0,0,1,0,1,1,1,0,1,0,1,0,0,1,0,0,1,1,1,0,0,1,1,0,0,0,0,1,1,1,0,0,1,1,1,1,0,1,0,0,0,0,1,0,0,1,1,0,0,1,1,1,0,0,1,1,0,0,0,0,0,0,1,0,0,0,0,1,1,0,0,1,1,1,1,1,1,0,0,1,1,0,1,0,1,0,0,0,0,0,0,1,1,0,0,0,1,1,1,0,1,0,0,0,0,1,1,0,1,1,0,0,1,0,0,1,1,0,1,0,1,0,0,0,0,1,0,1,0,1,1,1,1,1,1,1,0,0,1,1,0,0,1,1,1,0,1,1,1,1,0,0,0,0,1,0,0,1,1,0,0,1,0,0,0,1,1,1,0,1,1,0,1,1,1,0,1,0,1,1,0,0,0,0,0,1,0,0,1,0,0,0,1,1,0,1,0,0,0,1,0,0,1,1,0,1,0,1,1,0,0,1,0,1,1,0,0,0,1,0,1,1,0,0,0,0,1,1,0,1,0,0,0,0,1,1,0,0,0,1,0,1,1,1,0,1,0,1,1,0,1,1,1,1,0,1,0,1,0,1,0,0,1,1,0,0,1,0,0,0,1,0,1,1,1,0,0,1,1,1,1,1,1,1,0,0,1,0,0,1,0,1,1,1,0,0,1,0,1,0,1,1,1,1,1,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,1,1,0,1,0,1,1,1,1,1,1,1,0,1,0,0,1,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,1,1,1,0,0,1,1,1,0,0,0,1,0,0,1,1,1,0,0,1,0,1,0,0,0,1,0,1,1,1,1,0,1,1,0,1,1,0,1,0,1,0,0,1,1,0,0,1,1,1,0,0,1,1,1,0,0,0,1,0,1,0,0,1,0,1,0,0,1,0,1,0,0,0,1,0,0,1,1,0,0,1,0,0,1,0,1,0,0,1,1,1,1,1,1,0,0,1,0,1,0,1,0,1,0,1,1,0,0,1,0,0,0,1,1,0,0,1,1,0,0,1,1,1,1,0,0,1,0,0,0,0,0,0,1,0,1,1,1,0,1,0,0,1,0,0,0,0,1,0,1,0,1,0,0,1,0,1,1,0,1,1,0,1,0,1,1,0,1,0,0,1,0,1,0,0,1,0,0,0,0,0,1,0,1,1,1,0,0,0,1,0,1,0,0,0,1,0,1,0,0,1,0,1,1,1,1,0,1,0,1,0,0,0,0,0,0,1,0,0,1,1,1,1,1,1,1,1,0,1,0,1,0,1,0,0,1,0,0,0,0,0,0,1,1,1,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,1,1,1,1,0,0,0,0,0,0,1,0,0,1,0,1,0,1,0,0,0,1,1,1,1,0,1,0,1,0,0,1,0,0,1,1,1,0,0,0,1,0,0,0,0,0,0,1,0,1,1,0,0,1,0,0,0,1,1,1,0,1,0,1,1,0,0,0,0,0,1,1,0,1,0,0,0,1,0,1,1,0,0,1,0,0,0,1,0,0,0,0,0,1,0,0,1,0,1,0,1,0,0,0,1,0,1,1,1,0,0,0,1,0,1,0,0,1,1,1,1,1,0,0,1,0,1,0,1,1,0,0,0,1,0,1,1,1,1,0,1,0,1,1,1,1,1,0,1,0,1,1,0,1,1,0,0,1,0,0,1,1,0,0,1,0,0,0,0,1,0,0,0,0,0,1,1,0,0,1,0,1,0,0,1,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,1,1,1,1,1,0,0,1,1,0,0,1,1,0,1,0,0,0,0,0,0,1,0,1,0,0,1,0,0,1,0,0,0,1,0,1,1,1,1,1,1,1,0,1,0,1,0,0,1,0,0,1,1,1,1,1,0,1,0,1,0,1,0,1,0,1,0,1,0,0,0,0,1,1,1,0,1,0,0,0,1,0,0,1,1,0,1,1,1,0,1,0,1,0,1,0,1,1,0,0,1,0,0,0,1,0,1,1,1,0,1,0,0,1,1,0,1,0,0,0,1,1,0,1,0,0,1,0,1,1,0,0,0,1,0,0,0,1,0,1,0,0,0,0,1,0,1,0,1,0,1,1,1,0,1,1,1,1,1,1,0,1,1,1,1,1,0,0,0,1,0,0,1,0,1,1,0,1,0,1,0,1,1,0,0,1,0,0,1,1,0,0,1,1,1,1,0,1,0,0,1,1,0,0,1,1,1,1,0,1,0,0,0,0,1,1,0,0,0,1,1,0,1,0,0,0,0,0,1,0,1,1,0,1,1,0,0,0,1,1,1,0,0,0,0,1,1,1,0,1,0,1,1,0,1,0,0,1,0,1,1,0,0,1,1,0,1,0,1,1,0,0,1,0,0,1,0,0,1,0,1,1,0,0,1,0,0,1,1,0,0,1,0,0,0,0,1,1,1,1,0,1,1,1,1,0,0,1,1,1,0,0,0,1,0,0,1,0,0,1,1,0,0,1,0,1,0,1,0,1,0,0,0,0,1,0,1,0,1,1,1,1,0,1,0,1,0,1,1,0,1,0,1,0,0,0,0,1,0,0,0,1,1,1,0,0,1,0,0,1,1,1,1,0,1,1,1,0,1,0,0,0,0,1,1,0,0,1,1,1,0,0,0,1,0,1,1,0,1,1,0,0,0,0,1,0,0,1,0,1,0,0,0,0,1,0,0,1,1,1,1,1,1,1,1,0,1,1,0,0,0,1,1,1,0,0,0,0,1,1,1,0,1,1,1,0,1,1,1,1,0,0,1,0,1,1,1,0,1,1,1,0,1,0,1,1,0,1,1,0,0,1,0,1,1,1,0,0,1,0,0,0,0,0,0,0,1,1,1,0,1,1,0,0,0,0,0,0,0,1,1,1,1,0,0,0,1,0,0,1,0,0,1,0,0,0,1,0,0,0,0,0,1,0,1,0,0,0,0,0,0,1,1,0,0,1,0,0,0,1,0,1,1,0,1,1,1,1,1,0,0,0,0,0,0,1,1,1,1,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,1,0,0,1,0,1,0,1,1,1,1,1,1,1,1,0,0,1,0,1,1,0,1,0,1,0,1,0,1,1,1,0,0,0,0,1,0,1,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,1,0,1,1,0,1,1,0,1,1,1,0,1,0,0,1,0,0,0,0,0,0,0,0,1,0,1,1,0,1,0,0,0,0,1,1,0,0,0,1,1,0,1,1,1,0,0,0,0,0,0,0,0,1,1,1,0,0,1,0,1,1,1,0,0,0,0,0,1,1,1,1,0,0,0,1,1,1,1,1,0,1,0,1,1,1,1,0,1,1,0,1,1,1,0,1,1,0,1,0,0,0,1,0,1,1,1,1,0,1,0,1,0,0,1,0,0,1,0,0,0,0,1,0,0,0,1,0,0,1,0,0,1,0,1,0,0,1,0,1,0,0,0,0,1,0,1,0,1,1,0,1,0,1,0,1,0,0,1,0,0,1,0,1,0,0,0,1,1,0,1,1,1,0,1,0,1,1,0,0,1,0,0,0,0,0,0,1,0,1,1,0,0,1,0,1,1,0,1,0,0,1,0,0,1,0,0,0,0,1,0,1,0,0,1,0,0,0,1,0,1,1,1,1,1,1,1,0,0,1,0,0,1,1,0,1,0,1,0,0,0,1,0,0,0,0,0,0,1,1,1,0,0,1,1,0,1,0,0,0,0,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,0,0,1,0,1,1,1,0,1,0,0,1,1,0,0,0,0,1,0,1,1,1,0,0,1,0,0,0,0,0,1,1,1,1,1,1,0,1,1,1,1,1,1,0,0,1,1,1,0,1,1,1,1,0,0,0,1,1,1,1,0,0,1,1,0,1,0,0,1,0,1,0,1,0,1,0,0,0,0,1,1,0,1,1,0,1,1,0,0,0,1,1,0,0,1,0,0,0,1,0,0,0,0,1,0,1,0,0,1,0,0,0,1,0,1,1,1,0,1,0,0,0,0,0,0,1,1,0,0,1,0,1,1,1,1,1,1,0,0,0,1,1,1,1,0,0,1,1,1,0,1,1,0,0,0,0,0,0,0,1,0,1,1,1,0,0,0,1,0,0,0,0,1,1,0,1,0,0,0,1,0,0,0,1,0,0,0,1,1,1,0,0,0,1,0,1,1,0,0,1,1,0,1,1,1,0,1,0,1,0,1,1,1,1,1,0,1,0,1,1,0,1,0,1,0,0,0,1,1,1,1,1,0,0,0,1,1,0,1,0,1,0,0,1,0,1,0,0,0,1,0,0,1,0,1,0,0,1,1,0,1,0,0,0,1,1,0,0,0,0,0,1,1,1,0,1,1,1,0,1,1,0,0,1,0,1,1,0,1,0,1,1,1,0,1,0,0,0,0,1,1,1,1,0,1,1,0,0,1,1,1,1,1,0,0,0,1,1,1,1,1,1,1,0,0,1,0,1,0,1,0,0,1,1,1,1,1,1,1,0,1,0,1,1,1,1,0,1,0,0,0,0,0,1,0,0,1,1,0,1,1,1,1,1,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,1,1,0,1,1,1,1,1,0,0,1,1,1,0,0,1,0,1,1,1,1,1,0,0,0,0,0,1,1,1,1,1,1,1,0,1,0,0,0,1,1,1,1,1,1,0,0,1,1,0,0,1,0,0,1,0,0,0,1,1,0,1,1,0,1,0,1,0,0,0,0,1,0,0,1,0,0,0,0,0,1,0,0,1,1,1,1,1,1,1,0,1,1,0,0,1,1,0,1,0,1,0,1,1,0,0,0,0,1,0,0,1,1,0,1,0,1,0,0,1,0,0,0,0,1,0,0,0,1,0,0,1,1,0,1,0,1,1,0,0,1,0,0,0,0,1,1,1,1,1,1,1,0,1,0,1,0,0,1,0,1,0,0,1,0,0,0,0,0,0,0,1,1,1,1,0,1,1,0,1,1,1,0,1,1,0,0,0,1,1,0,0,1,1,0,0,0,0,1,1,0,1,0,0,0,1,1,1,1,0,1,1,0,1,1,1,1,0,1,0,0,1,1,1,1,0,0,0,1,0,1,1,1,1,1,1,1,0,0,1,0,0,1,0,0,1,0,0,1,1,1,1,0,0,0,0,0,1,0,0,0,1,1,1,1,1,1,1,0,1,1,1,0,0,0,0,0,1,0,1,1,1,1,0,0,0,1,1,0,1,0,1,0,0,0,0,0,0,0,1,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,1,1,0,1,0,0,0,1,1,1,1,1,0,1,1,1,1,1,0,1,0,0,0,0,0,0,1,1,1,0,1,0,1,1,1,1,1,0,0,0,0,1,0,0,0,0,1,0,1,1,0,0,0,0,0,0,0,0,0,0,1,0,0,1,1,1,1,0,1,0,0,0,1,1,0,1,1,1,0,1,0,1,0,0,0,1,0,1,0,0,0,1,1,0,1,0,1,0,1,1,0,0,0,0,1,0,1,1,1,];
var gg_b = "1749124801/";

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
