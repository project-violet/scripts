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
var o = 1;
switch (g) {
case 3605:
case 1816:
case 2332:
case 278:
case 3092:
case 717:
case 3596:
case 2696:
case 1403:
case 2289:
case 1291:
case 1947:
case 2548:
case 2820:
case 619:
case 492:
case 1519:
case 1472:
case 907:
case 1229:
case 1360:
case 73:
case 3899:
case 2256:
case 257:
case 1691:
case 1167:
case 3810:
case 3248:
case 2153:
case 1880:
case 2193:
case 1550:
case 1893:
case 1111:
case 1497:
case 1474:
case 1457:
case 1853:
case 898:
case 4064:
case 2485:
case 2867:
case 2613:
case 434:
case 2463:
case 3181:
case 1702:
case 2749:
case 1395:
case 661:
case 646:
case 3126:
case 224:
case 2678:
case 802:
case 3623:
case 3409:
case 545:
case 3838:
case 3094:
case 3054:
case 3077:
case 113:
case 2107:
case 2764:
case 652:
case 1773:
case 1327:
case 2278:
case 2406:
case 771:
case 3190:
case 1740:
case 3238:
case 3150:
case 2417:
case 2667:
case 3567:
case 2151:
case 1024:
case 847:
case 681:
case 1189:
case 3914:
case 2975:
case 3397:
case 3823:
case 2758:
case 1253:
case 1075:
case 3638:
case 2538:
case 2267:
case 1937:
case 290:
case 3325:
case 3746:
case 284:
case 1309:
case 2342:
case 3068:
case 1401:
case 3908:
case 4076:
case 1466:
case 263:
case 3259:
case 2586:
case 520:
case 2856:
case 114:
case 1607:
case 85:
case 2922:
case 2521:
case 3621:
case 206:
case 2344:
case 2211:
case 1280:
case 3945:
case 939:
case 3520:
case 2620:
case 1178:
case 1216:
case 942:
case 196:
case 223:
case 2559:
case 3659:
case 2599:
case 3286:
case 1022:
case 2889:
case 2739:
case 1526:
case 1207:
case 1113:
case 433:
case 1581:
case 1982:
case 3511:
case 2611:
case 3912:
case 2461:
case 9:
case 3183:
case 2369:
case 3372:
case 3165:
case 2298:
case 1753:
case 761:
case 2130:
case 3143:
case 3131:
case 2104:
case 1942:
case 2909:
case 2015:
case 3246:
case 1802:
case 130:
case 547:
case 3963:
case 721:
case 3558:
case 2658:
case 1818:
case 752:
case 2864:
case 2042:
case 1009:
case 1494:
case 311:
case 1454:
case 1477:
case 426:
case 1570:
case 1969:
case 1671:
case 369:
case 1164:
case 4011:
case 3836:
case 273:
case 3879:
case 2044:
case 2276:
case 2118:
case 2720:
case 1492:
case 3003:
case 1452:
case 236:
case 441:
case 1322:
case 1271:
case 2639:
case 4020:
case 329:
case 182:
case 2102:
case 1149:
case 1944:
case 3710:
case 715:
case 1780:
case 1830:
case 403:
case 3705:
case 91:
case 3352:
case 2796:
case 385:
case 122:
case 389:
case 1729:
case 3636:
case 268:
case 3562:
case 2579:
case 3679:
case 4089:
case 2960:
case 1230:
case 1158:
case 3748:
case 937:
case 991:
case 2789:
case 3236:
case 228:
case 2262:
case 1932:
case 1531:
case 2445:
case 3279:
case 438:
case 377:
case 2140:
case 3133:
case 1630:
case 404:
case 1840:
case 340:
case 1528:
case 598:
case 1218:
case 2713:
case 1176:
case 502:
case 2087:
case 1934:
case 1139:
case 671:
case 2649:
case 3549:
case 1602:
case 2778:
case 1273:
case 1900:
case 2588:
case 3688:
case 2955:
case 3394:
case 2000:
case 3377:
case 3354:
case 3723:
case 2995:
case 4078:
case 845:
case 849:
case 3906:
case 1468:
case 1618:
case 3564:
case 2171:
case 3846:
case 1027:
case 2249:
case 3475:
case 1202:
case 1673:
case 3170:
case 912:
case 4068:
case 3615:
case 2515:
case 3887:
case 3737:
case 2697:
case 3597:
case 1806:
case 2161:
case 3557:
case 1413:
case 1685:
case 1663:
case 144:
case 3800:
case 3098:
case 3058:
case 693:
case 702:
case 3834:
case 1509:
case 2941:
case 2046:
case 2297:
case 2274:
case 798:
case 1285:
case 3940:
case 2933:
case 333:
case 3782:
case 3832:
case 376:
case 955:
case 1101:
case 959:
case 2866:
case 3269:
case 973:
case 988:
case 83:
case 2321:
case 2603:
case 3155:
case 620:
case 2359:
case 1745:
case 3195:
case 2451:
case 1326:
case 3450:
case 3490:
case 2106:
case 3244:
case 199:
case 3076:
case 2569:
case 3572:
case 195:
case 1708:
case 475:
case 479:
case 2970:
case 1489:
case 1381:
case 2310:
case 817:
case 3930:
case 3356:
case 3396:
case 467:
case 2752:
case 3904:
case 3109:
case 2792:
case 519:
case 2036:
case 3632:
case 770:
case 3062:
case 3566:
case 2666:
case 2416:
case 2803:
case 143:
case 1560:
case 3389:
case 1174:
case 3232:
case 1661:
case 1979:
case 3747:
case 1197:
case 2480:
case 1031:
case 1936:
case 2266:
case 1350:
case 2872:
case 928:
case 1390:
case 4052:
case 237:
case 3426:
case 4092:
case 616:
case 3313:
case 454:
case 3200:
case 3973:
case 1028:
case 2201:
case 645:
case 1383:
case 1172:
case 3234:
case 2587:
case 3918:
case 2897:
case 1606:
case 2493:
case 2874:
case 3049:
case 3378:
case 521:
case 1595:
case 4054:
case 1555:
case 4094:
case 1735:
case 2088:
case 747:
case 3600:
case 2500:
case 18:
case 3902:
case 3501:
case 2534:
case 3064:
case 3287:
case 3842:
case 632:
case 1206:
case 2825:
case 561:
case 2928:
case 1217:
case 2990:
case 477:
case 2005:
case 1168:
case 819:
case 2336:
case 338:
case 815:
case 3732:
case 3882:
case 131:
case 3592:
case 2692:
case 3991:
case 3951:
case 3096:
case 978:
case 983:
case 760:
case 2048:
case 2919:
case 1476:
case 4066:
case 957:
case 2547:
case 1761:
case 3647:
case 310:
case 2292:
case 3089:
case 2252:
case 1343:
case 3124:
case 1050:
case 489:
case 1905:
case 485:
case 1090:
case 2108:
case 1065:
case 1083:
case 3013:
case 1328:
case 2294:
case 924:
case 3837:
case 3787:
case 2440:
case 821:
case 3441:
case 852:
case 3349:
case 4001:
case 2023:
case 94:
case 3884:
case 2677:
case 3577:
case 2654:
case 3554:
case 2701:
case 964:
case 1458:
case 304:
case 2983:
case 3284:
case 3067:
case 4025:
case 411:
case 2774:
case 3428:
case 2797:
case 3715:
case 3637:
case 749:
case 1785:
case 1763:
case 745:
case 1575:
case 17:
case 1464:
case 2038:
case 3398:
case 2894:
case 49:
case 2473:
case 2854:
case 647:
case 1152:
case 3742:
case 990:
case 3568:
case 3953:
case 4072:
case 235:
case 239:
case 1462:
case 2981:
case 303:
case 2582:
case 1910:
case 3682:
case 2892:
case 1370:
case 2852:
case 906:
case 2021:
case 1999:
case 53:
case 1959:
case 1194:
case 3020:
case 1645:
case 1212:
case 2059:
case 2430:
case 3443:
case 3282:
case 2099:
case 1921:
case 2010:
case 1081:
case 3916:
case 3376:
case 242:
case 1608:
case 1547:
case 1252:
case 1292:
case 3137:
case 2476:
case 2845:
case 2808:
case 3304:
case 840:
case 107:
case 3051:
case 461:
case 231:
case 3029:
case 297:
case 554:
case 2168:
case 1950:
case 1990:
case 1336:
case 4061:
case 1114:
case 1471:
case 1919:
case 345:
case 3989:
case 421:
case 527:
case 4017:
case 1654:
case 1677:
case 1694:
case 4006:
case 3978:
case 3446:
case 2814:
case 3318:
case 1983:
case 1965:
case 858:
case 1868:
case 1112:
case 885:
case 3373:
case 3727:
case 3182:
case 726:
case 2498:
case 3913:
case 394:
case 1277:
case 2328:
case 1294:
case 2065:
case 415:
case 692:
case 2083:
case 2717:
case 3535:
case 2635:
case 3302:
case 3755:
case 380:
case 4063:
case 1584:
case 1473:
case 1894:
case 2575:
case 3675:
case 27:
case 2614:
case 2464:
case 1346:
case 1418:
case 1725:
case 865:
case 553:
case 3709:
case 2192:
case 3967:
case 579:
case 3488:
case 3340:
case 587:
case 2333:
case 3624:
case 3053:
case 738:
case 2785:
case 2835:
case 1268:
case 829:
case 825:
case 40:
case 1757:
case 360:
case 1774:
case 786:
case 1537:
case 1099:
case 89:
case 3622:
case 1:
case 3545:
case 3080:
case 3508:
case 1772:
case 704:
case 1010:
case 393:
case 2081:
case 481:
case 2986:
case 2910:
case 1852:
case 2370:
case 811:
case 3371:
case 3016:
case 2462:
case 2245:
case 2612:
case 3479:
case 3436:
case 2208:
case 1021:
case 1926:
case 2959:
case 2194:
case 1801:
case 1338:
case 918:
case 244:
case 3775:
case 1625:
case 565:
case 1046:
case 1542:
case 2509:
case 3132:
case 3827:
case 2478:
case 2033:
case 3040:
case 930:
case 666:
case 3998:
case 43:
case 3895:
case 2685:
case 3585:
case 3563:
case 525:
case 792:
case 1515:
case 2806:
case 1106:
case 3860:
case 2745:
case 59:
case 1491:
case 1451:
case 1203:
case 2708:
case 734:
case 2381:
case 1310:
case 4012:
case 982:
case 3380:
case 1569:
case 1672:
case 299:
case 3976:
case 109:
case 105:
case 4008:
case 3316:
case 3448:
case 511:
case 1386:
case 3307:
case 1321:
case 2456:
case 4045:
case 2101:
case 3405:
case 3134:
case 2197:
case 1480:
case 3561:
case 2979:
case 2661:
case 604:
case 1163:
case 540:
case 2043:
case 191:
case 3459:
case 1266:
case 2936:
case 962:
case 2031:
case 398:
case 2390:
case 3004:
case 1872:
case 3142:
case 1305:
case 1532:
case 1931:
case 2261:
case 3260:
case 3421:
case 951:
case 3486:
case 1416:
case 922:
case 1348:
case 1079:
case 1794:
case 1777:
case 1323:
case 4035:
case 1088:
case 28:
case 1500:
case 827:
case 3255:
case 610:
case 3073:
case 1825:
case 2217:
case 585:
case 3809:
case 558:
case 3627:
case 2527:
case 3964:
case 2028:
case 867:
case 2555:
case 3655:
case 3695:
case 2988:
case 2617:
case 3517:
case 2863:
case 2885:
case 2467:
case 1587:
case 638:
case 1874:
case 2606:
case 1493:
case 2375:
case 3997:
case 3957:
case 2915:
case 3314:
case 2240:
case 3233:
case 687:
case 2477:
case 2873:
case 1546:
case 1864:
case 777:
case 3136:
case 4093:
case 4053:
case 758:
case 3641:
case 789:
case 826:
case 3540:
case 2533:
case 420:
case 1258:
case 230:
case 675:
case 3063:
case 92:
case 679:
case 3085:
case 1015:
case 2802:
case 1849:
case 282:
case 1639:
case 3726:
case 2271:
case 995:
case 2944:
case 2149:
case 999:
case 2322:
case 4007:
case 3843:
case 1711:
case 2830:
case 2780:
case 4016:
case 2804:
case 1069:
case 1676:
case 159:
case 2164:
case 3571:
case 3972:
case 155:
case 173:
case 4080:
case 740:
case 1173:
case 3670:
case 2570:
case 3188:
case 136:
case 1118:
case 352:
case 262:
case 445:
case 3966:
case 2060:
case 654:
case 3719:
case 3750:
case 711:
case 2630:
case 4029:
case 2543:
case 1262:
case 1445:
case 3631:
case 2751:
case 2604:
case 1876:
case 2791:
case 1756:
case 1796:
case 1032:
case 1536:
case 2729:
case 346:
case 804:
case 2198:
case 2230:
case 1960:
case 3243:
case 3482:
case 3231:
case 2204:
case 432:
case 1034:
case 592:
case 729:
case 2468:
case 3518:
case 2618:
case 667:
case 1858:
case 1995:
case 1955:
case 3228:
case 1000:
case 2673:
case 3484:
case 98:
case 1171:
case 838:
case 315:
case 1414:
case 174:
case 1664:
case 1249:
case 2176:
case 3833:
case 3437:
case 3765:
case 627:
case 3628:
case 2900:
case 2273:
case 2055:
case 1778:
case 3017:
case 3335:
case 1264:
case 1087:
case 3502:
case 2602:
case 1649:
case 2360:
case 2229:
case 1296:
case 3826:
case 1689:
case 272:
case 2472:
case 2880:
case 3743:
case 1153:
case 3650:
case 2550:
case 3591:
case 3952:
case 157:
case 834:
case 2629:
case 4030:
case 183:
case 178:
case 1696:
case 1289:
case 2403:
case 1656:
case 1505:
case 1332:
case 3444:
case 1548:
case 1820:
case 3138:
case 931:
case 1762:
case 997:
case 2718:
case 1300:
case 2425:
case 892:
case 4002:
case 3283:
case 3442:
case 2120:
case 808:
case 1278:
case 2773:
case 538:
case 1116:
case 3186:
case 787:
case 1107:
case 779:
case 1613:
case 1463:
case 753:
case 2893:
case 2497:
case 1180:
case 2565:
case 3665:
case 689:
case 658:
case 1678:
case 3306:
case 3994:
case 3159:
case 2702:
case 3954:
case 510:
case 3317:
case 2937:
case 1084:
case 190:
case 541:
case 566:
case 2253:
case 1798:
case 2075:
case 470:
case 1758:
case 1538:
case 97:
case 629:
case 3434:
case 625:
case 2309:
case 503:
case 3400:
case 184:
case 767:
case 833:
case 4040:
case 1151:
case 1417:
case 1191:
case 950:
case 3741:
case 2653:
case 3553:
case 3593:
case 2693:
case 3968:
case 2740:
case 3865:
case 3883:
case 669:
case 665:
case 1315:
case 200:
case 2984:
case 2189:
case 1599:
case 123:
case 296:
case 1559:
case 2526:
case 3626:
case 1739:
case 1889:
case 2207:
case 2022:
case 3045:
case 2178:
case 2680:
case 3008:
case 4071:
case 3850:
case 1776:
case 2851:
case 3681:
case 69:
case 2829:
case 1586:
case 163:
case 1082:
case 2771:
case 3226:
case 1896:
case 2607:
case 214:
case 948:
case 3770:
case 3516:
case 3432:
case 1620:
case 1922:
case 3281:
case 2918:
case 3874:
case 2049:
case 2378:
case 1506:
case 3493:
case 1655:
case 631:
case 872:
case 1695:
case 1517:
case 940:
case 44:
case 1169:
case 799:
case 2064:
case 1809:
case 522:
case 795:
case 1627:
case 1073:
case 3088:
case 424:
case 2600:
case 0:
case 1144:
case 3777:
case 1949:
case 3323:
case 2501:
case 3534:
case 3416:
case 3348:
case 2062:
case 958:
case 292:
case 3407:
case 4047:
case 1329:
case 813:
case 457:
case 1421:
case 2356:
case 2904:
case 208:
case 3931:
case 3036:
case 3872:
case 1004:
case 2869:
case 2426:
case 337:
case 1499:
case 483:
case 1459:
case 391:
case 1660:
case 1410:
case 2389:
case 1115:
case 2232:
case 1962:
case 977:
case 1561:
case 276:
case 2644:
case 2269:
case 2320:
case 1405:
case 2503:
case 3603:
case 233:
case 1307:
case 1976:
case 1071:
case 2832:
case 2782:
case 1448:
case 929:
case 925:
case 2244:
case 2971:
case 3672:
case 2419:
case 2076:
case 3203:
case 3310:
case 78:
case 3399:
case 530:
case 2155:
case 3359:
case 3117:
case 3451:
case 2490:
case 1722:
case 2450:
case 2483:
case 2615:
case 3515:
case 582:
case 2887:
case 2465:
case 2557:
case 2574:
case 170:
case 1998:
case 743:
case 1855:
case 490:
case 2160:
case 1958:
case 4084:
case 1585:
case 99:
case 701:
case 1353:
case 648:
case 1724:
case 1393:
case 2642:
case 3542:
case 3941:
case 3257:
case 1827:
case 3297:
case 1423:
case 814:
case 2058:
case 1775:
case 2800:
case 2098:
case 15:
case 3801:
case 2834:
case 2784:
case 3021:
case 3926:
case 953:
case 975:
case 356:
case 241:
case 339:
case 1371:
case 1016:
case 1911:
case 2682:
case 1007:
case 3852:
case 3892:
case 3772:
case 193:
case 3010:
case 226:
case 66:
case 488:
case 459:
case 2376:
case 3135:
case 2431:
case 3:
case 500:
case 3099:
case 3430:
case 987:
case 2443:
case 2282:
case 1622:
case 830:
case 596:
case 3797:
case 160:
case 3757:
case 1275:
case 3402:
case 1093:
case 4042:
case 2067:
case 731:
case 2742:
case 1709:
case 2237:
case 514:
case 1967:
case 1488:
case 3346:
case 2568:
case 3668:
case 2993:
case 3725:
case 2953:
case 1675:
case 695:
case 3038:
case 1514:
case 3584:
case 2684:
case 3854:
case 2358:
case 3894:
case 572:
case 2433:
case 4034:
case 2078:
case 862:
case 2349:
case 1795:
case 1755:
case 474:
case 3108:
case 194:
case 2013:
case 1824:
case 643:
case 3294:
case 1913:
case 3965:
case 2364:
case 3112:
case 2700:
case 3023:
case 1978:
case 1446:
case 4087:
case 2734:
case 2577:
case 3677:
case 3701:
case 116:
case 2594:
case 2470:
case 750:
case 286:
case 149:
case 3471:
case 145:
case 927:
case 3652:
case 2056:
case 1956:
case 1996:
case 1051:
case 2124:
case 2929:
case 68:
case 4032:
case 468:
case 1304:
case 132:
case 1760:
case 77:
case 210:
case 3252:
case 3292:
case 2621:
case 3521:
case 903:
case 86:
case 1281:
case 2210:
case 306:
case 1432:
case 2805:
case 2299:
case 2686:
case 3082:
case 253:
case 630:
case 1226:
case 966:
case 275:
case 1507:
case 279:
case 3776:
case 2221:
case 287:
case 82:
case 1681:
case 3611:
case 1580:
case 2912:
case 3369:
case 2372:
case 1008:
case 1890:
case 1850:
case 1045:
case 3739:
case 926:
case 3037:
case 1385:
case 2914:
case 3315:
case 2357:
case 2374:
case 3878:
case 2397:
case 1553:
case 3406:
case 1593:
case 1968:
case 2238:
case 2190:
case 1865:
case 4046:
case 1733:
case 1883:
case 3667:
case 3191:
case 3924:
case 1400:
case 384:
case 2746:
case 682:
case 3342:
case 2068:
case 3798:
case 1148:
case 548:
case 3758:
case 3538:
case 1014:
case 390:
case 1954:
case 1199:
case 1977:
case 2578:
case 3678:
case 1306:
case 1728:
case 714:
case 3463:
case 2181:
case 1110:
case 531:
case 34:
case 801:
case 364:
case 3107:
case 3278:
case 2301:
case 2838:
case 3334:
case 1442:
case 1283:
case 843:
case 1121:
case 904:
case 2054:
case 2077:
case 2094:
case 3300:
case 2821:
case 88:
case 227:
case 3762:
case 2366:
case 2648:
case 938:
case 1219:
case 3505:
case 171:
case 2886:
case 2736:
case 383:
case 378:
case 2596:
case 3696:
case 437:
case 3289:
case 3656:
case 2556:
case 1591:
case 357:
case 1952:
case 2810:
case 1881:
case 1731:
case 1743:
case 4036:
case 2248:
case 3153:
case 1690:
case 1619:
case 2205:
case 4079:
case 2899:
case 2859:
case 3689:
case 2589:
case 3256:
case 1335:
case 4023:
case 3649:
case 1502:
case 1006:
case 3778:
case 1783:
case 1437:
case 1765:
case 1628:
case 3927:
case 115:
case 119:
case 3414:
case 374:
case 2475:
case 897:
case 2170:
case 831:
case 1484:
case 672:
case 3588:
case 2377:
case 3858:
case 2723:
case 3995:
case 3000:
case 3034:
case 782:
case 1518:
case 3412:
case 2748:
case 730:
case 3960:
case 1482:
case 146:
case 407:
case 2352:
case 2392:
case 1870:
case 2705:
case 3756:
case 3796:
case 1146:
case 285:
case 258:
case 368:
case 3032:
case 3536:
case 992:
case 718:
case 3262:
case 1631:
case 2279:
case 3876:
case 2141:
case 1750:
case 3140:
case 2133:
case 1530:
case 613:
case 121:
case 3347:
case 3408:
case 3789:
case 4048:
case 1966:
case 2879:
case 3044:
case 3862:
case 3118:
case 87:
case 2721:
case 3276:
case 2003:
case 544:
case 56:
case 181:
case 4010:
case 600:
case 3382:
case 359:
case 3239:
case 355:
case 373:
case 2786:
case 2836:
case 1831:
case 1308:
case 2072:
case 2576:
case 3676:
case 2128:
case 52:
case 4086:
case 1843:
case 229:
case 1726:
case 2539:
case 3102:
case 2799:
case 2246:
case 312:
case 4038:
case 3849:
case 2057:
case 2097:
case 29:
case 1063:
case 614:
case 2143:
case 3258:
case 1828:
case 751:
case 3909:
case 3767:
case 1641:
case 722:
case 1136:
case 211:
case 1233:
case 2963:
case 2888:
case 3384:
case 2738:
case 2558:
case 3658:
case 2598:
case 1179:
case 1997:
case 1974:
case 1314:
case 762:
case 2484:
case 219:
case 4083:
case 1846:
case 3027:
case 1475:
case 1001:
case 1906:
case 3987:
case 1688:
case 1394:
case 1723:
case 678:
case 736:
case 3900:
case 2017:
case 3934:
case 3139:
case 2335:
case 2006:
case 2502:
case 3602:
case 2901:
case 788:
case 759:
case 2841:
case 755:
case 1288:
case 537:
case 2833:
case 3528:
case 1422:
case 497:
case 3630:
case 1279:
case 3531:
case 1141:
case 3751:
case 2504:
case 3604:
case 998:
case 362:
case 2061:
case 3060:
case 2719:
case 664:
case 2482:
case 3158:
case 3198:
case 1961:
case 1679:
case 4019:
case 185:
case 2146:
case 4090:
case 4050:
case 322:
case 189:
case 1636:
case 3729:
case 158:
case 246:
case 1705:
case 624:
case 1352:
case 2843:
case 3780:
case 3830:
case 690:
case 2831:
case 1072:
case 774:
case 3271:
case 2726:
case 1799:
case 448:
case 1759:
case 3322:
case 2903:
case 4026:
case 1003:
case 2188:
case 3671:
case 3969:
case 165:
case 3707:
case 2312:
case 1786:
case 3716:
case 281:
case 111:
case 3494:
case 3454:
case 509:
case 3009:
case 2957:
case 2974:
case 728:
case 3162:
case 2997:
case 2179:
case 2241:
case 1985:
case 3240:
case 1558:
case 330:
case 663:
case 19:
case 2085:
case 8:
case 1097:
case 3802:
case 768:
case 842:
case 1131:
case 2641:
case 970:
case 2633:
case 3533:
case 3753:
case 3324:
case 2828:
case 1511:
case 2580:
case 1912:
case 2890:
case 1372:
case 764:
case 4070:
case 1221:
case 1460:
case 3982:
case 1610:
case 396:
case 3022:
case 2626:
case 993:
case 2819:
case 3178:
case 1848:
case 2432:
case 2123:
case 1945:
case 1303:
case 1621:
case 1210:
case 153:
case 1299:
case 1686:
case 179:
case 2226:
case 3771:
case 2507:
case 3607:
case 1908:
case 495:
case 499:
case 2770:
case 2516:
case 4041:
case 539:
case 2105:
case 1068:
case 535:
case 2434:
case 805:
case 809:
case 42:
case 4033:
case 757:
case 3156:
case 920:
case 3937:
case 1823:
case 3293:
case 1119:
case 1914:
case 659:
case 5:
case 673:
case 300:
case 46:
case 2385:
case 444:
case 2741:
case 1567:
case 217:
case 3024:
case 1455:
case 636:
case 783:
case 778:
case 2865:
case 1190:
case 2487:
case 2733:
case 2883:
case 542:
case 1238:
case 4028:
case 916:
case 154:
case 81:
case 3718:
case 1094:
case 3425:
case 723:
case 1054:
case 1409:
case 2265:
case 1788:
case 2035:
case 2306:
case 668:
case 1578:
case 3702:
case 2199:
case 994:
case 48:
case 3355:
case 1126:
case 891:
case 507:
case 1181:
case 2110:
case 837:
case 763:
case 3111:
case 3893:
case 3474:
case 2728:
case 3583:
case 2415:
case 2665:
case 3565:
case 1248:
case 3880:
case 3590:
case 2551:
case 2992:
case 3691:
case 1810:
case 790:
case 2826:
case 674:
case 2469:
case 2619:
case 3519:
case 2361:
case 1648:
case 2250:
case 3947:
case 4043:
case 2529:
case 3629:
case 1886:
case 1092:
case 1556:
case 1596:
case 2444:
case 271:
case 4031:
case 2080:
case 1011:
case 1907:
case 3986:
case 293:
case 1282:
case 1443:
case 3522:
case 2545:
case 3645:
case 348:
case 482:
case 1020:
case 3177:
case 3154:
case 590:
case 166:
case 1744:
case 3959:
case 3910:
case 2007:
case 3462:
case 2911:
case 3245:
case 1980:
case 888:
case 859:
case 220:
case 93:
case 3152:
case 707:
case 2967:
case 1684:
case 1398:
case 1358:
case 3614:
case 2514:
case 3938:
case 3835:
case 350:
case 917:
case 1284:
case 2340:
case 2624:
case 3449:
case 418:
case 3214:
case 4009:
case 742:
case 868:
case 3235:
case 3498:
case 578:
case 2373:
case 637:
case 691:
case 1594:
case 4055:
case 4095:
case 2875:
case 2318:
case 3814:
case 1441:
case 3635:
case 2795:
case 3923:
case 756:
case 1013:
case 557:
case 2824:
case 4027:
case 3083:
case 3439:
case 2304:
case 3090:
case 2996:
case 2051:
case 2091:
case 2330:
case 451:
case 3343:
case 1647:
case 3761:
case 110:
case 2137:
case 1089:
case 3019:
case 232:
case 2760:
case 1470:
case 2184:
case 186:
case 1882:
case 2029:
case 331:
case 1056:
case 1592:
case 1552:
case 397:
case 138:
case 2255:
case 2073:
case 883:
case 878:
case 1287:
case 1842:
case 2438:
case 2949:
case 1902:
case 2144:
case 1634:
case 607:
case 3103:
case 38:
case 1600:
case 3595:
case 3555:
case 3617:
case 2517:
case 3863:
case 3467:
case 3735:
case 1687:
case 2506:
case 2227:
case 1049:
case 2002:
case 3383:
case 705:
case 2964:
case 1313:
case 1200:
case 857:
case 2351:
case 921:
case 1426:
case 952:
case 3350:
case 3390:
case 1869:
case 3319:
case 3157:
case 3174:
case 3411:
case 1747:
case 3979:
case 2561:
case 3661:
case 3560:
case 824:
case 2660:
case 1481:
case 1389:
case 472:
case 946:
case 192:
case 1109:
case 3420:
case 574:
case 1632:
case 3261:
case 2329:
case 2260:
case 84:
case 1356:
case 2421:
case 1076:
case 1669:
case 395:
case 2722:
case 1490:
case 512:
case 1155:
case 1195:
case 2860:
case 3745:
case 247:
case 3456:
case 3496:
case 3101:
case 2134:
case 1320:
case 2939:
case 2405:
case 2071:
case 1127:
case 2316:
case 1782:
case 133:
case 884:
case 3712:
case 3070:
case 4024:
case 863:
case 3263:
case 3509:
case 555:
case 2132:
case 6:
case 1834:
case 642:
case 344:
case 536:
case 25:
case 1098:
case 1058:
case 400:
case 2895:
case 2998:
case 2855:
case 3685:
case 823:
case 3413:
case 1242:
case 1615:
case 635:
case 2209:
case 1465:
case 1887:
case 639:
case 4075:
case 2393:
case 3041:
case 1367:
case 3033:
case 656:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1756195201/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,0,1,0,1,0,0,1,0,0,1,1,1,1,1,0,1,0,0,0,1,1,1,1,1,0,1,0,0,0,1,1,1,1,0,1,1,1,0,1,0,1,0,0,0,1,0,1,0,0,1,1,0,0,1,1,0,1,1,0,1,1,1,1,1,1,0,1,0,0,1,1,1,0,1,1,1,0,0,1,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,1,0,0,0,1,1,1,1,1,0,1,0,1,0,0,0,1,0,0,0,0,1,1,0,1,0,0,0,1,1,1,1,1,1,0,0,0,0,1,1,0,1,0,1,1,1,1,0,0,0,0,1,1,0,1,1,1,0,0,0,1,0,0,0,0,1,1,0,1,0,0,1,1,1,0,0,1,0,0,1,1,1,0,0,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,1,1,0,0,1,1,1,1,1,0,1,0,1,0,0,1,1,0,1,1,0,1,0,0,1,1,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,1,0,1,0,0,1,0,1,0,0,1,1,1,1,1,0,1,1,1,0,0,1,1,1,0,0,1,1,1,1,0,1,1,0,0,0,1,0,0,1,0,0,1,0,0,1,0,0,0,0,1,1,0,1,0,0,1,1,0,0,1,0,0,1,1,0,0,1,0,1,1,1,0,0,0,1,1,0,1,1,1,1,1,1,0,1,1,1,1,1,1,0,0,0,1,0,1,1,1,0,0,0,0,1,1,1,0,0,0,1,0,1,0,1,0,1,1,0,0,0,1,0,0,1,0,1,0,1,1,1,0,0,1,1,1,0,0,1,0,0,0,1,0,1,1,0,0,0,1,1,1,0,0,0,1,0,0,0,0,0,0,1,0,1,1,0,0,1,1,0,1,1,1,0,1,1,1,0,1,1,0,1,0,0,1,1,0,1,0,1,1,1,1,1,0,0,0,1,1,0,0,1,1,0,1,1,0,0,1,1,0,1,1,0,1,1,0,1,1,0,1,0,1,0,1,1,1,1,1,0,0,1,0,1,0,1,0,0,1,0,1,0,1,0,0,0,1,0,1,1,0,0,0,1,0,1,1,0,1,0,1,0,0,1,0,0,1,1,1,0,1,0,0,0,0,1,0,1,1,1,1,0,0,0,0,1,1,0,1,0,1,1,0,0,1,1,1,0,0,0,0,0,0,0,0,1,0,0,1,0,0,1,1,1,1,0,0,0,1,0,0,1,1,0,1,1,1,0,0,1,1,1,1,1,0,1,0,1,1,1,0,0,1,1,0,1,1,0,1,0,1,1,0,1,0,1,1,1,0,1,0,1,0,1,1,1,0,1,1,0,1,1,0,1,1,0,0,1,0,1,1,0,0,1,1,1,0,0,1,0,1,0,0,0,0,1,1,0,0,0,0,0,1,1,0,0,1,0,0,0,0,1,1,1,0,1,0,1,0,1,0,0,1,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,1,1,0,0,1,0,0,1,1,1,1,0,1,0,0,0,0,0,1,0,1,1,1,1,1,0,0,1,0,0,1,0,1,1,1,0,1,1,0,0,1,0,0,1,1,0,0,0,1,1,0,1,0,0,0,0,1,1,0,1,0,1,0,1,0,1,0,0,1,0,1,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,1,0,0,1,0,0,1,1,0,1,1,0,0,0,1,1,0,0,1,1,0,0,0,0,0,1,0,1,1,0,1,1,0,0,1,0,0,1,0,0,1,1,0,0,1,0,1,0,0,0,1,0,1,0,1,0,1,0,0,0,0,0,1,0,0,0,1,0,0,1,1,0,0,1,0,1,0,0,1,0,1,0,1,0,1,1,0,1,1,1,1,0,0,0,1,1,0,0,1,0,1,0,0,1,1,1,0,1,1,1,1,1,0,1,1,1,1,0,0,0,1,1,0,1,1,0,0,1,1,1,1,0,0,1,1,1,1,0,0,1,0,0,1,1,1,1,0,1,1,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,1,0,1,1,1,0,1,0,1,0,0,0,0,1,0,1,0,0,0,1,1,0,1,0,1,0,1,1,1,0,1,1,0,1,0,1,0,0,1,1,1,0,0,1,1,1,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,1,0,0,0,0,1,1,1,0,0,0,1,0,1,1,0,0,1,1,0,0,1,0,1,1,1,1,1,1,1,1,1,1,0,0,1,1,0,0,0,1,1,0,1,0,1,0,1,1,1,1,0,1,0,1,1,0,0,1,0,0,0,1,0,0,1,1,0,1,0,0,0,0,1,1,0,0,0,0,1,0,0,0,1,1,0,0,0,1,0,1,1,1,1,0,0,1,0,0,0,0,0,0,0,0,1,0,0,1,0,1,1,1,1,0,0,1,1,1,0,1,1,1,1,0,1,1,0,1,0,1,1,0,1,0,1,0,0,1,0,0,0,1,0,1,1,0,1,1,1,1,0,0,1,1,0,0,0,1,0,0,0,0,1,0,1,0,0,0,0,1,1,1,1,1,1,1,0,0,0,1,1,0,0,1,0,1,0,0,1,0,0,1,1,0,0,1,1,0,1,0,1,1,1,0,0,0,0,1,0,1,1,1,1,0,1,1,0,0,1,1,0,1,1,1,1,0,1,1,1,0,1,1,1,1,1,0,0,1,1,0,0,1,1,1,1,0,1,1,1,0,1,0,1,0,1,0,1,1,0,1,0,1,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,1,0,1,0,1,1,0,0,1,1,0,0,0,0,0,0,0,0,1,1,0,0,0,1,1,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,1,1,0,0,1,0,1,1,1,1,0,1,1,0,1,0,1,0,1,0,0,1,1,0,1,0,1,0,1,1,1,1,1,1,0,1,1,0,0,0,1,1,1,1,1,1,1,1,0,1,0,1,0,0,1,1,0,0,1,1,0,0,0,1,1,0,1,0,0,1,0,1,0,1,1,1,0,0,1,1,0,0,1,0,0,0,1,1,0,0,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,1,1,0,0,0,1,0,0,1,0,1,1,0,0,1,0,0,1,0,0,0,0,1,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,1,1,0,0,0,1,0,1,1,1,0,0,0,0,0,0,0,1,1,0,1,0,0,1,0,1,1,0,0,0,1,0,1,0,1,1,0,0,1,0,0,0,1,1,1,1,1,1,0,1,0,1,0,0,0,1,1,1,0,0,0,1,1,1,0,1,1,1,0,0,0,1,0,1,0,0,1,0,0,1,0,0,0,0,1,1,1,1,1,0,1,0,0,1,1,1,1,0,1,1,0,1,0,0,1,1,0,0,0,0,1,1,1,0,0,0,0,0,0,1,1,0,0,1,0,1,1,1,0,0,0,1,0,1,1,0,1,0,1,1,0,0,0,0,0,1,1,0,1,0,0,1,0,0,0,1,0,1,0,1,1,0,1,0,1,1,1,0,1,0,0,0,1,1,1,1,0,0,0,1,1,1,0,0,1,0,0,1,1,1,1,0,1,0,0,0,1,0,0,0,0,0,1,0,1,1,0,0,0,0,0,0,0,0,1,1,0,0,0,1,1,1,1,1,0,1,1,0,1,1,0,0,1,0,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,1,0,0,1,0,1,0,1,0,1,1,1,0,0,1,1,0,0,0,1,0,1,1,0,1,1,0,1,0,0,0,0,0,0,0,0,0,1,0,1,1,1,1,1,1,0,0,0,0,0,0,0,1,0,1,0,0,1,0,0,1,0,1,1,1,1,1,0,0,0,1,0,0,1,0,0,1,1,1,0,1,1,0,0,1,1,1,1,1,0,1,0,1,0,1,1,0,0,0,1,0,0,1,0,0,1,1,0,1,1,1,1,1,0,1,0,0,1,1,0,1,0,0,0,1,0,0,1,0,1,1,0,1,1,1,1,1,0,0,1,1,0,0,0,1,0,1,0,1,0,1,1,1,0,0,0,0,1,1,0,0,1,0,0,1,1,0,0,1,0,1,1,1,0,1,0,1,1,0,0,0,0,1,0,0,0,0,0,1,1,1,1,0,1,0,0,1,1,1,0,1,1,1,1,0,0,1,0,1,0,0,1,1,1,1,0,1,0,0,1,0,1,0,0,1,0,1,0,0,0,1,0,0,0,0,0,1,1,0,0,0,0,0,1,1,1,1,0,1,0,0,0,0,0,1,0,0,1,0,1,1,1,1,0,1,1,1,1,0,0,0,0,0,0,1,0,0,1,0,0,0,1,1,0,1,1,0,1,0,1,0,1,1,1,0,0,0,1,1,1,1,0,0,1,0,1,0,1,0,0,1,0,1,1,1,0,0,0,1,0,1,0,0,1,0,1,1,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,1,1,0,0,0,1,0,0,0,0,1,0,0,1,0,1,0,1,0,0,1,1,0,1,1,0,1,1,0,0,0,1,0,0,1,0,0,0,0,0,1,0,1,1,1,1,1,1,1,0,1,0,1,1,0,0,1,1,1,0,1,0,1,0,0,0,1,1,0,1,1,0,0,1,0,0,1,0,1,1,0,1,0,1,0,1,0,1,1,1,1,0,0,1,1,0,1,1,1,0,1,0,0,1,1,1,1,0,1,0,0,1,0,1,1,0,1,1,1,0,0,0,1,0,0,0,1,1,0,0,0,1,0,1,1,0,0,1,0,0,0,0,0,1,1,1,1,1,0,1,1,1,0,1,1,1,1,0,0,1,0,0,1,0,1,1,1,1,0,0,1,0,0,1,1,0,0,0,1,0,0,0,1,0,0,1,0,0,1,1,1,0,0,0,1,1,0,0,0,1,0,1,0,1,0,0,1,0,1,0,0,1,1,0,1,1,1,1,1,1,0,1,1,0,1,0,1,1,0,0,0,1,0,1,1,0,1,0,1,1,0,0,1,0,1,1,1,0,1,0,1,0,0,0,1,1,1,1,1,0,0,0,1,0,0,1,0,0,1,1,1,0,1,0,1,0,1,1,1,1,0,1,0,0,1,1,1,0,0,0,0,0,0,1,1,0,1,0,1,1,0,0,1,0,0,0,0,0,0,0,1,1,0,1,1,1,0,1,1,1,0,0,1,0,0,1,1,1,0,1,1,1,1,1,0,1,0,0,1,1,1,1,1,1,1,1,0,0,0,1,0,1,0,1,1,1,0,0,1,1,1,0,0,0,0,0,1,1,1,0,1,0,1,1,0,0,0,1,1,1,1,0,0,1,1,1,1,0,1,1,1,1,0,0,0,0,0,1,0,0,0,0,1,0,0,1,0,0,0,0,1,0,1,0,0,0,0,1,0,1,1,0,1,1,0,1,1,1,0,0,1,0,0,0,0,0,1,0,0,1,0,1,1,1,1,0,0,0,0,1,1,1,0,1,1,1,1,0,0,1,0,1,1,1,0,0,1,1,1,0,0,1,1,1,0,1,0,1,0,0,1,0,0,1,1,1,0,0,0,0,0,1,0,1,1,1,0,1,1,0,0,0,1,1,1,0,0,0,0,0,0,0,1,0,1,1,1,0,0,0,0,1,1,1,1,0,1,0,1,0,0,0,1,0,0,0,1,0,0,1,1,1,0,0,0,0,0,1,0,0,0,0,0,1,1,0,1,0,1,1,0,0,1,1,0,1,0,1,1,1,0,1,0,0,1,0,1,1,1,0,0,1,1,1,0,0,1,1,1,0,1,0,0,1,1,1,0,0,0,1,1,1,1,1,0,1,1,1,0,0,1,0,1,0,1,0,0,0,1,1,1,1,1,0,0,1,1,0,0,1,1,0,0,0,1,1,0,1,1,0,1,1,1,1,0,1,1,1,0,0,0,0,0,0,0,1,1,0,1,0,0,1,1,1,0,0,1,0,1,0,0,0,0,0,1,1,0,0,1,0,0,1,0,0,1,1,1,1,1,0,1,0,1,1,1,0,1,1,1,1,1,0,0,1,0,0,1,1,1,0,1,0,1,0,1,0,0,0,1,1,0,1,0,0,1,1,0,0,0,1,0,0,1,0,0,0,0,0,1,0,1,0,1,1,1,0,1,1,1,1,0,0,0,1,1,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,1,1,0,1,0,1,0,1,1,1,1,1,0,0,1,0,0,0,1,1,0,0,1,1,0,0,0,0,0,1,0,1,1,0,0,0,0,1,1,1,0,0,1,1,0,1,0,0,0,0,0,0,1,0,0,0,0,1,0,1,0,0,0,1,0,0,1,1,1,1,0,0,0,0,1,0,0,1,1,0,0,1,1,0,1,1,1,1,1,0,0,1,1,1,0,1,1,0,0,1,0,1,0,1,1,0,1,1,1,1,0,1,1,1,0,1,0,1,0,1,0,0,1,1,0,0,1,1,0,1,1,0,0,1,1,0,0,1,1,1,0,1,0,1,0,0,1,0,1,0,1,0,1,0,0,1,0,0,0,0,1,0,1,1,0,0,1,1,1,0,0,0,1,1,0,1,1,0,0,1,0,0,0,0,0,0,1,1,0,1,0,1,1,0,0,0,1,0,0,0,1,0,0,1,1,0,0,1,1,1,0,1,0,1,0,0,1,1,1,0,1,0,1,0,0,0,1,1,0,0,1,0,1,1,0,1,1,0,0,1,1,0,1,0,0,1,0,1,1,0,0,0,1,0,1,0,1,0,1,0,0,1,0,0,0,1,1,1,0,0,0,1,0,0,1,1,1,1,0,0,1,1,1,1,1,0,1,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,1,0,0,1,1,1,1,1,1,0,1,0,0,0,0,0,0,0,0,1,1,0,1,1,0,1,1,1,1,0,1,1,1,0,1,1,0,0,1,1,0,0,0,1,1,0,1,0,1,0,0,1,1,1,0,1,1,0,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,0,1,0,1,1,0,0,0,0,0,0,1,0,0,0,1,1,0,0,0,0,1,0,1,1,1,0,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,1,1,1,0,1,0,0,1,0,0,0,0,1,0,0,1,0,1,1,0,0,0,1,1,0,1,1,0,1,0,1,0,1,0,0,1,1,0,1,1,0,0,0,0,0,0,0,1,1,0,0,0,0,1,1,1,1,1,1,1,1,0,0,1,1,1,1,0,1,0,0,1,1,0,0,0,0,0,1,0,1,0,0,0,1,1,0,1,1,1,1,1,1,1,1,1,0,1,0,0,0,1,1,0,0,0,1,0,1,0,0,0,1,1,1,1,0,0,1,1,1,0,1,0,0,0,0,0,1,0,1,1,0,0,0,0,0,1,0,0,0,0,1,0,1,1,1,0,0,1,1,1,0,0,1,0,1,0,1,0,1,0,1,0,0,1,0,1,0,0,0,0,1,0,1,0,0,0,0,1,1,0,1,0,1,1,0,1,1,0,0,1,1,1,0,1,1,1,0,1,1,0,0,1,1,1,0,1,1,0,1,0,1,0,1,0,1,0,1,1,0,0,1,0,1,0,1,1,0,0,1,1,0,1,1,0,0,1,0,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,1,0,1,0,0,0,0,1,0,1,0,1,0,1,1,0,1,1,1,0,1,1,1,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,1,1,0,0,1,1,1,1,0,1,1,1,1,1,0,0,0,1,1,0,1,0,0,0,0,1,0,0,0,1,1,0,1,0,0,0,0,1,0,1,1,1,0,1,1,0,0,1,0,1,1,1,0,0,0,0,1,0,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,1,1,1,0,1,0,1,0,0,1,0,1,1,0,0,1,0,0,1,0,1,1,1,0,1,0,0,1,0,0,0,1,1,0,0,0,0,0,1,0,0,1,1,0,1,1,0,0,1,0,1,1,1,0,0,1,1,1,1,0,0,1,1,0,1,0,1,0,0,1,0,1,1,0,0,1,0,0,1,1,1,0,1,0,0,0,1,0,1,1,0,1,1,0,1,0,1,0,1,0,0,0,1,0,0,0,0,1,0,0,1,0,1,0,0,0,0,1,1,0,0,1,1,0,1,0,1,1,0,0,0,1,1,0,0,0,0,1,0,1,0,1,1,1,1,0,1,0,1,1,1,1,1,1,0,0,0,1,0,0,0,1,1,1,1,1,1,0,0,1,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,0,1,1,0,1,0,0,0,0,0,0,0,1,1,1,0,0,1,1,0,1,1,0,0,1,0,1,0,1,1,1,0,1,0,1,0,0,1,0,1,1,1,1,1,1,0,1,0,1,0,1,0,0,0,1,0,0,0,1,1,0,1,1,1,1,0,0,0,0,1,1,1,0,0,1,0,1,0,1,0,1,0,0,0,1,0,0,0,1,0,1,0,1,1,1,1,0,0,1,0,0,1,1,0,0,1,1,0,1,1,0,0,1,0,0,1,1,1,0,1,0,1,1,1,0,0,0,0,1,1,0,1,0,0,1,1,0,0,0,0,0,0,0,1,1,0,0,1,1,0,1,0,0,1,1,0,1,1,1,0,0,1,0,1,0,1,1,0,0,1,0,0,1,1,0,0,1,1,1,0,0,0,0,0,0,0,1,1,1,0,0,1,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,1,0,0,0,0,1,0,1,0,0,0,0,1,1,1,1,1,0,1,0,0,1,0,1,0,1,0,0,0,1,1,0,0,1,0,0,0,1,1,0,0,1,0,0,1,0,0,1,0,0,0,0,];
var gg_b = "1756195201/";

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
