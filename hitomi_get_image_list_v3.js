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
case 1622:
case 506:
case 3238:
case 4083:
case 1164:
case 2307:
case 1015:
case 1289:
case 3921:
case 2680:
case 1690:
case 2207:
case 3551:
case 3840:
case 414:
case 1891:
case 531:
case 3044:
case 1441:
case 2521:
case 521:
case 4049:
case 376:
case 3377:
case 1028:
case 1243:
case 1749:
case 977:
case 468:
case 2467:
case 3538:
case 1653:
case 2087:
case 2768:
case 1589:
case 3351:
case 2436:
case 1097:
case 2434:
case 843:
case 783:
case 2938:
case 3812:
case 3605:
case 233:
case 677:
case 2423:
case 3999:
case 551:
case 223:
case 2776:
case 110:
case 475:
case 187:
case 2277:
case 804:
case 2044:
case 2641:
case 709:
case 1310:
case 449:
case 604:
case 3951:
case 1210:
case 3452:
case 1878:
case 1542:
case 2238:
case 970:
case 3680:
case 2921:
case 1058:
case 2338:
case 1191:
case 569:
case 293:
case 3813:
case 2605:
case 3938:
case 1079:
case 2577:
case 3221:
case 1859:
case 1129:
case 2792:
case 2907:
case 2999:
case 1735:
case 4035:
case 3776:
case 4082:
case 323:
case 2538:
case 3977:
case 1242:
case 3467:
case 2453:
case 2706:
case 2351:
case 3768:
case 591:
case 1342:
case 1475:
case 1634:
case 2251:
case 50:
case 1965:
case 2444:
case 2896:
case 889:
case 2894:
case 2714:
case 749:
case 181:
case 3102:
case 3861:
case 644:
case 2628:
case 3052:
case 2161:
case 2172:
case 1080:
case 1757:
case 2615:
case 1533:
case 224:
case 3194:
case 2090:
case 234:
case 527:
case 989:
case 1147:
case 944:
case 1118:
case 3348:
case 413:
case 1226:
case 394:
case 4071:
case 537:
case 3217:
case 3023:
case 3173:
case 1771:
case 4039:
case 2053:
case 142:
case 1687:
case 1739:
case 2873:
case 254:
case 2103:
case 362:
case 3487:
case 772:
case 3034:
case 3036:
case 1932:
case 1985:
case 2697:
case 2130:
case 1075:
case 1200:
case 1333:
case 54:
case 2609:
case 1745:
case 3172:
case 3802:
case 2660:
case 1269:
case 1415:
case 508:
case 2194:
case 3917:
case 3948:
case 714:
case 111:
case 1332:
case 3894:
case 3446:
case 1385:
case 1041:
case 3896:
case 3716:
case 1646:
case 1644:
case 1285:
case 1232:
case 2861:
case 1019:
case 2548:
case 1900:
case 2052:
case 4027:
case 2788:
case 530:
case 603:
case 1701:
case 3995:
case 354:
case 3103:
case 1409:
case 520:
case 919:
case 1497:
case 2034:
case 3697:
case 483:
case 1155:
case 1825:
case 2348:
case 2595:
case 294:
case 2679:
case 2248:
case 2023:
case 1532:
case 2803:
case 3779:
case 794:
case 433:
case 3273:
case 47:
case 3117:
case 3148:
case 10:
case 3502:
case 1347:
case 899:
case 1126:
case 3373:
case 1124:
case 1247:
case 1218:
case 1074:
case 3462:
case 699:
case 580:
case 517:
case 3972:
case 372:
case 3596:
case 9:
case 1225:
case 2401:
case 3439:
case 2709:
case 3731:
case 2330:
case 2797:
case 2572:
case 2498:
case 2614:
case 349:
case 3202:
case 2011:
case 2427:
case 268:
case 3903:
case 661:
case 2728:
case 1518:
case 2049:
case 3302:
case 2445:
case 2463:
case 2895:
case 3294:
case 3758:
case 2361:
case 2372:
case 3760:
case 3296:
case 1093:
case 3394:
case 3396:
case 2261:
case 6:
case 505:
case 1826:
case 3902:
case 2596:
case 2731:
case 3203:
case 1586:
case 1584:
case 939:
case 659:
case 3848:
case 3561:
case 1833:
case 2779:
case 1092:
case 3996:
case 1355:
case 2502:
case 3994:
case 2373:
case 1800:
case 2035:
case 375:
case 765:
case 1255:
case 2471:
case 3973:
case 3895:
case 3530:
case 3463:
case 1386:
case 2760:
case 2296:
case 3083:
case 2758:
case 959:
case 2294:
case 639:
case 1645:
case 1663:
case 1286:
case 314:
case 3503:
case 3261:
case 2396:
case 1169:
case 2394:
case 839:
case 1918:
case 3614:
case 249:
case 3616:
case 3011:
case 1414:
case 4046:
case 4044:
case 1416:
case 1185:
case 1925:
case 1132:
case 2903:
case 2195:
case 3427:
case 2302:
case 1555:
case 476:
case 1259:
case 3151:
case 3606:
case 2650:
case 545:
case 1406:
case 3001:
case 1404:
case 1359:
case 3940:
case 2913:
case 383:
case 1566:
case 3705:
case 2981:
case 867:
case 2674:
case 2435:
case 2780:
case 3381:
case 2057:
case 3045:
case 2512:
case 1237:
case 1722:
case 1929:
case 1189:
case 434:
case 3281:
case 793:
case 1264:
case 1266:
case 1790:
case 209:
case 3313:
case 1143:
case 150:
case 1278:
case 2240:
case 3719:
case 478:
case 3177:
case 3449:
case 366:
case 3899:
case 776:
case 733:
case 77:
case 313:
case 2692:
case 494:
case 14:
case 3482:
case 3435:
case 3981:
case 2620:
case 1229:
case 3071:
case 1635:
case 3062:
case 4023:
case 860:
case 3668:
case 1767:
case 2821:
case 3650:
case 2001:
case 3212:
case 4067:
case 1978:
case 2581:
case 660:
case 283:
case 2940:
case 4034:
case 1508:
case 1889:
case 309:
case 1959:
case 2741:
case 2912:
case 3838:
case 2411:
case 2027:
case 1529:
case 2213:
case 753:
case 2719:
case 266:
case 2449:
case 2807:
case 2063:
case 2381:
case 3780:
case 1291:
case 2483:
case 3877:
case 3512:
case 1843:
case 1865:
case 157:
case 1493:
case 579:
case 2138:
case 1391:
case 1208:
case 3693:
case 3448:
case 654:
case 934:
case 2755:
case 3747:
case 303:
case 3718:
case 1617:
case 3624:
case 2544:
case 3626:
case 3801:
case 3162:
case 4073:
case 1915:
case 1426:
case 1231:
case 865:
case 3139:
case 978:
case 2656:
case 2101:
case 2871:
case 3600:
case 2862:
case 1400:
case 52:
case 3387:
case 665:
case 3944:
case 2198:
case 1331:
case 1042:
case 3946:
case 3633:
case 122:
case 1558:
case 1433:
case 1997:
case 2344:
case 624:
case 2346:
case 1909:
case 739:
case 1010:
case 2632:
case 1695:
case 1579:
case 4002:
case 1702:
case 729:
case 2857:
case 2987:
case 2784:
case 188:
case 965:
case 195:
case 3157:
case 1358:
case 152:
case 1814:
case 271:
case 1816:
case 2669:
case 289:
case 1796:
case 3587:
case 1260:
case 1794:
case 1258:
case 244:
case 1209:
case 3656:
case 694:
case 1297:
case 2387:
case 1309:
case 1397:
case 556:
case 3198:
case 1730:
case 1515:
case 2417:
case 125:
case 2898:
case 3755:
case 2747:
case 203:
case 1528:
case 2626:
case 135:
case 2171:
case 2801:
case 862:
case 3839:
case 1470:
case 1958:
case 1960:
case 1597:
case 2099:
case 3784:
case 2007:
case 3163:
case 2157:
case 1315:
case 2827:
case 526:
case 761:
case 1469:
case 344:
case 1215:
case 3669:
case 2587:
case 1485:
case 1432:
case 501:
case 1114:
case 1043:
case 3632:
case 1065:
case 59:
case 3685:
case 219:
case 962:
case 3244:
case 2845:
case 3857:
case 2863:
case 3987:
case 2495:
case 2367:
case 1104:
case 1874:
case 823:
case 2234:
case 1876:
case 1106:
case 1651:
case 500:
case 515:
case 3952:
case 1054:
case 3590:
case 2336:
case 3253:
case 623:
case 2334:
case 499:
case 3522:
case 2729:
case 2990:
case 1305:
case 2552:
case 1541:
case 1980:
case 1120:
case 760:
case 2182:
case 2922:
case 2135:
case 1070:
case 1205:
case 3183:
case 853:
case 2499:
case 2536:
case 2849:
case 3322:
case 4081:
case 3290:
case 3766:
case 97:
case 653:
case 2567:
case 3553:
case 1069:
case 3390:
case 3737:
case 304:
case 1713:
case 1341:
case 2610:
case 1443:
case 1465:
case 4013:
case 1975:
case 3967:
case 1319:
case 1505:
case 2352:
case 3778:
case 4:
case 3729:
case 11:
case 3048:
case 3017:
case 3552:
case 343:
case 1176:
case 507:
case 1621:
case 1174:
case 3421:
case 3182:
case 1026:
case 1820:
case 1919:
case 767:
case 2353:
case 1168:
case 1275:
case 2451:
case 2882:
case 1000:
case 2835:
case 1941:
case 2759:
case 1442:
case 3336:
case 3267:
case 1375:
case 1740:
case 3523:
case 3610:
case 893:
case 2111:
case 2936:
case 2643:
case 1410:
case 3252:
case 2149:
case 2477:
case 693:
case 3883:
case 3407:
case 3536:
case 3849:
case 2183:
case 3708:
case 2764:
case 1699:
case 186:
case 1575:
case 3567:
case 2553:
case 2689:
case 3811:
case 2438:
case 676:
case 2390:
case 3791:
case 2222:
case 2737:
case 204:
case 2608:
case 592:
case 3666:
case 3935:
case 3982:
case 3122:
case 1464:
case 1681:
case 3072:
case 3061:
case 3383:
case 609:
case 444:
case 3637:
case 3190:
case 489:
case 1738:
case 3789:
case 1504:
case 471:
case 96:
case 2094:
case 1506:
case 3283:
case 2535:
case 3413:
case 126:
case 564:
case 3249:
case 1613:
case 3678:
case 2152:
case 136:
case 2822:
case 1880:
case 3349:
case 1592:
case 4077:
case 3003:
case 4051:
case 66:
case 267:
case 3823:
case 1304:
case 3153:
case 3583:
case 909:
case 1206:
case 2136:
case 156:
case 1875:
case 1993:
case 2282:
case 3834:
case 2629:
case 3836:
case 2382:
case 770:
case 1320:
case 1292:
case 360:
case 2983:
case 3440:
case 3535:
case 552:
case 3582:
case 2765:
case 983:
case 2743:
case 1640:
case 3822:
case 1904:
case 15:
case 3002:
case 1906:
case 2211:
case 2852:
case 2982:
case 2122:
case 1293:
case 1707:
case 2481:
case 3608:
case 2383:
case 4007:
case 1180:
case 1819:
case 2072:
case 2061:
case 3691:
case 1491:
case 1992:
case 2789:
case 1841:
case 522:
case 743:
case 403:
case 13:
case 2834:
case 883:
case 3123:
case 1374:
case 3853:
case 1721:
case 1376:
case 260:
case 966:
case 196:
case 2003:
case 3167:
case 777:
case 367:
case 1805:
case 3911:
case 1250:
case 2659:
case 2013:
case 2732:
case 2227:
case 3040:
case 2146:
case 3998:
case 814:
case 2144:
case 2:
case 1815:
case 1602:
case 3901:
case 614:
case 1828:
case 3357:
case 2081:
case 2962:
case 2598:
case 975:
case 1694:
case 1588:
case 3494:
case 3539:
case 3846:
case 261:
case 668:
case 2501:
case 3844:
case 703:
case 1717:
case 1029:
case 1418:
case 1809:
case 1447:
case 3271:
case 1897:
case 2887:
case 359:
case 3473:
case 3362:
case 3371:
case 2770:
case 3726:
case 3187:
case 2403:
case 107:
case 185:
case 3700:
case 2301:
case 968:
case 875:
case 1288:
case 299:
case 2545:
case 2430:
case 2563:
case 1425:
case 1916:
case 3012:
case 2398:
case 1484:
case 1661:
case 1115:
case 3363:
case 3472:
case 3461:
case 1064:
case 684:
case 649:
case 1066:
case 3962:
case 3971:
case 516:
case 3686:
case 3769:
case 141:
case 2257:
case 2844:
case 2494:
case 2846:
case 361:
case 2040:
case 3013:
case 3785:
case 3227:
case 3732:
case 2998:
case 1316:
case 1860:
case 1858:
case 3:
case 1128:
case 1078:
case 1216:
case 2901:
case 138:
case 3403:
case 2927:
case 2187:
case 1603:
case 3298:
case 3754:
case 2700:
case 399:
case 3545:
case 2557:
case 3563:
case 3398:
case 1197:
case 2239:
case 984:
case 2733:
case 1879:
case 3527:
case 2647:
case 3655:
case 2618:
case 158:
case 1455:
case 2271:
case 100:
case 3887:
case 2963:
case 2945:
case 872:
case 2724:
case 1516:
case 3770:
case 470:
case 2362:
case 115:
case 182:
case 0:
case 2510:
case 3543:
case 310:
case 3565:
case 1720:
case 4020:
case 305:
case 2735:
case 986:
case 1907:
case 720:
case 2129:
case 1812:
case 1605:
case 2636:
case 81:
case 3159:
case 863:
case 3829:
case 1251:
case 2342:
case 3097:
case 2031:
case 3653:
case 3589:
case 1704:
case 451:
case 217:
case 1706:
case 280:
case 2242:
case 4006:
case 1453:
case 1538:
case 3028:
case 3243:
case 3749:
case 2210:
case 1619:
case 2652:
case 2866:
case 708:
case 886:
case 1377:
case 3365:
case 3343:
case 750:
case 3711:
case 1046:
case 686:
case 1277:
case 1551:
case 963:
case 1490:
case 91:
case 3389:
case 431:
case 3690:
case 3137:
case 2058:
case 2060:
case 3289:
case 1921:
case 3622:
case 1238:
case 2542:
case 3475:
case 3943:
case 1112:
case 1750:
case 2653:
case 1087:
case 1768:
case 2589:
case 4068:
case 3242:
case 1467:
case 4050:
case 1776:
case 210:
case 287:
case 68:
case 1321:
case 123:
case 3623:
case 1774:
case 4074:
case 3735:
case 572:
case 1221:
case 88:
case 2405:
case 3989:
case 17:
case 40:
case 74:
case 3079:
case 2389:
case 757:
case 584:
case 3191:
case 2137:
case 2289:
case 2783:
case 2164:
case 816:
case 2166:
case 2749:
case 1881:
case 2028:
case 1452:
case 2243:
case 2265:
case 3864:
case 2808:
case 3866:
case 3652:
case 1140:
case 2711:
case 3310:
case 469:
case 3837:
case 2942:
case 2798:
case 3075:
case 825:
case 3200:
case 3431:
case 2497:
case 2409:
case 1036:
case 56:
case 3855:
case 3985:
case 3125:
case 513:
case 625:
case 3739:
case 992:
case 162:
case 437:
case 3300:
case 2356:
case 2569:
case 3687:
case 342:
case 1803:
case 1173:
case 3771:
case 2370:
case 3224:
case 2005:
case 1830:
case 2270:
case 1595:
case 194:
case 1679:
case 3226:
case 3118:
case 70:
case 2155:
case 1317:
case 457:
case 2556:
case 692:
case 618:
case 855:
case 509:
case 1196:
case 3533:
case 818:
case 892:
case 655:
case 2186:
case 3458:
case 935:
case 490:
case 3970:
case 1660:
case 2269:
case 3080:
case 3757:
case 3954:
case 3884:
case 3956:
case 1052:
case 1861:
case 1517:
case 2019:
case 2285:
case 2232:
case 3526:
case 2570:
case 1295:
case 3524:
case 2933:
case 379:
case 2332:
case 165:
case 832:
case 345:
case 3585:
case 3270:
case 952:
case 3005:
case 3155:
case 2147:
case 2118:
case 2969:
case 3256:
case 2333:
case 1130:
case 3798:
case 2075:
case 3847:
case 2932:
case 3409:
case 2985:
case 2300:
case 3354:
case 1873:
case 751:
case 154:
case 1053:
case 242:
case 706:
case 3900:
case 888:
case 446:
case 748:
case 1628:
case 281:
case 922:
case 3646:
case 3933:
case 695:
case 3570:
case 688:
case 3332:
case 3385:
case 279:
case 1090:
case 3554:
case 134:
case 2500:
case 1948:
case 1917:
case 2458:
case 566:
case 1022:
case 3926:
case 2970:
case 2533:
case 3924:
case 3763:
case 1615:
case 1172:
case 3269:
case 3955:
case 1394:
case 3832:
case 2169:
case 2286:
case 638:
case 958:
case 828:
case 1294:
case 2645:
case 3525:
case 1760:
case 915:
case 1457:
case 221:
case 982:
case 4058:
case 2627:
case 206:
case 1903:
case 674:
case 2414:
case 781:
case 184:
case 874:
case 600:
case 3325:
case 57:
case 928:
case 2584:
case 2586:
case 3068:
case 2004:
case 523:
case 1594:
case 2006:
case 3050:
case 3488:
case 3100:
case 2826:
case 882:
case 2824:
case 3639:
case 251:
case 815:
case 2154:
case 3218:
case 3247:
case 1471:
case 1462:
case 3076:
case 3856:
case 2170:
case 2800:
case 1035:
case 3671:
case 1082:
case 3854:
case 30:
case 1117:
case 941:
case 2355:
case 3318:
case 1779:
case 974:
case 391:
case 1273:
case 2518:
case 2547:
case 3627:
case 1728:
case 4028:
case 306:
case 269:
case 3925:
case 1614:
case 3744:
case 1616:
case 1272:
case 2885:
case 2832:
case 3918:
case 2955:
case 114:
case 3286:
case 3384:
case 1973:
case 4015:
case 1445:
case 1530:
case 2076:
case 405:
case 807:
case 745:
case 898:
case 2671:
case 175:
case 3170:
case 1996:
case 3092:
case 20:
case 2347:
case 3355:
case 698:
case 685:
case 291:
case 1498:
case 4009:
case 1817:
case 1572:
case 1797:
case 1203:
case 2133:
case 2050:
case 3004:
case 1401:
case 351:
case 2488:
case 2870:
case 1177:
case 1449:
case 996:
case 166:
case 524:
case 308:
case 1899:
case 1719:
case 397:
case 1027:
case 346:
case 3278:
case 1411:
case 4041:
case 1912:
case 3611:
case 1741:
case 3165:
case 350:
case 2208:
case 1138:
case 3266:
case 411:
case 2493:
case 3929:
case 3810:
case 3189:
case 3366:
case 578:
case 3722:
case 1483:
case 290:
case 3683:
case 3559:
case 2476:
case 445:
case 3420:
case 896:
case 2635:
case 2682:
case 705:
case 2474:
case 847:
case 787:
case 1620:
case 1513:
case 2229:
case 696:
case 2937:
case 3842:
case 3991:
case 647:
case 320:
case 4005:
case 1098:
case 2142:
case 2508:
case 62:
case 2734:
case 3359:
case 1940:
case 83:
case 2736:
case 183:
case 3537:
case 3406:
case 2978:
case 1001:
case 2468:
case 565:
case 3259:
case 237:
case 1606:
case 2088:
case 2767:
case 2337:
case 2266:
case 2790:
case 3391:
case 3208:
case 1693:
case 3843:
case 2929:
case 3493:
case 2189:
case 3291:
case 2366:
case 1199:
case 2722:
case 626:
case 1877:
case 836:
case 3308:
case 1512:
case 1057:
case 2559:
case 1780:
case 3752:
case 601:
case 3529:
case 2649:
case 479:
case 2014:
case 801:
case 2143:
case 250:
case 2611:
case 89:
case 3142:
case 926:
case 3508:
case 2566:
case 1775:
case 2359:
case 1212:
case 936:
case 840:
case 2406:
case 2537:
case 3450:
case 442:
case 1668:
case 3088:
case 2259:
case 717:
case 337:
case 1062:
case 3966:
case 2908:
case 1674:
case 1435:
case 1540:
case 1981:
case 230:
case 2842:
case 3937:
case 2991:
case 16:
case 99:
case 3796:
case 1587:
case 3258:
case 2215:
case 3794:
case 352:
case 3814:
case 264:
case 2979:
case 3360:
case 945:
case 1099:
case 3702:
case 2328:
case 1863:
case 611:
case 3579:
case 292:
case 119:
case 3010:
case 3997:
case 255:
case 2931:
case 811:
case 2485:
case 2432:
case 645:
case 2515:
case 3558:
case 1287:
case 3560:
case 4025:
case 3331:
case 496:
case 2454:
case 845:
case 3188:
case 3231:
case 2703:
case 1139:
case 2297:
case 2209:
case 798:
case 2960:
case 1021:
case 567:
case 3915:
case 3773:
case 3279:
case 1162:
case 1801:
case 1718:
case 1747:
case 4018:
case 911:
case 1448:
case 1127:
case 2702:
case 392:
case 1246:
case 738:
case 2695:
case 2579:
case 1632:
case 3228:
case 3116:
case 1346:
case 879:
case 2794:
case 3215:
case 2258:
case 741:
case 3089:
case 2796:
case 2260:
case 401:
case 774:
case 171:
case 3979:
case 364:
case 252:
case 49:
case 881:
case 679:
case 1163:
case 2358:
case 3761:
case 3772:
case 4086:
case 3597:
case 1786:
case 2531:
case 295:
case 1784:
case 440:
case 3888:
case 2426:
case 842:
case 2424:
case 335:
case 782:
case 1546:
case 1755:
case 325:
case 2379:
case 758:
case 2433:
case 2560:
case 2558:
case 3515:
case 981:
case 2042:
case 3730:
case 3456:
case 3454:
case 560:
case 232:
case 3209:
case 1656:
case 1101:
case 1871:
case 1654:
case 3703:
case 736:
case 1967:
case 3241:
case 561:
case 726:
case 3443:
case 3465:
case 2410:
case 3032:
case 1643:
case 3713:
case 3085:
case 3341:
case 3219:
case 1737:
case 104:
case 3489:
case 2193:
case 79:
case 3069:
case 4037:
case 474:
case 1553:
case 2699:
case 286:
case 1290:
case 2575:
case 1764:
case 1183:
case 2026:
case 3205:
case 802:
case 2804:
case 880:
case 2806:
case 170:
case 3980:
case 3120:
case 2621:
case 482:
case 756:
case 602:
case 3519:
case 2375:
case 2442:
case 38:
case 2580:
case 2941:
case 1759:
case 2892:
case 3056:
case 1835:
case 2000:
case 2275:
case 1590:
case 3054:
case 1451:
case 1353:
case 3104:
case 2820:
case 2919:
case 2489:
case 3193:
case 3905:
case 1791:
case 3280:
case 2069:
case 1811:
case 4091:
case 3699:
case 1536:
case 1407:
case 910:
case 3380:
case 4008:
case 1499:
case 1095:
case 2677:
case 1352:
case 216:
case 2241:
case 2319:
case 1953:
case 2893:
case 1252:
case 2443:
case 2465:
case 3740:
case 2341:
case 1523:
case 2713:
case 3375:
case 28:
case 687:
case 747:
case 407:
case 3000:
case 2106:
case 2651:
case 498:
case 412:
case 1367:
case 559:
case 2104:
case 3168:
case 887:
case 1421:
case 1182:
case 1922:
case 3026:
case 2070:
case 2541:
case 1552:
case 2192:
case 1729:
case 363:
case 1017:
case 773:
case 2721:
case 3320:
case 3292:
case 2374:
case 627:
case 340:
case 425:
case 2276:
case 3220:
case 637:
case 2274:
case 957:
case 827:
case 1836:
case 2047:
case 3875:
case 3993:
case 3206:
case 1583:
case 2250:
case 2025:
case 78:
case 2268:
case 3204:
case 3459:
case 2175:
case 84:
case 2612:
case 3751:
case 3306:
case 3304:
case 2368:
case 1003:
case 64:
case 296:
case 492:
case 657:
case 3119:
case 1349:
case 3950:
case 1211:
case 890:
case 3777:
case 716:
case 2574:
case 1249:
case 2640:
case 589:
case 690:
case 3520:
case 2576:
case 1743:
case 455:
case 4043:
case 571:
case 1413:
case 3504:
case 2568:
case 2992:
case 1789:
case 2491:
case 39:
case 3437:
case 1283:
case 3506:
case 2393:
case 94:
case 3738:
case 4089:
case 301:
case 1190:
case 3681:
case 2408:
case 1072:
case 1061:
case 3974:
case 2293:
case 2707:
case 1935:
case 1852:
case 1982:
case 1122:
case 1412:
case 950:
case 3268:
case 820:
case 1134:
case 2206:
case 422:
case 3612:
case 3805:
case 2459:
case 3175:
case 2304:
case 830:
case 620:
case 2306:
case 1949:
case 997:
case 396:
case 347:
case 3374:
case 3721:
case 3376:
case 1382:
case 1073:
case 33:
case 3047:
case 2055:
case 3018:
case 2220:
case 256:
case 2875:
case 697:
case 3491:
case 1094:
case 2506:
case 3550:
case 850:
case 920:
case 1096:
case 519:
case 608:
case 3393:
case 2974:
case 2466:
case 3819:
case 2464:
case 3920:
case 3408:
case 488:
case 2681:
case 650:
case 495:
case 930:
case 2976:
case 1608:
case 2592:
case 2968:
case 2880:
case 2119:
case 2478:
case 2950:
case 1152:
case 236:
case 2520:
case 2141:
case 3640:
case 1890:
case 2109:
case 543:
case 3425:
case 2197:
case 1239:
case 3288:
case 4033:
case 385:
case 1339:
case 2603:
case 1187:
case 948:
case 3388:
case 921:
case 1362:
case 282:
case 1726:
case 3673:
case 1724:
case 1945:
case 577:
case 1473:
case 3447:
case 3809:
case 931:
case 258:
case 41:
case 3897:
case 3717:
case 1647:
case 1618:
case 274:
case 3091:
case 606:
case 1844:
case 3694:
case 3696:
case 788:
case 795:
case 3008:
case 806:
case 2064:
case 3158:
case 2115:
case 2486:
case 1357:
case 3160:
case 848:
case 2484:
case 2661:
case 486:
case 1901:
case 1402:
case 2214:
case 3815:
case 3602:
case 129:
case 2316:
case 831:
case 1571:
case 1562:
case 621:
case 1040:
case 2673:
case 3516:
case 315:
case 1770:
case 735:
case 382:
case 300:
case 1887:
case 1957:
case 3831:
case 2897:
case 2179:
case 2717:
case 2748:
case 3630:
case 3197:
case 3109:
case 1201:
case 969:
case 3059:
case 2288:
case 3603:
case 691:
case 1754:
case 1298:
case 285:
case 1301:
case 212:
case 298:
case 570:
case 1403:
case 60:
case 4054:
case 2388:
case 3214:
case 3078:
case 718:
case 3216:
case 416:
case 1:
case 2815:
case 1144:
case 3316:
case 1501:
case 3037:
case 991:
case 2091:
case 161:
case 2588:
case 341:
case 2694:
case 869:
case 1461:
case 3064:
case 1962:
case 1971:
case 3661:
case 3486:
case 2158:
case 1363:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1751630401/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,1,1,1,1,0,1,0,0,1,1,1,0,1,1,1,1,1,0,0,1,0,0,0,0,0,0,0,1,0,1,0,0,1,0,0,0,0,1,1,1,1,0,0,0,0,0,1,0,1,1,0,1,0,1,0,1,1,0,1,1,0,1,0,1,0,1,0,1,0,1,0,0,0,1,0,0,1,1,1,0,1,0,1,1,0,0,0,1,1,0,1,0,0,1,0,1,1,0,1,1,0,0,0,1,0,0,1,0,0,1,1,0,0,1,1,0,0,0,1,0,0,1,1,0,1,1,0,0,1,0,0,0,0,1,1,1,0,1,0,0,1,1,0,0,0,0,0,0,0,1,0,1,0,1,0,1,1,1,0,0,1,1,0,0,1,1,0,0,0,1,1,0,0,0,1,0,0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0,1,1,1,0,0,0,0,0,0,1,1,0,1,0,0,1,1,0,1,0,0,0,1,1,0,1,0,1,0,1,1,0,0,0,0,0,1,0,1,1,1,0,1,1,0,0,0,0,1,0,1,0,0,0,0,1,1,1,1,0,1,1,1,0,1,0,1,1,0,0,1,0,1,1,1,1,0,1,0,0,1,0,0,0,0,1,1,1,1,1,0,1,1,1,0,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,1,1,1,0,1,1,1,0,0,1,1,1,0,0,0,0,1,0,0,1,0,1,0,0,0,0,0,0,0,0,0,1,0,1,0,0,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,0,0,0,0,1,1,1,1,1,1,0,1,1,0,0,0,0,1,0,0,1,1,0,0,1,0,0,1,1,0,1,0,0,0,0,0,1,1,0,1,0,1,1,0,1,0,1,0,1,0,1,0,1,0,0,0,1,1,1,1,0,1,0,0,0,0,0,1,0,0,1,0,0,0,0,0,1,0,1,1,0,0,1,0,0,1,0,1,0,1,1,1,0,0,1,0,1,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,1,1,1,0,1,1,0,0,1,1,0,0,1,0,1,1,1,0,1,0,1,1,1,0,1,1,1,1,0,0,0,1,1,1,1,1,0,0,0,1,0,1,1,1,0,1,1,1,1,1,1,0,1,1,0,0,1,1,0,0,0,0,0,1,0,0,0,0,0,1,0,1,0,0,0,0,0,1,1,0,0,0,1,0,0,1,1,1,0,0,1,1,1,1,0,1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,1,0,0,0,0,1,0,1,1,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,1,0,1,0,0,1,0,0,0,1,0,1,1,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,1,1,0,1,0,1,1,0,0,1,1,1,0,1,0,1,1,1,0,0,0,1,0,0,1,0,0,0,0,0,1,0,1,1,0,1,0,0,0,0,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,0,0,0,1,0,1,1,0,1,1,0,0,0,0,1,0,1,1,1,0,1,0,0,0,0,0,1,0,0,1,0,0,0,1,0,1,1,0,1,1,0,1,0,1,0,1,0,1,1,1,1,1,0,1,0,0,1,1,1,0,1,1,0,0,0,1,0,1,0,0,1,0,1,1,1,0,1,1,0,0,0,1,1,1,0,0,0,1,1,0,0,0,0,1,1,1,0,0,1,0,0,1,1,0,1,0,1,1,0,0,0,1,0,0,1,1,1,0,1,0,1,0,0,1,0,1,0,1,1,0,1,1,1,0,0,0,1,0,0,1,1,0,1,1,0,1,0,1,1,0,1,0,0,1,0,1,0,0,0,0,1,0,1,1,0,1,0,1,0,1,0,0,1,0,1,1,0,0,0,1,1,1,1,1,0,0,1,1,1,1,1,0,1,1,0,0,1,0,1,1,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,1,0,0,0,1,1,1,1,0,0,0,1,0,1,0,1,1,0,0,1,1,1,0,0,1,0,1,0,0,1,1,0,0,1,0,1,0,1,0,0,0,0,1,1,1,0,0,1,1,0,1,1,0,1,1,1,0,0,0,1,1,0,1,1,0,0,1,1,1,1,0,1,0,0,1,0,1,1,0,0,0,1,1,0,0,1,1,0,1,0,0,0,0,0,0,1,0,0,0,0,1,0,1,0,1,0,1,1,0,0,0,1,1,1,1,0,0,0,0,0,1,1,0,0,0,1,1,1,1,0,0,1,0,0,0,0,0,1,1,1,0,0,1,1,0,0,1,1,0,1,1,1,0,0,1,1,0,1,1,1,1,0,0,1,1,1,0,1,0,0,0,0,1,0,0,1,0,1,1,1,1,1,1,1,1,0,1,0,0,1,0,1,0,0,0,0,0,1,0,1,1,0,1,1,0,1,0,1,0,1,0,1,1,1,1,1,0,1,0,1,0,0,0,1,1,1,0,0,1,1,0,0,1,0,0,0,0,1,0,0,1,0,0,0,0,0,0,1,1,1,0,0,0,1,1,0,0,1,1,1,0,1,1,0,0,1,0,1,1,0,1,0,1,0,1,1,1,0,0,0,0,1,1,0,1,1,1,0,1,0,1,1,0,1,1,1,1,1,0,0,1,1,0,1,0,0,1,0,0,0,1,1,0,0,1,0,1,1,0,0,0,0,1,1,1,0,0,1,1,0,0,1,1,0,1,1,1,1,0,0,1,0,0,1,1,1,0,0,0,1,0,1,0,0,1,0,0,1,1,0,1,0,1,1,0,0,0,0,1,0,1,1,1,1,1,1,1,1,1,1,1,0,1,1,0,0,1,0,0,1,1,0,0,0,1,1,0,0,0,0,1,1,1,0,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,1,0,1,1,0,0,0,1,1,0,1,0,0,1,1,0,1,0,1,1,1,0,0,1,1,0,0,0,1,0,0,0,0,0,0,1,1,1,1,0,0,0,0,1,0,0,1,1,0,0,0,0,1,0,0,1,0,0,1,0,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,0,0,1,0,0,0,1,1,0,0,0,0,0,1,1,0,1,0,0,0,0,0,1,1,1,0,1,0,1,1,1,0,1,1,1,0,1,0,1,0,0,0,1,1,0,1,1,0,1,0,1,1,1,0,1,0,1,0,0,0,0,0,0,0,1,1,1,0,0,0,0,1,1,0,1,0,0,0,1,1,1,0,1,0,0,1,1,1,0,1,0,0,0,1,1,0,1,1,1,1,0,0,0,0,1,0,0,0,0,1,1,1,0,1,1,0,0,1,0,1,0,1,1,1,0,0,0,1,0,0,0,0,1,1,1,0,1,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,1,1,0,0,1,0,0,0,1,0,0,0,1,1,0,1,1,1,1,1,0,1,0,1,1,0,1,0,0,0,0,1,1,0,1,1,0,1,0,0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,1,0,0,0,1,0,1,1,0,0,0,0,1,0,0,1,1,1,1,1,0,0,0,1,0,1,1,0,1,0,0,0,1,1,0,1,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,1,0,1,0,0,0,0,0,1,0,0,1,0,0,1,1,1,0,0,0,1,0,1,1,0,1,0,1,1,0,0,0,0,0,1,0,0,0,1,1,1,1,1,1,0,1,0,1,0,1,1,1,0,0,0,0,1,0,1,1,1,1,1,0,1,0,1,0,1,0,1,1,0,0,0,1,1,0,1,0,1,1,0,0,0,1,0,0,1,1,0,1,1,0,0,1,1,1,0,0,1,1,0,0,0,1,0,1,0,0,1,1,1,0,0,1,0,1,1,0,0,1,1,0,1,0,1,0,0,0,1,0,1,1,0,1,1,1,1,0,1,1,0,0,0,0,1,1,0,1,0,1,0,0,1,0,1,1,0,0,0,0,1,0,1,1,0,0,0,0,0,0,0,1,0,0,0,0,0,1,1,1,1,0,1,0,1,0,0,0,0,0,1,0,1,1,1,1,1,1,1,1,1,0,0,0,0,0,1,0,1,1,1,0,0,0,0,0,1,0,1,1,1,0,1,1,0,1,1,0,1,0,0,1,0,0,1,1,1,1,1,0,1,1,0,0,1,0,0,0,1,0,0,1,0,0,1,0,0,0,0,1,1,0,0,0,1,0,0,1,1,0,0,0,1,0,0,0,1,1,1,1,0,1,0,0,1,0,1,0,0,0,1,0,1,0,1,0,0,1,0,1,1,1,0,0,1,0,0,0,0,0,0,1,1,0,0,1,1,0,0,1,1,0,1,1,1,1,1,0,0,0,1,0,1,1,0,0,0,0,1,0,0,0,1,0,1,1,1,1,0,0,1,0,0,1,1,0,0,0,0,1,0,1,0,1,0,0,1,0,1,1,0,1,1,0,1,0,1,1,0,1,1,0,1,1,0,0,0,0,1,1,0,1,0,0,1,1,0,0,0,0,1,0,0,0,0,0,1,1,0,1,1,0,0,1,0,0,0,0,1,0,1,0,1,1,0,1,0,0,1,0,1,0,0,0,1,0,0,1,1,0,0,1,0,0,0,0,0,0,1,1,0,0,1,0,1,1,1,1,0,0,1,1,1,1,0,1,1,0,1,0,0,1,0,1,1,0,1,1,0,0,1,0,0,1,0,1,0,0,1,1,1,1,0,0,1,0,0,0,1,0,0,1,1,0,0,1,1,0,1,0,0,1,1,1,1,0,1,1,0,0,0,0,0,0,0,1,1,1,1,1,1,0,1,1,1,0,0,0,0,1,0,1,0,0,0,0,1,0,1,0,0,1,0,1,0,0,0,1,1,1,1,1,1,0,0,0,0,1,0,1,1,0,0,0,0,0,1,1,1,1,1,0,0,0,1,1,0,1,1,1,1,0,0,1,1,1,1,0,0,0,0,1,0,0,1,1,0,1,1,0,0,0,1,1,0,1,1,0,0,1,1,1,0,1,0,1,1,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,1,0,1,0,1,1,1,0,1,1,1,0,0,1,1,0,1,0,1,1,1,0,0,1,1,1,0,1,1,0,1,1,0,1,1,0,0,0,1,1,1,0,1,0,1,1,1,1,0,0,0,1,0,1,1,1,0,0,0,1,1,1,1,0,0,1,1,0,1,0,1,0,0,1,0,1,0,1,1,0,1,1,1,1,0,0,1,0,0,1,0,0,0,0,0,1,1,0,1,1,0,0,1,0,1,1,1,1,1,0,1,0,0,0,1,1,1,1,0,0,0,1,0,1,0,1,1,0,0,0,1,1,0,0,0,1,1,1,1,1,1,0,0,1,0,0,1,0,1,1,1,0,0,1,0,1,1,1,1,0,1,1,0,1,0,1,1,1,0,1,1,1,1,1,1,0,0,0,1,0,1,0,1,0,1,0,0,1,0,0,1,0,1,1,0,0,0,0,0,0,0,0,0,1,0,1,0,1,1,1,1,0,0,1,1,0,1,1,0,1,1,0,0,0,1,1,0,0,1,1,1,1,1,0,0,1,0,0,1,1,1,1,1,0,1,0,1,1,1,1,0,1,1,1,0,0,1,0,1,1,1,1,0,0,1,0,0,1,1,0,1,0,0,0,0,1,0,1,0,0,1,1,1,1,1,0,1,1,0,0,1,0,1,1,0,0,0,0,1,1,1,1,0,0,1,0,0,1,1,0,0,0,1,1,0,1,0,1,0,1,0,1,1,1,1,1,0,0,1,0,0,1,1,1,0,0,0,0,0,0,0,1,0,1,0,1,1,0,0,1,0,1,1,1,1,0,0,0,0,0,0,1,0,0,1,0,1,1,0,1,0,1,1,0,1,1,0,0,1,1,0,1,0,1,0,1,1,0,0,1,0,1,0,1,1,0,1,0,0,0,1,1,0,1,1,1,1,1,1,1,0,0,0,1,0,1,0,0,0,1,1,1,0,0,0,0,0,1,0,0,1,1,1,0,0,0,1,1,0,1,1,0,1,0,0,0,0,0,1,0,0,1,1,0,0,1,1,0,0,0,1,1,1,0,1,0,1,0,1,1,1,0,1,1,0,1,1,0,1,1,1,0,0,0,0,0,0,1,0,0,0,0,1,1,1,0,1,0,1,1,0,0,0,0,1,0,1,1,0,0,0,0,0,0,1,0,1,1,1,0,0,1,0,0,1,0,0,0,0,1,0,0,0,1,1,1,0,0,1,0,0,0,1,1,0,1,0,1,0,0,0,0,1,0,1,0,0,1,0,1,0,0,0,0,1,1,1,1,1,1,1,0,0,1,0,1,0,0,0,1,1,0,0,0,1,1,0,0,0,0,0,1,0,1,1,0,0,0,0,1,0,1,0,1,1,1,0,0,1,1,1,0,1,1,1,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,1,1,0,0,0,0,1,1,1,0,0,0,1,0,1,0,1,1,0,1,1,1,0,1,0,1,0,0,1,1,1,0,0,0,0,0,1,1,1,1,1,1,1,1,0,0,1,0,1,1,1,1,0,0,0,1,1,0,0,0,0,1,0,0,1,0,1,0,0,0,1,0,1,0,1,1,0,0,1,0,0,0,1,1,0,1,1,0,1,0,1,0,1,0,1,0,0,1,0,1,1,0,1,0,0,0,1,1,0,1,1,0,0,1,1,0,1,1,1,0,0,1,0,1,0,0,1,1,0,1,1,0,0,0,0,1,0,0,1,0,1,1,1,0,0,0,0,1,0,0,0,0,0,0,1,1,1,1,1,0,1,1,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,1,0,0,0,0,0,1,0,0,1,0,1,0,1,0,1,1,1,1,0,1,1,0,1,0,1,1,0,1,0,1,1,0,1,0,1,0,0,0,0,1,1,0,0,0,1,1,1,1,1,0,1,1,0,0,1,1,0,1,0,1,1,1,1,1,0,1,1,0,0,1,0,1,1,1,1,1,1,1,1,0,0,1,0,1,1,1,0,0,1,0,0,0,0,0,0,1,0,0,1,1,1,1,0,0,1,0,1,0,0,1,1,0,0,1,0,1,1,0,1,0,0,0,0,1,1,1,1,1,1,0,1,0,0,0,0,1,1,1,1,0,1,0,0,1,0,1,1,1,1,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,0,1,0,0,1,0,1,0,1,0,1,0,0,1,0,0,0,0,0,1,1,0,0,0,1,0,0,0,0,1,0,1,0,0,0,0,1,1,0,1,0,0,1,1,0,1,0,1,1,0,1,1,0,1,1,0,0,0,0,1,0,1,1,1,1,1,0,0,1,1,0,1,1,1,0,1,1,1,1,1,0,1,1,0,1,0,1,0,0,0,0,1,0,0,1,1,1,1,0,0,0,1,0,0,0,0,0,0,1,1,0,0,0,1,0,1,0,0,0,1,0,0,0,1,0,1,0,1,1,0,0,1,0,0,1,1,1,1,1,0,1,0,1,0,1,0,1,1,0,1,1,1,0,1,0,1,0,0,0,0,1,1,0,1,0,0,0,0,0,0,1,0,0,0,1,1,1,1,0,1,0,1,1,0,0,0,0,0,0,0,1,1,1,0,1,0,1,0,0,0,1,0,0,1,1,0,0,1,1,0,1,1,1,1,1,1,0,1,1,0,0,1,0,1,1,1,1,1,0,0,0,1,0,1,0,0,0,0,1,1,1,1,1,0,0,0,1,1,1,1,0,1,0,1,0,1,0,0,1,0,0,0,0,0,0,0,0,1,0,0,1,1,0,1,0,1,0,1,1,0,0,0,0,0,1,1,0,0,1,0,1,1,0,1,1,0,1,0,1,1,1,0,1,0,1,0,0,0,0,0,1,1,1,0,1,1,0,0,1,0,1,1,0,0,0,1,0,1,1,0,0,0,0,0,1,0,0,0,1,0,1,1,0,1,1,0,0,0,0,1,0,0,0,0,1,0,1,1,0,1,0,1,0,0,0,0,1,0,1,1,0,1,0,1,1,1,0,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,0,0,1,0,0,1,0,1,0,0,1,1,1,1,0,1,1,0,0,0,1,0,0,1,1,1,1,0,0,1,0,1,1,1,1,0,0,0,1,0,0,1,0,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,0,0,1,0,1,1,1,1,1,1,0,0,1,1,1,1,1,0,0,0,1,1,0,0,0,1,0,1,0,0,1,0,1,0,1,0,0,1,1,0,0,1,0,0,0,1,1,1,1,1,1,1,0,0,0,1,0,0,1,1,0,0,0,0,0,1,0,1,1,0,1,0,1,1,1,1,1,0,1,1,1,0,1,1,1,1,0,0,0,1,1,1,1,1,0,0,0,1,0,0,1,0,1,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,1,1,0,0,1,1,0,0,0,0,0,1,1,1,1,0,1,1,1,1,1,0,1,0,0,0,0,0,1,0,0,0,1,0,1,1,0,1,1,0,0,1,1,1,0,0,1,0,0,0,1,0,1,0,1,1,0,1,0,0,1,1,0,1,0,1,0,1,1,1,0,1,1,1,0,0,0,0,0,1,0,0,0,1,1,0,0,1,1,1,1,1,0,0,1,0,1,1,1,1,0,0,1,0,1,0,1,0,1,0,1,1,1,1,1,1,1,0,0,1,0,0,1,1,1,1,1,0,0,0,1,0,1,0,0,1,0,1,0,0,1,0,1,0,1,1,0,0,0,0,1,1,1,0,1,0,1,0,1,0,1,1,0,1,0,0,1,1,1,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,1,1,0,0,1,0,1,1,0,0,1,0,0,0,1,1,1,0,0,1,0,0,1,0,1,0,0,0,0,];
var gg_b = "1751630401/";

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
