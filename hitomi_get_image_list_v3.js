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
case 2087:
case 1802:
case 3727:
case 1577:
case 769:
case 1669:
case 1299:
case 1850:
case 275:
case 2282:
case 456:
case 1841:
case 3882:
case 3063:
case 2384:
case 3012:
case 975:
case 3275:
case 1653:
case 241:
case 2308:
case 2114:
case 2875:
case 103:
case 3846:
case 1369:
case 739:
case 501:
case 3059:
case 3635:
case 2090:
case 2820:
case 3710:
case 1151:
case 1338:
case 172:
case 2874:
case 4073:
case 3372:
case 1140:
case 3274:
case 121:
case 357:
case 1514:
case 2323:
case 3914:
case 197:
case 900:
case 1866:
case 1446:
case 2:
case 3993:
case 2792:
case 3232:
case 1789:
case 3156:
case 1593:
case 3649:
case 3402:
case 537:
case 9:
case 2177:
case 2385:
case 3921:
case 2499:
case 1482:
case 1521:
case 3709:
case 1638:
case 1312:
case 976:
case 2415:
case 1440:
case 553:
case 391:
case 725:
case 455:
case 1920:
case 1214:
case 1659:
case 2826:
case 3716:
case 1035:
case 2004:
case 1146:
case 3978:
case 1293:
case 1578:
case 3069:
case 3728:
case 2818:
case 2199:
case 1182:
case 2755:
case 2561:
case 803:
case 2607:
case 1663:
case 1711:
case 1612:
case 2178:
case 2493:
case 2629:
case 1856:
case 1049:
case 4086:
case 756:
case 3999:
case 2421:
case 1783:
case 938:
case 1637:
case 3643:
case 2950:
case 1072:
case 2251:
case 2096:
case 3460:
case 620:
case 4042:
case 1215:
case 2240:
case 3343:
case 968:
case 1337:
case 643:
case 2414:
case 57:
case 439:
case 4079:
case 1034:
case 2005:
case 3166:
case 925:
case 1839:
case 385:
case 1155:
case 776:
case 3022:
case 2681:
case 33:
case 1583:
case 2306:
case 1147:
case 3717:
case 2827:
case 852:
case 2395:
case 3133:
case 2746:
case 815:
case 502:
case 2958:
case 2695:
case 3030:
case 294:
case 1525:
case 116:
case 3925:
case 2381:
case 1844:
case 2124:
case 3445:
case 1276:
case 3158:
case 1857:
case 1916:
case 2694:
case 314:
case 2080:
case 573:
case 3720:
case 475:
case 2125:
case 3774:
case 1465:
case 3970:
case 122:
case 2362:
case 1570:
case 738:
case 3864:
case 768:
case 2662:
case 1511:
case 3209:
case 2183:
case 1154:
case 3892:
case 3528:
case 1928:
case 2547:
case 1289:
case 2933:
case 3732:
case 846:
case 4090:
case 2292:
case 3631:
case 1778:
case 969:
case 3458:
case 1576:
case 2957:
case 61:
case 269:
case 1714:
case 10:
case 226:
case 3144:
case 386:
case 1165:
case 1270:
case 152:
case 3509:
case 3571:
case 2042:
case 3855:
case 741:
case 115:
case 4005:
case 605:
case 239:
case 3467:
case 2968:
case 1330:
case 816:
case 1148:
case 955:
case 1283:
case 476:
case 1777:
case 3203:
case 2300:
case 700:
case 2548:
case 1927:
case 2803:
case 1867:
case 3527:
case 871:
case 2176:
case 845:
case 1858:
case 664:
case 912:
case 1164:
case 146:
case 1225:
case 2470:
case 212:
case 670:
case 184:
case 2424:
case 3126:
case 67:
case 3604:
case 1090:
case 903:
case 1540:
case 2515:
case 1551:
case 3940:
case 3744:
case 141:
case 445:
case 1114:
case 1308:
case 543:
case 1121:
case 1608:
case 70:
case 1282:
case 3007:
case 3250:
case 2461:
case 1748:
case 3432:
case 1956:
case 3118:
case 3304:
case 2577:
case 887:
case 3688:
case 2669:
case 2482:
case 746:
case 3396:
case 784:
case 2278:
case 811:
case 1792:
case 1:
case 3029:
case 3417:
case 3305:
case 1177:
case 1832:
case 838:
case 2926:
case 100:
case 2776:
case 2446:
case 1820:
case 2151:
case 1960:
case 3745:
case 921:
case 1874:
case 2338:
case 997:
case 381:
case 3696:
case 308:
case 2140:
case 2514:
case 1764:
case 297:
case 653:
case 2221:
case 446:
case 3008:
case 1755:
case 1561:
case 484:
case 3821:
case 3961:
case 3687:
case 2932:
case 2578:
case 3893:
case 1747:
case 2359:
case 637:
case 1826:
case 1966:
case 1004:
case 4031:
case 3690:
case 2451:
case 3084:
case 2363:
case 3175:
case 3814:
case 2724:
case 1307:
case 187:
case 951:
case 1415:
case 2440:
case 623:
case 2214:
case 2860:
case 3426:
case 2034:
case 598:
case 3758:
case 1329:
case 2975:
case 745:
case 2337:
case 8:
case 2725:
case 3815:
case 1414:
case 347:
case 513:
case 1421:
case 800:
case 3982:
case 2783:
case 3023:
case 2599:
case 452:
case 3541:
case 2161:
case 1493:
case 1178:
case 1629:
case 3256:
case 3091:
case 3418:
case 2917:
case 2049:
case 1381:
case 354:
case 3342:
case 1170:
case 4043:
case 142:
case 916:
case 3410:
case 1746:
case 1476:
case 3558:
case 3116:
case 62:
case 3686:
case 3567:
case 2147:
case 3128:
case 534:
case 1967:
case 2492:
case 472:
case 1111:
case 3471:
case 2155:
case 3642:
case 1681:
case 125:
case 3954:
case 1394:
case 3947:
case 1547:
case 505:
case 3889:
case 3533:
case 2289:
case 1555:
case 1761:
case 1613:
case 945:
case 2336:
case 3698:
case 3955:
case 245:
case 1809:
case 2845:
case 1810:
case 1264:
case 271:
case 3052:
case 222:
case 2636:
case 3245:
case 2570:
case 3876:
case 51:
case 1694:
case 2833:
case 4034:
case 3403:
case 894:
case 1828:
case 1968:
case 2589:
case 3233:
case 3992:
case 2793:
case 2211:
case 1042:
case 2909:
case 1483:
case 3081:
case 2622:
case 3824:
case 20:
case 2714:
case 599:
case 2322:
case 3964:
case 1564:
case 3870:
case 3006:
case 126:
case 952:
case 1425:
case 673:
case 689:
case 3373:
case 4072:
case 3545:
case 1945:
case 3760:
case 252:
case 2910:
case 3095:
case 825:
case 169:
case 1816:
case 3680:
case 246:
case 984:
case 2225:
case 1944:
case 1740:
case 1470:
case 3965:
case 112:
case 2715:
case 3825:
case 1652:
case 1565:
case 1751:
case 946:
case 3416:
case 506:
case 65:
case 3428:
case 2927:
case 1803:
case 1189:
case 2867:
case 2192:
case 1411:
case 3013:
case 3883:
case 3062:
case 772:
case 451:
case 721:
case 395:
case 155:
case 831:
case 2904:
case 2700:
case 674:
case 180:
case 1377:
case 436:
case 4039:
case 388:
case 1020:
case 228:
case 3953:
case 660:
case 1407:
case 2463:
case 2351:
case 2412:
case 2340:
case 1315:
case 2843:
case 2508:
case 704:
case 1677:
case 3969:
case 3829:
case 818:
case 1569:
case 3078:
case 861:
case 2207:
case 1212:
case 3572:
case 3938:
case 2523:
case 1314:
case 1722:
case 3188:
case 2002:
case 3549:
case 1017:
case 1949:
case 3326:
case 1693:
case 1429:
case 979:
case 340:
case 1393:
case 3318:
case 283:
case 3534:
case 279:
case 1259:
case 1890:
case 983:
case 1321:
case 367:
case 1614:
case 765:
case 1184:
case 1075:
case 148:
case 2762:
case 2661:
case 48:
case 778:
case 3272:
case 1512:
case 1238:
case 2872:
case 3374:
case 131:
case 3320:
case 2469:
case 3891:
case 3077:
case 2849:
case 3731:
case 2056:
case 3632:
case 2291:
case 1129:
case 2834:
case 4033:
case 310:
case 1805:
case 1559:
case 3959:
case 353:
case 3620:
case 3674:
case 1736:
case 2361:
case 4067:
case 3317:
case 1804:
case 3405:
case 617:
case 2706:
case 1399:
case 1485:
case 736:
case 107:
case 2284:
case 1253:
case 3675:
case 2163:
case 1107:
case 3543:
case 2438:
case 2682:
case 3937:
case 766:
case 1699:
case 2208:
case 404:
case 1423:
case 1269:
case 729:
case 848:
case 2529:
case 4058:
case 2346:
case 1491:
case 2045:
case 2136:
case 1625:
case 2354:
case 2986:
case 2057:
case 1194:
case 56:
case 3303:
case 149:
case 2595:
case 585:
case 2729:
case 695:
case 53:
case 479:
case 2422:
case 1737:
case 3473:
case 2942:
case 3198:
case 790:
case 4066:
case 3316:
case 3101:
case 3628:
case 3179:
case 1419:
case 2647:
case 1222:
case 1873:
case 3497:
case 236:
case 2562:
case 2998:
case 2513:
case 2655:
case 758:
case 1324:
case 2707:
case 1311:
case 1624:
case 266:
case 3480:
case 1106:
case 1759:
case 3186:
case 1400:
case 2594:
case 514:
case 1195:
case 389:
case 89:
case 2791:
case 1376:
case 490:
case 3479:
case 3749:
case 1119:
case 2831:
case 3813:
case 3922:
case 3862:
case 3083:
case 1522:
case 1898:
case 3197:
case 1738:
case 3671:
case 3609:
case 3772:
case 728:
case 849:
case 3310:
case 2213:
case 3610:
case 3309:
case 1236:
case 3180:
case 2785:
case 2664:
case 3734:
case 3486:
case 2294:
case 696:
case 682:
case 959:
case 1495:
case 1530:
case 2058:
case 2392:
case 3930:
case 586:
case 2552:
case 2980:
case 2206:
case 1494:
case 3895:
case 654:
case 3735:
case 2348:
case 2130:
case 2648:
case 3627:
case 2033:
case 1879:
case 783:
case 779:
case 1028:
case 265:
case 2997:
case 3881:
case 3173:
case 3498:
case 1413:
case 965:
case 1462:
case 1988:
case 2569:
case 2032:
case 2407:
case 1463:
case 1351:
case 3172:
case 762:
case 1340:
case 3061:
case 3837:
case 3797:
case 1843:
case 2237:
case 1508:
case 2123:
case 2074:
case 2185:
case 2020:
case 1640:
case 1752:
case 3504:
case 1904:
case 2935:
case 4027:
case 1700:
case 1459:
case 2377:
case 280:
case 948:
case 1585:
case 2075:
case 3660:
case 2730:
case 508:
case 3859:
case 3290:
case 183:
case 3505:
case 179:
case 1905:
case 2934:
case 627:
case 1002:
case 2017:
case 449:
case 2949:
case 719:
case 3287:
case 3991:
case 2538:
case 3360:
case 1207:
case 3773:
case 3443:
case 2972:
case 633:
case 890:
case 3082:
case 3812:
case 49:
case 3923:
case 2896:
case 2736:
case 2484:
case 1361:
case 218:
case 961:
case 1834:
case 3590:
case 3666:
case 2559:
case 4028:
case 419:
case 3366:
case 1291:
case 931:
case 1713:
case 2512:
case 2563:
case 79:
case 1223:
case 3288:
case 3779:
case 3449:
case 3602:
case 1529:
case 1346:
case 3869:
case 2491:
case 3929:
case 3650:
case 2107:
case 1438:
case 530:
case 1682:
case 1781:
case 2423:
case 1706:
case 3853:
case 2399:
case 1382:
case 3341:
case 560:
case 1060:
case 907:
case 398:
case 190:
case 1646:
case 3204:
case 1795:
case 1835:
case 313:
case 4003:
case 547:
case 574:
case 3302:
case 2026:
case 1159:
case 3434:
case 3786:
case 334:
case 1581:
case 2737:
case 2683:
case 448:
case 859:
case 3542:
case 2071:
case 2113:
case 1068:
case 3131:
case 3092:
case 554:
case 4017:
case 3586:
case 370:
case 949:
case 1430:
case 1595:
case 1252:
case 99:
case 2880:
case 1136:
case 3064:
case 1506:
case 2625:
case 509:
case 3906:
case 1354:
case 644:
case 677:
case 3994:
case 596:
case 2400:
case 1594:
case 2195:
case 686:
case 3790:
case 2230:
case 3333:
case 2311:
case 2624:
case 1355:
case 4020:
case 2181:
case 1039:
case 4074:
case 1655:
case 1513:
case 1998:
case 3273:
case 3913:
case 2763:
case 2611:
case 2027:
case 835:
case 3633:
case 3787:
case 3048:
case 480:
case 614:
case 3705:
case 1294:
case 4018:
case 2389:
case 1392:
case 1058:
case 2152:
case 3645:
case 3796:
case 2236:
case 34:
case 104:
case 962:
case 2406:
case 1723:
case 932:
case 3054:
case 2522:
case 3573:
case 1262:
case 2689:
case 3357:
case 780:
case 1831:
case 1067:
case 3597:
case 3639:
case 461:
case 1708:
case 165:
case 1997:
case 1365:
case 2413:
case 866:
case 1648:
case 2801:
case 2879:
case 3201:
case 3047:
case 1519:
case 63:
case 493:
case 1500:
case 524:
case 3704:
case 1348:
case 2886:
case 1130:
case 3952:
case 2753:
case 1665:
case 18:
case 1436:
case 1784:
case 3644:
case 1206:
case 431:
case 3580:
case 3339:
case 2089:
case 3068:
case 84:
case 3729:
case 2819:
case 1092:
case 3901:
case 1501:
case 423:
case 3219:
case 525:
case 1579:
case 134:
case 3422:
case 3654:
case 467:
case 2473:
case 3942:
case 1542:
case 899:
case 202:
case 3252:
case 3136:
case 95:
case 437:
case 3506:
case 3354:
case 3057:
case 3986:
case 1586:
case 594:
case 3200:
case 2303:
case 2076:
case 3430:
case 684:
case 2936:
case 366:
case 3347:
case 3594:
case 329:
case 2616:
case 652:
case 1787:
case 1633:
case 1048:
case 806:
case 2531:
case 2179:
case 615:
case 2628:
case 2497:
case 488:
case 1273:
case 2142:
case 3655:
case 3513:
case 3562:
case 1962:
case 1913:
case 1822:
case 1645:
case 304:
case 3664:
case 359:
case 3294:
case 1705:
case 2734:
case 1657:
case 622:
case 2894:
case 2930:
case 3058:
case 3392:
case 2231:
case 3791:
case 1668:
case 864:
case 645:
case 2749:
case 2401:
case 3067:
case 2862:
case 2922:
case 4014:
case 2197:
case 870:
case 1054:
case 1298:
case 2671:
case 1431:
case 410:
case 1279:
case 723:
case 453:
case 1201:
case 1788:
case 3708:
case 1639:
case 767:
case 3122:
case 1344:
case 3365:
case 1242:
case 1952:
case 2806:
case 2070:
case 3436:
case 3665:
case 737:
case 1339:
case 4077:
case 3500:
case 1286:
case 2895:
case 616:
case 1704:
case 2735:
case 3130:
case 512:
case 3412:
case 3351:
case 1837:
case 1061:
case 3340:
case 2243:
case 1908:
case 575:
case 2829:
case 3719:
case 3988:
case 1588:
case 1656:
case 2078:
case 2487:
case 1504:
case 2490:
case 120:
case 1356:
case 541:
case 3459:
case 1134:
case 2105:
case 201:
case 2196:
case 3640:
case 988:
case 1859:
case 1290:
case 1046:
case 383:
case 2318:
case 2104:
case 940:
case 3905:
case 651:
case 267:
case 1985:
case 1660:
case 3153:
case 500:
case 3207:
case 813:
case 1360:
case 1773:
case 402:
case 3437:
case 2099:
case 3523:
case 45:
case 1812:
case 1923:
case 850:
case 1863:
case 237:
case 2549:
case 2188:
case 3169:
case 898:
case 2618:
case 4076:
case 1991:
case 1287:
case 3990:
case 3834:
case 2332:
case 1666:
case 1590:
case 697:
case 576:
case 3285:
case 2620:
case 2674:
case 1051:
case 2885:
case 3453:
case 1040:
case 4011:
case 2823:
case 702:
case 1907:
case 2963:
case 4070:
case 1798:
case 2272:
case 1838:
case 820:
case 3872:
case 42:
case 2320:
case 3223:
case 3469:
case 2249:
case 2077:
case 1366:
case 2632:
case 3987:
case 2731:
case 3112:
case 2543:
case 1650:
case 2808:
case 2375:
case 1641:
case 3438:
case 1472:
case 1742:
case 3781:
case 2021:
case 3682:
case 4025:
case 1701:
case 1602:
case 1449:
case 773:
case 789:
case 538:
case 3529:
case 1929:
case 2187:
case 3346:
case 1869:
case 2190:
case 2235:
case 150:
case 113:
case 3159:
case 511:
case 1434:
case 603:
case 27:
case 3382:
case 4083:
case 2884:
case 358:
case 3284:
case 1350:
case 3194:
case 970:
case 349:
case 1303:
case 2995:
case 1076:
case 964:
case 3625:
case 2064:
case 3383:
case 15:
case 264:
case 2297:
case 3737:
case 2981:
case 3325:
case 1473:
case 934:
case 3009:
case 2092:
case 2667:
case 1603:
case 655:
case 3873:
case 3181:
case 3370:
case 1142:
case 2962:
case 3763:
case 3712:
case 2822:
case 2913:
case 2598:
case 3931:
case 2633:
case 3027:
case 1531:
case 1628:
case 443:
case 3419:
case 2994:
case 3759:
case 1186:
case 1328:
case 626:
case 1616:
case 3195:
case 2333:
case 91:
case 3624:
case 3536:
case 2065:
case 3452:
case 3311:
case 3106:
case 1083:
case 1922:
case 3522:
case 3898:
case 1442:
case 1609:
case 1671:
case 2345:
case 1231:
case 720:
case 2668:
case 3689:
case 2357:
case 1479:
case 743:
case 413:
case 3119:
case 1486:
case 3100:
case 2657:
case 299:
case 3389:
case 2368:
case 1894:
case 999:
case 3676:
case 3152:
case 3236:
case 1371:
case 1309:
case 2796:
case 2836:
case 3406:
case 546:
case 2286:
case 319:
case 2704:
case 1735:
case 642:
case 3886:
case 3753:
case 2952:
case 1070:
case 2644:
case 12:
case 2339:
case 889:
case 2242:
case 4040:
case 3413:
case 3879:
case 2279:
case 2047:
case 625:
case 2201:
case 3769:
case 3028:
case 188:
case 3185:
case 101:
case 1196:
case 3615:
case 3553:
case 2984:
case 1953:
case 943:
case 668:
case 220:
case 1535:
case 4048:
case 920:
case 243:
case 380:
case 2134:
case 1829:
case 1969:
case 2588:
case 1078:
case 2656:
case 3191:
case 3407:
case 4065:
case 853:
case 3315:
case 810:
case 2797:
case 3017:
case 1618:
case 87:
case 2991:
case 3693:
case 3972:
case 2443:
case 2773:
case 464:
case 2812:
case 4064:
case 2863:
case 3314:
case 3108:
case 1807:
case 434:
case 348:
case 3393:
case 2290:
case 2859:
case 687:
case 3730:
case 4092:
case 2046:
case 1104:
case 676:
case 123:
case 1534:
case 597:
case 1626:
case 3934:
case 3259:
case 1891:
case 1488:
case 1077:
case 2366:
case 770:
case 3678:
case 1912:
case 3563:
case 3238:
case 331:
case 2838:
case 764:
case 1320:
case 3408:
case 361:
case 1674:
case 2296:
case 600:
case 3736:
case 3805:
case 110:
case 2666:
case 2590:
case 2435:
case 1234:
case 1959:
case 153:
case 17:
case 998:
case 1496:
case 3253:
case 298:
case 1235:
case 2204:
case 2302:
case 1405:
case 2786:
case 950:
case 499:
case 2701:
case 1617:
case 675:
case 2449:
case 2779:
case 867:
case 1093:
case 3491:
case 2869:
case 3888:
case 3107:
case 823:
case 1375:
case 2641:
case 2742:
case 3943:
case 840:
case 1937:
case 71:
case 3537:
case 1558:
case 3746:
case 3476:
case 578:
case 2030:
case 2457:
case 733:
case 109:
case 3606:
case 1244:
case 3381:
case 619:
case 26:
case 2865:
case 3265:
case 3170:
case 96:
case 2775:
case 3124:
case 3111:
case 3073:
case 1642:
case 285:
case 1409:
case 2983:
case 791:
case 3554:
case 2022:
case 3306:
case 985:
case 1239:
case 1386:
case 1702:
case 3967:
case 1128:
case 2717:
case 2133:
case 2911:
case 3761:
case 3555:
case 2209:
case 1955:
case 3097:
case 2439:
case 2528:
case 4059:
case 1103:
case 1889:
case 3547:
case 632:
case 1427:
case 824:
case 2631:
case 2732:
case 3933:
case 895:
case 662:
case 1257:
case 3694:
case 566:
case 1876:
case 3264:
case 2720:
case 356:
case 3080:
case 214:
case 182:
case 2774:
case 2970:
case 1398:
case 2210:
case 2864:
case 4063:
case 4012:
case 3255:
case 1673:
case 3483:
case 2139:
case 3247:
case 3001:
case 1403:
case 2228:
case 2989:
case 2718:
case 1127:
case 3592:
case 1233:
case 1095:
case 2216:
case 277:
case 244:
case 326:
case 1006:
case 1545:
case 292:
case 1373:
case 286:
case 58:
case 1416:
case 1258:
case 69:
case 3600:
case 535:
case 433:
case 1544:
case 3944:
case 1397:
case 649:
case 1825:
case 312:
case 1965:
case 3740:
case 3470:
case 2036:
case 3751:
case 3424:
case 2145:
case 3352:
case 3411:
case 4053:
case 2854:
case 1062:
case 1883:
case 1013:
case 1539:
case 1380:
case 1697:
case 427:
case 3254:
case 355:
case 3939:
case 463:
case 565:
case 3619:
case 1267:
case 1428:
case 3803:
case 882:
case 2527:
case 896:
case 2275:
case 2160:
case 3551:
case 3684:
case 1474:
case 3875:
case 3114:
case 3308:
case 117:
case 1420:
case 1388:
case 607:
case 1126:
case 2466:
case 3090:
case 528:
case 1556:
case 1432:
case 1304:
case 1202:
case 2977:
case 1688:
case 744:
case 3282:
case 2012:
case 1241:
case 786:
case 1007:
case 792:
case 2232:
case 3:
case 4030:
case 1768:
case 2156:
case 1417:
case 2402:
case 2649:
case 3177:
case 2037:
case 2861:
case 3499:
case 860:
case 2441:
case 2672:
case 1396:
case 2450:
case 485:
case 2710:
case 1696:
case 2372:
case 257:
case 693:
case 2274:
case 2914:
case 579:
case 3323:
case 3764:
case 2634:
case 2349:
case 1757:
case 1733:
case 1390:
case 1687:
case 2218:
case 2456:
case 2532:
case 3818:
case 3088:
case 2069:
case 1893:
case 76:
case 1008:
case 1814:
case 991:
case 387:
case 3415:
case 291:
case 263:
case 3966:
case 3826:
case 2716:
case 963:
case 1690:
case 3004:
case 368:
case 2460:
case 3251:
case 2343:
case 590:
case 1815:
case 1174:
case 147:
case 2851:
case 1426:
case 3546:
case 558:
case 130:
case 1877:
case 3178:
case 1418:
case 1502:
case 808:
case 881:
case 3754:
case 714:
case 1023:
case 444:
case 1550:
case 486:
case 1541:
case 1848:
case 3147:
case 2386:
case 2567:
case 3903:
case 2128:
case 1468:
case 1227:
case 3492:
case 481:
case 2642:
case 2409:
case 2471:
case 2741:
case 1983:
case 3799:
case 2239:
case 549:
case 3464:
case 3525:
case 254:
case 2244:
case 1925:
case 316:
case 16:
case 1865:
case 2342:
case 2410:
case 1775:
case 1030:
case 59:
case 2686:
case 1720:
case 659:
case 3845:
case 1774:
case 282:
case 371:
case 296:
case 3524:
case 3636:
case 322:
case 2052:
case 996:
case 1864:
case 2245:
case 730:
case 1516:
case 3916:
case 1158:
case 2000:
case 2103:
case 3868:
case 2889:
case 3928:
case 3289:
case 2533:
case 3778:
case 1631:
case 1911:
case 2955:
case 1209:
case 3511:
case 3336:
case 1271:
case 345:
case 747:
case 3154:
case 1439:
case 2964:
case 2824:
case 144:
case 4023:
case 629:
case 2006:
case 2545:
case 3165:
case 3270:
case 3910:
case 2760:
case 3630:
case 83:
case 562:
case 1976:
case 2095:
case 1216:
case 3576:
case 1726:
case 666:
case 1467:
case 1718:
case 460:
case 1847:
case 86:
case 3330:
case 2233:
case 3589:
case 1571:
case 2673:
case 3971:
case 474:
case 447:
case 2811:
case 2081:
case 1139:
case 1203:
case 2428:
case 3927:
case 2948:
case 1527:
case 1854:
case 2109:
case 2062:
case 3455:
case 708:
case 2171:
case 2380:
case 295:
case 2539:
case 2697:
case 3164:
case 2544:
case 224:
case 3225:
case 3715:
case 2110:
case 384:
case 1145:
case 2416:
case 3858:
case 1157:
case 0:
case 2739:
case 3299:
case 3850:
case 1012:
case 2241:
case 1882:
case 1063:
case 3461:
case 863:
case 2250:
case 2556:
case 891:
case 2118:
case 827:
case 3802:
case 4000:
case 3669:
case 1977:
case 2388:
case 1466:
case 2604:
case 1635:
case 690:
case 3653:
case 833:
case 1160:
case 1275:
case 2940:
case 917:
case 2744:
case 2474:
case 1526:
case 3866:
case 2266:
case 548:
case 3446:
case 3776:
case 2475:
case 1710:
case 3140:
case 372:
case 795:
case 157:
case 321:
case 1914:
case 397:
case 908:
case 1037:
case 724:
case 454:
case 1441:
case 1672:
case 1709:
case 1450:
case 3043:
case 1232:
case 1518:
case 3593:
case 1156:
case 409:
case 2417:
case 1649:
case 2878:
case 561:
case 1226:
case 518:
case 2690:
case 3724:
case 2814:
case 2260:
case 3363:
case 2084:
case 3451:
case 3440:
case 679:
case 191:
case 593:
case 3214:
case 127:
case 3920:
case 495:
case 3221:
case 424:
case 3182:
case 1141:
case 2821:
case 1150:
case 2733:
case 3293:
case 2687:
case 3578:
case 1218:
case 1456:
case 2117:
case 1728:
case 1102:
case 531:
case 3359:
case 4006:
case 796:
case 3599:
case 2550:
case 3161:
case 2541:
case 3072:
case 2132:
case 857:
case 2877:
case 2256:
case 930:
case 3917:
case 2767:
case 1703:
case 260:
case 2946:
case 1575:
case 947:
case 2174:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1746198001/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,1,1,1,0,0,0,0,1,1,1,0,1,0,0,1,1,1,1,0,1,0,0,0,0,0,1,1,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,0,0,1,0,0,1,1,0,1,0,1,0,0,1,1,1,1,0,1,1,1,0,1,0,1,0,1,1,1,0,0,0,0,1,0,0,1,0,0,0,1,1,0,1,1,0,1,0,1,0,0,0,1,1,0,0,1,1,1,0,1,1,0,0,1,0,1,1,0,1,1,0,1,1,1,0,0,1,1,1,1,0,1,1,1,0,0,1,1,0,0,1,0,0,0,0,0,0,1,1,0,1,0,1,1,1,1,1,0,1,1,0,1,0,1,0,0,0,0,0,0,0,1,0,0,0,1,0,0,1,0,0,0,0,0,0,1,1,0,1,1,1,0,0,1,1,0,1,1,0,0,0,0,0,1,0,0,0,1,1,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,1,0,1,0,1,0,1,0,1,0,1,0,0,0,0,0,0,0,1,1,0,1,0,1,0,1,1,1,1,0,0,0,0,0,1,0,1,0,0,1,0,0,1,0,0,1,1,1,1,1,0,1,0,1,0,0,0,1,0,1,0,1,1,0,1,1,0,1,1,0,0,0,0,1,1,0,1,1,1,1,1,1,0,0,0,0,1,0,0,0,1,0,1,0,1,1,1,0,1,0,0,1,0,1,1,0,0,0,1,0,0,1,0,1,0,0,1,0,0,0,0,0,1,0,0,0,0,1,0,1,1,1,0,0,0,1,1,1,1,1,1,1,0,1,0,0,0,0,1,1,1,0,1,1,1,0,0,0,0,0,0,0,1,1,0,1,1,1,1,1,1,1,0,1,0,0,0,1,0,1,1,0,0,0,1,0,1,0,0,0,0,1,1,0,0,1,0,0,0,0,0,1,0,0,0,1,1,0,0,1,0,0,0,1,0,1,1,0,1,1,0,1,0,0,0,1,1,1,1,1,1,1,0,1,1,1,1,1,1,0,0,0,1,1,0,1,1,0,0,1,0,0,0,0,1,0,1,1,1,0,0,1,1,1,0,0,1,1,1,0,1,0,1,0,0,1,0,1,0,0,0,1,1,1,1,0,0,1,1,0,1,1,0,1,1,1,1,0,0,0,1,0,0,0,0,0,1,1,0,0,1,0,1,1,0,0,1,1,0,1,1,0,0,1,0,1,0,0,1,1,1,1,0,0,0,1,1,0,0,0,1,0,1,1,1,0,0,1,1,0,0,0,0,0,0,1,1,1,1,0,1,1,0,0,0,0,0,1,1,0,0,0,1,0,0,1,1,0,1,1,1,1,1,0,0,1,0,1,0,1,0,0,0,0,0,0,1,1,1,1,0,1,1,0,1,1,0,1,1,1,0,1,0,0,1,1,0,0,0,1,0,0,0,0,1,1,1,1,0,0,0,1,0,1,1,1,1,1,0,0,0,1,1,0,1,0,1,0,1,0,1,0,1,0,0,1,1,1,1,1,0,1,0,0,1,0,1,0,1,1,0,1,1,0,0,1,0,1,1,1,0,0,1,0,1,0,1,0,0,0,1,0,0,0,0,0,1,0,0,0,0,1,1,1,0,1,1,1,0,0,1,1,1,0,0,1,0,0,1,1,1,1,0,1,0,1,1,1,1,1,0,0,0,0,0,0,0,0,1,0,1,0,0,0,1,0,1,1,1,1,1,1,1,0,1,1,0,0,1,0,1,1,1,0,0,1,1,0,1,0,0,1,1,1,1,0,0,1,1,0,0,0,1,0,0,1,0,0,1,0,1,0,1,1,0,1,0,1,1,0,1,0,1,0,0,1,1,1,0,1,0,0,0,1,0,1,0,1,0,0,1,0,1,0,0,0,0,1,1,0,1,1,1,0,1,1,0,0,0,1,0,1,1,1,0,1,1,0,1,1,0,0,1,1,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,1,0,1,1,1,0,0,1,1,1,0,1,1,1,0,0,1,0,0,0,1,1,0,0,0,1,0,0,0,1,1,0,0,1,1,0,0,0,1,0,0,0,0,1,1,1,0,1,0,0,0,1,0,1,0,0,1,0,1,1,1,1,1,1,1,1,0,0,1,0,0,0,1,0,1,1,1,1,1,0,0,1,1,1,0,0,0,0,1,1,0,0,1,0,0,0,1,1,1,0,0,1,0,0,1,0,0,0,0,1,1,1,1,0,0,1,0,1,0,1,1,1,0,0,0,1,1,0,0,0,1,0,0,1,0,0,1,0,0,0,0,1,0,1,0,0,0,1,1,0,1,0,1,1,0,1,0,0,0,1,0,1,1,0,1,0,0,1,0,0,0,1,0,1,1,1,1,0,0,0,1,1,0,1,0,1,0,0,1,1,1,1,0,0,0,0,1,0,0,0,0,0,0,1,0,1,1,0,1,0,0,0,0,0,0,1,1,1,0,1,1,0,0,0,1,0,0,1,0,0,0,0,1,0,1,0,0,0,0,1,1,1,1,1,0,0,0,1,0,1,0,0,1,1,1,1,0,0,1,1,1,1,0,1,1,0,0,1,1,1,1,1,1,1,0,0,0,1,1,0,0,0,0,1,0,0,0,1,0,0,1,1,0,0,0,1,0,1,0,1,0,0,1,0,0,0,0,1,1,1,0,0,0,0,1,1,1,0,0,1,1,0,1,0,0,1,0,1,1,1,0,1,0,0,0,1,1,0,1,1,1,0,0,0,1,1,1,1,1,1,0,1,1,0,1,1,0,1,0,0,0,0,0,0,0,1,1,0,0,0,1,1,1,0,0,1,0,1,0,0,1,0,1,1,1,0,1,0,1,1,0,0,1,0,0,1,1,0,0,1,1,0,1,1,1,0,1,1,0,0,0,1,1,0,0,0,1,1,0,0,1,1,1,0,1,1,0,1,1,0,0,0,0,1,1,0,0,1,0,0,0,1,1,1,0,0,0,0,0,0,1,1,1,1,0,0,0,1,0,1,0,1,0,1,1,0,0,1,1,1,0,0,0,1,1,0,0,0,1,1,0,0,1,0,1,0,1,0,1,1,1,0,0,1,1,1,0,0,0,1,0,1,0,1,0,1,1,1,0,1,1,1,1,1,0,0,1,0,1,0,1,0,1,0,1,0,1,1,1,1,1,1,1,1,1,0,1,0,1,1,1,1,1,1,1,1,0,1,0,1,0,1,1,1,1,1,0,0,0,1,0,0,1,1,0,0,0,0,0,1,0,0,1,0,0,1,1,0,1,1,1,1,0,1,0,1,1,1,0,1,0,0,1,0,0,1,1,0,1,1,0,1,0,0,1,0,1,1,1,1,0,0,0,1,1,1,0,1,0,1,0,1,0,0,1,1,1,1,0,1,0,1,1,0,1,1,0,0,1,1,1,0,1,1,1,0,0,1,1,0,0,0,1,1,1,1,0,1,1,0,1,0,0,1,1,0,0,0,1,1,0,1,1,0,1,0,0,1,1,0,0,0,1,1,1,0,0,0,1,1,1,1,1,0,1,0,1,0,1,1,0,1,0,1,0,0,1,1,1,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,1,1,1,0,1,1,1,0,0,0,0,0,1,1,1,0,1,1,0,1,0,1,0,1,0,1,1,1,1,1,1,0,0,1,1,0,1,1,1,0,1,1,0,1,1,1,0,1,1,0,0,1,0,1,1,0,1,1,0,1,1,1,1,0,0,1,0,0,0,1,1,0,0,0,0,1,1,0,1,0,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,1,0,0,0,1,0,1,0,1,1,0,0,1,0,1,0,0,0,0,1,0,1,1,1,1,0,1,0,1,0,0,0,1,1,1,0,0,1,1,0,0,1,0,1,0,1,0,1,0,0,1,0,0,0,1,0,0,0,0,1,1,1,0,1,1,0,0,1,0,1,1,0,0,1,1,1,0,0,1,0,0,1,0,0,1,0,0,0,1,1,1,1,0,1,0,1,1,0,1,0,1,1,1,0,0,0,1,0,1,0,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,1,0,1,0,1,1,0,0,1,1,0,1,0,0,0,1,0,1,1,1,1,0,0,0,1,1,1,1,1,0,1,0,0,0,1,1,0,1,1,0,1,0,0,1,1,0,0,0,0,0,1,1,1,0,1,1,0,0,0,1,0,0,0,0,0,1,1,0,1,1,0,0,1,1,1,1,0,1,0,0,0,1,0,1,1,0,1,0,1,1,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,1,0,0,0,1,0,0,1,1,0,1,1,0,0,1,1,0,1,0,0,1,1,1,1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,1,0,1,0,0,1,0,0,1,0,0,0,0,0,1,1,0,1,0,1,0,1,1,1,0,0,0,0,0,1,0,0,0,0,1,0,0,1,1,1,0,0,0,1,1,0,0,1,0,1,1,1,0,1,1,0,0,0,0,1,0,0,1,1,1,0,1,0,0,1,0,0,0,1,1,1,0,0,0,1,0,1,1,0,0,0,1,1,1,0,0,1,1,1,1,1,0,1,1,0,0,1,0,0,1,0,1,1,0,1,0,0,1,1,0,0,1,0,0,0,1,1,1,0,1,0,1,1,0,0,1,1,0,0,1,1,0,0,0,0,1,1,1,0,0,1,0,1,0,1,1,1,0,1,0,0,1,1,0,1,0,0,1,0,1,0,0,0,1,1,0,0,1,1,0,0,0,1,1,0,1,0,0,0,0,0,0,0,1,0,0,1,0,1,1,1,1,0,1,0,1,0,1,0,1,1,0,1,0,1,0,0,1,1,1,0,1,0,1,0,0,1,0,1,1,1,1,1,1,0,1,1,0,1,0,1,0,0,1,0,0,0,1,0,0,1,0,1,1,1,1,0,1,1,1,0,1,1,1,1,1,1,1,0,0,0,1,1,1,0,0,0,0,1,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,1,1,0,0,1,1,0,0,1,0,1,0,1,0,0,1,1,1,1,0,1,0,1,1,0,0,1,0,1,1,0,0,1,0,1,0,0,1,0,0,0,0,0,0,1,0,1,0,1,1,0,0,0,0,0,0,0,0,1,1,0,0,1,1,1,1,1,0,1,1,0,1,1,0,1,1,0,1,0,0,1,0,0,1,0,1,0,1,1,1,0,0,1,0,1,0,0,0,1,0,0,1,0,1,0,0,1,1,0,0,1,1,1,0,1,1,0,0,1,0,0,1,0,0,0,1,1,1,1,0,0,0,1,1,0,1,1,0,1,1,1,1,1,1,0,0,0,1,1,1,1,0,0,0,1,0,0,0,0,0,0,1,0,0,1,1,1,1,0,1,0,0,1,0,0,1,1,1,0,0,0,0,1,1,0,0,1,1,0,1,0,0,1,0,0,1,1,1,0,1,1,1,0,0,0,0,0,0,1,0,1,0,0,1,0,0,1,1,1,1,0,0,0,1,0,1,0,0,0,0,0,0,0,0,1,0,0,0,1,1,1,1,0,0,0,0,0,0,1,1,0,0,0,1,1,1,0,1,1,1,0,0,0,0,1,1,0,1,0,1,1,1,0,1,1,1,1,0,1,0,0,0,1,0,0,1,0,1,1,1,0,0,0,1,0,1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,1,1,0,0,1,1,0,0,0,0,1,0,0,1,0,0,0,1,0,0,0,0,1,0,1,0,1,0,1,0,1,1,0,0,1,1,0,1,1,1,1,0,1,0,0,0,0,1,1,0,1,0,0,1,1,1,0,0,0,0,0,1,1,1,0,0,0,1,1,0,1,0,1,1,1,1,0,1,1,1,1,0,0,0,0,0,0,1,1,1,0,0,1,1,0,1,1,0,0,0,1,1,0,1,0,0,1,1,0,0,1,0,1,1,0,0,1,0,0,0,1,1,1,1,1,0,1,0,0,0,1,1,0,0,0,1,1,1,1,1,1,1,1,1,0,1,0,1,1,0,1,0,1,0,0,1,0,0,0,1,0,1,0,0,0,0,1,0,1,1,0,0,0,1,0,0,0,0,0,1,1,1,1,0,0,1,0,0,0,1,0,1,1,0,0,0,0,1,1,1,0,0,1,1,0,0,0,1,0,1,0,0,1,0,1,0,0,1,1,0,1,0,0,0,1,1,1,1,1,1,1,0,1,1,0,1,0,1,0,1,1,0,1,0,1,0,0,0,0,1,0,1,0,0,0,1,0,1,0,0,1,0,0,0,0,1,1,1,1,1,1,1,0,1,0,1,0,0,1,0,1,1,0,1,1,1,1,0,0,0,1,1,1,0,0,1,0,0,0,0,1,1,1,0,0,0,0,0,0,0,1,0,0,0,0,1,1,1,0,1,1,0,0,1,0,0,0,0,1,0,0,0,1,1,0,0,1,0,1,1,1,1,1,0,0,0,1,0,1,0,0,0,1,0,1,1,1,0,1,0,0,1,0,1,1,0,0,0,1,1,1,0,0,0,1,0,1,0,1,0,0,1,0,1,0,0,1,1,0,1,1,0,1,0,0,1,0,1,0,0,1,1,0,1,1,0,0,1,0,0,1,0,1,1,1,1,0,0,1,1,0,0,0,1,0,0,0,0,1,1,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,1,0,0,0,1,0,1,0,0,1,1,1,0,1,1,1,1,0,0,1,1,1,0,0,1,1,0,0,0,1,1,0,1,1,1,1,1,0,0,0,1,0,1,1,1,0,0,1,0,1,0,0,1,1,0,0,0,0,1,1,1,0,0,1,1,0,1,0,1,0,1,1,0,0,1,0,1,0,1,0,1,0,1,1,0,1,0,0,1,0,0,0,1,0,0,0,1,0,0,1,0,0,0,0,1,1,1,0,1,0,1,1,0,1,0,0,1,1,1,0,0,1,1,0,1,1,0,1,0,1,1,1,1,1,1,0,0,1,1,0,1,0,0,1,0,0,1,1,0,1,1,0,1,1,0,1,1,0,0,1,0,1,0,0,0,0,1,0,0,0,0,1,0,1,0,1,0,1,0,0,0,0,0,0,1,1,0,0,1,0,1,0,0,0,0,0,0,1,0,1,0,0,1,1,1,1,1,1,1,0,0,1,0,0,0,0,1,1,0,0,0,0,1,0,1,1,1,1,0,0,0,0,0,0,1,0,1,1,0,1,1,1,1,0,0,1,1,0,0,0,0,1,0,0,1,1,1,1,1,0,1,1,1,1,0,0,1,1,1,1,1,0,1,0,0,1,0,1,1,0,0,0,1,0,0,1,0,0,1,0,0,1,1,1,1,1,0,0,1,1,0,0,0,1,1,0,1,0,0,1,0,1,1,0,0,1,0,1,1,0,0,0,1,0,1,1,1,0,0,0,0,0,0,1,1,1,0,0,0,0,0,1,0,0,1,1,0,0,1,0,0,0,0,0,1,1,0,1,1,1,1,0,1,1,1,1,0,1,1,1,1,1,0,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,1,1,0,1,0,0,1,0,1,1,0,0,1,0,1,1,1,0,1,0,0,1,1,1,1,0,0,1,0,0,1,0,1,1,1,0,1,0,0,1,0,0,1,1,0,0,1,0,0,1,0,0,0,0,1,1,0,0,0,0,1,1,1,1,0,0,0,1,1,1,0,0,1,0,1,0,1,0,0,0,0,0,0,0,0,1,1,1,1,0,1,1,1,0,0,0,1,1,0,1,1,0,0,0,1,1,1,0,1,1,1,0,1,0,1,0,1,1,1,0,0,1,0,0,0,1,1,0,0,0,1,0,0,0,1,1,1,0,0,1,0,1,0,1,0,0,0,0,0,1,0,0,1,1,0,1,1,1,0,0,1,0,1,1,0,1,0,1,0,1,0,0,1,1,0,0,0,0,1,0,0,0,1,1,0,0,0,1,1,0,1,1,0,1,1,1,1,0,1,1,0,0,1,1,0,1,1,1,1,0,0,0,1,1,0,0,1,1,1,0,0,0,0,1,0,0,0,1,1,1,0,0,1,0,1,0,0,1,1,1,0,1,0,1,0,1,0,1,0,1,1,1,1,1,0,0,1,1,0,1,0,1,0,0,0,0,0,1,1,0,0,1,1,1,0,1,0,0,1,1,1,0,1,1,0,0,0,1,0,0,1,1,1,1,1,1,0,1,1,1,1,0,0,1,0,0,0,1,1,1,0,0,1,0,1,0,1,1,0,0,0,1,1,1,1,0,1,1,0,0,0,0,1,0,0,1,1,1,0,1,0,1,1,0,1,0,0,0,0,1,1,0,0,1,1,0,0,0,0,1,1,0,1,0,0,1,1,0,1,0,0,0,0,0,0,1,1,1,1,0,0,1,0,0,1,0,0,1,1,1,0,0,1,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,1,1,0,0,0,1,0,0,1,0,1,0,0,1,1,0,0,1,0,1,0,1,0,1,1,1,0,1,1,0,1,1,0,0,1,0,1,1,1,0,0,1,0,1,1,0,1,1,1,0,1,0,0,1,0,0,1,0,1,0,1,1,0,0,0,1,0,0,1,1,0,1,1,0,0,1,1,1,1,0,1,0,1,1,1,1,1,0,1,1,0,0,1,1,1,1,0,1,1,1,0,0,1,0,0,0,0,1,1,1,1,0,0,0,1,0,1,0,0,1,1,1,1,0,1,1,1,1,0,0,0,0,0,1,0,0,0,1,0,0,0,1,1,1,0,1,1,1,1,1,0,0,0,0,1,1,0,0,1,0,1,1,0,0,0,0,1,1,0,1,0,0,1,1,0,1,0,0,1,0,1,0,1,1,0,1,1,0,1,1,0,0,0,0,1,1,0,1,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,1,0,0,0,1,1,1,1,1,0,0,1,0,1,1,1,0,1,1,0,1,0,0,0,1,0,0,1,0,0,0,1,0,1,0,0,0,];
var gg_b = "1746198001/";

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
