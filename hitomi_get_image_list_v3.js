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
case 1980:
case 1802:
case 171:
case 3141:
case 1213:
case 3269:
case 2019:
case 3286:
case 396:
case 4062:
case 2298:
case 176:
case 3730:
case 2069:
case 2086:
case 3238:
case 3305:
case 2036:
case 1214:
case 3098:
case 1497:
case 3288:
case 1574:
case 504:
case 3444:
case 1198:
case 2857:
case 2312:
case 200:
case 3145:
case 2465:
case 3256:
case 152:
case 3849:
case 3579:
case 1950:
case 3258:
case 3622:
case 700:
case 71:
case 3703:
case 1843:
case 2415:
case 1507:
case 1041:
case 3909:
case 2532:
case 3775:
case 1491:
case 3910:
case 3093:
case 378:
case 2922:
case 2034:
case 1216:
case 618:
case 3891:
case 1760:
case 979:
case 2609:
case 804:
case 2417:
case 2084:
case 1268:
case 2294:
case 613:
case 1289:
case 2855:
case 3960:
case 279:
case 422:
case 2083:
case 3225:
case 2881:
case 1710:
case 1072:
case 2033:
case 3284:
case 1218:
case 3094:
case 2831:
case 1047:
case 3448:
case 987:
case 766:
case 787:
case 3307:
case 754:
case 3895:
case 3706:
case 660:
case 2139:
case 961:
case 1392:
case 2835:
case 195:
case 1576:
case 254:
case 3446:
case 1379:
case 1846:
case 1259:
case 2000:
case 2885:
case 2429:
case 1993:
case 2733:
case 223:
case 1171:
case 2918:
case 1799:
case 2275:
case 115:
case 228:
case 4023:
case 2355:
case 723:
case 1106:
case 2916:
case 2784:
case 695:
case 2452:
case 160:
case 1597:
case 517:
case 3999:
case 4085:
case 709:
case 728:
case 3391:
case 1994:
case 407:
case 308:
case 923:
case 3793:
case 2385:
case 142:
case 2753:
case 88:
case 237:
case 2700:
case 2565:
case 1549:
case 382:
case 3479:
case 2351:
case 1686:
case 2440:
case 2959:
case 3544:
case 3160:
case 862:
case 2324:
case 113:
case 1636:
case 3874:
case 4081:
case 1619:
case 693:
case 1638:
case 2432:
case 725:
case 1407:
case 439:
case 3008:
case 4055:
case 3543:
case 3110:
case 925:
case 4031:
case 937:
case 2482:
case 2206:
case 2122:
case 2754:
case 99:
case 2242:
case 4057:
case 562:
case 3109:
case 3805:
case 3080:
case 3290:
case 2963:
case 1591:
case 2786:
case 4026:
case 58:
case 1600:
case 3030:
case 2788:
case 2647:
case 3945:
case 494:
case 1150:
case 2387:
case 2280:
case 2090:
case 2964:
case 29:
case 3659:
case 311:
case 1741:
case 1683:
case 671:
case 2204:
case 4037:
case 3616:
case 2756:
case 744:
case 1633:
case 1478:
case 62:
case 1401:
case 3548:
case 3801:
case 3668:
case 316:
case 244:
case 3689:
case 1476:
case 3004:
case 3349:
case 3876:
case 1634:
case 2277:
case 1344:
case 2250:
case 1180:
case 270:
case 2203:
case 2370:
case 574:
case 44:
case 2758:
case 1684:
case 817:
case 3618:
case 3223:
case 2051:
case 1504:
case 87:
case 2853:
case 612:
case 2800:
case 1046:
case 2295:
case 1779:
case 821:
case 3774:
case 1792:
case 1907:
case 2932:
case 1974:
case 707:
case 3371:
case 2940:
case 3992:
case 3095:
case 1048:
case 3979:
case 3447:
case 907:
case 1550:
case 3235:
case 3224:
case 1494:
case 3148:
case 2833:
case 1542:
case 890:
case 2952:
case 645:
case 2416:
case 1195:
case 351:
case 3499:
case 2291:
case 1580:
case 1612:
case 1267:
case 333:
case 1360:
case 884:
case 2439:
case 3255:
case 356:
case 3375:
case 2489:
case 437:
case 2825:
case 2129:
case 3281:
case 3091:
case 425:
case 364:
case 1493:
case 3441:
case 1508:
case 2161:
case 1043:
case 1571:
case 1920:
case 1265:
case 1841:
case 3226:
case 1976:
case 2827:
case 4090:
case 780:
case 3778:
case 294:
case 3701:
case 590:
case 3303:
case 3377:
case 1901:
case 1978:
case 3304:
case 994:
case 1215:
case 2026:
case 3720:
case 2858:
case 1506:
case 3652:
case 794:
case 3228:
case 2070:
case 280:
case 1309:
case 153:
case 3380:
case 521:
case 24:
case 2692:
case 3287:
case 3560:
case 1498:
case 470:
case 3898:
case 3640:
case 1575:
case 2869:
case 2413:
case 1261:
case 2886:
case 1845:
case 57:
case 2087:
case 3682:
case 3342:
case 2522:
case 2888:
case 1496:
case 1002:
case 3632:
case 2037:
case 3896:
case 2463:
case 3143:
case 1211:
case 2838:
case 2770:
case 568:
case 1809:
case 4036:
case 1744:
case 2012:
case 3262:
case 3409:
case 3020:
case 2201:
case 2358:
case 534:
case 1404:
case 563:
case 4086:
case 2726:
case 658:
case 4069:
case 899:
case 3850:
case 2965:
case 1949:
case 3078:
case 1631:
case 1403:
case 3001:
case 3547:
case 730:
case 930:
case 3944:
case 1655:
case 1341:
case 1743:
case 2276:
case 631:
case 2516:
case 341:
case 1623:
case 655:
case 181:
case 2319:
case 1178:
case 2388:
case 1594:
case 1442:
case 565:
case 214:
case 1651:
case 2386:
case 2646:
case 186:
case 2369:
case 400:
case 1120:
case 2336:
case 1480:
case 1635:
case 1624:
case 847:
case 3005:
case 3902:
case 4033:
case 2929:
case 1240:
case 2354:
case 865:
case 1347:
case 2274:
case 1637:
case 3073:
case 1408:
case 2602:
case 2321:
case 3007:
case 479:
case 4083:
case 2723:
case 777:
case 3808:
case 1092:
case 1995:
case 2724:
case 4084:
case 2735:
case 3806:
case 922:
case 1232:
case 2273:
case 3948:
case 2353:
case 4034:
case 2207:
case 810:
case 302:
case 3611:
case 789:
case 1475:
case 466:
case 4053:
case 148:
case 863:
case 2325:
case 3393:
case 454:
case 599:
case 3875:
case 2967:
case 1598:
case 143:
case 1174:
case 1860:
case 3192:
case 834:
case 989:
case 1670:
case 383:
case 2643:
case 2781:
case 1596:
case 2383:
case 1399:
case 289:
case 2917:
case 2731:
case 1810:
case 1372:
case 2333:
case 4054:
case 1628:
case 1252:
case 2422:
case 664:
case 997:
case 4066:
case 499:
case 633:
case 797:
case 1806:
case 4018:
case 3092:
case 3406:
case 1541:
case 1073:
case 2032:
case 3471:
case 3637:
case 2359:
case 2935:
case 4016:
case 2924:
case 3347:
case 2951:
case 2527:
case 3240:
case 561:
case 4068:
case 2082:
case 3252:
case 579:
case 3628:
case 2767:
case 3372:
case 2368:
case 2588:
case 3991:
case 1410:
case 1615:
case 2519:
case 249:
case 3596:
case 4059:
case 627:
case 2052:
case 2339:
case 183:
case 2955:
case 1192:
case 949:
case 343:
case 2981:
case 3598:
case 188:
case 2569:
case 1393:
case 3626:
case 2586:
case 1545:
case 348:
case 2649:
case 3475:
case 800:
case 2366:
case 312:
case 2931:
case 4063:
case 3681:
case 465:
case 3743:
case 324:
case 2957:
case 2715:
case 1944:
case 1001:
case 3403:
case 1547:
case 1078:
case 2554:
case 904:
case 3631:
case 3477:
case 1803:
case 1212:
case 1877:
case 1749:
case 4013:
case 1804:
case 2691:
case 2928:
case 2553:
case 2500:
case 2765:
case 3105:
case 1617:
case 4064:
case 40:
case 1005:
case 1797:
case 1902:
case 2937:
case 887:
case 2364:
case 23:
case 2313:
case 386:
case 3685:
case 2987:
case 434:
case 2534:
case 3651:
case 2711:
case 146:
case 2162:
case 1842:
case 2490:
case 861:
case 2363:
case 1599:
case 3702:
case 2695:
case 1396:
case 3623:
case 93:
case 141:
case 3044:
case 544:
case 2458:
case 3506:
case 240:
case 570:
case 3215:
case 2962:
case 1304:
case 421:
case 3978:
case 1776:
case 1350:
case 2187:
case 740:
case 1270:
case 828:
case 3976:
case 809:
case 355:
case 774:
case 2015:
case 3265:
case 641:
case 3841:
case 1102:
case 2912:
case 426:
case 3571:
case 3920:
case 3043:
case 3508:
case 1441:
case 490:
case 98:
case 2061:
case 3211:
case 762:
case 3905:
case 2863:
case 2814:
case 962:
case 1682:
case 1510:
case 78:
case 3149:
case 759:
case 262:
case 3261:
case 3845:
case 2126:
case 1237:
case 484:
case 2202:
case 358:
case 2813:
case 1330:
case 2864:
case 1898:
case 2674:
case 1097:
case 1287:
case 1380:
case 2157:
case 353:
case 2436:
case 2454:
case 1224:
case 3577:
case 3503:
case 4022:
case 1447:
case 2131:
case 392:
case 2246:
case 2859:
case 1285:
case 135:
case 2155:
case 3229:
case 2421:
case 1308:
case 1509:
case 2248:
case 3792:
case 1774:
case 6:
case 2740:
case 2029:
case 3191:
case 688:
case 3504:
case 1223:
case 2866:
case 164:
case 2676:
case 1893:
case 1375:
case 602:
case 138:
case 2434:
case 2889:
case 1255:
case 1231:
case 2620:
case 2818:
case 3360:
case 2752:
case 2135:
case 2124:
case 2017:
case 133:
case 717:
case 2816:
case 685:
case 419:
case 151:
case 3195:
case 3899:
case 2433:
case 1472:
case 2601:
case 2868:
case 3542:
case 3872:
case 3494:
case 1148:
case 917:
case 3217:
case 2067:
case 3302:
case 1659:
case 2936:
case 2361:
case 3998:
case 1796:
case 2969:
case 77:
case 2714:
case 2986:
case 474:
case 54:
case 3653:
case 3600:
case 2713:
case 4065:
case 2311:
case 726:
case 3591:
case 3104:
case 1080:
case 926:
case 440:
case 2412:
case 691:
case 2956:
case 1639:
case 2535:
case 2524:
case 3420:
case 48:
case 3344:
case 2551:
case 1876:
case 3625:
case 3634:
case 1349:
case 1004:
case 284:
case 257:
case 3476:
case 116:
case 2693:
case 1546:
case 2462:
case 1801:
case 3142:
case 1878:
case 2190:
case 1077:
case 1050:
case 3478:
case 594:
case 2523:
case 1616:
case 2315:
case 111:
case 3741:
case 3595:
case 108:
case 632:
case 129:
case 1793:
case 1972:
case 1075:
case 3994:
case 880:
case 1391:
case 360:
case 3060:
case 2210:
case 2739:
case 1502:
case 315:
case 894:
case 3656:
case 675:
case 3772:
case 2260:
case 3010:
case 539:
case 3627:
case 2022:
case 1614:
case 3747:
case 2953:
case 3407:
case 2696:
case 1071:
case 2759:
case 1663:
case 219:
case 1874:
case 673:
case 3474:
case 2921:
case 919:
case 3892:
case 1160:
case 1544:
case 507:
case 417:
case 2329:
case 84:
case 2954:
case 3879:
case 799:
case 2722:
case 1284:
case 2431:
case 2677:
case 589:
case 3975:
case 2650:
case 3710:
case 2867:
case 2016:
case 2455:
case 1234:
case 1960:
case 2481:
case 393:
case 2121:
case 999:
case 450:
case 2018:
case 66:
case 2352:
case 3760:
case 2066:
case 3216:
case 55:
case 2100:
case 1283:
case 2299:
case 1775:
case 3193:
case 3259:
case 3846:
case 2451:
case 2630:
case 629:
case 608:
case 132:
case 247:
case 3576:
case 395:
case 2512:
case 577:
case 2435:
case 603:
case 2340:
case 1254:
case 4052:
case 2184:
case 1706:
case 3908:
case 1374:
case 747:
case 2183:
case 1895:
case 449:
case 175:
case 1199:
case 1307:
case 1708:
case 3906:
case 1771:
case 2382:
case 947:
case 3194:
case 522:
case 877:
case 2606:
case 20:
case 3045:
case 376:
case 1742:
case 32:
case 2127:
case 710:
case 196:
case 822:
case 3930:
case 2671:
case 2437:
case 1402:
case 1096:
case 2861:
case 1286:
case 910:
case 3980:
case 3213:
case 3802:
case 2119:
case 1909:
case 734:
case 369:
case 2138:
case 768:
case 3196:
case 1703:
case 934:
case 1622:
case 1258:
case 1301:
case 2428:
case 889:
case 3977:
case 85:
case 3950:
case 268:
case 1579:
case 2241:
case 352:
case 1849:
case 2426:
case 234:
case 1704:
case 1592:
case 3844:
case 3709:
case 1320:
case 2470:
case 2136:
case 140:
case 3057:
case 2228:
case 380:
case 3111:
case 174:
case 4030:
case 860:
case 2304:
case 1962:
case 3026:
case 3827:
case 2778:
case 815:
case 2257:
case 3028:
case 1427:
case 2270:
case 2377:
case 2350:
case 3161:
case 3249:
case 1015:
case 1456:
case 159:
case 1607:
case 1673:
case 1438:
case 3463:
case 2143:
case 1061:
case 411:
case 1419:
case 3390:
case 3297:
case 1488:
case 3414:
case 2510:
case 2682:
case 2342:
case 4003:
case 4077:
case 3888:
case 3165:
case 2330:
case 1202:
case 4004:
case 2237:
case 1011:
case 416:
case 1469:
case 162:
case 506:
case 2380:
case 1170:
case 34:
case 2287:
case 2560:
case 2144:
case 1674:
case 2898:
case 1864:
case 18:
case 801:
case 3854:
case 2979:
case 2447:
case 3167:
case 1454:
case 2224:
case 3023:
case 1181:
case 3459:
case 2371:
case 227:
case 3821:
case 1732:
case 2992:
case 2095:
case 235:
case 806:
case 2774:
case 2306:
case 542:
case 1605:
case 1248:
case 927:
case 3117:
case 518:
case 3932:
case 1453:
case 3051:
case 727:
case 4075:
case 3853:
case 3085:
case 3800:
case 3295:
case 3982:
case 2255:
case 1889:
case 3466:
case 2893:
case 2146:
case 256:
case 2375:
case 3489:
case 1676:
case 1151:
case 2281:
case 2091:
case 3418:
case 1017:
case 4006:
case 1135:
case 650:
case 3416:
case 3883:
case 4071:
case 2499:
case 3081:
case 1483:
case 738:
case 1590:
case 3468:
case 515:
case 1067:
case 956:
case 1322:
case 2894:
case 1868:
case 1678:
case 2472:
case 964:
case 3031:
case 377:
case 3273:
case 3353:
case 595:
case 3207:
case 3751:
case 4093:
case 478:
case 202:
case 1729:
case 1697:
case 150:
case 985:
case 3724:
case 3152:
case 473:
case 2806:
case 1923:
case 876:
case 2073:
case 1935:
case 285:
case 1279:
case 2795:
case 2541:
case 702:
case 3321:
case 2007:
case 322:
case 2808:
case 2946:
case 1292:
case 1082:
case 197:
case 902:
case 1951:
case 3274:
case 1588:
case 2410:
case 7:
case 3731:
case 1822:
case 2394:
case 1368:
case 1767:
case 593:
case 3182:
case 1538:
case 1316:
case 475:
case 3755:
case 1519:
case 3563:
case 2615:
case 389:
case 983:
case 3140:
case 1536:
case 1318:
case 3644:
case 1339:
case 283:
case 1649:
case 1586:
case 3325:
case 2393:
case 3513:
case 2665:
case 288:
case 3967:
case 1389:
case 2944:
case 3559:
case 1957:
case 659:
case 2850:
case 569:
case 1554:
case 496:
case 662:
case 1928:
case 2804:
case 2076:
case 330:
case 3757:
case 3915:
case 68:
case 2617:
case 2262:
case 491:
case 13:
case 3518:
case 1937:
case 2902:
case 2797:
case 3539:
case 2629:
case 246:
case 314:
case 895:
case 1534:
case 3386:
case 3646:
case 3369:
case 1987:
case 741:
case 3589:
case 2830:
case 1313:
case 946:
case 3388:
case 3911:
case 1490:
case 3568:
case 1533:
case 2572:
case 3648:
case 1162:
case 3338:
case 1761:
case 2396:
case 1583:
case 3319:
case 2599:
case 1603:
case 1677:
case 1431:
case 773:
case 1068:
case 1722:
case 1121:
case 2960:
case 379:
case 3293:
case 3159:
case 1481:
case 3083:
case 778:
case 3881:
case 4073:
case 619:
case 485:
case 1352:
case 1817:
case 1272:
case 3609:
case 512:
case 548:
case 2910:
case 1100:
case 402:
case 278:
case 2283:
case 3922:
case 3034:
case 1604:
case 543:
case 1066:
case 488:
case 147:
case 354:
case 3166:
case 1630:
case 3000:
case 366:
case 3429:
case 2374:
case 3118:
case 867:
case 483:
case 886:
case 2254:
case 3139:
case 1680:
case 3835:
case 2771:
case 732:
case 2253:
case 2307:
case 1423:
case 2373:
case 2200:
case 1183:
case 545:
case 3168:
case 2448:
case 3054:
case 932:
case 2172:
case 3552:
case 110:
case 2897:
case 291:
case 4020:
case 1064:
case 2098:
case 1606:
case 4076:
case 3411:
case 3069:
case 1811:
case 2238:
case 657:
case 296:
case 3887:
case 2236:
case 1487:
case 3298:
case 2742:
case 3088:
case 2141:
case 991:
case 3019:
case 165:
case 2269:
case 2096:
case 2286:
case 1138:
case 1815:
case 441:
case 3532:
case 3027:
case 2258:
case 524:
case 1428:
case 3114:
case 2750:
case 220:
case 2704:
case 621:
case 1186:
case 3465:
case 2849:
case 134:
case 168:
case 1865:
case 3113:
case 1241:
case 920:
case 446:
case 3058:
case 1470:
case 2227:
case 4005:
case 720:
case 3164:
case 3540:
case 31:
case 3870:
case 848:
case 67:
case 2592:
case 812:
case 1581:
case 39:
case 1361:
case 1936:
case 3738:
case 126:
case 3337:
case 1555:
case 3230:
case 1531:
case 3788:
case 1714:
case 531:
case 3280:
case 3090:
case 3913:
case 3786:
case 668:
case 121:
case 4049:
case 553:
case 3769:
case 663:
case 2798:
case 2397:
case 3517:
case 2290:
case 3963:
case 3277:
case 911:
case 1535:
case 3250:
case 2639:
case 3203:
case 370:
case 3812:
case 2941:
case 3370:
case 1412:
case 610:
case 3326:
case 216:
case 344:
case 1585:
case 2546:
case 157:
case 2004:
case 2349:
case 184:
case 3529:
case 2666:
case 2876:
case 1927:
case 916:
case 3672:
case 555:
case 3862:
case 3727:
case 2801:
case 1694:
case 2616:
case 716:
case 2391:
case 1766:
case 647:
case 208:
case 2793:
case 1718:
case 3916:
case 3452:
case 1739:
case 3381:
case 729:
case 435:
case 1716:
case 427:
case 3275:
case 3939:
case 3783:
case 3355:
case 703:
case 2794:
case 3331:
case 1934:
case 1260:
case 3733:
case 3989:
case 2110:
case 76:
case 831:
case 2873:
case 3721:
case 205:
case 2807:
case 119:
case 3515:
case 3432:
case 96:
case 3959:
case 2544:
case 3324:
case 1570:
case 1557:
case 836:
case 2006:
case 1840:
case 2874:
case 858:
case 4091:
case 2613:
case 1329:
case 456:
case 1954:
case 853:
case 2947:
case 3208:
case 2479:
case 551:
case 2010:
case 2993:
case 3587:
case 492:
case 2627:
case 3768:
case 109:
case 960:
case 215:
case 1275:
case 1561:
case 2108:
case 1381:
case 556:
case 2060:
case 3210:
case 3739:
case 2597:
case 2658:
case 2222:
case 564:
case 3718:
case 654:
case 533:
case 1511:
case 1968:
case 4046:
case 1734:
case 687:
case 1645:
case 2686:
case 1271:
case 2879:
case 218:
case 1565:
case 1700:
case 137:
case 1385:
case 2175:
case 125:
case 1753:
case 572:
case 3840:
case 1959:
case 1324:
case 1335:
case 1323:
case 742:
case 679:
case 2473:
case 3759:
case 913:
case 1721:
case 1122:
case 713:
case 1482:
case 2688:
case 3953:
case 3900:
case 3882:
case 3919:
case 37:
case 1242:
case 2405:
case 4044:
case 1736:
case 2653:
case 206:
case 3713:
case 3311:
case 701:
case 1914:
case 2591:
case 2104:
case 1913:
case 2103:
case 906:
case 2150:
case 1387:
case 1647:
case 3986:
case 835:
case 4043:
case 2621:
case 201:
case 326:
case 3936:
case 3361:
case 2998:
case 455:
case 19:
case 3958:
case 2343:
case 3523:
case 4002:
case 1756:
case 1204:
case 1699:
case 390:
case 2683:
case 2142:
case 851:
case 1727:
case 1328:
case 1862:
case 2633:
case 1672:
case 2478:
case 3927:
case 833:
case 2625:
case 458:
case 2634:
case 436:
case 1529:
case 357:
case 2476:
case 144:
case 1326:
case 3412:
case 838:
case 453:
case 856:
case 1357:
case 1370:
case 170:
case 3535:
case 2420:
case 1277:
case 2009:
case 864:
case 776:
case 1038:
case 3437:
case 3861:
case 365:
case 2980:
case 1461:
case 2213:
case 2802:
case 3014:
case 2264:
case 1088:
case 885:
case 22:
case 3127:
case 541:
case 2942:
case 644:
case 3990:
case 1411:
case 3013:
case 670:
case 3064:
case 2214:
case 30:
case 1036:
case 3158:
case 546:
case 802:
case 72:
case 1552:
case 100:
case 2844:
case 1870:
case 1312:
case 2198:
case 1540:
case 2574:
case 3470:
case 3136:
case 3457:
case 368:
case 486:
case 252:
case 769:
case 3426:
case 8:
case 3186:
case 883:
case 1465:
case 467:
case 1582:
case 1828:
case 2904:
case 3188:
case 1027:
case 3428:
case 2573:
case 752:
case 1163:
case 2041:
case 481:
case 1056:
case 637:
case 2216:
case 625:
case 4079:
case 1025:
case 3100:
case 583:
case 998:
case 2268:
case 588:
case 3272:
case 1609:
case 399:
case 1881:
case 2266:
case 1159:
case 1083:
case 293:
case 1855:
case 1467:
case 3068:
case 3431:
case 2072:
case 2710:
case 3133:
case 3562:
case 2848:
case 623:
case 2578:
case 1054:
case 1168:
case 3059:
case 161:
case 3332:
case 3183:
case 3423:
case 2495:
case 295:
case 1835:
case 443:
case 3424:
case 3340:
case 3247:
case 2908:
case 502:
case 1118:
case 1885:
case 2193:
case 1000:
case 2259:
case 412:
case 3451:
case 2379:
case 1053:
case 448:
case 1189:
case 3829:
case 154:
case 1166:
case 347:
case 1358:
case 1201:
case 1278:
case 924:
case 878:
case 2744:
case 1915:
case 1012:
case 130:
case 1770:
case 304:
case 3691:
case 3553:
case 3765:
case 2403:
case 2949:
case 2631:
case 1965:
case 1062:
case 1728:
case 1276:
case 1356:
case 2743:
case 224:
case 520:
case 3957:
case 2341:
case 3715:
case 596:
case 3363:
case 1737:
case 3583:
case 3695:
case 1319:
case 2623:
case 1516:
case 767:
case 3761:
case 1205:
case 2442:
case 967:
case 2101:
case 2594:
case 3314:
case 1589:
case 591:
case 286:
case 2685:
case 1646:
case 2430:
case 2345:
case 2651:
case 114:
case 3112:
case 1539:
case 3937:
case 2635:
case 680:
case 2480:
case 2120:
case 498:
case 3951:
case 3527:
case 1929:
case 2240:
case 575:
case 3082:
case 245:
case 639:
case 1723:
case 3556:
case 3279:
case 1321:
case 3032:
case 2471:
case 3359:
case 3935:
case 3924:
case 3923:
case 532:
case 3558:
case 945:
case 3040:
case 1724:
case 2092:
case 2995:
case 350:
case 3729:
case 1751:
case 891:
case 1353:
case 2079:
case 2746:
case 1785:
case 745:
case 1273:
case 2232:
case 1300:
case 573:
case 1513:
case 1967:
case 1334:
case 607:
case 2475:
case 3366:
case 3052:
case 3339:
case 2657:
case 2670:
case 3955:
case 578:
case 2860:
case 1644:
case 1384:
case 1140:
case 712:
case 1917:
case 189:
case 1755:
case 748:
case 2173:
case 1383:
case 1643:
case 943:
case 2596:
case 820:
case 3538:
case 2628:
case 1422:
case 1333:
case 2810:
case 743:
case 3822:
case 948:
case 2991:
case 2046:
case 1085:
case 2779:
case 1853:
case 3029:
case 3400:
case 2191:
case 992:
case 3453:
case 56:
case 1035:
case 3248:
case 792:
case 2907:
case 460:
case 3740:
case 3246:
case 3859:
case 3155:
case 2229:
case 3181:
case 1940:
case 1459:
case 3421:
case 2550:
case 2048:
case 2503:
case 1167:
case 1854:
case 3131:
case 2847:
case 3678:
case 811:
case 1031:
case 3322:
case 1833:
case 1468:
case 3067:
case 2662:
case 3483:
case 1081:
case 3816:
case 1291:
case 1883:
case 622:
case 139:
case 816:
case 1884:
case 3818:
case 413:
case 2360:
case 3752:
case 3124:
case 1418:
case 1129:
case 418:
case 3185:
case 503:
case 3434:
case 317:
case 3137:
case 3456:
case 3015:
case 2043:
case 2508:
case 3244:
case 1028:
case 1827:
case 2976:
case 3065:
case 2215:
case 3962:
case 406:
case 3243:
case 1111:
case 755:
case 180:
case 2197:
case 2044:
case 2309:
case 1057:
case 516:
case 3458:
case 340:
case 808:
case 1858:
case 3864:
case 1692:
case 931:
case 2498:
case 1464:
case 3157:
case 3469:
case 362:
case 3011:
case 2261:
case 1413:
case 731:
case 1886:
case 3126:
case 86:
case 1869:
case 3202:
case 1522:
case 3488:
case 1414:
case 1087:
case 958:
case 758:
case 1838:
case 736:
case 1037:
case 1819:
case 3438:
case 1115:
case 953:
case 2002:
case 3863:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1759323602/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,0,0,0,0,0,1,1,1,0,0,0,0,1,0,0,0,0,1,1,1,0,1,1,1,0,0,0,0,1,1,1,1,0,1,0,0,1,0,1,1,0,0,0,1,0,0,0,1,0,0,0,0,0,1,1,1,1,1,0,0,0,1,0,0,0,1,1,1,0,0,1,1,0,0,0,1,1,1,0,0,0,0,0,1,1,1,1,1,0,0,0,0,1,0,0,1,0,1,1,1,0,0,0,0,0,0,0,1,1,1,1,0,1,1,1,1,0,0,1,0,1,0,0,0,1,1,0,0,1,1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,0,1,1,1,0,1,1,1,1,1,0,0,1,0,1,1,1,1,0,1,1,0,0,1,0,1,1,0,0,1,1,1,0,0,0,1,1,0,1,1,0,1,0,1,1,0,0,0,0,0,1,1,1,0,0,1,1,1,0,0,1,1,0,1,0,0,0,0,0,1,1,1,0,1,1,1,0,0,1,1,0,0,1,1,0,0,0,0,0,1,1,0,1,0,0,1,0,0,0,1,1,1,1,0,1,0,0,1,0,1,0,1,1,0,0,0,0,1,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,1,1,1,0,0,1,1,1,1,0,1,1,0,1,0,1,1,1,1,0,0,0,0,0,1,0,1,0,0,0,1,0,0,1,1,0,1,1,1,1,0,0,0,0,1,0,1,0,1,0,0,0,1,0,0,1,0,0,0,0,0,0,1,1,0,1,1,0,0,1,1,0,1,1,1,1,1,1,1,1,1,0,1,0,1,0,1,1,1,0,1,1,1,0,0,0,0,0,1,1,1,1,1,0,1,1,0,0,1,0,0,1,1,0,1,1,0,1,1,0,0,1,1,0,1,0,0,0,1,1,0,0,0,1,1,1,0,0,1,1,1,1,0,1,1,0,0,1,1,1,0,0,0,0,0,0,1,1,1,1,0,1,1,1,0,1,0,0,1,0,1,1,1,0,0,1,1,1,1,0,1,0,1,0,0,0,0,1,1,1,0,0,1,0,0,1,1,1,0,0,1,1,0,1,0,1,1,1,1,0,1,0,1,1,1,0,1,0,1,0,1,1,0,0,1,1,1,0,1,1,0,0,0,0,1,0,0,1,1,1,1,0,1,1,1,0,1,0,0,0,0,0,0,1,1,1,1,0,0,0,0,1,0,1,1,1,1,1,1,0,1,0,0,1,0,1,0,1,1,0,0,0,0,1,1,1,1,1,0,0,1,1,1,0,1,1,1,1,0,1,1,1,0,0,0,1,0,0,0,0,1,1,1,1,0,1,1,1,1,0,0,1,0,0,1,1,0,0,0,1,1,0,1,0,1,1,0,0,0,0,1,1,0,1,1,1,0,1,0,1,0,1,0,1,1,1,0,0,0,1,0,1,0,1,0,0,1,1,0,1,0,0,1,0,0,0,1,1,0,1,1,1,1,0,1,1,1,0,0,0,1,0,1,1,0,1,0,1,0,0,0,1,1,0,0,0,0,1,0,1,1,0,0,1,0,1,0,1,0,0,0,0,1,1,1,1,0,0,0,1,0,1,1,0,1,1,0,0,1,1,0,0,1,0,0,1,0,1,1,1,1,1,1,1,1,0,1,0,1,0,1,0,1,1,1,1,1,1,0,1,1,0,0,0,1,0,1,1,0,0,1,1,0,0,1,0,0,0,1,1,1,1,0,0,0,1,1,0,1,1,1,0,1,0,0,0,0,0,0,1,0,1,0,0,1,0,1,0,0,1,0,1,1,1,1,0,1,0,1,0,1,1,1,1,1,0,0,1,1,1,0,0,1,1,1,0,0,0,0,0,1,0,0,1,0,1,1,1,1,0,1,0,0,0,0,0,0,0,0,1,1,0,0,1,0,1,0,0,1,0,1,0,1,1,1,1,1,1,0,1,0,0,0,0,0,0,0,0,1,1,1,0,1,0,0,1,1,1,1,1,0,1,1,1,0,0,1,1,0,0,0,1,0,0,1,0,1,0,1,1,0,0,1,1,0,1,0,0,1,1,0,1,1,0,1,1,1,1,1,1,0,0,1,1,1,0,1,0,0,1,0,0,0,0,0,1,0,1,1,1,1,1,0,0,0,1,0,0,1,0,1,0,1,1,1,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,1,0,1,0,1,0,1,1,0,1,0,0,1,1,1,1,1,1,0,1,1,0,0,0,0,0,1,1,0,0,1,0,1,0,0,0,0,0,0,0,1,0,1,1,0,0,1,0,0,0,1,1,1,1,0,0,1,0,1,0,0,1,1,1,0,1,0,0,1,1,0,1,1,0,0,0,1,1,0,1,0,1,1,1,0,0,1,1,1,0,1,0,1,1,0,1,1,1,1,0,1,0,1,1,0,0,0,1,0,0,0,1,1,0,0,1,0,1,0,0,0,1,0,0,0,0,1,0,0,0,1,0,0,1,0,1,1,1,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,1,0,1,0,0,0,0,0,0,0,1,0,1,1,0,0,0,0,0,0,0,1,1,0,1,1,0,0,1,1,1,0,1,1,0,0,1,0,0,0,1,0,1,1,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,1,0,1,1,0,1,1,0,0,0,0,0,1,1,1,1,1,1,0,1,0,0,0,0,1,1,0,0,0,0,0,0,1,1,0,1,0,0,1,0,0,1,1,1,0,0,0,0,0,1,0,0,0,1,0,1,1,0,0,1,1,1,1,0,0,0,1,0,1,1,0,1,1,1,1,0,1,1,1,1,1,0,0,0,1,1,1,1,1,0,1,0,1,1,0,0,0,0,0,0,0,1,1,0,0,1,0,0,1,1,1,0,0,1,1,0,0,1,0,1,1,1,1,1,1,1,0,1,0,1,1,1,0,0,1,1,1,0,0,0,1,0,1,0,0,1,0,0,1,0,1,1,0,1,1,0,0,1,1,1,0,1,1,0,0,0,0,0,0,1,0,1,0,1,0,1,1,0,0,0,1,1,1,0,1,1,1,0,1,0,1,0,1,1,1,0,0,1,0,0,1,0,1,1,1,1,0,0,1,1,0,1,1,1,1,1,0,0,0,1,1,0,0,1,1,0,0,0,1,1,0,0,1,0,0,0,0,0,0,1,0,0,1,1,0,0,0,0,1,0,0,0,0,0,1,1,0,1,0,0,1,0,1,0,0,1,1,0,1,1,1,1,0,1,0,0,1,1,0,1,0,1,1,1,1,0,0,0,1,1,0,1,1,0,1,1,0,1,1,1,0,0,0,1,0,1,0,1,1,1,1,1,1,0,1,0,0,1,0,0,1,0,0,1,0,0,0,0,0,0,1,0,1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,1,0,1,0,1,1,0,1,0,0,0,1,0,0,0,1,0,0,0,0,1,1,0,0,1,1,1,0,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,0,1,1,1,1,1,0,0,1,1,1,1,1,0,1,0,0,1,0,1,1,1,1,0,1,0,0,1,1,1,0,0,0,1,0,1,1,0,1,1,1,1,1,1,1,0,0,0,1,1,1,1,1,0,1,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,1,0,1,1,1,0,1,1,1,0,1,0,1,1,1,0,1,0,0,0,0,0,1,0,1,0,0,1,0,1,1,0,0,1,1,0,1,0,1,0,1,0,0,0,1,0,1,0,1,0,0,1,1,1,1,0,0,1,1,1,0,0,1,0,1,0,1,1,0,1,0,1,1,1,1,0,0,0,0,1,0,1,0,1,0,1,1,0,0,0,1,1,0,0,0,0,1,1,0,0,1,1,0,0,1,1,1,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,1,1,0,0,1,1,0,1,0,1,1,1,1,0,1,0,0,1,1,1,0,0,0,1,0,1,0,1,0,0,1,0,0,0,0,1,1,0,0,0,0,1,0,1,0,0,1,0,1,1,1,1,0,1,1,0,0,1,0,0,0,1,1,1,0,0,1,0,1,0,1,0,1,1,0,0,1,1,1,0,0,0,1,0,1,1,1,0,0,1,0,1,1,1,1,0,0,1,0,0,0,1,0,1,0,0,1,0,0,1,1,0,0,0,0,1,0,1,0,0,0,1,1,1,0,1,0,0,1,0,0,1,0,0,0,1,1,1,0,0,0,0,1,1,1,1,0,0,1,0,0,0,1,0,0,0,0,1,1,1,0,0,1,0,0,1,0,1,1,0,1,0,0,1,0,1,1,0,0,0,1,0,1,0,1,0,1,0,1,0,0,0,0,0,0,1,0,0,0,0,0,1,1,1,0,0,0,0,1,0,1,0,1,0,1,1,0,1,1,0,1,0,0,1,1,1,1,1,0,0,1,0,0,0,1,0,0,1,0,0,1,1,1,0,1,1,0,0,0,1,0,1,1,0,1,0,1,0,0,1,1,0,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,1,1,0,1,1,0,0,1,0,0,1,0,0,1,1,1,0,1,1,0,0,1,1,1,0,0,1,1,0,1,0,1,1,0,1,1,0,0,0,1,0,1,0,0,0,0,0,0,0,0,1,1,1,1,0,1,0,1,1,0,1,0,1,0,0,0,1,1,0,1,1,0,1,1,1,1,0,1,0,0,0,1,0,0,0,0,1,0,1,0,0,0,1,1,0,0,0,0,0,0,0,0,0,1,1,0,1,0,0,0,0,0,0,0,1,1,0,0,1,0,0,1,1,0,1,0,0,0,1,1,0,1,1,1,1,1,0,1,1,0,0,1,0,0,1,1,1,1,0,0,0,0,0,1,0,1,0,0,1,1,1,0,0,1,0,0,0,1,1,1,0,1,1,1,0,0,0,1,0,1,0,1,0,0,1,1,1,0,1,1,1,1,1,1,0,1,0,1,0,1,1,1,0,0,1,1,1,1,1,0,0,1,1,0,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,0,0,1,0,1,1,0,1,0,1,1,1,0,1,0,0,0,1,0,1,0,0,1,1,0,0,0,1,1,0,0,1,0,0,1,0,0,1,1,1,1,1,0,1,0,0,0,1,1,1,1,1,1,1,0,0,1,1,1,1,0,1,1,0,1,0,1,1,1,1,0,1,1,1,0,1,0,1,1,0,1,1,0,1,1,1,1,0,0,1,0,1,1,0,1,1,0,0,0,0,0,1,0,1,0,0,0,0,1,0,1,1,0,1,1,1,0,0,1,1,1,0,0,0,1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,0,0,0,0,1,1,0,0,1,1,0,1,1,0,0,1,0,0,0,1,1,0,1,0,0,0,0,1,1,1,1,0,1,1,0,1,1,1,1,1,0,0,0,0,0,0,1,1,0,0,0,0,1,0,0,1,1,1,0,0,1,0,0,0,0,1,0,1,0,1,0,0,0,1,0,0,1,0,0,1,1,1,0,0,1,0,0,0,0,1,0,1,1,0,0,0,0,0,1,0,0,1,0,1,0,0,0,1,1,0,1,1,0,0,0,0,0,1,0,0,0,0,1,0,0,0,1,0,0,1,1,1,0,0,0,1,0,0,0,0,0,0,0,1,0,1,0,0,1,1,0,1,0,1,1,0,1,0,1,1,0,0,0,1,0,0,1,0,0,0,1,0,1,1,1,0,0,1,1,0,1,0,1,0,1,1,1,1,1,0,1,1,1,0,0,0,1,0,0,0,1,0,0,1,1,0,1,1,1,0,1,0,0,0,1,1,0,0,0,1,0,0,1,1,0,0,0,1,1,0,0,1,0,1,1,0,0,0,0,1,1,0,1,1,0,1,0,0,1,1,1,0,1,1,0,0,0,1,0,0,0,1,0,0,0,0,0,1,1,0,1,1,1,0,0,0,0,0,0,1,1,1,0,1,0,0,0,0,1,0,1,0,1,0,0,0,1,1,0,1,1,1,0,1,0,0,0,1,0,1,1,1,0,1,0,1,1,0,0,0,0,0,1,0,1,0,0,1,1,0,0,1,0,0,0,1,1,0,1,0,0,1,0,1,0,1,0,0,0,0,1,1,1,0,1,1,0,1,1,1,0,1,0,1,1,1,0,1,0,0,1,1,0,1,0,1,0,0,0,0,0,0,1,0,1,0,0,1,1,0,1,0,1,0,0,1,0,0,0,0,0,1,0,0,1,1,1,1,0,0,1,0,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,0,0,0,1,1,0,1,0,0,1,0,1,0,0,0,1,1,0,1,1,0,0,0,1,1,0,0,1,1,0,0,0,1,0,1,0,0,1,1,0,1,0,1,0,0,0,1,1,1,0,0,1,1,0,1,0,0,0,1,1,0,1,1,0,0,1,1,1,0,0,1,1,1,0,1,0,1,1,0,1,0,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,0,1,0,1,0,0,0,0,0,0,1,0,0,1,1,1,0,0,0,0,1,1,0,0,0,1,1,1,0,1,0,0,1,0,1,1,0,0,1,1,0,1,1,0,1,1,0,1,1,1,0,0,0,1,1,0,0,1,0,0,1,1,1,1,1,1,1,0,1,0,0,0,0,0,1,0,0,1,1,1,0,0,0,0,0,1,1,0,1,0,0,1,1,1,1,0,0,0,1,1,0,1,1,1,0,0,0,1,0,0,0,0,1,0,1,1,1,1,0,1,0,0,1,0,1,1,1,1,1,1,0,0,1,0,1,0,0,0,1,1,0,0,0,1,1,1,1,1,1,0,0,1,1,0,0,0,0,0,1,0,1,1,0,0,0,1,0,1,0,0,1,1,0,1,1,1,1,1,0,1,0,0,1,1,0,0,1,0,0,1,0,1,1,1,1,1,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,1,1,0,1,0,0,1,1,1,1,1,1,0,0,0,0,0,1,1,0,0,0,1,1,0,1,1,0,1,0,1,1,1,0,0,0,0,0,1,1,1,1,0,1,1,1,0,0,0,0,1,0,0,1,0,1,0,0,1,1,0,1,1,1,1,1,0,1,0,0,1,1,0,1,1,0,1,1,0,0,1,0,0,0,1,0,0,1,1,1,1,0,1,0,1,1,1,0,0,1,0,1,1,1,0,1,0,0,1,0,1,0,1,1,0,0,0,1,1,1,1,0,1,0,0,0,1,0,0,1,0,0,0,0,1,0,1,1,0,1,1,1,0,0,0,0,1,1,0,0,0,0,1,1,1,1,0,1,0,1,0,0,1,0,1,0,0,0,1,0,1,0,0,0,1,1,1,0,1,0,0,1,0,0,1,1,1,1,0,0,1,0,1,0,0,1,1,0,0,0,0,1,0,1,0,1,1,0,1,0,0,0,0,0,0,1,0,0,1,0,0,1,1,0,1,0,1,1,0,1,0,1,0,1,0,1,1,0,1,1,0,1,0,1,1,0,1,1,0,1,0,0,1,1,0,0,1,0,0,1,0,1,1,1,0,0,1,1,1,0,0,1,1,1,1,0,0,0,1,0,1,1,0,1,1,1,1,0,0,1,1,1,1,1,1,0,0,0,1,0,0,0,0,1,1,0,0,0,0,1,0,0,0,0,1,0,0,0,1,1,0,1,0,1,0,0,0,0,1,0,1,0,1,1,0,0,0,0,1,0,0,0,1,0,1,0,0,1,0,0,1,0,0,1,1,1,0,1,1,1,0,0,1,1,0,0,0,1,1,0,0,1,0,1,1,1,0,1,1,0,0,0,0,1,0,0,1,0,0,0,0,1,1,0,1,0,0,0,1,0,0,0,1,0,1,0,1,0,0,0,1,1,0,1,0,1,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,1,0,1,0,0,0,1,1,0,1,1,1,1,0,0,1,1,0,1,0,0,1,0,0,1,0,0,0,1,0,1,0,1,0,0,1,1,1,0,0,1,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,1,0,0,1,1,0,0,1,0,0,0,1,0,1,0,0,0,1,0,0,0,0,0,1,1,1,0,0,1,0,0,1,1,0,0,1,0,1,0,0,1,0,1,1,0,0,1,0,0,1,0,1,1,1,0,1,0,0,0,0,1,1,1,1,0,1,0,0,0,1,0,0,0,1,1,0,0,1,0,1,0,1,1,1,0,0,0,1,0,0,1,1,0,0,1,0,1,1,0,0,1,0,0,0,0,1,0,0,1,0,1,0,0,0,1,1,0,0,0,0,0,0,1,1,1,0,0,1,1,0,1,0,0,0,1,0,0,0,1,0,1,0,0,1,1,0,0,0,0,1,0,1,0,0,0,0,0,1,0,0,0,0,1,1,0,0,1,1,1,0,0,1,1,0,0,1,1,0,0,0,0,1,0,1,1,1,1,0,0,0,0,0,1,0,1,0,1,1,1,0,0,1,0,1,1,1,0,0,0,1,1,0,0,1,1,0,0,1,1,0,1,1,1,0,1,0,0,1,1,0,1,1,1,1,0,1,0,1,1,0,0,1,1,0,1,1,1,0,0,1,0,0,1,0,1,0,0,1,1,1,0,1,0,0,0,0,1,1,0,0,1,0,1,1,0,1,0,1,0,1,1,1,1,0,1,1,0,0,0,1,0,0,0,0,0,0,0,1,1,1,1,1,1,0,1,0,0,0,1,0,0,1,1,1,1,0,1,0,0,0,1,1,0,0,1,1,1,1,1,0,0,0,0,0,0,1,0,0,1,0,1,0,1,0,1,1,0,0,1,0,0,0,1,1,0,1,1,0,1,1,0,0,0,0,0,1,1,0,1,0,0,1,0,0,1,1,1,1,0,1,0,1,0,0,1,1,1,1,1,0,1,1,0,1,0,1,0,1,1,1,0,1,0,1,0,1,1,1,1,0,0,0,1,1,0,1,0,0,];
var gg_b = "1759323602/";

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
